export interface UpdateProfileReq {
    id : string
    version: number

    fullName?:string
    companyName?:string
    positionName?:string
    industryId?:string
    fileName?: string;
    fileExt?: string;
}