/*
//exercice 1
//role: calculer une moyenne
//parametre: quatre moyennes
//return: la moyenne

function calculDeMoyenne(mathematique, francais, italien, chimie) {
    return (mathematique + francais + italien + chimie) / 4;
}


console.log(`la moyenne de classe est ${calculDeMoyenne(12, 16, 15, 18)}`)

//exercice 2
//role:créer une fonction mettant à jour le stock de pommes du magasin
//parametre: rien
//return: rien

let stockDePomme = 4;

function decremente() {
    stockDePomme--
}

decremente()
decremente()

console.log(`le stock de pomme est de ${stockDePomme}`)

//exercice 3
//role:Afficher la derniere lettre dune phrase  
//parametre: Une phrase
//return: rien
let phrases = "djsftgqdsjfyqhiuyfakygfkqhf,h;zyghfijlxu"

function TrouveLettre(phrases) {
    let pos = phrases.length - 1;
    console.log(phrases[pos])
}

TrouveLettre(phrases)


//Exercice 4
//role: remplacer le produit bubble tea par un autre 
//parametre: le nouveau produit et la liste initial 
//return: rien
function NouvelleOffre(nouveauProduit, listeInitiale) {
    console.log(listeInitiale.replace("bubble tea", nouveauProduit))
}

NouvelleOffre("matcha", "café,bubble tea,tisane")



//role:Ajouter placer des balises
//parametre:Les balises a ajouter   
//return:Rien

function AjtBalise(balise) {

    document.querySelector("body").innerHTML += balise
}

AjtBalise("<H1>Coucou</H1>")
AjtBalise("<p> on est vraiment trop fort en JS </p>")
AjtBalise(`<img src="" alt=""></img>`)

//role:Afficher l'addition des deux chiffres
//parametre: les chiffres a additionner 
//return:Rien


function afficherNom(Nom, Prenom) {
    AjtBalise(`<p>${Prenom + " " + Nom}</p>`)
}

afficherNom("Raïs", "Bouamara")

//Exercice 5
//role: Verifier une adress mail
//parametre: une adress mail
//return: si vrai si ladress mail contient un @

function VerifMails(mail) {
    console.log(mail.includes("@"))
}

VerifMails("rais.bouamara@gmail.com")


//Exercice 6
//role: retournera toujours la somme des deux valeurs renseignées 
//parametre: deux valeurs
//return: la somme des 2 valeurs

function addition(a, b) {
    return a + b
};
let resultat = addition(5, 4);

console.log(resultat);


//Exercice 7
//role: posera une question en utilisant la fonction "prompt"
//parametre: un prompt
//return: retourner la reponse dans la console

function poseUneQuestion(q) {
    return prompt(q)

}

let reponse = poseUneQuestion("ca va ?")
alert(reponse)

//Exercice 8 - BONUS
//role: créer une fonction qui convertit un montant en euros en dollars.
//parametre:un montant en euros
//return: retourner le résultat de la conversion.

function conversion(prix, taux) {
    return prix * taux;
}

let resultat1 = conversion(3, 1.17)
console.log(`le prix convertit est de ${resultat1} dollars`);

//BONUS
//role: demander un prix en taux de change a l'utilisateur et convertit le prix
//parametre:prix et taux de change
//return: retourner prix convertit

function convertisseur() {
    //demande le prix a convertir
    let prix =parseFloat(prompt("quel prix veut tu convertir ?"))

    //deamande la taux
    let taux =parseFloat(prompt("a quel taux ?"))
    
    //convertit
return prix * taux

    //retourner le resultat

}

let prixConvertit =convertisseur();
alert(`le prix convertit est de ${prixConvertit} dollars`)


//BONUS
//role: faire 4 prompt qui demande les notes
//parametre:
//return: retourner la moyenne

function CalculMoyenne() {
    //demande la note de francais
    let francais =parseFloat(prompt("quel est la note de francais ?"))

    //deamande la note histoire
    let histoire =parseFloat(prompt("quel est la note d'histoire ?"))

     //deamande la note math
    let math =parseFloat(prompt("quel est la note de math ?"))

     //deamande la note svt
    let svt =parseFloat(prompt("quel est la note de svt ?"))


    //calcul de moyenne
    return (francais + histoire + math + svt)/4 
}

let MoyenneEleve =CalculMoyenne();
alert(`la moyenne de l'éléve est de ${MoyenneEleve} sur 20 !`)
*/
