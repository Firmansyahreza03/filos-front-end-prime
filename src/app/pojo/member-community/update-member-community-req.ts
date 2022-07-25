export interface UpdateMemberCommunityRes {
    id : number
    version : number

	idUser : string
	idCommunity : string
	idPayment : string
    
	idFile ?: string
	nameFile ?: string
	extFile ?: string
}