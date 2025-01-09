// let arr = [1, 2, 3, 'four', 'five'];
// console.log(arr[2]);
// let danhSachHs = ['An', 'Binh', 'Khanh'];
// for (let i = 0; i < danhSachHs.length; i++) {
//   console.log(danhSachHs[i]);
// }
//  
//   let person = {
//     name: 'John',
//     age: 30,
//     job: 'Deve',
//   };
//   // console.log(person.job);
// for (let key in person){
//   console.log(person[key]);
// }
// et person = {
//   name: "Alice",
//   age: 25,
// }
// person.gender = "female";
// person["occupation"] = 'developer';
// console.log(person);
// if ('age' in person) {
//   console.log("Key 'age' ton tai trog object person");
// }
// if (person.has0wnProperty('gender')) {
//   console.log("Key 'gender' ton tai trong object person");
// }
// delete person.age;
// let hocSinh = [
//   { ten: 'An', tuoi: 15, lop: '10A1'},
//   { ten: 'Binh', tuoi: 16, lop: '11A2'},
//   { ten: 'Chau', tuoi: 15, lop: '10A1'},
// ];
// hocSinh.push({ten: 'Dung', tuoi: '17', lop: '11A3'});
// for (let i = 0; i < hocSinh.length, i++)  {
//   console.log(hocSinh[i])
// }

// hocSinh[1].tuoi = 17

// let hi = document.getElementById("hi") bien
// let hi2 = document.getElementById("abc") 
// let hi3 = documet.querySelector(".xyz") ten class & id
// let newElement = document.createElement('h1')
// newElement.innerHTML = "hello b"
// // console.log(newElement)
// document.body.appendChild(newElement);
// newElement.style.color = "green"
// let form1 = document.getElementById("id1")
// console.log(form1.value)
// let form2 = document.getElementById("id2")
// console.log(form2.value)
// id1.style.background = "red"
// id2.style.background = "red"
// function tinh_tong(n){
//     let result = 0
// for (let i = 1; i <= n; i++){
// result = result + i
// }
//  return result      
// }

// console.log(tinh_tong(5))
// function la_so_nguyen_to(num){
//     for (let i = 2; i < num; i++ ){
//       if (num % i == 0){
//         return "Khong la so nguyen to"
//       } 
//     }
//     return "La so nguyen to"
// } 
// console.log(la_so_nguyen_to(10))
// function giai_thua(n){
//     let result = 1
//     for (let i = 1; i <= n; i++ ){
//         result = result * i  
//     }
//     return result
// }
// console.log(giai_thua(5))
// function C_F(c){
//     return (c)
// }
// function F_C(f){
//     return (f )
// }
// console.log(c(25))
// let div = document.createElement ('div');
// document.body.appendChild(div);
// let button = document.getElementsByTagName("button")[0]
// button.addEventListener("click",appear)
// function appear(a){
//     div.innerHTML = "hello world"
// } 