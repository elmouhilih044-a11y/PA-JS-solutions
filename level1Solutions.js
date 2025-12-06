const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];

// 1. Récupérer tous les nombres pairs
// avec .filter()
const nbrsPairs=data.filter(nbr=>nbr%2===0);
console.log(nbrsPairs);

// avec boucle for
for(let i=0;i<data.length;i++){
    if(data[i]%2===0){
        console.log(data[i])
    }
}

// 2. Récupérer tous les nombres impairs
// .filter()
const nbrsImpairs=data.filter(nbr=>nbr%2!=0);
console.log(nbrsImpairs);
// boucle
for(let i=0;i<data.length;i++){
    if(data[i]%2!=0){
        console.log(data[i])
    }
}


// 3. Doubler chaque nombre du tableau
// .map()
const doubleNbr=data.map(nbr=>nbr*2)
console.log(doubleNbr);
// boucle
for(let i=0;i<data.length;i++){
    const doubleNbr=data[i]*2;
        console.log(doubleNbr);
    
}

// 4. Trouver le plus grand nombre
// .reduce()
const max=data.reduce((acc,current)=>{
    if(current>acc){
        return current;
    }
     return acc;
},data[0])
console.log(max); 


// Math.max(...data)
const Max=Math.max(...data)
console.log(Max); 

// boucle + comparaison
let maximum=data[0]
let i=1
while(i<data.length){
    if(data[i]>maximum){
       maximum=data[i];
    }
    i++;
}
console.log(maximum);


// 5. Trouver le plus petit nombre
// .reduce()
const min=data.reduce((acc,current)=>{
    if(current<acc){
        return current;
    }
     return acc;
},data[0])
console.log(min); 

//  Math.min(...) 
const Min=Math.min(...data);
console.log(Min);
//  boucle
let minimum=data[0]
let y=1
while(y<data.length){
    if(data[y]<minimum){
      minimum=data[y];
    }
    y++;
}
console.log(minimum);

// 6. Calculer la somme du tableau
// .reduce()
const som=data.reduce((total,nbr)=>{
    return total+nbr;
},0);
console.log(som);
// boucle
let sum=0;
for(let j=0;j<data.length;j++){
    sum=sum+data[j];
}
console.log(sum);


// 7. Calculer la moyenne
//  .reduce()
const somme=data.reduce((som,nbr)=>{
    return som+nbr;
},0)
const moyenne=somme/data.length
console.log(moyenne);
// boucle
let S=0;
for(let j=0;j<data.length;j++){
    S=S+data[j];
}
let moy=S/data.length;
console.log(moy);

// 8. Trouver un nombre donné (ex : 77)
// .includes()
function trouverNum(number){
   return data.includes(number)

}
trouverNum(1);

// .find() 
function trouveNum(number){
   return data.find(nbr=>nbr===number)

}
trouveNum(8);

// boucle + condition
function trvNbr(num){
    for(let j=0;j<data.length;j++){
        if(num===data[j])
            return num;
    }
}
trvNbr(1);

// 9. Récupérer les nombres supérieurs à 20
// .filter()
const nbrsSup=data.filter(nbr=>nbr>20)
console.log(nbrsSup);

// boucle
 for(let j=0;j<data.length;j++){
        if(data[j]>20)
         console.log(data[j]);
    }


// 10. Vérifier si tous les nombres sont positifs
// .every()
const nbrPositive=data.every(nbr=>nbr>=0)
console.log(nbrPositive);
// boucle

function tousPositifs() {
    for(let j=0; j<data.length; j++){
        if(data[j] < 0)
             return false; 
    }
    return true; 
}
tousPositifs()

// 11. Vérifier si au moins un nombre est supérieur à 100
//.some()
const nbrSup=data.some(nbr=>nbr>100)
console.log(nbrSup);
//boucle
function nbrSup100() {
    for(let j=0; j<data.length; j++){
        if(data[j] >100)
             return true; 
    }
    return false; 
}
 nbrSup100()


//  12. Compter combien de nombres sont > 50
// .filter().length
const count=data.filter(nbr=>nbr>50).length
console.log(count);
// boucle + compteur
let cont=0;
  for(let j=0; j<data.length; j++){
        if(data[j] >50)
             cont++; 
    }
console.log(cont);


    
  
