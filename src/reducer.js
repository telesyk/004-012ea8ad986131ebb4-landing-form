import {
  SET_NOTIFICATION,
  SET_NOTIFICATION_TYPE,
  SET_SELECTED_OPTION,
  SET_EMAIL_VALUE,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
      };

    case SET_NOTIFICATION_TYPE:
      return {
        ...state,
        notificationType: action.payload.notificationType,
      };
    case SET_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
      };
    case SET_EMAIL_VALUE:
      return {
        ...state,
        emailValue: action.payload.emailValue,
      };

    default:
      return state;
  }
};

export default reducer;
