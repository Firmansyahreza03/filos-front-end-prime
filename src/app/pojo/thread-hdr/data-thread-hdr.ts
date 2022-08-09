export interface DataThreadHdr {
    id : string
    version : number
    isActive : boolean
	
	threadName ?:string
	threadCode ?:string
	threadContent ?:string
	isPremium ?:boolean
	categoryid ?:string
	categoryName ?:string
	pollingHdrsId ?:string
	pollingName ?:string
	
	fileId?:string
	fileName?:string
	fileTxt?:string

	creatorName?:string
	createdAt?:Date

	photoProfileCreator?:string
	
	isLike?: boolean;
	isBookmark?:boolean;

	counterLike?: string;
	counterComment?: string;
}