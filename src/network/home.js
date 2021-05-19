import { request } from './request'

export function getHomeBanner(op, uniacid) {
  return request({
    params: {
      op,
      uniacid
    }
  })
}

export function getHomeGoods(op, uniacid, page, pagesize) {
  return request({
    params: {
      op,
      uniacid,
      page,
      pagesize
    }
  })
}