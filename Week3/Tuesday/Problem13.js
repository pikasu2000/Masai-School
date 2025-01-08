function ZigZagArray(Row,Column){
    let arr = []
    let count = 0
    for(let i=0;i<Row;i++){
        arr[i]=[]
        for(let j=0;j<Column;j++){
            arr[i][j]=count++
        }
    }
    console.log(arr)
    let bag = ""
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            for(let j=arr[i].length-1;j>=0;j--){
                // console.log(arr[i][j])
                bag+=arr[i][j]+" "
            }
        }
        else{
            for(let k=0;k<arr[i].length;k++){
                // console.log(arr[i][k])
                 bag+=arr[i][k]+" "
            }
        }
        
    }console.log(bag)
}





let N= 5
let M =5

ZigZagArray(N,M)

