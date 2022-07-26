export interface UpdateProfileReq {
    id : string
    version : number
	isActive : boolean

    fullName:string
    companyName:string
    positionName:string
    industryId:string
    userId:string
}