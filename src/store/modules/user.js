import { login , testToken} from '@/api/user'

  const user = {
    state: {
        token:''
    },
    mutations: {
        SET_TOKEN (state, payload) {
            state.token = payload.token;
        },
    },
    actions: {
        LoginByUsername({ commit }, userInfo) {            
            return new Promise((resolve, reject) => {
              login(userInfo).then(response => {
                const data = response.data
                commit('SET_TOKEN', data)
                resolve(response)
              }).catch(error => {
                reject(error)
              });
            });
          },
          test(){
            return new Promise((resolve, reject) => {
                testToken().then(response => {
                
                  resolve()
                }).catch(error => {
                  reject(error)
                });
              });
               
          }
    }
};

export default user;