import { myFirstProps } from "./types";

export function myFirst({firstname,lastname,age}:myFirstProps){
    console.log(`firstname: ${firstname} \n lastname: ${lastname} \n age: ${age}`);
}