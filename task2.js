function checkYuGiOh(integer){
  let integers = [];

  // iteration and conditional statements
  for (let i=1; i<=integer; i++){
 if( i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
		    	 integers.push("yu-gi-oh");
    
				    }

 else if(i % 2 === 0 && i % 3 === 0){
		    	integers.push("yu-gi");
		    }
		   
   else if (i % 2 === 0 ){
    	integers.push("yu");
    } 
		    else if(i % 3 === 0){
		    	integers.push("gi");
		    }
		    
		    else if( i % 5 ===0){
		    	integers.push("oh"); 
		    }

		    else if(isNaN(parseInt(n))){
             integers.push(n, 'invalid parameter');
         }
else {
integers.push(i)
}
		    
    }
   return integers;
}

 // call any integer
console.log (checkYuGiOh (10));