```markdown
# Mains Tendues - Site Web

Ce dépôt contient le code complet du site web de l'association **Mains Tendues** 
qui offre divers services aux enfants et adultes atteints de troubles Dys 
(dyslexie, dyspraxie, dyscalculie, dysphasie, etc.). 
Le site se compose de quatre pages principales :

- **Accueil** : Page d'accueil avec une vidéo hero et des modals pour présenter les différents troubles.
- **Ateliers** : Présentation des ateliers via une grille de cartes interactives.
- **Statistiques & Équipe** : Mise en avant des chiffres-clés, de l’équipe pédagogique via un carrousel et des témoignages clients.
- **Réalisations & Contact** : Galerie de réalisations avec une section de contact comprenant coordonnées, Google Maps et formulaire de contact.

---

## Table des Matières

- [Aperçu](#aperçu)
- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)
- [Mise en Production sur Neocities](#mise-en-production-sur-neocities)
- [Gestion des Mises à Jour](#gestion-des-mises-à-jour)
- [Crédits](#crédits)
- [Licence](#licence)

---

## Aperçu

Le site **Mains Tendues** a été conçu pour offrir une expérience utilisateur fluide et moderne avec :

- **Design Responsive** : Adapté aux écrans mobiles, tablettes et desktops.
- **Animations & Interactions** : Effets de fade-in, zoom-in, transitions et modals.
- **Mode Sombre** : Bascule rapide entre les modes clair et sombre pour un confort visuel optimal.
- **Contenus Multimédias** : Vidéos en preload, images optimisées et utilisation d'attributs `srcset` pour des affichages haute résolution.

---

## Technologies Utilisées

- **HTML5** pour la structure sémantique.
- **CSS3** et **Bootstrap 5** (via CDN) pour la mise en page et les animations.
- **JavaScript** (Bootstrap Bundle et scripts personnalisés) pour les interactions (carrousels, modals, toggle du mode sombre).
- **Images et Vidéos** optimisées pour le web.

---

## Structure du Projet

```
mains-tendues/
├── index.html              # Page d'accueil
├── ateliers.html           # Page présentant les ateliers
├── statistiques.html       # Page des statistiques & équipe
├── contact.html            # Page Réalisations & Contact
├── css/
│   └── styles.css          # Feuille de style personnalisée
├── js/
│   └── script.js           # Scripts JavaScript personnalisés
├── images/
│   └── (fichiers images, logo, etc.)
├── videos/
│   └── (fichiers vidéos, posters, etc.)
└── README.md               # Ce fichier
```

---

## Mise en Production sur Neocities

Ce site sera déployé sur [Neocities](https://neocities.org/), qui offre un hébergement gratuit et supporte le HTTPS par défaut.

1. **Préparation de l'Environnement**  
   - Créez un compte sur Neocities si vous ne l’avez pas déjà fait.
   - Organisez tous vos fichiers (HTML, CSS, JS, images, vidéos) dans un dossier local.

2. **Optimisation des Ressources**  
   - Assurez-vous que les images sont optimisées pour le web. Par exemple, 
     pour le carrousel d'avis clients, utilisez des images de 150 à 200 px en version standard et une version 2x via l'attribut `srcset`.
   - Minifiez les fichiers CSS et JavaScript pour améliorer les temps de chargement.

3. **Déploiement**  
   - Connectez-vous à votre tableau de bord Neocities.
   - Utilisez l’interface web (drag & drop) pour uploader tous vos fichiers, ou utilisez le Neocities CLI pour automatiser le processus.
   - Vérifiez que votre site s'affiche correctement à l'URL fournie (ex. `https://monsite.neocities.org/`).

4. **Tests en Production**  
   - Testez la réactivité du site sur différents navigateurs (Chrome, Firefox, Safari, Edge) 
     et sur différents appareils (mobile, tablette, desktop).
   - Vérifiez le bon fonctionnement des vidéos, carrousels, modals et du mode sombre.

---

## Gestion des mises à Jour

1. **Utilisation de Git**  
   - Utilisez Git pour versionner votre code. Créez des branches de développement 
     (par exemple, `dev`) pour tester les modifications avant de les fusionner dans la branche principale (`main`).
   - Rédigez des commits détaillés pour documenter chaque changement.

2. **Processus de Déploiement**  
   - Testez toujours vos modifications localement.
   - Utilisez l’interface Neocities ou le Neocities CLI pour mettre à jour le site en transférant les fichiers modifiés.
   - Après chaque mise à jour, effectuez des tests de régression pour valider que toutes les fonctionnalités sont opérationnelles.

3. **Documentation et Sauvegardes**  
   - Tenez à jour ce fichier README avec toute modification majeure dans le déploiement.
   - Gardez une copie de sauvegarde régulière de votre projet pour prévenir toute perte de données.
   - Notez les versions des dépendances (Bootstrap, icônes, etc.) et mettez à jour le code en cas de nouvelles versions majeures.

---

## Crédits

- **Développeur** : Jean-Claude Lugo, formateur chez MODE 83 Draguignan
- **Conception** : Inspiré par l'univers des troubles Dys et l'accompagnement éducatif
- **Hébergement** : [Neocities](https://neocities.org/)

---

## Licence

Ce projet est sous licence [MIT](LICENSE) *(ou autre licence, à préciser)*.  
*Vous pouvez ajouter un fichier LICENSE dans le dépôt pour plus de détails.*

---

Bonne mise en production et gestion des mises à jour ! 🚀✨
```
