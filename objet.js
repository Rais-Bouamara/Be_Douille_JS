let promo11 = [

    {
        prenom : "alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]

function ficheEleveDansDOM(tableauPromo11) {

    //prendre les eleves un par un 
    tableauPromo11.forEach(eleve => {
        // ecrtire leur prenom, leur age et leur ville en console 

        //apeller ma fonction dont le rôle est d'envoyer dans le DOM
        ajouterAuBody(`
        <div class= bg-blue txt-white mb50 w-30 txt-align>
           <h2>${eleve.prenom}</h2>
           <p>${eleve.age}</p>
           <p>${eleve.ville}</p>
           <p>Job : ${eleve.job}</p>
        </div>   
        `)

    });

}


function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

ficheEleveDansDOM(promo11)
 

//---------------------------------------------Exercice Objets----------------------------------------------

let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
}

console.log(`Recette de ${recette.nom}`)
console.log(`Difficulté : ${recette.difficulte}`)
console.log(`Temps de preparartion ${recette.tempPreparation}`)
console.log(`Temps de cuisson ${recette.tempCuisson}`)
console.log(`Pour ${recette.nbrPortions} personnes`)
console.log(`Liste des ingrédients : ${recette.ingredients}`)


//V2 de l'exercice
let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];

recettes.forEach(recette => {
    console.log(`Recette ${recette.nom},
        Niveau : ${recette.difficulte},
        Temps de préparation : ${recette.tempPreparation},
        Temps de cuisson : ${recette.tempCuisson},
        Pour ${recette.nbrPortions} personnes,
        Liste d'ingredients : ${recette.ingredients}`)
    //console.log(`Deuxième recette ${recette.nom[1]},${recette.difficulte[1]},${recette.tempPreparation[1]},${recette.tempCuisson[1]},${recette.nbrPortions[1]},${recette.ingredients[1]}`)
    //console.log(`Troisieme recette ${recettes[2]}`)
});


function CarteRecette(){

    tableauRecette.forEach(recettes => {

let ingrediensListe ="";

recette.ingrediens.forEach(ingredient => {

    ingrediensListe += `<li>${ingredient}</li>`
    console.log(ingrediensListe)
});

        ajouterAuBody(
            `<div>


                <h2>${recette.nom}</h2>
                <p>Niveau : ${recette.difficulte}</p>
                <p>Temps de préparation : ${recette.tempPreparation}</p>
                <p>Temps de cuisson : ${recette.tempCuisson}</p>
                <p>Pour ${recette.nbrPortions} personnes</p>
                <p>Liste d'ingredients : ${recette.ingredients}</p>

                <ul>${ingredientListe}</ul>

            </div>`
            
        )
    });
}
function afficherRecettes(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

afficherRecettes(CarteRecette)
 