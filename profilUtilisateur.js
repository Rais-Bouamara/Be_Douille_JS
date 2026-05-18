fetch("user.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        //a ce niveau on devrait avoir dans la console les données renvoyer par l'API
        console.log(data)
        AfficheUtilisateur(data.users)

    });


//role : recup les utilisateur 1 par 1 et afficher dans le dom
//paramaetre : data dasn la json
//retour rien

function AfficheUtilisateur(tableauUtilisateurs) {

    tableauUtilisateurs.forEach(utilisateur => {

        let utilisateurCard = `
    <div class="card large30">
        <div class="flex space-between align-center">

            <img src="users-images/${utilisateur.image}" alt="" class="large30 br15 bdr">

            <div class="large60">
                <h2>${utilisateur.nom}</h2>
                <h3>${utilisateur.prenom}</h3>
                <p>${utilisateur.age}</p>
                <p>${utilisateur.poste}</p>
            </div>
        </div>

        <p class="mgt20"><i class="ph-light ph-envelope"></i>${utilisateur.email}</p>

    </div>


    `
document.querySelector("#user-container").innerHTML += utilisateurCard;
    });

}