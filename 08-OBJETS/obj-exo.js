/* PNJ */
const character = {
    items_to_give : ["stylo","cahier","téléphone","boîte","chaussures"],
    age : 20,
    name : "Carl"
};

for (const prop in character){
    console.log(`character.${prop} = ${character[prop]}`);
}

function giveItem(){
    console.log(`character reçois un objet`);
}

/* shop */
let sell = [
    { title: "épée", physic: 20, magic: 0, minLevel: 1, available: true, },
    { title: "hache", physic: 30, magic: 0, minLevel: 5, available: false, },
    { title: "sceptre", physic: 10, magic: 10, minLevel: 10, available: false, },
    { title: "bâton", physic: 15, magic: 0, minLevel: 5, available: true, },
    { title: "anneau", physic: 0, magic: 40, minLevel: 15, available: true, }
];

sell.forEach(function(sell){
    console.log(sell);
});

const there = sell.filter(item =>{
    return item.available == true;
});
console.log(there);

const levelTen = sell.filter(item =>{
    return item.minLevel >= 10;
});
console.log(levelTen); 

/* personnage */
const mainCharacter = {
    name: "Aldo",
    level: 20,
    life: 150,
    weapon : {name: "Lance infernale", damage: 30},
    attack:function(){
        return `${mainCharacter.name} attaque avec "${mainCharacter.weapon.name}" et fait ${mainCharacter.level*mainCharacter.weapon.damage} points de dégâts.`;
    }
};
console.log(mainCharacter.attack()); 

/* adversaire */
const Character = {
    title: "Vaas",
    level: 5,
    life: 50,
    weapon: 1,
    attack: 1,
    weapon: {
        name: "épée",
        damage: 3,
    },
    opponentCharacter: {
        title: "Jacques",
        level: 10,
        life: 75,
        weapon: 1,
        attack: 1,
        weapon: {
            name: "épée",
            damage: 15,
        },
    },
    // Pas besoin de mettre le mainCharacter
    /*mainCharacter: {
        title: "Paul",
        level: 11,
        life: 60,
        weapon: 1,
        attack: 1,
        weapon: {
            name: "hache",
            damage: 25,
        },
    },*/
    receiveDamage: function () {
        console.log(`${Character.opponentCharacter.title} \n a maintenant \n ${Character.opponentCharacter.life = Character.opponentCharacter.life - (Character.level * Character.weapon.damage)} de vie.`);
    },
    attack: function () {
        console.log(`${Character.title} \n attaque \n ${Character.opponentCharacter.title} \n avec l'arme \n ${Character.weapon.name} \n et lui inflige \n ${Character.level * Character.weapon.damage} de dégâts.`);
        Character.receiveDamage()
    },

}
Character.attack();
Character.attack();
Character.attack();
Character.attack();
