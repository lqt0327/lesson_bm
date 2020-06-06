import echo from '../libs/echo';

function lazyImg() {
    echo.init({
        offset : 100,//可是区域多少像素可以被加载
        throttle : 0 //设置图片延迟加载的时间
    });
}

function setScrollTop(val=0){
    setTimeout(()=>{
        document.body.scrollTop=val;
        document.documentElement.scrollTop=val;
    },300);
}

export {
    lazyImg,
    setScrollTop
}