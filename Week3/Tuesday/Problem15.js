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
    for(let j =1;j<arr.length;j++){
      bag+=arr[0][j]
    }
    for(let k =1;k<arr.length;k++){
      bag+=arr[k][2]
    }
      bag+=arr[2][1]
    
    console.log(bag)
}


let N =3
let M = 3
CircularTraversal(N,M)
