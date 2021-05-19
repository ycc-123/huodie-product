import { request } from './request'

export function addDatabase(op, uniacid, gid, ccid) {
  return request({
    params: {
      op,
      uniacid,
      gid,
      ccid
    }
  })
}

export function delCartGoods(op, uniacid, id) {
  return request({
    params: {
      op,
      uniacid,
      id
    }
  })
}

export function showCartGoods(op, uniacid, ccid) {
  return request({
    params: {
      op,
      uniacid,
      ccid
    }
  })
}