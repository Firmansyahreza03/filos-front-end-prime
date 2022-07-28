export interface InsertCommunityRes {
	isActive?: boolean
	
	title?:string
	provider?:string
	location?:string
	startAt?:string
	endAt?:string
	desc?:string
	code?:string //hapus (nanti generate)
	price?:number
	idCategory?:string
	idIndustry?:string

	idFile?:string
	nameFile?:string
	extFile?:string
}