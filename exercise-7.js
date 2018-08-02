// 1. Menyusun Barisan Bintang
/*
  Output:
  
  Jika rows1 = 5
  *
  *
  *
  *
  *
*/
console.log('1. Menyusun Barisan Bintang');
var rows1 = 5;
for(asterisks = 1; asterisks <= rows1 ; asterisks++)
{
    console.log('*');
}

console.log();//spasi

// 2. Menyusun Barisan Bintang Dengan Nested Looping
/*
  Output:
  Jika rows2 = 5
  *****
  *****
  *****
  *****
  *****
*/
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping')
var rows2 = 7;
for (asterisks = 1; asterisks <= rows2; asterisks++) 
{
    var hasilAst = ""; 
    for (asterisks2 = 1; asterisks2 <= rows2; asterisks2++) 
    {
        hasilAst += "*"; 
    }
  console.log(hasilAst);
}

console.log();//spasi

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
/*
  Output:
  Jika rows3 = 5
  *
  **
  ***
  ****
  *****
*/
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = 5
for(asterisks = 1; asterisks <= rows3; asterisks++) {
    var hasilAst = ''
    {
        var hasilAst = ""; 
        for (asterisks2 = 1; asterisks2 <= asterisks; asterisks2++) 
        {
            hasilAst += "*"; 
        }
      console.log(hasilAst);
    }
}