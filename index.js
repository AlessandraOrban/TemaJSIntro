// 1.Returnează un boolean dacă un număr este divizibil cu 10 :
function divizibilCuZece (numar) {
  if (numar%10==0) 
    console.log(`Numarul ${numar} este divizibil cu zece.`);
  else console.log(`Numarul ${numar} nu este divizibil cu zece.`);
}

divizibilCuZece(30);
divizibilCuZece(24);
console.log("--------------------------------------------");

 // 2. Scrieți o funcție numită tellFortune care :
// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
function tellFortune(N,Z,Y,X){
  console.log(`Vei fii un ${X} in ${Y} casatorita cu ${Z} si vei avea ${N} copii.`);
}
tellFortune(5, 'Andrei', 'Romania', 'WebDeveloper');
console.log("--------------------------------------------");

// Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii :
function ZiASaptamanii (zi) {
  switch(zi) {
   case 1:
    console.log("Luni");
    break;
   case 2:
    console.log("Marti");
    break;
   case 3:
    console.log("Miercuri");
    break;
   case 4:
    console.log("Joi");
    break;
   case 5:
    console.log("Vineri");
    break;
   case 6:
    console.log("Sambata");
    break;
   case 7:
    console.log("Duminica");
    break;
   default:
    console.log("Nu exista o zi a saptamanii atribuita acestui numar");
    break;
 }
}

ZiASaptamanii(4);
ZiASaptamanii(9);
console.log("--------------------------------------------");