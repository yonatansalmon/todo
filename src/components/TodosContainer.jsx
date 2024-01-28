import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Todo from './Todo';
import { uppercaseFirstLetter } from '../helpers';
import { STATUS } from '../constants';
import { Container, Title, TodoList } from '../styledcomponents/styles';

const TodosContainer = ({ status, todos }) => {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <Container {...provided.droppableProps} ref={provided.innerRef} $status={status}>
          <Title $status={status}>{status === STATUS.TODO ? 'To Do' : uppercaseFirstLetter(status)}</Title>
          <TodoList>
            {todos && todos.length > 0 && todos.map((todo, index) => <Todo key={todo.id} todo={todo} index={index} status={status} />)}
            {provided.placeholder}
          </TodoList>
        </Container>
      )}
    </Droppable>
  );
};

export default memo(TodosContainer);
