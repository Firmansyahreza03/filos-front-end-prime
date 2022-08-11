export interface UpdateThreadHdrReq {
    id ?: string
    version?: number
	
	threadName ?:string
	threadContent ?:string
	categoryId ?:string
	email?: string
}