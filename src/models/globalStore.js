
export default {
  namespace: 'global', /// namespace 表示在全局 state 上的 key
  state: {
    context:null,
    route:null
  },
  reducers: { //reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
    setContext(state,{ payload }){
      return {
        ...state,
        context: payload.context
      }
    },
    setRoute(state,{ payload }){
      return {
        ...state,
        route: payload.route
      }
    }
  },
  effects:{
    
  }
};