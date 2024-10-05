/*****************************
 * CODING CHALLENGE 2
 */

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).
4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.


let moyenneEquipeJohn = (89 + 120 + 103) / 3
let moyenneEquipeMark = (116 + 94 + 123) / 3
let moyenneEquipeMarie = (97 + 134 + 105) / 3
if (moyenneEquipeJohn > moyenneEquipeMark && moyenneEquipeJohn > moyenneEquipeMarie) {
    console.log(`L'èquipe de John l'emportte avec une moyenne de ${moyenneEquipeJohn} par match. `)
} else if (moyenneEquipeMark > moyenneEquipeJohn && moyenneEquipeMark > moyenneEquipeMarie) {
    console.log(`L'èquipe de Mark l'emportte avec une moyenne de ${moyenneEquipeMark} par match. `)
} else if (moyenneEquipeMarie > moyenneEquipeMark && moyenneEquipeMarie > moyenneEquipeJohn) {
    console.log(`L'èquipe de Marie l'emportte avec une moyenne de ${moyenneEquipeMarie} par match. `)
} else if (moyenneEquipeJohn === moyenneEquipeMark && moyenneEquipeJohn > moyenneEquipeMarie) {
    console.log("Les équipes de John et Mark sont premières ex æquos.")
}else if (moyenneEquipeJohn === moyenneEquipeMarie && moyenneEquipeJohn > moyenneEquipeMark) {
    console.log("Les équipes de John et Marie sont premières ex æquos.")
} else if (moyenneEquipeMarie === moyenneEquipeMark && moyenneEquipeMarie > moyenneEquipeJohn){
    console.log("Les équipes de Marie et Mark sont premières ex æquos.")
} else {
    console.log('Contre toute attente, les trois équipes sont ex æquos')
}
