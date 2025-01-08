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
        for(let j=0;j<arr.length;j++){
            
            if(i==0||i==arr.length-1||j==0||j==arr.length-1){
                bag+=arr[i][j]
            }
        }
    }
                console.log(bag)
}


let N =3
let M = 3
CircularTraversal(N,M)
