function arrPrintByRow(Row,Column){
    
    let arr = []
    let count=1
    for(let i = 0;i<Row;i++){
        arr[i]=[]
        for(let j=0;j<Column;j++){
            arr[i][j]=count++
        }    
    }
    // console.log(arr);
    for(let i=0;i<arr.length;i++){
        let bag =""
        for(let j=0;j<arr.length-1;j++){
            bag = bag + arr[i][j] + " "
        }
        console.log(bag)
    }

}

let N = 3
let M = 2

arrPrintByRow(N,M)