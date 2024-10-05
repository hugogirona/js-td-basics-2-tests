/*
TESTS - PRÉPA 1

Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x,
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

// 1. Demandez à l'utilisateur d'entrer le nombre d'articles (N) achetés par le client et le prix unitaire (x) d'un article.
let N = prompt("Entrez le nombre d'articles que vous souhaitez acheter");
let x = prompt("Entrez le prix unitaire de l'article");
x.replace(',','.');
x = parseFloat(x); // vu qu'on ajoute des caractères, on met du string et nombre ensemble donc marche pas. on veut repasser la variable en nombre
const ristourne = 0.9;
// 2. Calculez le montant total de la facture en multipliant le nombre d'articles par le prix unitaire (N * x).
let prixFacture = N*x;
// 3. Vérifiez si le nombre d'articles est supérieur ou égal à 20.
//    a) Si la condition est vraie, calculez la ristourne de 10% sur le montant total (0.1 * montant total) et soustrayez-la du montant total.
//    b) Si la condition est fausse, laissez le montant total tel quel.

if (N >= 20){
    console.log(`Vous obtenez une reduction de 10%, le montant de la facture s'élève à ${prixFacture.toFixed(2) * ristourne}€. (${prixFacture.toFixed(2)}€ avant réduction.)`);
}
else{
    console.log(`le montant de la facture s'élève à ${prixFacture.toFixed(2)}€.`);
}
// 4. Affichez le montant total de la facture dans la console.
