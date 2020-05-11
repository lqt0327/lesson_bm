import React from 'react';
import Swiper from './components/swiper';
import "./assets/css/app.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            images2: []
        };
    }
    componentDidMount() {
        setTimeout(()=>{
            let images = [
                { src: require("./assets/images/banner1.jpg"), url: "https://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=875.7931836/B.2016006.d6.66144265aPX4zF&trackInfo=20160815100101;64866506034;287638;587431337429;3;287638_587431337429;1007.14152.68669.100200300000000;92ba02ea-a2a8-4bbe-99ac-d5c3abf2eba5;3;0;10000002&item_id=587431337429&pvid=92ba02ea-a2a8-4bbe-99ac-d5c3abf2eba5&pos=3&activity_id=287638&wh_pid=industry-170400&acm=07055.1003.1.2519102&scm=1003.1.20160815.OTHER_0_6801489" },
                { src: require("./assets/images/banner2.jpg"), url: "https://pages.tmall.com/wow/a/act/tmall/tmc/23759/wupr?spm=875.7931836/B.2016006.d1.66144265aPX4zF&trackInfo=20160815100101;64950842484;288994;530549532317;3;288994_530549532317;1007.14152.68669.100200300000000;92ba02ea-a2a8-4bbe-99ac-d5c3abf2eba5;1;0;10000002&item_id=530549532317&pvid=92ba02ea-a2a8-4bbe-99ac-d5c3abf2eba5&pos=1&activity_id=288994&wh_pid=industry-170636&acm=07055.1003.1.2519102&scm=1003.1.20160815.OTHER_0_6810849" },
                { src: require("./assets/images/banner3.jpg"), url: "https://www.tmall.com/wow/brand/act/fashion?acm=lb-zebra-2386-265936.1003.4.410386&scm=1003.4.lb-zebra-2386-265936.OTHER_1_410386&ali_trackid=19_4803ba43894904cab9c8c08820f2e4a5&spm=875.7931836/B.2016006.d2" }
            ];
            this.setState({images:images});console.log(this.state.images[0].src);
        },400)
        
    }
    render() {
        return (
            <div className="App">
                <div className="banner">
                    <Swiper data={this.state.images} />
                </div>
            </div>
        )
    }
}

export default App;
