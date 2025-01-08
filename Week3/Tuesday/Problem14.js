function Pattern(N){
    for(let i=0;i<N;i++){
        let bag = ""
        if(i==0 || i==N-1){
            for(let j=0;j<N;j++){
                    bag = bag+ "* ";
                }
        }else{
            
             console.log("* ")
        }
    console.log(bag)
        
    }
}