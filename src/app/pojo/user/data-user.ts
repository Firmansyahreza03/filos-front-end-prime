export interface DataUser {
    id : string
    version : number
    isActive : boolean

	userEmail:string
	subscriptionStatusId:string
	isSubscriber:boolean
	expiredAt:string
	verificationCode:string
	roleId:string
	roleCode:string
	fileId:string
	balanceId:string
	balance:number
}
