const lyrics = 'ami bondhu kala paKhi tmi jno ki! boshontw kale tmy dekhte pari ni'

const doesExist = lyrics.includes('paKhi');
console.log(doesExist);

const searchString = 'Pakhi';
const doesExist2 = lyrics.includes(searchString);
console.log(doesExist2)


const searchString3 = 'PAkhi';
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist3 = searchString3.toLowerCase()
console.log(lyricsLowerCase.includes(doesExist3));

// short cart version
const searchString4 = 'PakHi';
console.log(lyrics.toLowerCase().includes(searchString4.toLowerCase()));



// find index
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kalaaaaaa'));


if(lyrics.indexOf('kala') !== -1){
    console.log('exist inside the string');
}
else{
    console.log("doesn't exist");
}


// start With
console.log(lyrics.startsWith("ami"))
console.log(lyrics.startsWith("tmi"))
// end with
console.log(lyrics.endsWith("ni"))
console.log(lyrics.endsWith("no"))