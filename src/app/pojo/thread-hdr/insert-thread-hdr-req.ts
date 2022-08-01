export interface InsertThreadHdrReq {
	isActive? : boolean

	threadName ?:string
	threadContent ?:string
	isPremium ?:boolean
	pollingHdrId ?:string
	categoryId ?:string
	fileName?:string
	fileExt?:string
	email?:string
}