//Comandos Python na sintaxe de Javascript

let x = -1;

if(x >= 0 && x <= 100) //and: &&; or: ||; not: !
{
    console.log("Certo!");
}
else
{
    console.log("Não está entre 0 e 100.");
}

while(x < 0)
{
    x++; //é equivalente a x += 1;
}
console.log("Novo valor após while da linha 12: ", x);

let l = [2, 3, 5, 7]; //lista/array
for(let numero of l)
{
    console.log(numero);
}

console.log("Simulando elif: ");

if(x == -1){}
else if(x == 0)
{
    console.log("elif?");
}
