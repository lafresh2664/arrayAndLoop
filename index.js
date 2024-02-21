// ....For Loop....

let joshArr = ["BMW","Tesla","Lamborghani", "Porshe"];

for (i = 0; i < joshArr.length; i++){
    console.log(joshArr[i]);
}

let johnArr = [2,3,6,324,34,546,656];
maxNo = [0];
minNo = [1000];

for (i = 0; i < johnArr.length; i++){
    if (johnArr[i] > maxNo){
        maxNo = johnArr[i];
    }
    if (johnArr[i] < minNo){
        minNo = johnArr[i];
    }
}

console.log(maxNo);
console.log(minNo);