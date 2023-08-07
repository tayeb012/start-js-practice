const luku2 = 349;
const julu2 = 334;
const shukur2 = 354;
const mitu2 = 354;
const jahid2 = 354;
const kobir2 = 544;

console.log(Math.max(luku2, julu2,shukur2, mitu2, jahid2, kobir2));
console.log(Math.min(luku2, julu2,shukur2, mitu2, jahid2, kobir2));




const luku = Math.round(Math.random() * 1000);
console.log('luku',luku);
const julu = Math.round(Math.random() * 1000);
console.log('juku',luku);
const shukur = Math.round(Math.random() * 1000);
console.log('shukur',shukur);
const mitu = Math.round(Math.random() * 1000);
console.log('mitu',mitu);
const jahid = Math.round(Math.random() * 1000);
console.log('jahid',jahid);
const kobir = Math.round(Math.random() * 1000);
console.log('kobir',kobir);

if(luku>julu&luku>shukur&luku>mitu&luku>jahid&luku>kobir){
    console.log('lulu is batter than all')
}
else if(julu>luku&julu>shukur&julu>mitu&julu>jahid&julu>kobir){
    console.log('julu is batter than all')
}
else if(shukur>julu&shukur>luku&shukur>mitu&shukur>jahid&shukur>kobir){
    console.log('shukur is batter than all')
}
else if(mitu>julu&mitu>shukur&mitu>luku&mitu>jahid&mitu>kobir){
    console.log('mitu is batter than all')
}
else if(jahid>julu&jahid>shukur&jahid>mitu&jahid>luku&jahid>kobir){
    console.log('jahid is batter than all')
}
else{
console.log('kobir is batter than all')
}


function maxInArray(number){
    for(let i = 0; i<number.lenght)
}

const height =[343,334,32344,23434,334,2234,2345,455]
const tallest = maxInArray(height)