export interface DataThreadHdr {
    id : string
    version : number
    isActive : boolean
	
	threadName ?:string
	threadCode ?:string
	threadContent ?:string
	isPremium ?:boolean
	pollingHdrsId ?:string
	pollingName ?:string
	categoryid ?:string
	categoryName ?:string
	industryId ?:string
	industryName ?:string
	fileId?:string
	fileName?:string
	fileTxt?:string
	creatorName?:string
	createdAt?:Date
	photoProfileCreator?:string
}