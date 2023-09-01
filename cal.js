let num_before_opp,num_after_opp=0,result,opr=0,sta=0;
let calname=prompt("enter your name");
console.log('calname='+calname);
let ccalname=calname.toUpperCase();
console.log('ccalname='+ccalname);
// document.getElementById("calname").innerHTML=ccalname;
document.getElementsByClassName("jj")[0].innerHTML=ccalname;
function btn(val){
    document.getElementById("screenid").value=document.getElementById("screenid").value+val;
}
function opp(opp){
    num_before_opp=Number(document.getElementById('screenid').value);
    opr=opp;
    console.log("opp= "+opr)
     clear("")
     console.log('num_before_opp ='+num_before_opp)
    }
function clear(clr){
    document.getElementById('screenid').value=clr;
}
function equal(equal){
    num_after_opp=Number(document.getElementById('screenid').value);
    console.log('num_after_opp= '+num_after_opp)
    console.log("opp= "+opr)
    clear("")
    switch(opr){
        case "+":
            result=num_before_opp+num_after_opp;  
            console.log('result='+result);
            document.getElementById('screenid').value=+result;
            break;
        case "-":
            result=num_before_opp-num_after_opp;  
            console.log('result='+result);
            document.getElementById('screenid').value=+result; 
            break;   
        case '*':
            result=num_before_opp*num_after_opp;  
            console.log('result='+result);
            document.getElementById('screenid').value=+result; 
            break;
        case "/":
            result=num_before_opp/num_after_opp;
            console.log("result="+result);
            document.getElementById('screenid').value=+result;                
        default:
    }
}
function clr(clear){
    document.getElementById('screenid').value=clear;
    num_after_opp=0;
    num_before_opp=0;
    opr='';
}
function del(){
  let del,dele;
  del=document.getElementById("screenid").value;
  dele=del.length
  let nn=(del.length-1)
  console.log("nn="+nn)
  console.log(dele)
  console.log(del)
  del=del.replace(del[nn],"")
  console.log(del)
  document.getElementById("screenid").value=del;

}
function ofon(){
   sta++;
   let info;
   switch(sta%2){
    case 0:
     info="OFF"
    document.getElementById("screenid").value=info
    console.log('screen is off');
    break;
    default:
        console.log("on"+sta);
        break;
   }
}