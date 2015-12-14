var text = document.getElementById('text');

text.addEventListener('focus', function(e) {
  e.target.value = "Vous avez le focus !";
}, true);

text.addEventListener('blur', function(e) {
  e.target.value = "Vous n'avez pas le focus !";
}, true);

//ESSAIS
function desactiver() {
  var bouton = document.getElementById('text');
  if (text.disabled == true) {
    text.disabled = false;
  } else {
    text.disabled = true;
  }
}

// CAS DU checked

/*
function check() {
  var inputs = document.getElementsByTagName('input'),
    inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
      if (inputs[i].type == 'radio' && inputs[i].checked) {
        alert('La case cochée est la n°' + inputs[i].value);
      }
    }
}
*/

/* simplification : */
function check() {
  var inputs = document.querySelectorAll('input[type=radio]:checked'),
    inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
      alert('La case cochée est la n°' + inputs[i].value);
    }
}

// CAS DES LISTES DÉROULANTES :
var list = document.getElementById('liste');

list.addEventListener('change', function() {

  // On affiche le contenu de l'élément <option> ciblé par la propriété selectedIndex
  alert(list.options[list.selectedIndex].innerHTML);

}, true);

// CAS DE SUBMIT ET RESET :
var monForm = document.getElementById('monForm');

monForm.addEventListener('submit', function(e) {
  alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
  e.preventDefault();
}, true);

monForm.addEventListener('reset', function(e) {
  alert('Vous avez remis le formulaire à zéro !');
}, true);
