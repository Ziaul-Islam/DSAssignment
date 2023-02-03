function debug(){
    let i = 1;

   
        setInterval(()=>{
            console.log('stop '+ i++);

        }, 1000); 
}
    
debug();