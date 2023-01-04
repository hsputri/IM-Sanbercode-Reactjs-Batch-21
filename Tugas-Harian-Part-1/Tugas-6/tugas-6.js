// soal 1
const luasLingkaran = r => {
    return 3.14*r*r;
};
console.log(luasLingkaran(2));
let kelilingLingkaran = r => {
    return 3.14*2*r;
};
console.log(kelilingLingkaran(3));

// soal 2

let kalimat = "";
const tambahKata = kata => {
    kalimat = `${kalimat} ${kata}`
};
tambahKata("saya")
tambahKata("adalah")
tambahKata("seorang")
tambahKata("frontend")
tambahKata("developer")
console.log(kalimat)

// let kalimat = "";
// let kata = ["saya", "adalah", "seorang", "frontend", "developer"];
// let tambahKata = (i) => {
//   return kalimat += `${kata[i]} `
// };
// tambahKata(0);
// tambahKata(1);
// tambahKata(2);
// tambahKata(3);
// tambahKata(4);
// console.log(kalimat);

// soal 3
const newFunction = (firstName, lastName) => {
    return {
      firstName,lastName,
      fullName: ()=> {
        console.log(`${firstName} ${lastName}`)
      }
    } 
 }

  //Driver Code 
  newFunction("William", "Imoh").fullName() 

// soal 4
const newObject = {
   firstName: "Harry",
   lastName: "Potter Holt",
   destination: "Hogwarts React Conf",
   occupation: "Deve-wizard Avocado",
   spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation, spell)

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)