# Créer une présentation

Quelle que soit la méthode d'installation choisie, vous devriez avoir un fichier HTML qui ressemble à ça:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Titre de mon diaporama</title>
</head>
<body>
    <div id="cjs-slider">

    </div>

    <script src="./chemin_vers_le_script.js"></script>
</body>
</html>
```

## Créer une slide

Une slide est un `div` avec la classe `cjs-slide`. Pour créer une slide on écrit donc:

```html
<div class="cjs-slide">
    <!-- Ici le contenu de la slide -->
</div>
```

Vous pouver déjà assigner une couleur d'arrière plan à votre slide en utilisant CSS, soit dans un fichier séparé, soit directement sur la balise:

```html
<div class="cjs-slide" style="background-color: #fa6756">
            Ma première slide
</div>
```

Vous pouvez ajouter une slide supplémentaire afin de voir les transitions:

```html
<div class="cjs-slide" style="background-color: #8e44ad">
    Ma deuxième slide
</div>
```

Normalement vous avez maintenant quelque chose sui ressemble à ça:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Titre de mon diaporama</title>
</head>
<body>
    <div id="cjs-slider">
        <div class="cjs-slide" style="background-color: #f00">
            Ma première slide
        </div>
        <div class="cjs-slide" style="background-color: #8e44ad">
            Ma deuxième slide
        </div>
    </div>

    <script src="https://cdn.colorjs.cf/v0.8/colorjs-min.js"></script>
</body>
</html>
```

Il est temps de voir le résultat ! Ouvrez votre fichier HTML dans un navigateur et utilisez les flèches de votre clavier ou les commandes à l'écran pour changer de diapo.

> Voici votre premier diaporama ColorJS ! Mais ce n'est pas très animé tout ça ! Ajoutons donc des transitions

# Ajouter des transitions

Pour ajouter des transitions, il faut modifier les classes de vos slides.

On modifie toujours la transition de la slide qui *arrive*, pas de la slide qui part. Par exemple, si je veux un fondu pour passer de la slide 1 à 2, je mettrai la classe `fade` **sur la slide 2**. Exemple, en modifiant notre code:

```html
<!-- Début du fichier -->
<div id="cjs-slider">
        <div class="cjs-slide" style="background-color: #f00">
            Ma première slide
        </div>
        <div class="cjs-slide fade" style="background-color: #8e44ad">
            Ma deuxième slide
        </div>
</div>
<!-- Fin du fichier-->
```

On obtient un joli fondu entre les deux slides.

## Liste des transitions disponibles

**Rappel:** Si aucune transition n'est spécifiée, le changement d'une slide à l'autre se fera par un simple "cut".

### Transitions de premier niveau

Les transitions de premier niveaux sont les effets de transition par défaut qui s'appliquent directement sur une slide. Par exemple:

```html
<div class="cjs-slide fade" style="background-color: #8e44ad">
     Ma deuxième slide
</div>
```

On ajoute la classe à la suite de `cjs-slide`.

#### Liste des transitions

Pour 2 slides A et B

| Tag      | Effet obtenu                                          |
| -------- | ----------------------------------------------------- |
| `fade`   | Fondu de A vers B                                     |
| `bottom` | B pousse **légèrement** A du bas vers le haut         |
| `right`  | B pousse **légèrement** A de la droite vers la gauche |
| `top`    | B pousse **légèrement** A du haut vers le bas         |
| `left`   | B pousse **légèrement** A de la gauche vers la droite |

#### Exemple

```html
<div class="cjs-slide" style="background-color: #f00">
            Ma première slide
</div>
<div class="cjs-slide bottom" style="background-color: #8e44ad">
     Ma deuxième slide
</div>
```

Ce code produira un effet de poussée de la deuxième slide qui va *légèrement* recouvrir la première.

### Transitions de second niveaux

Ces effets s'ajoutent à un effet déjà existant. Utilisées seules, les classes n'ont aucune action.

#### Liste des effets

Pour 2 slides A et B

| Tag     | Effet obtenu            | Compatible avec                  |
| ------- | ----------------------- | -------------------------------- |
| `cover` | B recouvre totalement A | `bottom`, `right`, `top`, `left` |
| `push`  | B pousse totalement A   | `bottom`, `right`, `top`, `left` |

**Ne pas utiliser ces effets avec `fade`**.

#### Exemple

```html
<div class="cjs-slide" style="background-color: #f00">
            Ma première slide
</div>
<div class="cjs-slide bottom cover" style="background-color: #8e44ad">
     Ma deuxième slide
</div>
```

Ce code produira un effet de poussée de la deuxième slide qui va *totalement* recouvrir la première.
