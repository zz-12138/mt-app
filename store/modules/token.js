const state = () => ({
    token: {}
  })
  
  const mutations = {
    setToken(state, token) {
      state.token = token
    }
  }
  
  const actions = {
    setToken: ({
      commit
    }, token) => {
      commit('setToken', token)
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  