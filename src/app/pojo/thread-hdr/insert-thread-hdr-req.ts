export interface InsertThreadHdrReq {
	isActive? : boolean

	threadName ?:string
	threadContent ?:string
	pollingHdrId ?:string
	categoryId ?:string
	fileName?:string
	fileExt?:string
	email?:string
}