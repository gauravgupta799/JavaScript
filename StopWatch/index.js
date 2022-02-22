window.onload = ()=>{

    let seconds = 0;
    let tens = 0;

    let buttonStart = document.querySelector('#btn-start');
    let buttonStop =  document.querySelector('#btn-stop')
    let buttonReset = document.querySelector('#btn-reset')

    let Seconds = document.querySelector('#seconds');
    let Tens = document.querySelector('#tens');
    let interval;

    buttonStart.onclick = ()=> {
        this.clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = ()=> {
        this.clearInterval(interval);
        
    }

    buttonReset.onclick = ()=> {
        this.clearInterval(interval);
        tens = "00";
        seconds = "00";
        Tens.innerHTML = tens;
        Seconds.innerHTML = seconds;
    }

    const startTimer = ()=>{
        tens++;
        tens < 9 ? Tens.innerHTML = '0'+ tens : Tens.innerHTML = tens; 
        if(tens > 99){
          seconds ++;
          Seconds.innerHTML = '0'+ seconds;
          tens = 0;
          Tens.innerHTML = '0'+ 0;
        }

        if(seconds > 9){
            Seconds.innerHTML  = seconds ;
        }
    }
}