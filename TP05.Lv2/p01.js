//invertir un array

const ar=[1,2,3,4,5,"papa"]

function inversa(ar)
{
    const rdo=[];
    for (let i = 0; i < ar.length; i++) {
        rdo[i]=ar[ar.length-1-i]
        

    }
    return rdo
}
alert(inversa(ar))