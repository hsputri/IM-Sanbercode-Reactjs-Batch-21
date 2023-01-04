// soal 1
console.log("LOOPING PERTAMA");
var i = 1;
while (i <=20) {
    if(i%2==0){
        console.log(i + ' - I Love Coding');
    }
    i++;
}
console.log("LOOPING KEDUA");
while (i >= 1) {
    if(i%2==0){
        console.log(i + ' - I will become frontend developer');
    }
    i--;
}


// soal 2

for (var j = 1; j <= 20; j++){
    if(j%3==0){
        console.log(j + ' - I love coding');
    }else if(j%2==1){
        console.log(j+ ' - Santai');
    }else{
        console.log(j+ ' - Berkualitas');
    }
}

// soal 3
var string= '';
for(var m=0; m<=7; m++){
    for(var v=0; v<m; v++){
        string += '#';
    }
    string += '\n';
}

console.log(string);

// soal 4
var kalimat="saya sangat senang belajar javascript"
var kata = kalimat.split(" ");
console.log(kata);

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for(var i=0; i < daftarBuah.length ; i++){
    console.log(daftarBuah[i]);
}

