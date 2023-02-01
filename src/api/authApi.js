import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDcjmO_ICh7KchGO-kC-PJ1Bf9JAIO93zE'

    }
})

export default authApi




