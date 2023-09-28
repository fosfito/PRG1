const array = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
console.log(array)
let pos1;
let pos2;
let auxiliar;

for (let i = 0; i < 5; i++) 
    {
        pos1=Math.floor(Math.random() * 15);
        pos2=Math.floor(Math.random() * 15);
        auxiliar=array[pos1]
        array[pos1]=array[pos2]
        array[pos2]=auxiliar


    }
    console.log(array)