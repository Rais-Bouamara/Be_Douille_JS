console.log("salut"+" Sarah!"); //console.log() est egal a ecrit dans la console!

let age= 17; //une variable dont le contenu peu evoluer
const vitesseLumière = 299000;// une variable dont le contenu ne change jamais : une constante

age= 24;
console.log(age);


console.log(vitesseLumière);

let connecter = true;
console.log(connecter);

age = age + 1;
console.log(age);

let i = 0;
console.log(i);

//exercice 2
i= i + 1;
i= i + 1;
i= i + 1;
i= i + 1;
i= i + 1;
i= i + 1;
console.log(i);

//exercice 3
let prenom = "Raïs";
let nom = "Bouamara";

const NomComplet = prenom + nom;
console.log(NomComplet);

//exercice 4
console.log("Bonjour " + prenom + ", comment tu vas ?");
console.log(`Bonjour ${prenom}, comment tu vas ?`);

//exercice 5
let phrase = "Sarah tu es trop belle !";
let longueurPhrase = phrase.length;
console.log(phrase.length);
console.log(`la phrase contient ${longueurPhrase} caractère de long`);

//exercice 6
let mot= "chateau";
console.log(mot.replace("t","p"));

//exercice 7
let mot2 = "anticonstitutionnelement";
let dernierePoz = mot2.length-1;
console.log(mot2[0]);//donne la longueur
console.log(mot2.indexOf("p")); //donne la position
console.log(mot2[dernierePoz]); //donne la derniere lettre 


//---------------------------------------------------------------AUTRES fonctions 
//role:ecrire bonjour dans la console
//parametre:prenom de la personne a saluer
//returner: rien

function DireBonjour (prenom){
    console.log(`bonjour ${prenom}`)
}

//jappelle ma fonction
DireBonjour("Sarah")


//role:additionner 2 chiffres
//parametre: 2 chiffres
//return: resultats

function SommeDeux (resultat){
    console.log(`le resultat est ${resultat}`)
}

//jappelle ma foncyion
SommeDeux(800*378)