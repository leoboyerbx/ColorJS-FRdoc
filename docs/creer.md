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
<div class="cjs-slide" style="background-color: #f00">
	Ma première slide
</div>
```

Vous pouvez ajouter une slide supplémentaire afin de voir les transitions:
```html
<div class="cjs-slide" style="background-color: #8e44ad">
	Ma deuxième slide
</div>
```
Il faut maintenant ajouter les propriétés de transitions, sinon le système ne fonctionnera pas.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ1NTA1MzUyNiwxODE1NzIyMzU4LC00OD
E5MDg0NDRdfQ==
-->