let arr=[3,3,4,4,5,5,6,6];
let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
}
console.log(count);