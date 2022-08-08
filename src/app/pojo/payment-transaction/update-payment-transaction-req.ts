export interface UpdatePaymentTransactionReq {
    id : string
    version : number

	isAcc:boolean
	desc: string
	price: number

	fileId?:string
	fileName?:string
	fileExt?:string
}