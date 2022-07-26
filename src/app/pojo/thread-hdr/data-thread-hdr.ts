export interface DataThreadHdr {
    id : string
    version : number
    isActive : boolean
	
	threadName ?:string
	threadCode ?:string
	isPremium ?:boolean
	pollingHdrsId ?:string
	pollingName ?:string
	categoryid ?:string
	categoryName ?:string
	industryId ?:string
	industryName ?:string
}