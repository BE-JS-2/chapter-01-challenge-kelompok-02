/**
 * SOAL NO. 3
 */


/**
 * Lengkapi function untuk mengkonversi detik menjadi menit 
 */


 function convertTime(seconds) {
  let minutes = Math.floor( seconds/60 )
  console.log(minutes);
  let second = seconds % 60
  return minutes + ":" + second

}


console.log(convertTime(60)) // expected output: 01:00
console.log(convertTime(75)) // expected output: 01:15
console.log(convertTime(153)) // expected output: 02:33



/**
 * SOAL NO.4
 */


/**
 * Lengkapilah function berikut untuk menampilkan 'Aku suka buah ...'
 */


 function iLoveFruit(fruits) {
  let LoveFuit = 'I Love ' + fruits 
  return LoveFuit
}

console.log(iLoveFruit('Apple'))
console.log(iLoveFruit('Orange'))
console.log(iLoveFruit('Banana'))



/**
 * sample input: ["Apple", "Orange", "Banana"]
 * sample output:
 * I love Apple
 * I love Orange
 * I love Banana
 */
