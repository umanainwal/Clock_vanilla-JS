setInterval(() =>{           //means...repeated...after every 1000milisecond
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;      //first division thn multiply thn plus
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// setInterval: A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.

// why we use backticks in javascript?
// makes it easier for string operations.
// they also act similar to single and double quotes("" , '').