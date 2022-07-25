export interface UpdatePaymentTransactionRes {
    id : number
    version : number

	isAcc:boolean

	fileId?:string
	fileName?:string
	fileExt?:string
}