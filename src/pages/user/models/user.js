
import {GetUser} from  '../services/index'

// api('api/user').then(res=>{
//     console.log(res,'res')
// })
export default {
  namespace: 'user', /// namespace 表示在全局 state 上的 key
  state: {
    userinfo:null,
    list:null
  },
  reducers: { //reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    setUser(state,{ payload }){
      return {
        ...state,
        userinfo:payload.user,
        list: payload.list
      }
    }
  },
  effects:{
    * getUser({ payload }, { call, put, select }) {
      const {data} = yield call(GetUser)
      yield put({ 
        type: 'setUser',
        payload: {
          user:'admin',
          list: data.list
        }
      })
    }
  }
};