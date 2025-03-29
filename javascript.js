let broj_partija = prompt('Koliko zelite partija? ');
broj_partija = Number(broj_partija);
let bod_p=0;
let bod_d=0;
const validniUnos = ['KAMEN','SKARE','PAPIR'];
function provjera(x,y){

    if(x=='KAMEN' && y=='SKARE' || x=='SKARE' && y=='PAPIR' || x=='PAPIR' && y=='KAMEN'){
        console.log('Prvi igrac odnosi pobjedu u ovoj rundi');
        bod_p+=1;

    }else if(x=='SKARE' && y=='KAMEN' || x=='PAPIR' && y=='SKARE' || x=='KAMEN' && y=='PAPIR'){
        console.log('Drugi igrac odnosi pobjedu u ovoj rundi');
        bod_d+=1;           
    }else{
        console.log('Nerijeseno');
 
    }

}
for(let i = 1; i <= broj_partija;i++){
    
    let prvi = prompt(`Unesi svoj znak igracu broj 1: (partija broj ${i})`);
    let drugi = prompt(`Unesi svoj znak igracu broj 2: (partija broj ${i})`);
    prvi = prvi.toUpperCase();
    drugi = drugi.toUpperCase();
    while(!validniUnos.includes(prvi) || !validniUnos.includes(drugi)){
        alert('Krivo uneseno. Molimo ponovite!');
        prvi = prompt(`Unesi svoj znak igracu broj 1: (partija broj ${i})`);
        drugi = prompt(`Unesi svoj znak igracu broj 2: (partija broj ${i})`);
        prvi = prvi.toUpperCase();
        drugi = drugi.toUpperCase();
        console.log('ispravak');
    }
  
   

    provjera(prvi,drugi);

    console.log('Broj bodova prvog igraca iznosi: ', bod_p, 'Broj bodova prvog igraca iznosi: ', bod_d);

    
    
}
if(bod_d<bod_p){
    console.log('Pobijedio je prvi igrac');
}else if(bod_d>bod_p){
    console.log('Pobijedio je drugi igrac');
}else{
    console.log('NERIJESENO');
}


