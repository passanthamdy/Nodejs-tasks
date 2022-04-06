function sendInfo(name,date){
    var thisYear=new Date().getFullYear();
    

    if(date>=thisYear|| date==2021){
        return "your birthdate is not valid"
    }else{
        var birthdate=thisYear- date;
        return "hello "+name+" , your age is "+birthdate+" "
    }
}
module.exports = {
    sendInfo :sendInfo
}