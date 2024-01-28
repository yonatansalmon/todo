import React, { useMemo, useState } from 'react';
import TodosContainer from './TodosContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import { useTodos } from '../context/TodosProvider';
import AddTodo from './AddEditTodo';
import { STATUS } from '../constants';
import { PageContainer, MainTitle, ColumnsContainer, ButtonContainer, AddTaskButton } from '../styledcomponents/styles';
import { useModalContext } from '../context/ModalProvider';

const TodosPage = () => {
  const { onShow } = useModalContext();
  const { todosState, onDragEnd } = useTodos();

  //Get all Todo objects from TodoObject state by the IDs in each column (todo, doing, done)
  const todoStatus = todosState.columns.todo.map((todoId) => todosState.todos[todoId]);
  const doingStatus = todosState.columns.doing.map((todoId) => todosState.todos[todoId]);
  const doneStatus = todosState.columns.done.map((todoId) => todosState.todos[todoId]);

  return (
    <PageContainer>
      <MainTitle className='display-6'>Figma Tasks</MainTitle>
      <ButtonContainer>
        <AddTaskButton variant='outline-primary' onClick={() => onShow(true)}>
          Create New Todo 👆
        </AddTaskButton>
      </ButtonContainer>

      <DragDropContext onDragEnd={onDragEnd}>
        <ColumnsContainer className='ColumnsContainer'>
          <TodosContainer status={STATUS.TODO} todos={todoStatus} />
          <TodosContainer status={STATUS.DOING} todos={doingStatus} />
          <TodosContainer status={STATUS.DONE} todos={doneStatus} />
        </ColumnsContainer>
      </DragDropContext>
      <AddTodo />
    </PageContainer>
  );
};

export default TodosPage;
