import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:50450/api/telemetry',
  json: true,
  headers : {
    "Authorization" : `Bearer ${localStorage.getItem('user-token')}`
  }
})

export default {
  async execute(method, resource, data) {
    return client({
      method,
      url: resource,
      data
    }).then(req => {
      return req.data
    })
  },
  getAll() {
    return this.execute('get', `/`)
  },
  get(id) {
    return this.execute('get', `/${id}`)
  }
}