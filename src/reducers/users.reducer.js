import { userConstants } from '../constants';

export default function users(state = {}, action) {
  switch (action.type) {
    // Registro de usuarios
    case userConstants.USER_CREATE_REQUEST:
      return { registering: true };
    case userConstants.USER_CREATE_SUCCESS:
      return {
        success: true
      };
    case userConstants.USER_CREATE_FAILURE:
      return {};

    // Actualización de usuario
    case userConstants.USER_UPDATE_REQUEST:
      return {
        updating: true
      };
    case userConstants.USER_UPDATE_SUCCESS:
      return {
        success: true,
        userUpdated: action.user,
      };
    case userConstants.USER_UPDATE_FAILURE:
      return {
        error: action.error
      };

    // Subir documento
    case userConstants.UPLOAD_DOCUMENT_REQUEST:
      return {
        updating: true
      };
    case userConstants.UPLOAD_DOCUMENT_SUCCESS:
      return {
        success: true,
        user: action.user,
      };
    case userConstants.UPLOAD_DOCUMENT_FAILURE:
      return {
        error: action.error
      };

    // Agregar cuenta
    case userConstants.ADD_ACCOUNT_REQUEST:
      return {
        adding: true
      };
    case userConstants.ADD_ACCOUNT_SUCCESS:
      return {
        addSuccess: true,
        user: action.user,
      };
    case userConstants.ADD_ACCOUNT_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
}