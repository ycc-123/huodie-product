import { request } from './request'

export function getGoodsDetail(op, uniacid, id) {
  return request({
    params: {
      op,
      uniacid,
      id
    }
  })
}

export function getDetailRecommend(op, uniacid, app) {
  return request({
    params: {
      op,
      uniacid,
      app
    }
  })
}

export function addGoodsCart(op, uniacid, ccid, gid, num) {
  return request({
    params: {
      op,
      uniacid,
      ccid,
      gid,
      num
    }
  })
}

export class Goods {
  constructor(itemInfo) {
    this.uniacid = itemInfo.uniacid // 公众号id
    this.gid = itemInfo.id  // 商品id
    this.oprice = itemInfo.oprice // 单买价格
    this.gprice = itemInfo.gprice // 团购价
    this.mprice = itemInfo.mprice // 市场价
    this.selltype = itemInfo.selltype // 单买||团购
    this.gname = itemInfo.gname // 描述
    this.gnum = itemInfo.gnum // 商品库存
    this.salenum = itemInfo.salenum // 已售
    this.num = 1 // 默认数量
    this.ccid = Math.floor(Math.random() * 100) // 随机生成ccid
    this.totalPrice = this.num * this.oprice // 总价
    this.gimg = itemInfo.gimg // 图片
  }
} 
