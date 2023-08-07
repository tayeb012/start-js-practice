const lyrics = 'ami bondhu kala paKhi tmi jno ki. boshontw kale tmy dekhte pari ni. Shada shada kala kala rong jomeche shada kala. hoichi ami mon pagla tomari ghore '

const part =lyrics.split('.');
console.log(part);
const part2 =lyrics.split(' ');
console.log(part2)
const part3 =lyrics.split('');
console.log(part3);
console.log()


// slice
console.log(lyrics.slice(4, 8));
console.log(lyrics.substring(4, 8));


// join
const lines =[
    'ami bondhu kala paKhi tmi jno ki',
    ' boshontw kale tmy dekhte pari ni',
    ' Shada shada kala kala rong jomeche shada kala',
    ' hoichi ami mon pagla tomari ghore '
  ];
  console.log(lines.join('!'));
