// Soal 1
function halo(){
    return "Halo Sanbers!";
}
console.log(halo());

// soal 2
function kalikan(a,b){
    return a*b;
}
var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1,num2);
console.log(hasilKali);

// soal 3
function introduction(a,b,c,d){
    return "Nama saya " + a + ", umur saya " + b + " tahun, alamat saya di " + c + ", dan saya punya hobby yaitu " + d + "!";
}
var name = "John";
var age = 30;
var address = "jalan belum jadi";
var hobby = "Gaming"

var perkenalan = introduction(name, age, address, hobby);
console.log(perkenalan);

// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenisKelamin : arrayDaftarPeserta[1],
    hobby :arrayDaftarPeserta[2],
    tahunLahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);

// soal 5
var objDaftarBuah = [
    {
        nama: "strawberry",
        warna: "merah",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "semangka",
        warna: "hijau & merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "pisang",
        warna: "kuning",
        adaBijinya: false,
        harga: 5000
    }
]
console.log(objDaftarBuah[0]);

// soal 6
var dataFilm = [];
function tambahFilm(a,b,c,d){
    dataFilm.push({
        nama: a, durasi: b, genre: c, tahun: d
    })
    return  dataFilm; 
}
tambahFilm("LOTR", "2 Jam", "action", "1990");
tambahFilm("avenger", "2 Jam", "action", "2019");
tambahFilm("spiderman", "2 Jam", "action", "2004");
tambahFilm("juon", "2 Jam", "horor", "2004");
console.log (dataFilm);