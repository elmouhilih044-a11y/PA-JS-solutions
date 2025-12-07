const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

// 1. Inverser le tableau
// .reverse()
console.log(data.reverse());

//  boucle + swap
function reverseArr(){
let temp;
for(let i=0;i<data.length/2;i++){
temp=data[i]
data[i]=data[data.length - 1 - i];
data[data.length - 1 - i]=temp;
}
}
reverseArr();


// 2. Trier le tableau en ordre croissant
// .sort((a,b)=>a-b)
const triC=data.sort((a,b)=>{
    return a-b;
});
console.log(triC);
// implémenter bubble sort 
let temp;
for(let i=0;i<data.length;i++){
    if(data[i]>data[i+1]){
        temp=data[i];
        data[i]=data[i+1];
        data[i+1]=temp;
    }
}
console.log(data);

// 3. Trier en ordre décroissant
// .sort((a,b)=>b-a)
const triD=data.sort((a,b)=>{
    return b-a;
});
console.log(triD);
// sorting manuel
let t;
for(let i=0;i<data.length;i++){
    if(data[i]<data[i+1]){
        t=data[i];
        data[i]=data[i+1];
        data[i+1]=t;
    }
}
console.log(data);

// 4. Convertir tous les nombres en chaînes de caractères
// .map(String)
const convertirStr=data.map(nbr=>String(nbr))
console.log(convertirStr);
// boucle + String()
for(let i=0;i<data.length;i++){
   data[i]= String(data[i]);
    
}

// 5. Extraire uniquement les nombres situés aux index pairs
// .filter((v,i)=>i%2===0)
const indexPairs=data.filter((value,index)=>
    index % 2==0
)
console.log(indexPairs);

// boucle
for(let i=0;i<data.length;i++){
    if(i%2==0){
        console.log(data[i]);
    }
}

// 6. Trouver l’index d’un élément (ex : 28)
// .findIndex()
function trouveIndex(valeur){
    return data.findIndex(nbr=>nbr==valeur)
}
trouveIndex(28);

// boucle

function trouveIdx(val){
   for(let i=0;i<data.length;i++){
    if(data[i]==val)
        return i;
   }
}
trouveIdx(28);


// 7. Supprimer les doublons dans un tableau
// new Set(data)
console.log(new Set(data))
// boucle + tableau temporaire
let T=[];
 for(let i=0;i<data.length;i++){
    let x=false;
    for(let j=0;j<T.length;j++){
        if(data[i]===T[j]){
            x=true
            break;
        }
 }
  if(!x){
        T.push(data[i])
    } 
 }
 console.log(T);

//  8. Séparer le tableau en deux : pairs / impairs
// .filter() (deux fois)
console.log(data.filter(nbr=>nbr%2===0));
console.log(data.filter(nbr=>nbr%2!=0));
// deux boucles ou une seule boucle
let pairs=[];
let impairs=[];
for(let i=0;i<data.length;i++){
    if(data[i]%2==0)
    pairs.push(data[i]);
else{
    impairs.push(data[i]);
}
}
console.log(pairs);
console.log(impairs);

// 9. Extraire les 5 premiers éléments
// .slice(0,5)
console.log(data.slice(0,5));
// boucle + push
let A=[];
for(let i=0;i<5;i++){
    A.push(data[i]);
}
console.log(A);


// 10. Extraire les 5 derniers éléments
// .slice(-5)
console.log(data.slice(-5));
//  boucle inverse
for (let i = data.length - 1; i >= data.length - 5; i--) {
    console.log(data[i]);
}


// 11. Créer un tableau contenant uniquement les carrés des nombres
// .map(n=>n*n)
console.log(data.map(n=>n*n));
// boucle
let C=[];
for(let i=0;i<data.length;i++){
    C.push(data[i]*data[i]);
}
console.log(C);

// 12. Supprimer tous les éléments inférieurs à 10
// .filter()
console.log(data.filter(n=>n>10));
// boucle + push
let S=[];
for(let i=0;i<data.length;i++){
    if(data[i]>10)
    S.push(data[i]);
}
console.log(S);

