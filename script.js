function addEq(){
   let newNode1=document.createElement('textarea');
   newNode1.classList.add("equalification");
   newNode1.setAttribute("rows", 3);
   newNode1.setAttribute("placeholder","Enter Here");
   let eQ=document.getElementById("eQ");
   let addeq=document.getElementById("addeq");
   eQ.insertBefore(newNode1, addeq);
   let html="<br>";
   newNode1.insertAdjacentHTML("afterend", html);
}
function addWe(){
   let newNode2=document.createElement('textarea');
   newNode2.classList.add("wExperience");
   newNode2.setAttribute("rows", 3);
   newNode2.setAttribute("placeholder","Enter Here");
   let wEx=document.getElementById("wEx");
   let addwe=document.getElementById("addwe");
   wEx.insertBefore(newNode2, addwe);
   let html="<br>";
   newNode2.insertAdjacentHTML("afterend", html);
}
function AddTs(){
   let newNode3=document.createElement('textarea');
   newNode3.classList.add("Tskills");
   newNode3.setAttribute("rows", 3);
   newNode3.setAttribute("placeholder","Enter Here");
   let Tsk=document.getElementById("Tsk");
   let addTski=document.getElementById("addTski");
   Tsk.insertBefore(newNode3, addTski);
   let html="<br>";
   newNode3.insertAdjacentHTML("afterend", html);
}
function AddSs(){
   let newNode4=document.createElement('textarea');
   newNode4.classList.add("Sskills");
   newNode4.setAttribute("rows",3);
   newNode4.setAttribute("placeholder","Enter Here");
   let Ssk=document.getElementById("Ssk");
   let addSski=document.getElementById("addSski");
   Ssk.insertBefore(newNode4, addSski);
   let html="<br>";
   newNode4.insertAdjacentHTML("afterend", html);
}
//Getting elements
function makeCV(){
let nameField=document.getElementById('name').value;
document.getElementById('dname').innerHTML=`<h3>${nameField}</h3>`;
let fnameField=document.getElementById('fname').value;
document.getElementById('dfname').innerHTML=`<p>${fnameField}</p>`;
let mnameField=document.getElementById('mname').value;
document.getElementById('dmname').innerHTML=`<p>${mnameField}</p>`;
let mNumber=document.getElementById('mnumber').value;
document.getElementById('dmnumber').innerHTML=`<p>${mNumber}</p>`;
let eMail=document.getElementById('email').value;
document.getElementById('demail').innerHTML=`<p>${eMail}</p>`;
let lProfile=document.getElementById('linkdinProfile').value;
document.getElementById('dlprofile').innerHTML=`<a style="font-size: 8px";>${lProfile}</a>`;
document.getElementById('dlprofile').setAttribute('href',lProfile);
let objective=document.getElementById('objective').value;
document.getElementById('dobjective').innerHTML=`<p>${objective}</p>`;
//photo
let file=document.getElementById("photo").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend=function(){
   document.getElementById("dphoto").src=reader.result;
}
//Educational Qualifications
let Eq=document.getElementsByClassName("equalification");
let str1='';
for(let e of Eq){
   str1=str1+`<li>${e.value}</li>`;
}
document.getElementById("dQuali").innerHTML=str1;
//Educational Qualifications
let We=document.getElementsByClassName("wExperience");
let str2='';
for(let e of We){
   str2+=`<li>${e.value}</li>`;
}
document.getElementById("dwExpe").innerHTML=str2;
//Technical Skilss
let Ts=document.getElementsByClassName("Tskills");
let str3='';
for(let e of Ts){
   str3+=`<li>${e.value}</li>`;
}
document.getElementById("dTSkill").innerHTML=str3;
//Soft Skills
let Ss=document.getElementsByClassName("Sskills");
let str4='';
for(let e of Ss){
   str4+=`<li>${e.value}</li>`;
}
document.getElementById("dSskill").innerHTML=str4;
document.getElementById("cv_form").style.display='none';
document.getElementById("cv_template").style.display='flex';
}
function printCV(){
   document.getElementById("header").style.display='none';
   document.getElementById("print").style.display='none';
   window.print();
}