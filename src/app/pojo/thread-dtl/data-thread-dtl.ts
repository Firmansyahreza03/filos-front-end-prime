export interface DataThreadDtl {
    id : string
    version : number
    isActive : boolean
	
	hdrId ?: string
    userId ?: string

	userFullName ?: string
	threadComment ?: string
    
	proPic ?: string
	isFromMe ?: boolean
	createdAt?:Date
}