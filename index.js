let toggle = document.querySelector('.toggle');
let body = document.querySelector('.body');

toggle.addEventListener ('click' , function) {
    body.classList.toggle('open');
}


let res = 0;
const numberOfSocks = frequencies(ar);

for (let key in numberOfSocks) {
    res += Math.floor(numberOfSocks[key] / 2);
}
return res;


let valleys = 0;
let level = 0;
for (const step of path){
    let prev = level;
    level = step === 'u' ? level +1 : level -1;
    if(
        prev == -1 && level == 0
    )
    valleys++;
}
return valleys;



