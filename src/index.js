
import logo from './logo.png';
import css from "./index.scss"
console.log(logo);
console.log(css);
console.log('xxx');
var arr = [32,53,423,2135,3,23,[2353,3534,23,23,[343,353,434,[533,22],3453],34]];
// 数组扁平化
function flattenArr(arr){
    return arr.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flattenArr(item) : item)
    }, [])
}
console.log(flattenArr(arr));