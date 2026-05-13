//sfor(let i=100; i>0; i=i-2){
//console.log(i)
//}

//ecrire une fonction qui affiche le table de multiplication d'un nombre passé en paramètre 
//role :affivher le table de mutiplication
//parametre : nombre passé
//retour : rien

function TableMultiplier(number) {
    for (let i = 1; i <= 10; i++)
        console.log(number * i)
}

TableMultiplier(20)

//exercice 6

//role :
//parametre :
//return :

/*function multiplication(mot){
for(let i=1; i<=mot.length; i++){
     console.log(i)

}
alert(`le mot : ${mot} contient ${mot.length} lettres !`)
}


multiplication("programmation")*/


//role : ecrire 50 fois la phrase
//parametre :
//return: rien

function Bart() {
    for (let i = 1; i <= 50; i++) {
        console.log("I will not waste chalk")
    }
}

Bart()

//role:eppeler un mot lettre par lettre 
//parametre: le mot en question 
//retour:rien
function EppelMot(mot3) {

    for (let i = 0; i < mot3.length; i++) {
        console.log(mot3.charAt(i))
    }
    console.log(`le mot ${mot3} contient ${mot3.length} lettres`)
}

EppelMot("anticonstitutionellment")


//créer un tableaus 'panierfruit' contenant 6 fruits
//afficher dans la console le premier et le dernier fuit du tableau
let PanierDeFruit = ["lichie", "fruit du dragon", "Kiwi", "framboise", "Tomate cerise"]

console.log(`le premier fruit du tableau est : ${PanierDeFruit[0]} , et le dernier fruit est ${PanierDeFruit[PanierDeFruit.length - 1]}`)

//PanierDeFruit.push("pastèque")//ajourter pasteque au tableau
console.log(PanierDeFruit)

//PanierDeFruit.pop()//supprimer le derniere element du tableau
console.log(PanierDeFruit)

//PanierDeFruit.shift();//supprime le prmier element dun tableau
console.log()

//delete PanierDeFruit[2]//vider la ligne du tableau
console.log()

//faire une boucle qui prend les elements du tableau un par un
for (let i = 0; i < PanierDeFruit.length; i++) {
    console.log(PanierDeFruit[i])
}

PanierDeFruit.forEach(fruit => {
    console.log(fruit)
});


//tableau de note
const notes = [12, 9, 15, 17, 10]

//role calculer la moyenne dun eleve a partir dun tableau
//parametre les notes dans le tableau
//retour la moyenne de l'eleve

function calculerMoyenne(notes) {
    let addition = 0;
    //recuperer les notes une par une dans le tableau
    notes.forEach(note => {
        //quand il en a une, il additonne dans une variable. 
        addition = addition + note;
    });


    //on divise la somme obtenue par le nbr de valeur dans le tableaux
    let resultat = addition / notes.length
    return resultat
}




function afficherMoyenne(resultat) {
    console.log(`la moyenne de leleve ${resultat}`)
}


let retour = calculerMoyenne(notes)
afficherMoyenne(retour)


//role :  utilisons une boucle pour parcourir chaque élément de la liste de courses
//parametre : les elements de le liste de courses
//retour : rien

// mon tableau représentant mon panier de fruits 
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"]



//
//
//
//exercice 4
// Tableau de prénoms
let prenoms = ["Lucas", "Emma", "Sarah", "Nathan", "Lina"];

// Demande à l'utilisateur
/*function DonnerNom() {
    let prenomUtilisateur = prompt("Entrez un prénom :");

    // Vérification avec includes()
    if (prenoms.includes(prenomUtilisateur)) {
        alert("Le prénom existe");
    } else {
        alert("Le prénom n'existe pas");
    }
}
*/



//
//
//
//exercice 2
// Mon tableau représentant mon panier de fruits
// Mon tableau représentant mon panier de fruits
let fruitss = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", "pommes", "poires", "cerises"];

// Variables pour compter chaque type de fruit
let pommes = 0;
let cerises = 0;
let bananes = 0;
let poires = 0;

// Parcours le tableau de fruits
fruitss.forEach(fruit => {
    // Vérifie le type de fruit et incrémente le compteur approprié
    if (fruit === "cerises") {
        cerises++;
    } else if (fruit === "pommes") {
        pommes++;
    } else if (fruit === "poires") {
        poires++;
    } else if (fruit === "bananes") {
        bananes++;
    } else {
        console.log("Je ne connais pas ce fruit."); // Affiche un message si le fruit n'est pas reconnu
    }
});

// Affiche le nombre de chaque type de fruit dans le panier
console.log(`Dans mon panier de fruits, il y a :
- ${bananes} bananes
- ${cerises} cerises
- ${poires} poires
- ${pommes} pommes`);


//JACKPOT

//role :Creer une machine qui permet daffivher le jackpot
//parametre : 4 emojies
//retour : Gagner ou perdu
let emojies = ["🎆", "💎", "🧿",]

function nbrAleatoire() {
    let nbrAleatoire = Math.floor(Math.random() * emojies.length);
    return nbrAleatoire
}
// fonction pour les nombes aleatoires 



function machinejackpot() {

    let emo1 = emojies[nbrAleatoire()];
    let emo2 = emojies[nbrAleatoire()];
    let emo3 = emojies[nbrAleatoire()];


    if (emo1 === emo2 && emo2 === emo3 && emo3 === emo1) {
        console.log("Tu a JACKPOT")
    } else {
        console.log("LOOSER !!")
    }

    return emo1 + emo2 + emo3
}
machinejackpot()

function AfficheEmo(bidulle) {
    document.querySelector("body").innerHTML += bidulle

}


//CODE CESAEAR

function CodeCaesar(motAencoder) {

    //un alphabet
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let motEncoder = "";
    //recuperer les lettres du mot une par une 
    for (let i = 0; i < motAencoder.length; i++) {
        

        let lettreActuelle = motAencoder.charAt(i)
        console.log(lettreActuelle)

        if (lettreActuelle === "Z") {
            lettreEncoder = "A"
        } else if (lettreActuelle===" "){
            lettreEncoder = " "
        }else{

            let posLettreActuelle = alphabet.indexOf(lettreActuelle)
            console.log(posLettreActuelle)


            //va chercher le lettre a la position suivante 
            lettreEncoder = alphabet[posLettreActuelle + 1]
            console.log(lettreEncoder)

            //stock dans une variable le mot a encoder
             motEncoder = motEncoder + lettreEncoder


        }
        //quand il aura recuperer une lettre et va chercher la position de 
        // cette lettre dans l'alphabet -> ctock dans une variable 


    }



    //retourne le mot a encoder
    return motEncoder
}

function AfficheDansBody(trucAafficher) {
    document.querySelector("body").innerHTML += `<p>${trucAafficher}</p>`

}

function ScenarioC(motAencoder) {
    let motEncoder = CodeCaesar(motAencoder)
    AfficheDansBody(motEncoder)
}



//-----------------------------------------------------------------LES OBJETS--------------------------------------------------------------------------------


