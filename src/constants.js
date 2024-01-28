export const STATUS = {
  TODO: 'todo',
  DOING: 'doing',
  DONE: 'done',
};


export const EMOJIS = ['😀', '😂', '🦄', '😇', '🍕', '🚀', '👽', '🐶', '🎉', '🤖', '🥷', '🧜‍♀️', '🍪', '💟', '🌍'];

export const ASSIGNEES = {
  0: { id: 0, name: 'Assignee', emoji: '👤' },
  1: { id: 1, name: 'James', emoji: '🤖 ' },
  2: { id: 2, name: 'Sarah', emoji: '🦄' },
  3: { id: 3, name: 'Fred', emoji: '🐶' },
  4: { id: 4, name: 'Larry', emoji: '😀' },
}

export const TODOS = {
  todos: {
    1: {
      id: 1,
      title: 'Finish App',
      description: 'Add New Component',
      assignee: 3,
    },
    2: {
      id: 2,
      title: 'Test App',
      description: 'Send to QA',
      assignee: 2,
    },
    3: {
      id: 3,
      title: 'Deploy App',
      description: 'Deployment will be at 14:00',
      assignee: 0,
    },
  },
  columns: {
    todo: ['3',],
    doing: ['2'],
    done: ['1'],
  },
}