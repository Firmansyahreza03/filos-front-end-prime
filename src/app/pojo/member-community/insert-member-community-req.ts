export interface InsertMemberCommunityReq {
	isActive : boolean

	idUser : string
	idCommunity : string
	idPayment : string

	idFile ?: string
	nameFile ?: string
	extFile ?: string
}