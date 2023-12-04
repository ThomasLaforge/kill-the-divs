# Kill the divs

## Objectifs

- Manipuler le DOM une nouvelle fois en Vanilla JS
- Utiliser les événements
- Utiliser le positionnement CSS relatif et absolu
- Utiliser les animations CSS

## Le jeu

On aura un premier écran avec un bouton "Start" qui permettra de lancer le jeu.
En cliquant dessus, on aura un écran avec des divs qui apparaissent à des positions aléatoires sur l'écran.
Le but du jeu est de cliquer sur ces divs pour les faire disparaître.
On en fera apparaître de nouveaux à chaque fois qu'on en fait disparaître un.
La partie se termine quand on a cliqué sur 10 divs.
On affichera alors un écran de fin de partie avec un bouton "Rejouer" qui permettra de relancer une partie et le temps qu'on a mis pour finir la partie.

## Les étapes

### 1. Jeu de base

1. Créer un bouton "Start" dans le HTML
. Créer un fichier `index.js` et l'importer dans le HTML
. Dans le fichier `index.js`, sélectionner le bouton et lui ajouter un écouteur d'événement au clic
4. Dans la fonction de callback, cacher le bouton et afficher un écran de jeu, on enregistre la Date dans une variable `startTime`
5. l'écran de jeu prend 100% de la hauteur et de la largeur de l'écran
6. l'écran de jeu a un fond noir
7. on affiche un message "Cliquez sur les divs pour les faire disparaître" au milieu de l'écran
8. il disparait au bout de 2 secondes (setTimeout)
9. on affiche une div ronde (Boite de 50px de côté, bordure arrondie, fond blanc) à une position aléatoire sur l'écran
10. on affiche un compteur de divs cliquées en haut à droite de l'écran
11. lorsque l'on clique sur la div, elle disparait et on en fait apparaitre une nouvelle à une position aléatoire
12. quand on a cliqué sur 10 divs, on affiche un écran de fin de partie avec un bouton "Rejouer" qui permet de relancer une partie et le temps qu'on a mis pour finir la partie (différence entre startTime et Date.now())

### 2. Pimp my game

Choisissez des améliorations à apporter au jeu dans l'order que vous voulez :

- Ajouter un son quand on clique sur une div
- afficher un timer en temps réel
- paramétrer la difficulté du jeu en début de partie avec le nombre de cibles à atteindre et la taille des cibles
- afficher un message "Cliquez pour rejouer" au milieu de l'écran quand on a fini la partie
- Afficher un chrono décroissant de 6 secondes au milieu de l'écran quand on lance la partie Dès que le chrono atteint 0, la partie est perdue