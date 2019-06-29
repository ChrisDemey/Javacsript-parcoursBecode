
// 05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer

let list = document.getElementById("run");
list.addEventListener("click", function (el) {
    const names = [{firstname: "Grenville", lastname: "Stive", age: 64},
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

        document.getElementById("run").addEventListener("click", () => {
        let sum = names.reduce((a,b) => a + b.age , 0)                      // variable sum = fait un 
        console.log(sum)
        })
})