function verifSaisie() {
  // méthode 1 (à l'ancienne)
  /*
  if (document.getElementById('login').value == "") {
    alert('Le champ login n'est pas rempli);
  }
  */

  // LE MESSAGE :
var strMessage = "";
  // méthode HTML5
/*
  var login = document.getElementById('login').checkValidity();
  var mail = document.getElementById('mail').checkValidity();

  if (login == false) {
    strMessage = strMessage + "-définir un login,\n\n";
  }
  if (mail == false) {
    strMessage = strMessage + "-renseigner votre adresse email,\n\n";
  }

    alert(strMessage);
}
*/
var tabForm = document.getElementsByTagName('input');

for (var i = 0; i < tabForm.length; i++) {
  if (tabForm[i].checkValidity() == false) {
    strMessage = strMessage + tabForm[i].placeholder + "\n";
  }
}
