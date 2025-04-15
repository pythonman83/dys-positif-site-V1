/* script.js */

document.addEventListener('DOMContentLoaded', function () {
  const countdownElement = document.getElementById('countdown');
  const startTime = Date.now();
  let timeRemaining = 10 * 60; // 10 minutes

  // Compte à rebours
  if (countdownElement) {
    const countdownInterval = setInterval(() => {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      countdownElement.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        countdownElement.textContent = "Temps écoulé !";

        // ❌ Verrouiller toute la page
        verrouillerPage();
      }

      timeRemaining--;
    }, 1000);
  }

  // 🔒 Fonction de verrouillage
  function verrouillerPage() {
    // Désactiver tous les clics
    document.body.style.pointerEvents = 'none';
    document.body.style.opacity = '0.5';

    // Overlay pour indiquer à l'utilisateur que le temps est écoulé
    const overlay = document.createElement('div');
    overlay.textContent = "⏱️ Temps écoulé pour télécharger le jeu offert. Veuillez rafraîchir la page pour continuer.";
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.color = 'white';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.fontSize = '1.8rem';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';
    overlay.style.pointerEvents = 'auto'; // permet de bloquer clics dessous

    document.body.appendChild(overlay);
  }
});

// 🧠 Ce que ce script fait :
// Affiche un compte à rebours au format MM:SS.

// Après 10 minutes :

// Désactive tous les clics (pointer-events: none).

// Grise visuellement la page.

// Affiche un overlay informatif bloquant tout.



  
// Début de la fonction auto-exécutante pour créer un scope privé et éviter la pollution de l'espace global
(function () {
  'use strict'; // Activation du mode strict pour améliorer la qualité du code

  // Récupération de l'élément HTML ayant l'ID "contactForm" et stockage dans la variable "form"
  const form = document.getElementById('contactForm');
  
  // Vérification que le formulaire existe sur la page
  if (form) {
    // Ajout d'un écouteur d'événement "submit" au formulaire pour intercepter l'envoi
    form.addEventListener('submit', function (event) {
      // Si le formulaire n'est pas valide
      if (!form.checkValidity()) {
        // Annulation de l'envoi du formulaire
        event.preventDefault();
        // Arrêt de la propagation de l'événement pour éviter d'autres traitements
        event.stopPropagation();
      } else {
        // Si le formulaire est valide, afficher une alerte de succès
        alert("Votre message a été envoyé avec succès et vous recevrez une réponse sous 48 h.");
        // La soumission continue normalement vers Formspree (aucun preventDefault ici)
      }
      // Ajout de la classe 'was-validated' pour appliquer les styles de validation CSS
      form.classList.add('was-validated');
    }, false); // Le paramètre 'false' précise que l'écouteur est ajouté en phase de bouillonnement
  }
  // Fin de la fonction auto-exécutante, qui s'exécute immédiatement après sa définition
})();





// Toggle mode sombre/clair
// Attendre que tout le contenu du DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  
  // Récupérer l'élément qui sert de bouton de bascule pour le mode 
  // (sombre/clair) en utilisant son ID "modeToggle"
  const modeToggle = document.getElementById('modeToggle');

  // Vérifier si l'élément modeToggle existe sur la page pour 
  // éviter des erreurs si l'élément n'est pas présent
  if (modeToggle) {
  
    // Ajouter un écouteur d'événement "click" à l'élément modeToggle 
    // pour exécuter une fonction lorsqu'on clique dessus
    modeToggle.addEventListener('click', function () {
      
      // Basculer la classe "dark-mode" sur l'élément <body>
      // Cette opération ajoute la classe si elle n'est pas présente, 
      // ou la retire si elle existe déjà
      document.body.classList.toggle('dark-mode');
      
      // Mettre à jour le texte du bouton de modeToggle selon 
      // l'état actuel de la classe "dark-mode" sur le <body>
      // Si la classe "dark-mode" est présente, 
      // afficher "Mode clair"; sinon, afficher "Mode sombre"
      modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Mode clair' : 'Mode sombre';
    });
  }
});
// Toggle mode sombre/clair



//Script pour remplacer le placeholder par l'iframe lors du clic de l'utilisateur -->

// Script pour remplacer le placeholder par l'iframe lors du clic de l'utilisateur
// Quand toute la page HTML est chargée et prête à être utilisée...
document.addEventListener('DOMContentLoaded', function () {

  // On cherche dans la page un élément qui a l'identifiant (ID) "mapPlaceholder"
  const map = document.getElementById('mapPlaceholder');

  // Si cet élément existe bien dans la page (il n’est pas nul)...
  if (map) {

    // Alors, on ajoute un "écouteur d’événement" : 
    // quand quelqu’un clique dessus, la fonction ci-dessous s'exécutera
    map.addEventListener('click', function () {

      // Cette ligne remplace complètement le contenu de l’élément (c’est ce qu’on clique)
      // Elle insère un encadré (iframe) Google Maps pour afficher une carte
      // L'iframe est comme une fenêtre qui montre un autre site (ici, la carte de Draguignan)
      this.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.5849003664102!2d6.457073175693239!3d43.536058960000126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ceab866d2bd3f7%3A0xe57a0c14eb48430f!2s55%20Av.%20du%204%20Septembre%2C%2083300%20Draguignan!5e1!3m2!1sfr!2sfr!4v1743765989987!5m2!1sfr!2sfr" width="100%" height="250" style="border: 6px solid #8B4513; padding: 5px; box-shadow: 0 4px 8px rgba(0,0,0,0.5); border-radius: 5px;" allowfullscreen="" loading="lazy" title="Situation géographique de l\'association" sandbox="allow-scripts allow-same-origin"></iframe>';
    });
  }
});








  
    
   
  
  
  