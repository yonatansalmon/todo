import React, { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import editIcon from '../assets/editIcon.svg';
import { useTodosContext } from '../context/TodosProvider';
import { uppercaseFirstLetter } from '../helpers';
import { useModalContext } from '../context/ModalProvider';
import { STATUS } from '../constants';
import { EditIcon, TodoItem, TextWithIcons, TodoTitle, TodoDescription,  TodoData } from '../styledcomponents/styles';

const Todo = ({ todo, index, status }) => {
  const { onShow } = useModalContext();
  const { assignees } = useTodosContext();

  //Check to see if Todo has asignee or not
  const noAssignee = assignees[todo.assignee].id === 0;

  const assigneeName = assignees[todo.assignee].name;
  const assineeEmoji = assignees[todo.assignee].emoji;

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <>
          <TodoItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} $status={status}>
            <TodoData $align={'left'} className='TodoText'>
              <TodoTitle  $status={status}>
                {todo.title}
              </TodoTitle>
              <TodoDescription >{todo.description}</TodoDescription>
            </TodoData>
            <TodoData $align={'right'} className='TodoData'>
              <TextWithIcons $status={status} $emoji={assineeEmoji}>
                {status === STATUS.TODO ? 'TBD' : uppercaseFirstLetter(status)}
              </TextWithIcons>
              <TextWithIcons onClick={() => noAssignee && onShow(true, todo, status)} $noAssignee={noAssignee} $emoji={assineeEmoji}>
                {uppercaseFirstLetter(assigneeName)}
              </TextWithIcons>
            </TodoData>
            <EditIcon src={editIcon} onClick={() => onShow(true, todo, status)} />
          </TodoItem>
        </>
      )}
    </Draggable>
  );
};

export default memo(Todo);
