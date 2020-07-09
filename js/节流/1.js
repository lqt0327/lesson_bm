function throttle(func,wait) {
    var previous = 0;
    var time = null;
    return function() {
        var now = new Date().getTime();
        const remain =wait - now + previous
        if(now - previous > wait) {
            func();
            previous = now;
        }else if(!time) {
            time = setTimeout(() => {
                func();
                time = null;
                previous = new Date().getTime();
              }, remain);
        }
    }
}