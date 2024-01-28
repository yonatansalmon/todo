import React, { createContext, useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import { ASSIGNEES, TODOS } from '../constants';

const TodoContext = createContext();

const useTodosContext = () => useContext(TodoContext);

const TodosProvider = ({ children }) => {
  const [assignees, setAssignees] = useState(ASSIGNEES);
  const [todosState, setTodosState] = useState(TODOS);

  const addNewTodo = (newTodo) => {
    newTodo.id = nanoid();
    setTodosState((prevTodos) => {
      //Add new todo object to alltodos Object
      const updatedTodos = { ...prevTodos.todos, [newTodo.id]: newTodo };
      //Add todo ID to "todo" column
      const updatedTodoIds = [...prevTodos.columns.todo, newTodo.id];
      return {
        ...prevTodos,
        todos: updatedTodos,
        columns: {
          ...prevTodos.columns,
          todo: updatedTodoIds,
        },
      };
    });
  };

  const editTodo = (updatedTodo) => {
    setTodosState((prevTodos) => {
      const updatedTodos = { ...prevTodos.todos, [updatedTodo.id]: updatedTodo };
      return {
        ...prevTodos,
        todos: updatedTodos,
      };
    });
  };

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    setTodosState((prevTodos) => {
      const columns = { ...prevTodos.columns };

      const sourceColumn = columns[source.droppableId];

      //Remove Todo ID from source column
      sourceColumn.splice(source.index, 1);

      const destinationColumn = columns[destination.droppableId];
      // Add Todo ID to destination column
      destinationColumn.splice(destination.index, 0, draggableId);

      return {
        ...prevTodos,
        columns: columns,
      };
    });
  };

  const addAssignee = (newAssignee) => {
    //Assign Id to newAsignee
    newAssignee.id = nanoid();

    //Insert asignee object to asignee state
    setAssignees((prevAssignees) => ({
      ...prevAssignees,
      [newAssignee.id]: newAssignee,
    }));

    //Return ID to add it as reference to Todo object
    return newAssignee.id;
  };

  return (
    <TodoContext.Provider
      value={{
        todosState,
        setTodosState,
        addNewTodo,
        onDragEnd,
        editTodo,
        addAssignee,
        assignees,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodosProvider;
export { useTodosContext };
