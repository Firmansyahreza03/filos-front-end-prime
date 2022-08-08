export interface InsertPaymentTransactionReq {
	type: string
	desc: string
	price: number

	fileId?:string
	fileName?:string
	fileExt?:string
}