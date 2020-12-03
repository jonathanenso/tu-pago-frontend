/* eslint-disable */
import { apiUrl } from '../config/config';
import authHeader from '../helpers/auth-header';
import handleResponse from '../helpers/handleResponse';
import CryptoJS from "crypto-js";
import { passphrase } from '../config/config';

export const userService = {
    register: (user) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        return fetch(`${apiUrl}/users/register`, requestOptions).then(handleResponse);
    },

    login: (username, password) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email: username, 
                password: password 
            })
        };
    
        return fetch(`${apiUrl}/users/authenticate`, requestOptions)
            .then(handleResponse)
            .then(user => {
                console.log('user', user);

                // almacenar detalles de usuario y token jwt en almacenamiento local para mantener al usuario conectado entre actualizaciones de página
                var cryptUser = CryptoJS.AES.encrypt(JSON.stringify(user), passphrase).toString();
                localStorage.setItem('user', cryptUser);

                return user;

            });
    },

    logout() {
        // eliminar usuario del almacenamiento local para cerrar sesión
        localStorage.removeItem('user');
    },

    update: (id, user) => {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        return fetch(`${apiUrl}/users/update-user/${id}`, requestOptions).then(handleResponse).then(() => {
            // actualizar data del localStorage
            let userData = localStorage.getItem('user');
    
            if(userData){
                var bytes = CryptoJS.AES.decrypt(userData, passphrase);
                var originalData = bytes.toString(CryptoJS.enc.Utf8);
                userData = JSON.parse(originalData);
                Object.assign(userData, user);
                var cryptUser = CryptoJS.AES.encrypt(JSON.stringify(userData), passphrase).toString();
                localStorage.setItem('user', cryptUser);
            }else{
                return Promise.reject('Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.');
            }
            
            return userData;
        })
    },

    requestPhoneValidation: (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userID: id
            })
        };
    
        return fetch(`${apiUrl}/users/request-phone-verification`, requestOptions).then(handleResponse).then((response) => {
            if(response.status){
                return response;
            }else{
                return Promise.reject('Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.');
            }
        })
    },

    validatePhone: (id, code) => {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userID: id,
                code: code
            })
        };
    
        return fetch(`${apiUrl}/users/verify-phone`, requestOptions).then(handleResponse).then((response) => {
            if(response.status){
                return response;
            }else{
                return Promise.reject('Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.');
            }
        })
    },

    uploadDocument: (id, documents) => {

        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader() },
            body: documents
        };
    
        return fetch(`${apiUrl}/users/upload-document/${id}`, requestOptions).then(handleResponse).then((response) => {
            if(response.status){
                return response;
            }else{
                return Promise.reject('Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.');
            }
        })
    },

    addAccount: (id, account) => {
        const requestOptions = {
            method: 'POST',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(account)
        };
    
        return fetch(`${apiUrl}/users/add-account/${id}`, requestOptions).then(handleResponse).then((response) => {
            if(response.status){
                return response;
            }else{
                return Promise.reject('Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.');
            }
        })
    }
};