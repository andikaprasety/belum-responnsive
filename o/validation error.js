
// todo 1
class ValidationError extends Error{
    constructor(message){
    super(message);
    this.name="ValidationError";
    }
}
    try {
        const arr = [1, 2, 3, 4];
        for (let i = 0; i <= 4; i++) {
            console.log(arr[i]);
        }
    } catch(e) {
        console.log("Out of bounds");
    }
    
    // TODO 2
    // function validateNumberInput (a, b, c){
    //   try{
    //     if(typeof(a)!=='number')
    //     {throw new ValidationError("Argumen pertama harus number");}
    //     if(typeof(b)!=='number')
    //     {throw new ValidationError("Argumen kedua harus number");}
    //     if(typeof(c)!=='number')
    //     {throw new ValidationError("Argumen ketiga harus number");}
    //   }ct detectTriangle = (a, b, c) => {
    //   // TODO 3
    //     try{
    //       const check = validateNumberInput(a,b,c);
    //       if(check === undefined){
    //         if (a === b && b === c) {
    //     return 'Segitiga sama sisi';
    //   }
    
    //   if (a === b || a === c || b === c) {
    //     return 'Segitiga sama kaki';
    //   }
    //   return 'Segitiga sembarang';
    //       }else{
    //         const isi = validateNumberInput(a,b,c); 
    //         return isi;
    //       }
    //     }
    //   catch(error){
    //     const isi = validateNumberInput(a,b,c); 
    //         return isi;
    //   }
    // };
    // console.log(detectTriangle(1,false,1));
    // console.log(detectTriangle('a', 3, 5));
    // console.log(detectTriangle(12,2,null));
    
    // module.exports = { ValidationError, validateNumberInput, detectTriangle };atch(error){
    //     return `${error.message}`;
    //   }
    // }
    
    // cons