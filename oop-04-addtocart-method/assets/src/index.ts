function taxCalc(pay: number, taxYear = 2019): number {
  if (taxYear < 2000) {
    return pay * 0.2;
  }
  return pay * 0.3;
}
console.log(taxCalc(50000, 2021));
type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date)=>void,
}
let employee:Employee={
    id:12345,
    name:"Bishesh Sthapit",
    retire:(date:Date)=>{
        console.log(date);


    }
}
console.log(employee.retire);


