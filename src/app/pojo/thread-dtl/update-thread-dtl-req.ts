export interface UpdateThreadDtlReq {
    id : string
    version : number
	
	hdrId ?: string
    
	threadComment ?: string
}