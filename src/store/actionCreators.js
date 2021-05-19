import { SHOW_LOADING, HIDE_LOADING, INCREMENT_GOODS, DECREMENT_GOODS, GET_DATA, 
  IS_SELECT, SELECT_ALL, DELETE_CART_GOODS,
  CATEGORY_TITLE, CATEGORY_GOODS, CATEGORY_INDEX} from './actionTypes'


/* 
 *
 *返回一个对象
 * 
 * 
*/

// 显示加载动画方法
export const showLoadingAction = () => ({
  type: SHOW_LOADING
})
// 隐藏加载动画方法
export const hideLoadingAction = () => ({
  type: HIDE_LOADING
})
// 增加商品数量方法
export const incrementAction = (index) => ({
  type: INCREMENT_GOODS,
  index
})
// 减少商品数量方法
export const decremnetAction = (index) => ({
  type: DECREMENT_GOODS,
  index
})
// 获取数据方法
export const getDataAction = (data) => ({
  type: GET_DATA,
  data
})
// 改变购物车商品是否选中方法
export const changeCheckedAction = (index) => ({
  type: IS_SELECT,
  index
})
// 购物车是否全选方法
export const isSelectAllAction = () => ({
  type: SELECT_ALL
})
// 删除购物车商品方法
export const deleteCartGoodsAction = (index) => ({
  type: DELETE_CART_GOODS,
  index
})
// 保存分类左侧方法
export const saveCategoryTitleAction = (data) => ({
  type: CATEGORY_TITLE,
  data
})
// 保存分类右侧方法
export const saveCategoryGoodsAction = (index, data) => ({
  type: CATEGORY_GOODS,
  index,
  data
})
// 改变分类索引方法
export const changeCategoryIndexAction = (index) => ({
  type: CATEGORY_INDEX,
  index
})


// 商品选中时修改selected 并且判断全部商品是否选中
export const isSelectStore = (index) => {
  return (dispatch) => {
    const action = changeCheckedAction(index)
    dispatch(action)
  }
}
// 删除商品时
export const isDeleteGoods = (index) => {
  return (dispatch) => {
    const action = deleteCartGoodsAction(index)
    dispatch(action)
  }
}
// 减少商品数量
export const isDecrementGoods = (index) => {
  return (dispatch) => {
    const action = decremnetAction(index)
    dispatch(action)
  }
}
// 增加商品数量
export const isIncrementGoods = (index) => {
  return (dispatch) => {
    const action = incrementAction(index)
    dispatch(action)
  }
}


/*
  *
  *
  * 分类
  * 
  * 
*/
// 保存左侧标题
export const saveCategoryTitle = (data) => {
  return (dispatch) => {
    const action = saveCategoryTitleAction(data)
    dispatch(action)
  }
}
// 改变分类左侧的索引
export const changeCategoryIndex = (index) => {
  return (dispatch) => {
    const action = changeCategoryIndexAction(index)
    dispatch(action)
  }
}
// 存放分类右侧数据
export const saveCategoryGoods = (index, data) => {
  return (dispatch) => {
    const action = saveCategoryGoodsAction(index, data)
    dispatch(action)
  }
}
