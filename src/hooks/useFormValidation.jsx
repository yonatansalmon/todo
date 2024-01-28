import { useState, useEffect } from 'react';

const useFormValidation = (todoData, isNewAssignee, userEmoji, newAssigneeName) => {
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);
  const { title, description } = todoData;

  const validate = () => {
    const newErrors = {};

    // 1) Title is mandatory
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    // 2) Description can't be longer than 50 characters
    if (description && description.length > 50) {
      newErrors.description = 'Description cannot be longer than 50 characters';
    }

    // 3) If in create new assignee, validate that both the name and emoji exist
    if (isNewAssignee) {
      if (!newAssigneeName.trim()) {
        newErrors.assignee = 'Assignee name is required';
      }
      if (!userEmoji) {
        newErrors.emoji = 'Emoji is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (isTouched) {
      validate();
    }
  }, [todoData, isNewAssignee, userEmoji, newAssigneeName, isTouched]);

  return { errors, validate, setErrors, setIsTouched };
};

export default useFormValidation;
