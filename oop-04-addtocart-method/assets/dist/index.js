"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function taxCalc(pay, taxYear = 2019) {
    if (taxYear < 2000) {
        return pay * 0.2;
    }
    return pay * 0.3;
}
console.log(taxCalc(50000, 2021));
let employee = {
    id: 12345,
    name: "Bishesh Sthapit",
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee.retire);
//# sourceMappingURL=index.js.map