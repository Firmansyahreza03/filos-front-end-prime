export interface UpdateMemberCommunityReq {
    id : string
    version : number

	idUser : string
	idCommunity : string
	idPayment : string
    
	idFile ?: string
	nameFile ?: string
	extFile ?: string
}