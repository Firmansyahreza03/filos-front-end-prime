export interface UpdatePaymentTransactionRes {
    id : string
    version : number

	isAcc:boolean

	fileId?:string
	fileName?:string
	fileExt?:string
}