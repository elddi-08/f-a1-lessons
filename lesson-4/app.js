// For Loop
// let const

//console.log('Hello')
//console.log('Hello')
//console.log('Hello')
//console.log('Hello')
//console.log('Hello')

//for(let i = 0; i < 50; i++){
   // console.log('Hello',i)
//}

//const names = ['Timur','Kutman','Eldiar','Umar']
//                  0        1        2       3

//console.log(t.toUpperCase());//
//console.log(names[1])//Kutman
//console.log(names[2])//Eldiar
//console.log(names[3])// Umar

//console.log(names); // [....]

//for(let i = 0; i < names.length; i++){
   // console.log('Hello', names [i])


//   %5 КОКА
//   %3 КОЛА

//for(let san = 1; san < 101; san++){
  //  if(san % 5 == 0 && san % 3 == 0){
      //  console.log('KOLA')
  // }

//}

//let name = 'adahan'

//


let  btn1 = document.querySelectorAll('button')

for(let i = 0; i < btn1.length; i++){
    btn1[i].onclick = function () {
        document.body.style.background = btn1[i].innerText
    }
}