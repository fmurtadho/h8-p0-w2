//1. Melakukan Looping Menggunakan While
var nilaiAwal = 2
console.log('1. Melakukan Looping Menggunakan While :');
console.log('LOOPING PERTAMA');
while(nilaiAwal <=20) {
    console.log(nilaiAwal+ ' I love coding');
nilaiAwal+= 2;
}
console.log('LOOPING KEDUA')
var nilaiAwal2 = 20
while(nilaiAwal2 >1) {
    console.log(nilaiAwal2+' I will become fullstack developer');
nilaiAwal2-= 2;
}

//spasi
console.log();
//spasi

//2. Melakukan Looping Menggunakan For
console.log('2. Melakukan Looping Menggunakan For :');
console.log('LOOPING PERTAMA');
for (var nilaiAwal = 1; nilaiAwal <= 20; nilaiAwal++ ) {
 console.log(nilaiAwal + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var nilaiAwal2 = 20; nilaiAwal2 >0; nilaiAwal2-- ) {
    console.log(nilaiAwal2 + ' - I will become fullstack developer');
}

//spasi
console.log();
//spasi

//3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap :');
for(angkaAwal =1; angkaAwal <= 100; angkaAwal++) {
if(angkaAwal % 2 == 0) {
    console.log('Genap');
} else if(angkaAwal % 1 == 0) {
    console.log('Ganjil');
}
}
//spasi
console.log();
//spasi

//perulangan denga penambahan counter 2
console.log('perulangan dengan penambahan counter 2 :');
for (angkaAwal = 1; angkaAwal <=100; angkaAwal+= 2){
    if(angkaAwal %3 == 0) {
        console.log(angkaAwal+' KELIPATAN 3');
    }
}

//spasi
console.log();
//spasi

//perulangan dengan penambahan counter 5
console.log('perulangan dengan penambahan counter 5 :');
for(angkaAwal = 1; angkaAwal <=100; angkaAwal+= 5) {
    if(angkaAwal %6 == 0) {
        console.log(angkaAwal+' KELIPATAN 6');
    }
}
//spasi
console.log();
//spasi

//perulangan dengan penambahan counter 9
console.log('perulangan dengan penambahan counter 9 :');
for(angkaAwal = 1; angkaAwal <=100; angkaAwal+=9) {
    if(angkaAwal %10 ==0) {
        console.log(angkaAwal+'KELIPATAN 10')
    }
}
