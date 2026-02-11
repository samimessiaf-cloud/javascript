//exo 1 : 

let liste = [11, 34, 22, 76, 31, 12, 29];
let indicesPairs = [];
let indicesImpairs = [];
for (let i = 0; i < liste.length; i++) {
if (i % 2 === 0) {
    indicesPairs.push(liste[i]);
    } else {
    indicesImpairs.push(liste[i]); 
    }
}


// console.log("Indices pairs :",indicesPairs);
// console.log("Indices impairs :",indicesImpairs);

//exo 2 :



const voiture1 = {
    marque: "Renault",
    modele: "Clio",
    prix: 13000
};

const voiture2 = {
    marque: "Renault",
    modele: "Megane",
    prix: 18000
};
if (voiture1.prix > voiture2.prix) {
} else if (voiture2.prix > voiture1.prix) {

// console.log("La voiture la plus chère est :", voiture2.marque, voiture2.modele);
}
// exo 3 :

 const tableau50 = [523, 12, 87, 432, 234, 91, 678, 45, 234, 12,
    876, 34, 210, 56, 789, 123, 345, 987, 54, 321,
432, 210, 654, 76, 89, 12, 98, 765, 234, 567,
890, 12, 345, 678, 901, 234, 567, 123, 876, 543,
12, 345, 678, 234, 567, 89, 90, 123, 456, 789];

let max = tableau50[0];
for (let i = 0; i < tableau50.length; i++) {
  if (tableau50[i] > max) {
    max = tableau50[i]; 
  }
}

// console.log("Le plus grand nombre est :", max);

//exo 4 : 
let newTableau = [];
for (let i = 0; i < tableau50.length; i++) {
    if (tableau50[i] % 6 === 0) {
        newTableau.push(tableau50[i]);
    }
}
// console.log("Les multiples de 6 dans le tableau sont :", newTableau);

//exo 5 : 

function multiplesDe(tab, n) {
  let newTableau1 = [];
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % n === 0) {
      newTableau1.push(tab[i]);
    }
  }
  return newTableau1;
}
// const result = multiplesDe(tableau50, 6);
// console.log(result);

// exo 6 :
function censureVoyelle (str){
    let liste = ["a","e","i","o","u","y"];
    let result = "";
    for(let i = 0; i < str.length; i++){
        if (liste.includes(str[i])){
            result += "*";
        }
        else{
            result += str[i];
        }
    }
    return result;
}

