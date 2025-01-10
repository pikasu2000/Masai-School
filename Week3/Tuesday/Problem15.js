function CircularTraversal(Rows,Columns){
    let arr = []
    let val = 1
    for(let i=0;i<Rows;i++){
        arr[i]=[]
        for(let j=0;j<Columns;j++){
            arr[i][j]=val++
        }
    }
    console.log(arr)
    
    let bag = ""
    for(let i=arr.length-1;i>=0;i--){
        // console.log(arr[i])

                bag+=arr[i][0]

    }

}


let N =3
let M = 3
CircularTraversal(N,M)
