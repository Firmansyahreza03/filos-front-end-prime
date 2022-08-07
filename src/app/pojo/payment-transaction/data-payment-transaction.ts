export interface DataPaymentTransaction {
    id : string
    version : number
    isActive : boolean
	
	isAcc:boolean
	code: string
	desc: string
	price: number

	fileId?:string
	fileName?:string
	fileExt?:string
}