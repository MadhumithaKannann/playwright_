export class Utility {

    public static getMaxMinNumIdx(priceVal: string[]): Promise<number[]> {

        const withoutDol = priceVal.map((val) => {
            return parseFloat(val.replace("$", ""));
        })

        const maxValue = Math.max.apply(null, withoutDol);
        const minValue = Math.min.apply(null, withoutDol);

        const maxIdx = withoutDol.indexOf(maxValue);
        const minIdx = withoutDol.indexOf(minValue);

        return new Promise((resolve, reject) => {
            resolve([maxIdx, minIdx])
        })
    }

}