//ada lima perulangan di java script seraca umum , perulangan dai bagi menjadi 2 yaitu
//conted loop and unconted loop
//perbedaanya
//1.conted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya 
//2. uncented merupakan pengulangan  yang tidak jelas brapa kali harus di ulang
//contoh
// function pushup(){
//     //code
// }
//     for(i=1; i<=10; i++){
// }

// let bosan;
// while(bosan == false){
//     pushup()
// }

// macam macam perulangan unconted loop
// 1.perulangan for 
// merupakan perulangan yang termasuk ke dalam counted loop , karena sudah jelas berapa kali akan mengulang sebuah perulangan
// for(let i=0; i < 10; i++){
//     document.write(`<p>peulangan ini di ulang ${i} kali</p>`)
// }

// 2.perulangan while
//merupakan perulangan yang termasuk ke dalam perulangan unconted loop namun perulangan 
//while juga dapat masuk ke dalam perulangan conted loop dengan memberikan sebuah 


// let ulang = confirm("berapa kali anda ingin mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("apakah anda ingin mngulanginya lagi?")
//     counter++;
//     if(jawab = false){
//         ulang = false;
//     }
// }
// document.write("perulangan yang anda lakukan sebanyak "+ counter +" kali");

// perulangan do/while 
//sama seperti penulangan while 
// perbedannya adalah perulangan do/while akan melakuan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while

// var ulang = confirm("apakah anda mau ngulang?")
// var counter = 0;

// do{
//     conter++;
//     ulang + confirm("apakah anda mau ngulang?");

// }while(ulang);
// document.write("perulangan yang anda laukan sebanyak "+ conter+ " kali");


let sum = "";
while(true){
    let value = prompt("masukan sebuh huruf",'');
    if(!value) break;
    sum+= value
}
alert('kata yang anda masuka adalah : ' + sum)

// 2.perulangan forEach
// 3.perulangan repeat








