import { request } from './request'
import { requestLive } from './request'
import { requestPost } from './request'

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

export function getHomeLiveList(op, uniacid) {
  return requestLive({
    params: {
      op,
      uniacid
    }
  })
}

export function getHomeAdvertising(data) {
  return requestPost({
    data
  })
}