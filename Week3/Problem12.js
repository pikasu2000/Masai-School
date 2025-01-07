function SumOfIndex(N,M){
    let arr= []
    let val=1;
    for(let i=0;i<N;i++){
        arr[i]=[]
        for(let j=0;j<M;j++){
            arr[i][j]=val++
        }
    }

    let sum=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<=arr.length;j++){
            sum+=arr[i][j]
        }
    }
    return sum;
    

}
let N =2
let M=3

let SumOfArray = SumOfIndex(N,M)
console.log(SumOfArray)