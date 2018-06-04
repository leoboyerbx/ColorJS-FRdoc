# ColorJS
Une simple librairie pour créer des diaporamas en HTML/CSS

ColorJS est une librairie JS que vous pouvez utiliser pour créer des diaporamas animés, simplement en tapant du HTML et du CSS. La librairie se charge d'accélérer le processus de création.

>Merci de noter que le projet en est à ses balbutiements et que je ne suis pas un professionnel (je suis étudiant). Il reste donc des erreurs et de nombreuses fonctions sont manquantes.

>Cependant la librairie est déjà utilisable et fonctionne pour un usage simple !  Je l'ai utilisée pour tous mes diaporamas nécessaires à certaines épreuves du Bac.

## Comment ça fonctionne
ColorJS se charge d'analyser le DOM et d'animer chaque élément avec la classe `slide` ou l'attribut `animate`. Le script en lui-même ajoute ou supprimme simplement des classes pour faire progresser l'animation.

>Whaaat ? J'ai pas compris...

Par exemple, si vous avez simplement 3 `div`avec la classe `slide` (des diapositives donc) dans vitre document HTML, le script va ajouter chacun de ces divs à la liste des éléments animés et va les animer dans l'ordre où ils apparaissent dans le code.

Pour laisser un maximum de flexibilité, le script ajout la classe `current` à la slide en cours et la classe `prev`à toutes les slides déjà passées. Ainsi vous pouvez choisir sur quelles propriétés CSS les changements s'appliquent.

Now if you want an element to appear only when you want, you can add the attribute `animate=1` for example, and the script will make this element appear at the first click after the begenning of the slide.

Si vous voulez qu'un élément apparaisse seulement à un moment précis, vous pouvez lui ajouter l'attribut `animate`

## Comment utiliser ColorJS
### Créer le diaporama
Tout est détaillé sur [la documentation](https://colorjs.readthedocs.io/fr/latest/)
