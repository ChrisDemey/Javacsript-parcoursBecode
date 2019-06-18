
// 05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer

let go = document.getElementById("run");
go.addEventListener("click", function (el) {
    const people = [{firstname: "Grenville", lastname: "Stive", age: 64},
                    {firstname: "Luis", lastname: "Jedrzejewsky", age: 73},
                    {firstname: "Teodor", lastname: "Warrington", age: 56},
                    {firstname: "Danya", lastname: "Bigby", age: 17},
                    {firstname: "Jemmy", lastname: "Goodbur", age: 87},
                    {firstname: "Vilhelmina", lastname: "Fost", age: 43},
                    {firstname: "Igor", lastname: "Putson", age: 45},
                    {firstname: "Klement", lastname: "Braybrook", age: 88},
                    {firstname: "Trefor", lastname: "Le Jean", age: 69},
                    {firstname: "Tarrah", lastname: "de Clerc", age: 77},
                    {firstname: "Brad", lastname: "Hookes", age: 82},
                    {firstname: "Kippar", lastname: "Fancet", age: 25},
                    {firstname: "Jecho", lastname: "Hawket", age: 87},
                    {firstname: "Lief", lastname: "Blazy", age: 80},
                    {firstname: "Jo-ann", lastname: "Sacase", age: 81}];
    let total = people.reduce(function (sum, people) {
        console.log(sum, people)
        return sum + people.age
    }, 0)
})