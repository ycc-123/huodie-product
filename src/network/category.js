import { request } from './request'

export function getCategoryData(op, uniacid) {
  return request({
    url: '/wechat_api.php',
    params: {
      op,
      uniacid
    }
  })
}

// 用户名53uniacid  op写死ajax_optimization_bymobile  fk_typeid分类id1692 page页面1 page25分类大小
// type写3  erp_warehouseid仓库id 
export function getCategoryGoods(uniacid, op, fk_typeid, page, pagesize, type, erp_warehouseid) {
  return request({
    url: '/wechat_api.php',
    params: {
      uniacid,
      op,
      fk_typeid,
      page,
      pagesize,
      type,
      erp_warehouseid
    }
  })
}