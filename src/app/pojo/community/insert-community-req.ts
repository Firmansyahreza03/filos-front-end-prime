export interface InsertCommunityReq {
	isActive?: boolean
	
	title?:string
	provider?:string
	location?:string
	startAt?:string
	endAt?:string
	desc?:string
	price?:number
	idCategory?:string
	idIndustry?:string

	idFile?:string
	nameFile?:string
	extFile?:string
}