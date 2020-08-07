import { CHANGE_FILTER } from '../actions/index';

const filterReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload === 'All') {
        return {
          ...state,
          filter: '',
        };
      }
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return { ...state, filter: '' };
  }
};

export default filterReducer;
