import TodosContainer from './TodosContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import { useTodosContext } from '../context/TodosProvider';
import { useModalContext } from '../context/ModalProvider';
import AddTodo from './AddEditTodo';
import { STATUS } from '../constants';
import { PageContainer, MainTitle, ColumnsContainer, ButtonContainer, AddTaskButton } from '../styledcomponents/styles';

const TodosPage = () => {
  const { onShow } = useModalContext();
  const { todosState, onDragEnd } = useTodosContext();

  //Separate todos by status, using the id as reference.
  const todoStatus = todosState.columns.todo.map((todoId) => todosState.todos[todoId]);
  const doingStatus = todosState.columns.doing.map((todoId) => todosState.todos[todoId]);
  const doneStatus = todosState.columns.done.map((todoId) => todosState.todos[todoId]);

  return (
    <PageContainer>
      <MainTitle className='display-6'>Figma Tasks</MainTitle>

      <DragDropContext onDragEnd={onDragEnd}>
        <ColumnsContainer className='ColumnsContainer'>
          <TodosContainer status={STATUS.TODO} todos={todoStatus} />
          <TodosContainer status={STATUS.DOING} todos={doingStatus} />
          <TodosContainer status={STATUS.DONE} todos={doneStatus} />
        </ColumnsContainer>
      </DragDropContext>
      <ButtonContainer>
        <AddTaskButton variant='outline-primary' onClick={() => onShow(true)}>
          Create New Todo 👆
        </AddTaskButton>
      </ButtonContainer>
      <AddTodo />
    </PageContainer>
  );
};

export default TodosPage;
