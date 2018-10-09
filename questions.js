/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
 var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e",' ');
}
var concatString = function (texte1, texte2) {
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substring(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    if((typeof texte) == "string"){
        return true;
    }
    return false;
}
var AfficherExtensionString = function (texte) {
    texte = texte.split('.');
    return texte[texte.length-1];
}
var NombreEspaceString = function (texte) {
    var i = 0;
    var result= 0;
    for(i;i<texte.length;i++){
        if(texte.charAt(i)==' '){
            result++;
        }
    }
    return result;
}
var InverseString = function (texte) {
    var i = texte.length-1;
    var reverse = "";
    for(i;i>=0;i--){
            reverse+=texte.charAt(i);
        }
    return reverse;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
 var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    var i = 0;
    for(i;i<array.length;i++){
        array[i]=Math.abs(array[i]);
    }
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round((3.141*Math.pow(rayon,2)));
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2));
}
var calculIMC = function (poids, taille) {
    return parseFloat((poids/Math.pow(taille,2)).toFixed(2));
}