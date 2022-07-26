export interface InsertThreadHdrReq {
	isActive? : boolean

	threadName ?:string
	threadCode ?:string
	isPremium ?:boolean
	pollingHdrsId ?:string
	categoryid ?:string
	industryId ?:string
}