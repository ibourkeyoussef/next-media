import MyStorage from "./MyStorage";

class User {

    login(data) {
        axios.post(`http://localhost:8000/api/auth/login`, data)
        .then(res => {
            console.log(res.data)
            MyStorage.storeToken(res.data.access_token, res.data.user_id, res.data.user_name);
           window.location = '/';
        })
        .catch(err => console.log('error: ', err))
    }

    signUp(data) {
        axios.post(`http://localhost:8000/api/auth/signup`, data)
        .then(res => {
           window.location = '/login';
        })
        .catch(err => console.log('error: ', err))
    }

    logout(url) {
        axios.post(url)
        .then(res => {
            MyStorage.clear();
           window.location = '/login';
        })
        .catch(err => console.log('error: ', err))
    }

    loggedIn() {
       return MyStorage.hasToken();
    }

    id() {
        return localStorage.getItem('user_id');
    }

}

export default new User;
