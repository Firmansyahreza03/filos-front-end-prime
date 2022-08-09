import { DataPollingOption } from "../pojo-import"

export interface DataPollingHeader {
    id : string
    version : number
    isActive : boolean
	
    pollingName:string
	option:DataPollingOption[]
    expiredAt: string
}