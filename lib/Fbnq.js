
function Fbnq(n){
    if(n==1){
        return 1
    }
    if(n==2){
        return 1
    }
    // return false;
    else{
        return Fbnq(n-1)+Fbnq(n-2)
    } 

}
 module.exports=Fbnq