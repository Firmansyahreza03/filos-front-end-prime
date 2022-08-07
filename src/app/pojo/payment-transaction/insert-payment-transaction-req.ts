export interface InsertPaymentTransactionReq {
	isActive : boolean

	desc: string
	price: number

	fileId?:string
	fileName?:string
	fileExt?:string
}