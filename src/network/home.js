import { request } from './request'

export function getHomeBanner(op, uniacid) {
  return request({
    url: '/wechat_api.php',
    params: {
      op,
      uniacid
    }
  })
}

export function getHomeGoods(op, uniacid, page, pagesize) {
  return request({
    url: '/wechat_api.php',
    params: {
      op,
      uniacid,
      page,
      pagesize
    }
  })
}