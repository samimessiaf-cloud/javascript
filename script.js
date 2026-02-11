function supprimeDoublons(liste){
let nouvelleListe = [1,2,3]

for(let i = 0;i < liste.lenght; i++) {
    if (nouvelleListe.includes(liste[i]) == false){
        nouvelleListe.push(liste[i]);
    }
}
return nouvelleListe
}

console.log(supprimeDoublons([1,2,2,3]))