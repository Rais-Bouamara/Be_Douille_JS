//Utiliser un sélecteur pour récupérer le h1 de la page et lui changer son style en dur. (attribut style)

let titreH1 = document.querySelector("h1")

titreH1.setAttribute(
    "style",
    "color: blue; font-size : 50px ; text-align : center"
)

//Ecrire une fonction qui permet alternativement de cacher, puis d’afficher, puis de cacher etc…. un élément dont l’id est passé en paramètre à chaque fois qu’on l’apelle
//role : permet de cacher et d'afficher un element
//parametre : un element avec un ID
//retour : rien

function CacheCache(id) {

    let element = document.getElementById(id);

    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }


}

//Dans une page web dessinez 3 carrés sans background mais avec une bordure
const carres = document.querySelectorAll('.carre');

carres.forEach(carre => {

    carre.addEventListener('click', () => {

        // Vide tous les carrés
        carres.forEach(carre => {
            carre.classList.remove('rempli');
        });

        // Remplit uniquement le carré cliqué
        carre.classList.add('rempli');

    });
});

//Un script qui compte le nombre de clic sur un bouton et qui l’affiche dans le body

 let compteur = 0;

        // Récupération du bouton
        let bouton = document.getElementById("monBouton");

        // Récupération du paragraphe
        let resultat = document.getElementById("resultat");

        // Ajout de l'événement click
        bouton.addEventListener("click", function () {

            // Incrémente le compteur
            compteur ++;

            // Affiche le nombre de clics dans le body
            resultat.textContent = "Nombre de clics : " + compteur;
        });

//Prérequis : une page html avec un header transparent fixe, une bannière sous forme d’image avec du texte par dessus,  et du contenu pour pouvoir scroller dans la page. 
//Lorsque l’utilisateur scroll sur la page et arrive sous la bannière, le header se colore