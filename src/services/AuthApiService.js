import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:50450/api/auth',
    json: true
})

export default {
    async execute(method, resource, data) {
        return client({
            method,
            url: resource,
            data
        }).then(resp => {
            const token = resp.data
            localStorage.setItem('user-token', token)
        }).catch(err => {
            localStorage.removeItem('user-token')
        })
    },
    login(data) {
        return this.execute('post', `/login`, data)
    },
    register(data) {
        return this.execute('post', `/register`, data)
    }
}