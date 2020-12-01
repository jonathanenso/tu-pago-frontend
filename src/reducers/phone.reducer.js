import { userConstants } from '../constants';

export default function phone(state = {}, action) {
    switch (action.type) {
        // Solicitud de la verificacion
        case userConstants.REQUEST_PHONE_VALIDATION_REQUEST:
            return {
                requesting: true
            };
        case userConstants.REQUEST_PHONE_VALIDATION_SUCCESS:
            return {
                success: true,
                response: action.response,
            };
        case userConstants.REQUEST_PHONE_VALIDATION_FAILURE:
            return {
                error: action.error
            };

        // Verificar numero de telefono
        case userConstants.VALIDATE_PHONE_REQUEST:
            return {
                validating: true
            };
        case userConstants.VALIDATE_PHONE_SUCCESS:
            return {
                validationSuccess: true,
                response: action.response,
            };
        case userConstants.REQUEST_PHONE_VALIDATION_FAILURE:
            return {
                error: action.error
            };

        default:
            return state
    }
}