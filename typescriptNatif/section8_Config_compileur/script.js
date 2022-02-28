console.log("hello world");
// ----- Compilation Basique ----- \\
// tsc -v --> version du compileur
// tsc {name file TS} --> compile le fichier TS en JS
// tsc {name file TS} --out {choose name file js (add.js)} --> compile le fichier TS en Js avec le nom choisis
// tsc {name file TS} -watch || tsc {name file TS} -w --> compile le fichier TS à chaque sauvegarde du fichier
// tsc --init --> génére le fichier de config TS tsconfig.json
// tsconfig.json, doit se trouver à la racine du projet
// ----- RootDir / OutDir ----- \\
// dans le fichier tsconfig.json pour faire les chemins de compilation se référer à rootDir et outDir
// rootDir --> on indique ou se trouve nos fichiers .ts
// outDir --> on indique où on souhaite placer nos fichiers .ts compilé en .js
// ----- Exclude / Include / Files  ----- \\
// A la fin du dossier tsconfig.json, après compilerOptions: {}, ajouter exclude : [ {les fichiers/dossiers ou
// seulement certaines extension de fichier qu'on veut exclure du tsc} ]
// exclude : {
//     "./src/index.ts" --> exclure un fichier
//     "./src/" --> exclure un dossier
//     "./src/*.js" --> exclure une extension unique
//     "node_modules" --> exclure les nodes modules
// }
// A la fin du dossier tsconfig.json, après compilerOptions: {}, ajouter include : [ {les fichiers/dossiers ou
// seulement certaines extension de fichier qu'on veut inclure du tsc} ]
// include : {
//     "./src/index.ts" --> inclure un fichier
//     "./src/" --> inclure un dossier
// }
// Si on veut inclure seulement que quelques fichiers, on peut utiliser file:[] après compilerOptions:{},
// il marche comme include, mais il est rarement utiliser ou alors sur une toute petite application avec que quelques fichier .ts
// ----- Lib ----- \\
// Si lib : [] est activé le target qui est par défaut sur es5 ne sera plus utilisé, mais seulement ce qu'il
// y a dans lib, donc a activé que si lib : [], n'est pas vide
// ----- Basic Options ----- \\
// allowJs
// Permet la compilation de fichier .js même si pas de .ts
// checkJs
// Nous reporte juste les erreur JS, compile également les fichier .js et nous donne s'il y a des erreurs
// jsx
// Pour React
// declaration & declarationMap
// Pour un rendu de type librairie, le premier génère le .d.ts et le deuxième nous donne sa sourcemap
// sourceMap
// Génère en .map, ça permet de debug l'appli sur le navigateur (Google Chrome,...)
// outFile
// Génére un bundle, il faut juste lui indiquer le chemin, ou l'on veut placer le fichier
// removeComments
// Sert à retirer les commentaires qu'il y a dans les fichier .ts
// noEmmit
// Sert à ne pas compiler en .js, nous permet de tester une partie du code sans l'intégrer dans notre projet
// downlevelIteration
// Il permet d'améliorer notre compilation dans les anciennes version de JS
// ----- Others Options ----- \\
// Strict Type-Checking Options
// Nous sert à vérifier tout un tas de valeur dans les fichier .ts, la première ligne sert à activer toutes les méthodes
// On peut aussi faire du cas par cas sur chaque ligne
// Additional Checks
// Sert pour la qualité du code, nous dis si des variables sont utilisé ou non,...
// ... à voir sur la doc : https://aka.ms/tsconfig.json
