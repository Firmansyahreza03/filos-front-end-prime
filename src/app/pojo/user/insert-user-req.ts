export interface InsertUserReq {
  isActive: boolean

	userEmail:string
	userPassword:string
	subscriptionStatusId:string
	isSubscriber:boolean
	expiredAt:string
	verificationCode:string
	roleId:string
	fileId:string
	balanceId:string
}
