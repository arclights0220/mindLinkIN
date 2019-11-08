import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logon: false,
    userData : {},
    roomName: "",
    Mjson: ""
  },
  mutations: {},
  actions: {
    REGISTER({ commit }, data) {
      return new Promise((resolve, reject) => {
        Axios.post("http://andy0414.com:3000/auth/register", data)
          .then(data => {
            resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    LOGIN({ commit }, data) {
      return new Promise((resolve, reject) => {
        Axios.post("http://andy0414.com:3000/auth/login", data)
          .then(data => {
            resolve(data);
          })
          .catch(err => reject(err));
      });
    },
    GET_USER({ commit }, data) {
      return new Promise((resolve, reject) => {
        Axios.post("http://andy0414.com:3000/auth/getProfile", null,{
          headers:{
            Authorization : data
          }
        })
          .then(data => {
            resolve(data);
          })
          .catch(err => reject(err));
      });
    }
  },
  modules: {}
});
