export interface UpdatePollingOptionReq {
    id : string
    version : number
	isActive : boolean

    pollingHdrId:string
	optionName:string
}