//exercice 1
console.log(10 === 10)


//exercice 2
console.log("Hello" !== "hello")


//exercice 3

console.log(8 > 12)


let b = 8;
let c = 6;

if (b === c) {
    console.log("c'est pareil")
} else if (b > c) {
    console.log("b est superieur a c")
} else {
    console.log("b est inferieur a c")
}

let connect = true

if (connect === true) {
    console.log("l'utilisateur est connecté")
} else {
    console.log("l'utilisateur n'est pas connecté")
}



//exercice 5
let meteo = ("soleil")

if (meteo === "neige") {
    console.log("met tes bottes")
} else if (meteo === "pluie") {
    console.log("N’oublie pas ton parapluie")
} else if (meteo === "soleil") {
    console.log("Prends une casquette")
} else {
    console.log("reste chez toi !")
}

//exercice 6
let age1 = 14

if (age1 < 12) {
    console.log("enfant")
} else if (age1 >= 12 && age1 <= 18) {
    console.log("adolescent")
} else if (age1 > 18) {
    console.log("adulte")
}

//exercice 7
let cotéa = 13
let cotéb = 13
let cotéc = 13

if (cotéa === cotéb && cotéb === cotéa && cotéc === cotéc) {
    console.log("C'est un triangle équilatéral")
} else if (cotéa !== cotéb && cotéa === cotéc && cotéb === cotéc) {
    console.log("C'est un triangle isocèle")
} else {
    console.log("C'est un triangle quelconque")
}

//exercice 8
let achat = 100
let programme = true
let age2 = 18



//role :détermine si une personne est éligible à une réduction spéciale
//parametre :avoir plus de 18 ans;membre du programme de fidélité;avoir effectué un achat supérieur à 100 euros;
//return: 2 message (reducion accordé et reducution refuser)

function eligibilité(age2, programme, achat) {

    if (age2 < 18 && programme == true || achat < 100) {
        console.log("Réduction accordée")

    } else {
        console.log("Réduction refusée")

    }
    return reponse1 && reponse2
}

let reponse1 = "Réduction accordée"
let reponse2 = "Réduction refusée"

//correction

function reduction(age, membre, achat) {
    //si la personne a 18 ans
    if (age > 18) {
        //si la personne est membre ou a fait plus de 100 euros dachat
        if (membre === true || achat > 100){
            //reduction accordée
            return "reduction accordée"
    } else {
        //si non
        //reduction refusé
        return "reduction refusée"

    }
}
else {
        //sinon :
        //reduction refusé
        return "reduction refusée"
    }
}

let ticket = reduction(19, true, 80)
console.log(ticket)



//role:
//parametre:
//retourne:
//Exercice du feu tricolor

/*
function FeuTricolor(){
let signalisation = prompt(`De quel couleur est le feu tricolor ?`)
    if(signalisation === "vert"){
    alert("Je passe !")
}else if  (signalisation === "orange"){
    alert("Je freine !")
}else if  (signalisation === "rouge"){
    alert("Je m'arrête !")
}else {
    alert("Danger : feu défectueux !")
}

}

let reponse = FeuTricolor();
*/

//role:
//parametre:
//retourne:
//exercice bulletin de note

//fonction de calcul
function CalculMoyenneGeEleve(science,sport,chimie,anglais,dessin){

    //retourner la moyenne de l'eleve
return (science + sport + chimie + anglais + dessin)/5
}

let retourMoyenne = CalculMoyenneGeEleve(12,13,15,16,17)

//fonction de commentaire
function CommentaireAppreciation(retourMoyenne){
    
    if (retourMoyenne <10 && retourMoyenne <=13){
        return "Poursuivez vos efforts"
    }else if(retourMoyenne >13 && retourMoyenne <=15){
        return "Bon travail "
    }else if(retourMoyenne >15 && retourMoyenne <=17){
        return " Bravo !"
    }else if(retourMoyenne <17){
        return "Félicitations ! "
    }else{
        return "Il faut travailler plus "};
}

let commentaire = CommentaireAppreciation(retourMoyenne)

//fonction bulletin
function BulletinComplet(moy,com){
    
    console.log(moy + " : " + com)

}

BulletinComplet(retourMoyenne,commentaire)