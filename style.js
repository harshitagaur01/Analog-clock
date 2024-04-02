setInterval(() => {
    d= new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hourh=30*h+m/2;
    minh=6*m;
    sech=6*s;
    hour.style.transform=`rotate(${hourh}deg)`;
    minute.style.transform=`rotate(${minh}deg)`;
    seconds.style.transform=`rotate(${sech}deg)`;
},1000);
