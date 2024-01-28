import React, { createContext, useCallback, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [editingTodo, setEditingTodo] = useState({ editedTodo: '', status: null });


  const onShow = useCallback( (show, editTodo = null, status = null) => {
    setEditingTodo({ editedTodo: editTodo, status: status });
    setShow(show);
  }, [])

  return (
    <ModalContext.Provider value={{ show, onShow, editingTodo }}>
      {children}
    </ModalContext.Provider>
  );
};
