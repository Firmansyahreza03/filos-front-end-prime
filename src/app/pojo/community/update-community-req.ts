export interface UpdateCommunityRes {
    id : number
    version : number
	
	title :string
	provider :string
	location :string
	startAt :string
	endAt :string
	desc :string
	price :number
	idCategory :string
	nameCategory :string
	idIndustry :string
	nameIndustry :string

	idFile ?:string
	nameFile ?:string
	extFile ?:string
}