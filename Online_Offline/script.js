const titleTarget = document.querySelector('p[id="title"] span');
const section = document.querySelector('.section')

if(window.navigator.onLine){
   setOnline();
}else{
    setOffline();
}

window.addEventListener('online', ()=>{
    setOnline();
});

window.addEventListener('offline', ()=>{
    setOffline();
})

function setOnline(){
   titleTarget.textContent = "Online 🧐";
   titleTarget.style.color = "green";
   section.style.border = "2px solid green";
}

function setOffline(){
    titleTarget.textContent = "Offline 🙄";
    titleTarget.style.color = "red";
    section.style.border = "2px solid red";
}