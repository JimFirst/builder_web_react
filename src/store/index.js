import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({

})

const initializeState = {}; // 定义初始化的state
  
// 创建store，第一个参数是根reducer，第二个参数可以是初始化的state，也可以是别的，暂且不提
const store = createStore(rootReducer,initializeState);

// 抛出store
export default store;  