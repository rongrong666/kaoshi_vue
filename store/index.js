import Vue from 'vue'
import Vuex from 'vuex'
import storage from './mystorage'

Vue.use(Vuex);
// 用Vuex.Store对象用来记录token
const store = new Vuex.Store({

  state: {
    // 存储token
    token: '',
    userName: '',
    userType: ''
  },

  // 计算属性
  mutations: {
    // 修改token，并将token存入localStorage
    setToken (state, token) {
      state.token = token;
      storage.set('token', token);
      console.log('store、localstorage保存token成功！');
    },
    setUserType (state, type) {
      state.userType = type;
      storage.set('userType', type);
    },
    delToken (state) {
      state.token = '';
      storage.remove('token');
    },
    // 可选
    setUserInfo (state, userName) {
      state.userName = userName;
    }
  }
});

export default store;
