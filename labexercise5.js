let basketballplayers = ['Jimmy Butler', 'Kobe Bryant', 'Dwyane Wade', 'LeBron James', 'Steph Curry'];

basketballplayers[1] = 'Michael Jordan';
console.log(basketballplayers);

basketballplayers[4] = 'Klay Thompson';
console.log(basketballplayers);

basketballplayers.unshift('Kyrie Irving');
console.log(basketballplayers);

let lastBasketballplayer = basketballplayers.pop();
console.log(lastBasketballplayer);
console.log(basketballplayers)

