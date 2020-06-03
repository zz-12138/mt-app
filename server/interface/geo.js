import Router from 'koa-router'
import axios from './utils/axios'
import Province from '../db/models/province'
import City from '../db/models/city'
import Menu from '../db/models/menu'

let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: {
      content
    }
  } = await axios.get('https://api.map.baidu.com/location/ip?ak=3flw0USLk26hursZ5U8fb9vs6GwSguXh&ip=117.136.110.235')
  if (status === 200) {
    ctx.body = {
      province: '湖北省',
      city: '武汉市'
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

router.get('/province', async (ctx) => {
  // 数据库
  // let province = await Province.find()
  // ctx.body = {
  //     province: province.map(item => {
  //         return {
  //             id: item.id,
  //             name: item.value[0]
  //         }
  //     })
  // }
  // 线上
  let {
    status,
    data: {
      province
    }
  } = await axios.get('http://cp-tools.cn/geo/province')
  ctx.body = {
    province: status === 200 ? province : []
  }
})

router.get('/province/:id', async (ctx) => {
  // let city = await City.findOne({ id: ctx.params.id })
  // let {status, data: { city }} = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
  // ctx.body = {
  //     city: status === 200 ? city : []
  // }
  let {
    status,
    data: {
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/province/${ctx.params.id}`)
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

router.get('/city', async (ctx) => {
  // let city = []
  // let result = await City.find()
  // result.forEach(item => {
  //   city = city.concat(item.value)
  // })
  // ctx.body = {
  //   code: 0,
  //   city: city.map(item => {
  //     return {
  //       province: item.province,
  //       id: item.id,
  //       name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
  //         ? item.province
  //         : item.name
  //     }
  //   })
  // }
  let {
    status,
    data: {
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/city`);
  if (status === 200) {
    ctx.body = {
      city
    }
  } else {
    ctx.body = {
      city: []
    }
  }
})

router.get('/hotCity', async (ctx) => {
  // let list = [
  //   '北京市',
  //   '上海市',
  //   '广州市',
  //   '深圳市',
  //   '天津市',
  //   '西安市',
  //   '杭州市',
  //   '南京市',
  //   '武汉市',
  //   '成都市'
  // ]
  // let result = await City.find()
  // let nList = []
  // result.forEach(item => {
  //   nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
  // })
  // ctx.body = {
  //   hots: nList
  // }
  let {
    status,
    data: {
      hots
    }
  } = await axios.get(`http://cp-tools.cn/geo/hotCity`);
  if (status === 200) {
    ctx.body = {
      hots
    }
  } else {
    ctx.body = {
      hots: []
    }
  }
})

router.get('/menu', async (ctx) => {
  // const result = await Menu.findOne()
  // ctx.body = {
  //   menu: result.menu
  // }
  let {
    status,
    data: {
      menu
    }
  } = await axios.get(`http://cp-tools.cn/geo/menu`);
  if (status === 200) {
    ctx.body = {
      menu
    }
  } else {
    ctx.body = {
      menu: []
    }
  }
})

export default router
