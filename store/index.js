import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'
import token from './modules/token'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: { geo, home, token },
    actions: {
        async nuxtServerInit({commit}, {req, app}) {
            // 获取当前位置
            const { status, data: { province, city } } = await app.$axios.get('/geo/getPosition')
            commit('geo/setPosition', status === 200 ? { city, province }: {city: '', province: ''})
            // 获取菜单
            const { status: status2, data: {menu}} = await app.$axios.get('/geo/menu')
            commit('home/setMenu', status2 === 200 ? menu : [])
            // 获取热门景点
            const { status: status3, data: {result}} = await app.$axios.get('/search/hotPlace', {
                params: {
                    city: app.store.state.geo.position.city.replace('市', '')
                }
            })
            commit('home/setHotePlace', status3 === 200 ? result : [])
            // 获取token
            let token = req.ctx.isAuthenticated()
            commit('token/setToken', token)

        }
    }
})

export default store