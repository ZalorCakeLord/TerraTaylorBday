function isIt() {
    let currentdate = new Date();
    let daymonth = (currentdate.getMonth()+1) + "/"
        + currentdate.getDate()
        
    if(daymonth==='4/27') return true
    return [currentdate.getMonth()+1,currentdate.getDate()]
  }
  
function update() {
    let verify = isIt()
    if(verify===true){
        return document.getElementById('bday').innerHTML='HAPPY BIRTHDAY!!!!';
    }
    let remaining = ''
    if(verify[0]>4){
        return document.getElementById('bday').innerHTML=`Your birthday happened ${verify[0]-4} months ago!`;
    }
    if(verify[0]<4){
        return document.getElementById('bday').innerHTML=`Your birthday is in ${4-verify[0]} months!`;
    }
    if(verify[1]>27){
        return document.getElementById('bday').innerHTML=`Your birthday was ${verify[1]-27} days ago!!`;
    }
    if(verify[1]<26){
        return document.getElementById('bday').innerHTML=`Your birthday is in ${27-verify[1]} days!! Get excited!`;
    }
    if(verify[1]===26){
        return document.getElementById('bday').innerHTML=`BIRTHDAY TOMORROW YEAAHHHHHHHHHHHHH!!!!!!!!!!!!! Get EXCITED!!!!!!!!!!`;
    }
}







setInterval(update, 1000);
  