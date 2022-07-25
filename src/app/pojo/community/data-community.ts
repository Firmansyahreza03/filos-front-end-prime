export interface DataCommunity {
    id : number
    version : number
    isActive : boolean
	
	title :string
	provider :string
	location :string
	startAt :string
	endAt :string
	desc :string
	code :string
	price :number
	idCategory :string
	nameCategory :string
	idIndustry :string
	nameIndustry :string

	idFile ?:string
	nameFile ?:string
	extFile ?:string
}