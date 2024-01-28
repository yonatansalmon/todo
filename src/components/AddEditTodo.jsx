import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTodos } from '../context/TodosProvider';
import { useModalContext } from '../context/ModalProvider';
import useFormValidation from '../hooks/useFormValidation';
import AssigneeSelector from './AssigneeSelector';
import { StyledModalHeader, StyledModalBody, StyledModalFooter, StyledForm, TitleInput, ErrorContainer } from '../styledcomponents/styles';

const AddEditTodo = () => {
  const [todoData, setTodoData] = useState({ title: '', description: '', assignee: '0' });
  const [isNewAssignee, setIsNewAssignee] = useState(false);
  const [newAssigneeName, setNewAssigneeName] = useState('');
  const [userEmoji, setUserEmoji] = useState('');
  const { addNewTodo, editTodo, assignees, addAssignee } = useTodos();
  const {
    show,
    onShow,
    editingTodo: { editedTodo, status },
  } = useModalContext();

  const { validate, errors, setErrors, setIsTouched } = useFormValidation(todoData, isNewAssignee, userEmoji, newAssigneeName);

  useEffect(() => {
    if (editedTodo) {
      setTodoData(editedTodo);
    } else {
      setTodoData({ title: '', description: '', assignee: '0' });
    }
  }, [editedTodo]);

  const handleInputChange = (e) => {
    if (isNewAssignee && e.target.name === 'assignee') {
      setNewAssigneeName(e.target.value);
    } else if (isNewAssignee && e.target.name === 'emoji') {
    } else {
      setTodoData({
        ...todoData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSelectEmoji = (emoji) => {
    setUserEmoji(emoji);
  };

  const handleSubmit = () => {
    setIsTouched(true);

    const formIsValid = validate();
    if (!formIsValid) return;

    let updatedTodoData = { ...todoData };

    if (isNewAssignee) {
      const newAssigneeId = addAssignee({ name: newAssigneeName, emoji: userEmoji });
      updatedTodoData.assignee = newAssigneeId;
    }

    if (editedTodo) {
      editTodo(updatedTodoData);
    } else {
      addNewTodo(updatedTodoData);
    }

    resetForm();
  };

  const resetForm = () => {
    onShow(false);
    setTodoData({ title: '', description: '', assignee: '0' });
    setUserEmoji('');
    setIsNewAssignee(false);
    setNewAssigneeName('');
    setIsTouched(false);
    setErrors({});
  };

  return (
    <Modal show={show} onHide={resetForm}>
      <StyledModalHeader closeButton>
        <Modal.Title>{editedTodo ? 'Edit Todo' : 'Add Todo'}</Modal.Title>
      </StyledModalHeader>
      <StyledModalBody $status={status}>
        <StyledForm className='TodoForm'>
          <div>
            <TitleInput type='text' name='title' value={todoData.title} onChange={handleInputChange} placeholder='Todo Title' />
            {errors.title && <ErrorContainer >{errors.title}</ErrorContainer>}
          </div>
          <Form.Group>
            <AssigneeSelector
              isNewAssignee={isNewAssignee}
              setIsNewAssignee={setIsNewAssignee}
              handleInputChange={handleInputChange}
              errors={errors}
              userEmoji={userEmoji}
              assignees={assignees}
              selectedAssignee={todoData.assignee}
              handleSelectEmoji={handleSelectEmoji}
              todoData={todoData}
            />
          </Form.Group>
          <div>
            <Form.Control as='textarea' name='description' value={todoData.description} onChange={handleInputChange} placeholder='Todo Description' />
            {errors.description && <ErrorContainer >{errors.description}</ErrorContainer>}
          </div>
        </StyledForm>
      </StyledModalBody>
      <StyledModalFooter $status={status}>
        <Button variant={editedTodo ? 'secondary' : 'success'} onClick={handleSubmit}>
          {editedTodo ? 'Edit Todo' : 'Add Todo'}
        </Button>
      </StyledModalFooter>
    </Modal>
  );
};

export default AddEditTodo;
