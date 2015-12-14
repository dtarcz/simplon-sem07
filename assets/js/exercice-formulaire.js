// faire correspondre les deux mots de passe :
var mdpasse1 = document.getElementById('mdpasse1');
var mdpasse2 = document.getElementById('mdpasse2');

var checkMdpasseValidity = function() {
    if (mdpasse1.value != mdpasse2.value) {
        mdpasse1.setCustomValidity('Les mots de passes doivent être identiques.');
    } else {
        mdpasse1.setCustomValidity('');
    }
};

mdpasse1.addEventListener('change', checkMdpasseValidity, false);
mdpasse2.addEventListener('change', checkMdpasseValidity, false);

// ESSAI d'obliger la coche de la checkbox :
var acceptation = document.getElementById("contrat").required;
if (acceptation == false) {
    alert('Merci de bien vouloir accepter les termes du contrat.');
  }

// afficher les messages :
/*
* S'il y a une erreur au moment de la validation, afficher un message "alert" en précisant quels champs ne sont pas valides.
* Si tout est saisi correctement, afficher "Formulaire validé !"
*/
var exercice = document.getElementById('exercice');

exercice.getElementById('login') {
  if (document.getElementById('login').required == false) {
    console.log('Merci de bien vouloir renseigner votre login.');
  }
}, true)

exercice.addEventListener('submit', function(e) {
  alert('Formulaire validé !\n\nVous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
  e.preventDefault();
}, true)
