const initialState = {
  items: [
    {id: 1, title: 'Item #1'},
    {id: 2, title: 'Item #2'},
    {id: 3, title: 'Item #3'}
  ]
};

export default function items(state = initialState, action) {
  switch(action.type) {
    case 'add-item':
      return Object.assign({},
        state,
        { items: [ ...state.items, {
          id: +new Date,      // unique id
          title: action.title
        }]}
      );
    case 'remove-item':
      return Object.assign({},
        state,
        { items: state.items.filter(todo => todo.id !== action.id )}
      );
    default:
      return state;
  }
};
