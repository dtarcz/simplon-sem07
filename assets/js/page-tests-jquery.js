$(document).ready(function() {
   // Votre code ici
   // Dès le chargement on masque l'élément portant la classe masque et secret
   // grâce à la fonction hide() de jQuery
   $(".masque").hide();
   $(".secret").hide();

   // On déclare un gestionnaire d'événement 'click' sur un lien
   // pour afficher l'élément précédemment masqué
   $(".afficher").click(function() {

      // La fonction click() appliquée à notre sélecteur $("a#afficher")
      // prend en argument une fonction anonyme (sans nom) contenant
      // le reste des instructions :

      $(".secret").show("slow");

      // L'argument "fast" est facultatif mais nous permet
      // d'afficher l'élément avec une petite animation

      return false;

      // On retourne 'false' pour prévenir l'exécution du lien
      // c'est à dire pour éviter au navigateur de changer de
      // page en suivant son attribut href

   });

   // Faites bien attention à la syntaxe et à l'imbrication des
   // parenthèses et accolades

/* dérouler */
  $("#deroulerHaut").click(function() {
   $(".cacher").slideUp();
   });


  $("#deroulerBas").click(function() {
   $(".cacher").slideDown();
   });

  $('#refermer').click(function() {
    $('.secret').slideUp();
  })

  $("button.alterner").click(function(){
  $("p").toggle();
  });

  $(".important").fadeOut(800).fadeIn(800).fadeOut(400).fadeIn(400).fadeOut(800).fadeIn(800).fadeOut(400).fadeIn(400);
});
