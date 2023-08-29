for (let i = 1; i < 501; i++) {
    if((i%4==0)&&(i%9==0))
    {
        console.log(i+" Es divisor de 4 y 9");
    }
    else
    {
        if(i%5==0)
        {
            console.log(i+ " -------------");
        }
        else
        {
            console.log(i);
        }
    }
    
}