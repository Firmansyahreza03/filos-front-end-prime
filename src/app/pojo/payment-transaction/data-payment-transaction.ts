export interface DataPaymentTransaction {
    id : string
    version : number
    isActive : boolean
	
	isAcc:boolean

	fileId?:string
	fileName?:string
	fileExt?:string
}