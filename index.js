const clock= document.querySelector(".clock");
const container = document.querySelector(".container");

let sec=0,
    min=0,
    hr=0,
    intervalId;

let seconds,minutes,hours,time;

const startStopwatch =()=>{
    intervalId = setInterval(() => {
        if(sec<59){
            sec++;
        } else if(min>59){
            min=0;
            hr++;
        } else{
            sec=0;
            min++;
        }

        seconds = String(sec).padStart(2,"0");
        minutes= String(min).padStart(2,"0");
        hours = String(hr).padStart(2,"0");
        time=`${hours}:${minutes}:${seconds}`
        console.log(time);
        clock.innerText=time;


    }, 1000);
}

const stopStopwatch = ()=>{
    clearInterval(intervalId);

    const para = document.createElement("p");
    para.innerText=time;
    para.setAttribute("class","paras");
    container.append(para);
    

}