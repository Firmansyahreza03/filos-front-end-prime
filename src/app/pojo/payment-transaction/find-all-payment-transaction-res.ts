import { DataPaymentTransaction } from "./data-payment-transaction";

export interface FindAllPaymentTransactionRes{
    data : DataPaymentTransaction[],
    count : number
}