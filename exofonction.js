//exercice 1
//role: calculer une moyenne
//parametre: quatre moyennes
//return: la moyenne

function calculDeMoyenne(mathematique,francais,italien,chimie){
    return (mathematique + francais + italien + chimie) / 4;
}


console.log(`la moyenne de classe est ${calculDeMoyenne(12,16,15,18)}`)

//exercice 2
//role:créer une fonction mettant à jour le stock de pommes du magasin
//parametre: rien
//return: rien

let stockDePomme=4;

function decremente(){
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

function TrouveLettre(phrases){
let pos = phrases.length-1;
console.log(phrases[pos])
}

TrouveLettre(phrases)


//Exercice 4
//role: remplacer le produit bubble tea par un autre 
//parametre: le nouveau produit et la liste initial 
//return: rien
function NouvelleOffre(nouveauProduit, listeInitiale){
    console.log(listeInitiale.replace("bubble tea", nouveauProduit))
}

NouvelleOffre("matcha","café,bubble tea,tisane")



//role:Ajouter placer des balises
//parametre:Les balises a ajouter   
//return:Rien

function AjtBalise(balise){

    document.querySelector("body").innerHTML+=balise
}

AjtBalise("<H1>Coucou</H1>")
AjtBalise("<p> on est vraiment trop fort en JS </p>")
AjtBalise(`<img src="" alt=""></img>`)

//role:Afficher l'addition des deux chiffres
//parametre: les chiffres a additionner 
//return:Rien


function afficherNom(Nom,Prenom){
    AjtBalise(`<p>${Prenom +" "+Nom}</p>`)
}

afficherNom("Raïs","Bouamara")

//Exercice 5
//role: Verifier une adress mail
//parametre: une adress mail
//return: si vrai si ladress mail contient un @

function VerifMails(mail){
    return mail.includes("@")
}

console.log()
