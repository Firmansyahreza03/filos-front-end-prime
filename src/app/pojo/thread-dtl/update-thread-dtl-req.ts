export interface UpdateThreadDtlReq {
    id : string
    version : number
	
	hdrId ?: string
    userId ?: string
    
	threadComment ?: string
}