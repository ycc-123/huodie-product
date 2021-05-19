import { SHOW_LOADING, HIDE_LOADING,  INCREMENT_GOODS, DECREMENT_GOODS, GET_DATA, IS_SELECT, SELECT_ALL, DELETE_CART_GOODS, 
  CATEGORY_TITLE, CATEGORY_GOODS, CATEGORY_INDEX} from './actionTypes'

const defaultState = {
  loading: false,
  cartGoods: [],
  selectAll: false,
  totalPrice: 0,
  totalNumber: 0,
  categoryIndex: 0,
  categoryGoods: []
}


export default (state = defaultState, action) => {
  /* let newState = JSON.parse(JSON.stringify(state));  */ // 深拷贝
  let newState = JSON.parse(JSON.stringify(state)) 
  switch(action.type) {
    // 根据提交的方法type 进行不同的函数
    // 显示加载动画
    case SHOW_LOADING:
      newState.loading = true
      return newState
    // 隐藏加载动画
    case HIDE_LOADING:
      newState.loading = false
      return newState
    // 增加商品数量
    case INCREMENT_GOODS: 
      newState.cartGoods[action.index].num += 1
      return newState
    // 减少商品数量
    case DECREMENT_GOODS: 
      newState.cartGoods[action.index].num -= 1
      return newState
    // 获取数据
    case GET_DATA:
      newState.cartGoods = action.data
      return newState
    // 是否选择
    case IS_SELECT: 
      newState.cartGoods[action.index].selected = !newState.cartGoods[action.index].selected
      return newState
    // 是否全选
    case SELECT_ALL: 
      newState.selectAll = !newState.selectAll
      return newState
    // 删除数据
    case DELETE_CART_GOODS:
      newState.cartGoods.splice(action.index, 1)
      return newState
    // 保存分类左侧数据
    case CATEGORY_TITLE:
      newState.categoryGoods = action.data
      return newState
    // 改变分类左侧索引
    case CATEGORY_INDEX:
      newState.categoryIndex = action.index
      return newState
    // 保存分类右侧数据
    case CATEGORY_GOODS:
      newState.categoryGoods[action.index]['data'] = action.data
      return newState
    default: break
  }
   return state
}