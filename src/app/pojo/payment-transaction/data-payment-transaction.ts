export interface DataPaymentTransaction {
    id : number
    version : number
    isActive : boolean
	
	isAcc:boolean

	fileId?:string
	fileName?:string
	fileExt?:string
}