export interface UpdateArticleReq {
    id : string
    version : number
	isActive : boolean

	title:string
	content:string
	idIndustry:string
}