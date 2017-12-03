/**
 * Created by csh on 2017/5/3.
 */
// import {loginByPhone} from 'api/user/login'
import API from 'api'

export default {
  state: {
    info: null,
    wallet: {balance: 0}
  },
  mutations: {
    SET (state, data) {
      state[data.type] = data.data
    },
    setWallet (state, wallet) {
      state.wallet = wallet
    }
  },
  actions: {
    loginByPhone ({commit}, userLoginInfo) {
      // console.log(userInfo)
      return API('loginByPhone', userLoginInfo)
      // return loginByPhone(userInfo.phone, userInfo.pwd)
    },
    signupByPhone ({commit}, userSignupInfo) {
      return API('signupByPhone', userSignupInfo)
    },
    getPrivateUserInfo ({commit}, uid) {
      return API('getPrivateUserInfo', uid)
    }
  }
}
