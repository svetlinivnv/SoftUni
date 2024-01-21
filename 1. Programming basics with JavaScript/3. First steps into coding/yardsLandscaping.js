function yardsLandscaping(input) {

let companyPrice = 7.61;
let totalPrice = companyPrice * Number(input[0]);
let totalDiscount = totalPrice * 0.18;
let finalPrice = totalPrice - totalDiscount;

console.log(`The final price is: ${finalPrice} lv.`);
console.log(`The discount is: ${totalDiscount} lv.`);
}

yardsLandscaping([550]);