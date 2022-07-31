import { DataThreadHdr } from "./data-thread-hdr";

export interface FindAllThreadHdrRes{
    data : DataThreadHdr[],
    count? : number
}