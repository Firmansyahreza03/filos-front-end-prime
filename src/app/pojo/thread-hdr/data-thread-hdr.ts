import { DataPollingHeader } from "../pojo-import"

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
	
	fileId?:string
	fileName?:string
	fileTxt?:string

	creatorName?:string
	createdAt?:Date

	photoProfileCreator?:string
	
	isLike?: boolean;
	isBookmark?:boolean;

	pollingHdr?: DataPollingHeader;

	counterLike?: string;
	counterComment?: string;

	isVoted?: boolean;
}