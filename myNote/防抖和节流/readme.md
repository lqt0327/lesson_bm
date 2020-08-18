## throttle
throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。
```js
<style>
    body{
        height: 10000px;
    }
</style>
<body></body>
<script>
    function throttle(fn,delay){
        let last = 0;
        return function(){
            let now = +new Date();
            let _this = this;
            let args = arguments;
            if(now - last > delay) {
                fn.apply(_this,args);
                last=now;
            }
        }
    }
    document.addEventListener('scroll',throttle(()=>{console.log('scroll')},1000))
</script>
```

## debounce
防抖的中心思想在于：我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次。
```js
<style>
    body {
        height: 10000px;
    }
</style>
<body>

</body>
<script>
    function debounce(fn,delay) {
        let time = null;
        return function() {
            let _this = this;
            let args = arguments;
            if(time){
                clearTimeout(time);
            }
            time = setTimeout(()=>{
                fn.apply(_this,args);
                clearTimeout(time);
            },delay)
        }
    }
    document.addEventListener('scroll',debounce(()=>{console.log('scroll')},1000))
</script>
```