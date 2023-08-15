let arr=[2,3,4,6,8,1];
let target=10;
let result="";
for(let i=0;i<arr.length-1;i++){
    for(let j=i;j<arr.length-1;j++){
        if(arr[i]+arr[j]==target){
            result+=j;
        }
    }
}
console.log(result);