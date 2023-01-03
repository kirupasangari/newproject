const input=document.getElementById("countdown");
const time=10;


setTimeout(()=>{
document.getElementById("demo").innerHTML = time;
setTimeout(()=>{
    document.getElementById("demo").innerHTML = time-1;
    setTimeout(()=>{
        document.getElementById("demo").innerHTML = time-2;
        setTimeout(()=>{
            document.getElementById("demo").innerHTML = time-3;
            setTimeout(()=>{
                document.getElementById("demo").innerHTML = time-4;
                setTimeout(()=>{
                    document.getElementById("demo").innerHTML = time-5;
                    setTimeout(()=>{
                        document.getElementById("demo").innerHTML = time-6;
                        setTimeout(()=>{
                            document.getElementById("demo").innerHTML = time-7;
                            setTimeout(()=>{
                                document.getElementById("demo").innerHTML = time-8;
                                setTimeout(()=>{
                                    document.getElementById("demo").innerHTML = time-9;
                                    setTimeout(()=>{
                                        document.getElementById("demo").innerHTML = "Happy Independence Day !";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},(1000));
