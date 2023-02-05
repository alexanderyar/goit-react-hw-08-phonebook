import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// !!!!! 0. Сначала нужно было сделать внешние компоненты аппБара, формы регистрации, формы логИна и раутинг;
//  1. сначала сделать API для регистрации, логина;

//  2.сделать операции, редюсеры, диспатчи регистрации нового пользователя, чтобы можно было получить токен и работать дальше с контактами;

// потом добавить операции
// редюсеры
// диспатчи



// User API. Create, LogIn, LogOut, Refreshing User

export async function createUser(credentials) {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        return data;
        // {      
        // "name": "Adrian Cross",
        // "email": "across@mail.com",
        // "password": "examplepwd12345"    
        // }


    } catch (error) {
        console.log(error)
    }
}

export async function logInUser(credentials) {
    try {
        const { data } = await axios.post('/users/login', credentials);
        return data;
    
//   "email": "across@mail.com",
//   "password": "examplepwd12345"    

    } catch (error) {
        console.log(error)
    }
}

export async function logOutUser(credentials) {
    try {
        const { data } = await axios.post('/users/logout');
        return data;
    
//   no body    token only
//      

    } catch (error) {
        console.log(error)
    }
}


export async function refreshUser(credentials) {
    try {
        const { data } = await axios.post('/users/current');
        return data;
    
//   no body    token only
//      

    } catch (error) {
        console.log(error)
    }
}




//////////////////////////////////////////


// Contacts API. fetching, adding, deleting contacts 
export async function fetchContacts() {

    // later add what to do on error beside console.log
    try {
        const { data } = await axios.get('/contacts');
    return data;
    } catch (error) {
        console.log(error)
    }
}

export async function addContact(newContact) {
    try {
        // later add what to do on error beside console.log
        const { data } = await axios.post('/contacts', {"name": newContact.name,
  "number": newContact.phone});
    return data;
    } catch (error) {
        console.log(error)
    }
}





export async function deleteContactById(id) {
    try {
        // later add what to do on error beside console.log
        const { data } = await axios.delete(`/contacts/${id}`);
    return data;
    } catch (error) {
        console.log(error)
    }
}

export async function updateContactById(id, updatedContactInfo) {
    try {
        // later add what to do on error beside console.log
        const { data } = await axios.patch(`/contacts/${id}`, updatedContactInfo);
        return data;
        
        // {
//   "name": "Jacob Mercer",
//   "number": "761-23-96"
// }
    } catch (error) {
        console.log(error)
    }
}


////////////////////////////////////

// token utility

export const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};