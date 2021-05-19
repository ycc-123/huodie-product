import store from 'store/index'
export function totalPrice() {
  // 算出总价 
  store.getState().totalPrice = store.getState().cartGoods.filter(item => item.selected
    ).reduce((oldValue, item) => {
     return oldValue + item.oprice * item.num
  }, 0).toFixed(2)
  // 算出总数
  store.getState().totalNumber = store.getState().cartGoods.filter(item => item.selected
    ).reduce((oldValue, item) => {
    return oldValue + item.num
  }, 0)
}

// 判断是否选择了全部商品
export function isSelectAllGoods() {
  if(!store.getState().cartGoods.find(item => !item.selected)) {
    store.getState().selectAll = true
  } else {
    store.getState().selectAll = false
  }
}

export let ccid = 44

// 防抖函数
export function debounce(func, delay) {
  // func 传入方法名，delay毫秒
  let timer = null;
  return function (...args)  {
    // ...args 可以传入多个参数
    if (timer) clearTimeout(timer)
    // 如果计时器为true 清空计时器
    timer = setTimeout(() => {
      //如果在delay时间内不会执行func函数
      //在delay时间外就会执行func函数
      func.apply(this, args)
    }, delay)
  }
}

/* export function changeCcid(id) {
  ccid = id
} */
