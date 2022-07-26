export interface UpdateThreadHdrReq {
    id : string
    version : number
	
	threadName ?:string
	threadCode ?:string
	isPremium ?:boolean
	pollingHdrsId ?:string
	categoryid ?:string
	industryId ?:string
}