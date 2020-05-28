const state = () => ({
  menu: [],
  hotPlace: []
})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotePlace(state, val) {
    state.hotPlace = val
  }
}

const actions = {
  setMenu: ({
    commit
  }, menu) => {
    commit('setMenu', menu)
  },
  setHotePlace: ({
    commit
  }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
