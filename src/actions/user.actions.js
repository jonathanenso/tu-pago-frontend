/* eslint-disable */
import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';

export const userActions = {
    login(username, password) {
        return dispatch => {
            dispatch(request({ username }));

            userService.login(username, password)
                .then(
                    user => {
                        dispatch(success(user));
                        // history.push('/inicio');
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    },

    logout() {
        userService.logout();
        return { type: userConstants.LOGOUT };
    },

    register(user) {
        return dispatch => {
            dispatch(request(user));

            userService.register(user)
                .then(
                    user => {
                        dispatch(success());
                        dispatch(alertActions.success('¡Registro exitoso!'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(user) { return { type: userConstants.USER_CREATE_REQUEST, user } }
        function success(user) { return { type: userConstants.USER_CREATE_SUCCESS, user } }
        function failure(error) { return { type: userConstants.USER_CREATE_FAILURE, error } }
    },

    //Actualizar información usuario
    update(id, data) {
        return dispatch => {
            dispatch(request(id));

            userService.update(id, data)
                .then(
                    user => {
                        dispatch(success(user));
                        dispatch(alertActions.success('Sus datos han sido actualizados correctamente'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: userConstants.USER_UPDATE_REQUEST, id } }
        function success(user) { return { type: userConstants.USER_UPDATE_SUCCESS, user } }
        function failure(error) { return { type: userConstants.USER_UPDATE_FAILURE, error } }
    },

    // Solicitar validacion de telefono
    requestPhoneValidation(id) {
        return dispatch => {
            dispatch(request(id));

            userService.requestPhoneValidation(id)
                .then(
                    response => {
                        dispatch(success(response));
                        dispatch(alertActions.success('La solicitud de validación de teléfono se realizó correctamente'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: userConstants.REQUEST_PHONE_VALIDATION_REQUEST, id } }
        function success(response) { return { type: userConstants.REQUEST_PHONE_VALIDATION_SUCCESS, response } }
        function failure(error) { return { type: userConstants.REQUEST_PHONE_VALIDATION_FAILURE, error } }
    },

    // Validar de telefono
    validatePhone(id, code) {
        return dispatch => {
            dispatch(request(id));

            userService.validatePhone(id, code)
                .then(
                    response => {
                        dispatch(success(response));
                        dispatch(alertActions.success('La validación del teléfono se realizó correctamente'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: userConstants.VALIDATE_PHONE_REQUEST, id } }
        function success(response) { return { type: userConstants.VALIDATE_PHONE_SUCCESS, response } }
        function failure(error) { return { type: userConstants.VALIDATE_PHONE_FAILURE, error } }
    },

    // Subir documento
    uploadDocument(id, document) {
        return dispatch => {
            dispatch(request(id));

            userService.uploadDocument(id, document)
                .then(
                    user => {
                        dispatch(success(user));
                        dispatch(alertActions.success('La subida del documento se realizó correctamente'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: userConstants.UPLOAD_DOCUMENT_REQUEST, id } }
        function success(user) { return { type: userConstants.UPLOAD_DOCUMENT_SUCCESS, user } }
        function failure(error) { return { type: userConstants.UPLOAD_DOCUMENT_FAILURE, error } }
    },

    // Agregar cuenta
    addAccount(id, account) {
        return dispatch => {
            dispatch(request(id));

            userService.addAccount(id, account)
                .then(
                    user => {
                        dispatch(success(user));
                        dispatch(alertActions.success('Se agrego la cuenta correctamente'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: userConstants.ADD_ACCOUNT_REQUEST, id } }
        function success(user) { return { type: userConstants.ADD_ACCOUNT_SUCCESS, user } }
        function failure(error) { return { type: userConstants.ADD_ACCOUNT_FAILURE, error } }
    }
};

