// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var upper = kataKeempat.toUpperCase();
var capitalized = kataKedua.charAt(0).toUpperCase()+ kataKedua.slice(1);
console.log(kataPertama + " " + capitalized + " " + kataKetiga + " " + upper);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var number1 = parseInt(kataPertama);
var number2 = parseInt(kataKedua);
var number3 = parseInt(kataKetiga);
var number4 = parseInt(kataKeempat);
console.log(number1 + number2 + number3 + number4);

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 60;

if (nilai >= 80){
    console.log('A');
}else if (nilai >= 70 && nilai < 80){
    console.log('B');
}else if (nilai >= 60 && nilai < 70){
    console.log('C');
}else if (nilai >= 50 && nilai < 60){
    console.log('D');
}else{
    console.log('E')
}

// soal 5
var tanggal = 23;
var bulan = 7;
var tahun = 1999;

switch (bulan){
    case 1: var strBulan = 'Januari';
    break;
    case 2: var strBulan = 'Februari';
    break;
    case 3: var strBulan = 'Maret';
    break;
    case 4: var strBulan = 'April';
    break;
    case 5: var strBulan = 'Mei';
    break;
    case 6: var strBulan = 'Juni';
    break;
    case 7: var strBulan = 'Juli';
    break;
    case 8: var strBulan = 'Agustus';
    break;
    case 9: var strBulan = 'September';
    break;
    case 10: var strBulan = 'Oktober';
    break;
    case 11: var strBulan = 'November';
    break;
    case 12: var strBulan = 'Desember';
    break;
    default: var strBulan = '[bulan tidak diketahui]';
}
console.log(tanggal + " " + strBulan + " " + tahun);

