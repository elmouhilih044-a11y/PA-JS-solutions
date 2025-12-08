const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
// 1. Calculer le produit de tous les nombres
// .reduce((a,b)=>a*b)
console.log(data.reduce((a,b)=>a*b))
// boucle
let produit=1;
for(i=0;i<data.length;i++){
produit*=data[i];
}

// 2. Trouver la médiane
// sort + calcul médiane
const result=data.sort((a,b)=>a-b);
console.log(result);
// Calculer la médiane
const n = data.length;
let median;
if (n % 2 === 0) {
  median = (result[n/2 - 1] +result[n/2]) / 2;
} else {
  median = sorted[Math.floor(n/2)];
}
    
// implémentation du tri + médiane



// 3. Générer un tableau cumulatif
// Exemple : [1, 2, 3] → [1, 3, 6]
// .reduce() + push
let arr= [];
const Tcumulatif=data.reduce((a,b)=> {
    const sum=a+b;
   arr.push(sum);
   return sum;
},0)
console.log(arr)
// boucle

let array = [];
let S = 0;

for (let i = 0; i < data.length; i++) {
    S = S + data[i];   
    array.push(S);       
}

console.log(array);


// 4. Créer un tableau avec les nombres uniques triés
// Array.from(new Set(data)).sort(...)
console.log(Array.from(new Set(data)).sort((a,b)=>a-b));

// suppression manuelle doublons + tri manuel
let temp;
let Z;
for(let i=0;i<data.length;i++){

}
for(let i=0;i<data.length;i++){
    if(data[i]>data[i+1]){
        temp=data[i];
        data[i]=data[i+1];
        data[i+1]=temp;
    }
}
console.log(data);

// 5. Regrouper les nombres < 50 et ≥ 50
// .reduce()
const resultat =data.reduce((acc,curr)=>{
    if(curr>=50){
        acc.m.push(curr);
    }
    else{
        acc.l.push(curr);
    }
return acc;
},{l:[],m:[]});
console.log(resultat)
// boucle + deux tableaux
let l=[];
let m=[];
for(let i=0;i<data.length;i++){
    if(data[i]<50){
        l.push(data[i]);
    }
    else{
        m.push(data[i]);
    }
}
console.log(l);
console.log(m);


// 6. Trouver les 3 plus grands nombres
// sort + slice
const tri =data.sort((a,b)=>b-a)
console.log(tri.slice(0,3));
// tri manuel + extraction
let temporaire;
for(let i=0;i<data.length;i++){
    if(data[i]<data[i+1]){
temporaire=data[i];
data[i]=data[i+1];
data[i+1]=temporaire;
    }
}
for(let i=0;i<3;i++){
console.log(data[i]);
}

// 7. Trouver les 3 plus petits nombres
// idem ci-dessus
const t=data.sort((a,b)=>a-b)
console.log(t.slice(0,3));
// tri manuel
let h;
for(let i=0;i<data.length;i++){
    if(data[i]>data[i+1]){
h=data[i];
data[i]=data[i+1];
data[i+1]=h;
    }
}
for(let i=0;i<3;i++){
console.log(data[i]);
}



// 8. Créer un mapping :
// {
//   even: [...],
//   odd: [...],
//   total: x
// }
// A: .reduce()
const R=data.reduce((acc,curr)=>{
if(curr%2==0){
    acc.even.push(curr);
}
else{
     acc.odd.push(curr);
   
}
 acc.total+=curr;
return acc;

},{even:[],odd:[],total:0});
console.log(R);
//  B: boucle
let even=[];
let odd=[];
let total=0;
for(let i=0;i<data.length;i++){
    if(data[i]%2==0){
        even.push(data[i]);
    }
    else{
         odd.push(data[i]);
    }
    total+=data[i];
}
console.log(even);
console.log(odd);
console.log(total);

// 9. Générer un tableau contenant les nombres multipliés par leur index
// .map((v,i)=>v*i)
console.log(data.map((v,i)=>v*i))
// boucle
for(let i=0;i<data.length;i++){
    console.log(data[i]*i);
}

// 10. Remplacer les valeurs < 10 par 0
// .map()
console.log(data.map(nbr=>nbr< 10 ? 0:nbr))
// boucle
for(let i=0;i<data.length;i++){
    if(data[i]<10){
        data[i]=0;
    }
}
console.log(data);


// 11. Diviser le tableau en groupes de taille 4
// boucle + .slice()
//  double boucle + index





// 12. Créer une fonction qui retourne :
// max
// min
// moyenne
// somme
// count
// plusieurs méthodes natives

function stats(){
      const som = data.reduce((acc, curr) => acc + curr, 0);
      return{
        max:Math.max(...data),
        min:Math.min(...data),
       moyenne:som/data.length,
       somme:som,
count:data.length

      };
}
console.log(stats());


//  B: tout calculer à la main
function statsManual() {
    let max = data[0];
    let min = data[0];
    let som = 0;
    let count = data.length;

    for (let i = 0; i < data.length; i++) {
        som += data[i];
        if (data[i]> max) 
            max = data[i];
        if (data[i]< min) 
            min = data[i];
    }

    let moyenne = som / count

    return { max, min, moyenne, som, count };
}

console.log(statsManual());
