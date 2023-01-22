import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-90e42-default-rtdb.firebaseio.com'
})

export default journalApi




