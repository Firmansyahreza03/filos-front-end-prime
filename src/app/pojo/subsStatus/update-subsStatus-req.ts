export interface UpdateSubsStatusReq {
  id: string
  version: number
  isActive: boolean

  isSubscriber: boolean
  paymentId: string
  expiredAt: string
}
