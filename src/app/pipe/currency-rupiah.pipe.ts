import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'rupiahCurrency'
})
export class CurrencyRupiahPipe implements PipeTransform {
    transform(value: any) {
        let finalResult : string = 'Rp'
        if(value) {
            let copyValue : string = value.toString()
            
            if(copyValue.length > 3) {
                let tempCount = 0
                let tempResult = []

                for(let i=copyValue.length; i>0; i--) {
                    if((i !== value.toString().length ) && (tempCount%3 === 0)) {
                        tempResult.push('.')
                    }

                    tempCount += 1
                    tempResult.push(copyValue.charAt(i-1))
                }

                let reverseSplit = tempResult.reverse()
                finalResult = finalResult + reverseSplit.join('')  + ',00'
            } else {
                finalResult = finalResult + value + ',00'
            }
        }

        return finalResult
    }
}