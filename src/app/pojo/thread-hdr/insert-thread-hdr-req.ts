export interface InsertThreadHdrReq {
	isActive? : boolean

	threadName ?:string
	threadContent ?:string
	categoryId ?:string
	fileName?:string
	fileExt?:string
	email?:string

	pollingName?: string
	options?: string[]
	expiredAt?: string[]
}