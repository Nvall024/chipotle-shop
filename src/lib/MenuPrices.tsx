import { error } from "console";

export const menuItemPrices: {[key: string]: number} = {
  "whiteRice": 1.50,
  "brownRice": 1.50,
  "pintoBeans": 1.25,
  "blackBeans": 1.25,
  "chicken": 2.50,
  "steak": 3.00,
  "guac": 3.00,
  "pico": 1.00,
};


export const calculateTotalOfBowlPrice = (input: string[]): string => {
  
 if(input.length === 0){
  throw new Error("Bowl is empty")
 };

 if(input.includes("whiteRice") && input.includes("brownRice") ){
  throw new Error("Too much rice")
 };

  if(input.includes("pintoBeans") && input.includes("blackBeans") ){
  throw new Error("Too much beans")
 };

 let total = 0;

 for(const item of input){
  total += menuItemPrices[item];
 };

 const tax = total * 0.10

 return (total + tax).toFixed(2)

};
