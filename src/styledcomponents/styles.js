import styled from 'styled-components';
import { Button, Modal, Form } from 'react-bootstrap';
import { getStatusStyles } from '../helpers';
import paperIcon from '../assets/paperIcon.svg';
import { STATUS } from '../constants';


// Todos Page

export const PageContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  margin-top: 1rem;
  &::before {
    content: '📝';
  }
`;

export const ColumnsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddTaskButton = styled(Button)`
  margin-top: 1rem;
  display: flex;
`;


//Todos Container

export const Container = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  height: fit-content;
  box-shadow: ${(props) => getStatusStyles(props.$status).boxShadow};
  flex: 1;
  margin: 8px;
`;

export const Title = styled.h2`
  color: #333;
  display: flex;
  font-size: 1rem;
  align-items: center;
  background-color: #ededed;
  padding: 0.3rem;

  &::before {
    content: ${(props) => getStatusStyles(props.$status).emoji};
    margin-right: 8px;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
`;

export const TodoList = styled.div`
  margin: 1rem;
`;


// Todo 

export const EditIcon = styled.img`
  cursor: pointer;
  align-self: center;
  justify-self: center;
  grid-column: 1/3;
  cursor: pointer;
  height: 20px;
  width: 20px;
  display: none;
`;

export const TodoItem = styled.div`
  background-color: ${(props) => getStatusStyles(props.$status).backgroundColor};
  border: ${(props) => getStatusStyles(props.$status).border};
  color: ${(props) => getStatusStyles(props.$status).color};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 3fr 1fr;
  &:hover ${EditIcon} {
    display: block;
  }

  @media (max-width: 540px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const TextWithIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;
  cursor: ${(props) => props.$noAssignee && 'pointer'};
  &::after {
    content: '${(props) => (props.$noAssignee ? '⬇️' : '')}';
  }

  &::before {
    content: ${(props) => getStatusStyles(props.$status, props.$emoji).emoji};
    margin-right: 3px;
    display: flex;
    align-items: center;
  }
`;

export const TodoTitle = styled.h4`
  font-size: 1rem;
  display: flex;
  align-items: center;
  width: 150%;
  &::before {
    content: ''; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: .6rem; 
    height: .6rem;
    background-image: url('${paperIcon}');
    background-size: contain; /* This resizes the image to fit within the element */
    background-repeat: no-repeat;
    background-position: center;
    filter: ${(props) => getStatusStyles(props.$status, props.$emoji).filter};
    margin-right: 8px;
  }
`;

export const TodoData = styled.div`
  font-size: 0.5rem;
  display: flex;
  margin: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  text-align: ${(props) => props.$align};
`;


// Add/Edit Todo

export const StyledModalHeader = styled(Modal.Header)`
  background-color: #000;
  .btn-close {
    filter: brightness(52%) grayscale(4%) invert(1);
  }
  .modal-title {
    color: #fff;
  }
`;

export const StyledModalBody = styled(Modal.Body)`
  background-color: ${(props) => props.$status === STATUS.TODO ? 'rgba(202, 74, 61, 0.5)' : getStatusStyles(props.$status).backgroundColor};
`;

export const StyledModalFooter = styled(Modal.Footer)`
background-color: ${(props) => props.$status === STATUS.TODO ? 'rgba(202, 74, 61, 0.5)' : getStatusStyles(props.$status).backgroundColor};
display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.8rem;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleInput = styled(Form.Control)`
  align-self: flex-start;
`;

export const ErrorContainer = styled(Form.Text)`
  color:'#CA4A3D';
  font-size: 0.5rem;
  margin-left: 10px;
`;

// AssigneeSelector

export const AssigneeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddAsigneeBtn = styled(Button)`
  margin-top: 20px;
  @media (min-width: 1100px) {
    font-size: 0.5rem;
  }
`;

export const CloseNewAssignee = styled.div`
  text-align: center;
  cursor: pointer;
  &:hover: {
    display: none;
  }
`;

// Emoji Picker

export const EmojiContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 1rem;
`;

export const EmojiItem = styled.div`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.$isSelected ? '#000' : 'transparent')};
`;