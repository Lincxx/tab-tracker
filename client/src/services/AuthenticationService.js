import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
// AuthenticationService.register({
//   email: 'bossco@gmail.com',
//   password: '12345'
// })
