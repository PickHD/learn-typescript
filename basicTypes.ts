//!BASIC
let fullName: string = `Taufik Januar Rachman`;
let age: number = 18;
let isGraduated: boolean = true;
let firstGreet: string = `Hello, my name is ${fullName},age:${age}`;

console.log(firstGreet);

//!ARRAY

// //*ELEMENT TYPE ARRAY
let listKendaraan: string[] = ["motor", "mobil"];

// //*GENERIC TYPE ARRAY
let listHewan: Array<string> = ["monyet", "singa", "gajah"];

for (const k of listKendaraan) {
  console.log(k);
}

for (const h of listHewan) {
  console.log(h);
}

//!TUPLE

let me: [string, boolean];

me = ["taufik", true]; //*initialized correctly
me = ["rendy", "true"]; //*initialized incorrectly
console.log(me);

//! ENUM
//? index based
enum Color {
  Red = 1, //*starts from index 1
  Green,
  Blue,
}
let colorName: string = Color[1];

console.log(colorName);

//! ANY

let iDontKnow: any = 1;
iDontKnow = "maybe string?";
iDontKnow = true; //* ooh, its boolean

//? ANY in array
let listUnknown: any[] = [28, "taufik", true];

listUnknown[1] = "januar"; //*reinitialize value at index 1

listUnknown.forEach((l) => {
  console.log(l);
});

//! VOID

function warnUser(): void {
  console.error("Warning!");
}

warnUser();

//! NEVER
function error(message: string): never {
  throw new Error(message);
}

function failed() {
  return error("something failed,please try again");
}

function infLoop(): never {
  while (true) {}
}
