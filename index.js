//--------------------------- Первый

// let hitTarget = 0;

// let rifle = function(callback) {
//     hitTarget++;
//     callback();
// };
// setTimeout(function(){
//     rifle(function(){
//         console.log('Попаданий в цель:  ' + hitTarget + ' раз');
//     })
// }, 2000);

//----------------------------Второй

// let targets = ['Гонг', 'Грудная', 'Ростовая'];
// let rifleCount = 3;

// function randomFire(min, max) {
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
// let rifle = function(callback) {
//     let target = targets[randomFire(0, 2)];
//     let timeout = randomFire(1000, 2000);
//     setTimeout(function(){
//         callback(target);
//     }, timeout);    
// };
// for (let i=0; i<rifleCount; i++) {
//     rifle(function(target){
//         console.log('Поражена мишень: ' + target);
//     })
// }

//----------------------------Третий


let targets = ['Гонг', 'Грудная', 'Ростовая'];
let rifleOne = {model: 'Heckler & Koch HK416', caliber: '5,56mm'};
let rifleTwo = {model: 'СВД', caliber: '7,62мм'};
let rifleThree = {model: 'Barrett M82', caliber: '12,7mm'};
let allGuns = [rifleOne, rifleTwo, rifleThree];

function randomFire(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
    }

let rifle = function(round, callback) {
    let target = targets[randomFire(0,2)];
    let timeout = randomFire(1000, 2000);
    round.target = target;
    setTimeout(function(){
        callback(round);
    }, timeout);
};

let result = [];

for (let i=0; i<allGuns.length; i++) {
    rifle(allGuns[i], function(round){
        result.push(round);
        console.log('Результат стрельбы: ' + JSON.stringify(result));
    })
}
