 export const requaredField = value => {
    if (value) return undefined;
    return 'Field is requared'
}
 export const maxLength30 = value => {
     if (value && value.length>30) return 'Max length is 30 symbols'
         return undefined;

 }
//
 export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
 }