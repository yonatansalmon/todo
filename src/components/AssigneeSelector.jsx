import { Form } from 'react-bootstrap';
import EmojiPickerDropdown from './EmojiPickerDropdown';
import { AssigneeContainer, AddAsigneeBtn, CloseNewAssignee, ErrorContainer } from '../styledcomponents/styles';

const AssigneeSelector = ({ isNewAssignee, setIsNewAssignee, handleInputChange, errors, userEmoji, assignees, handleSelectEmoji, todoData }) => {
  
  const handleCloseAssignee = () => {
    setIsNewAssignee(false);
    handleSelectEmoji('');
  };

  return (
    <div>
      {isNewAssignee ? (
        <div>
          <Form.Control type='text' name='assignee' onChange={handleInputChange} placeholder='Assignee Name' />
          {errors.assignee && <ErrorContainer>{errors.assignee}</ErrorContainer>}
          <EmojiPickerDropdown onSelectEmoji={handleSelectEmoji} userEmoji={userEmoji} />
          {errors.emoji && <ErrorContainer>{errors.emoji}</ErrorContainer>}

          <CloseNewAssignee className='align-center' onClick={handleCloseAssignee}>
            &times;
          </CloseNewAssignee>
        </div>
      ) : (
        <AssigneeContainer>
          <Form.Select name='assignee' value={todoData.assignee} onChange={handleInputChange} aria-label='Select Team Mate'>
            {Object.values(assignees).map((assignee) => (
              <option key={assignee.id} value={assignee.id}>
                {assignee.emoji} {assignee.name}
              </option>
            ))}
          </Form.Select>
          <AddAsigneeBtn variant='outline-dark' size='sm' onClick={() => setIsNewAssignee(true)}>
            + Add New Asignee
          </AddAsigneeBtn>
        </AssigneeContainer>
      )}
    </div>
  );
};

export default AssigneeSelector;
