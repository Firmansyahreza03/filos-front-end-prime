export interface UpdateThreadHdrReq {
    id : string
    version : number
	
	threadName ?:string
	threadCode ?:string
	pollingHdrsId ?:string
	categoryid ?:string
	industryId ?:string
}