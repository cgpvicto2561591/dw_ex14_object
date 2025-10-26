//Exercice 1:

const livres = [
    { titre: "1984", auteur: "George Orwell", annee: 1949, disponible: true },
    { titre: "Le Seigneur des anneaux", auteur: "J.R.R. Tolkien", annee: 1954, disponible: false },
    { titre: "Dune", auteur: "Frank Herbert", annee: 1965, disponible: true },
    { titre: "Fahrenheit 451", auteur: "Ray Bradbury", annee: 1953, disponible: true },
    { titre: "Le messie de Dune", auteur: "Frank Herbert", annee: 1969, disponible: true },
];

console.log(livres[0].titre);

let count = 0;
for (let i = 0; i < livres.length; i++)
 {
    count++;
}
console.log(`Il y a ${count} livres.`);

console.table(livres);

for (let i = 0; i < livres.length; i++)
{
    console.log(`Titre: ${livres[i].titre}, Auteur: ${livres[i].auteur}`);
}

//Exercice 2:

//{ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false }

livres.push({ titre: "Neuromancien", auteur: "William Gibson", annee: 1984, disponible: false });

/* check if added correctly
for (let i = 0; i < livres.length; i++)
{
    console.log(`Titre: ${livres[i].titre}, Auteur: ${livres[i].auteur}`);
}
*/

livres[5].disponible = true;

//console.log(livres[5].disponible); // check if the value change for true

console.log(livres.findIndex(livre => livre.titre === "Fahrenheit 451"));
livres.splice(3,1,);
//let removedbook = livres.splice(3, 1);

//Exercice 3:

for (let i = 0; i < livres.length; i++) 
{
      if (livres[i].disponible === true)
        {
            console.log(`Le livre "${livres[i].titre}" est disponible.`);
        }       
}

for (let i = 0; i < livres.length; i++) 
{
      if (livres[i].annee < 1960)
        {
            console.log(`Le livre "${livres[i].titre}" a été publié avant 1960.`);
        }       
}
