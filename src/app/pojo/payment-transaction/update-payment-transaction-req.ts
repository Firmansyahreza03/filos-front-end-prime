export interface UpdatePaymentTransactionReq {
    id : string
    version : number

	isAcc:boolean

	fileId?:string
	fileName?:string
	fileExt?:string
}