import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Singlesday from "./Homepage-Images/Singles-Day.jpeg";
import Page from "./Homepage-Images/1683168223.jpg";
import Page1 from "./Homepage-Images/1682333765.jpg";
import Page2 from "./Homepage-Images/1683192404.jpg";
import Page3 from "./Homepage-Images/1686219958.webp";

import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
const BgElement = Element.BgElement;

function Slider() {
  return (
    <BannerAnim prefixCls="maindivhai" autoPlay autoPlaySpeed={3000}>
      <Element prefixCls="banner-user-elem" key="0">
        <BgElement

          className="bg"
          style={{
            backgroundImage: `url(${Page3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="1">
        <BgElement

          className="bg"
          style={{
            backgroundImage: `url(${Page})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="2">
        <BgElement

          className="bg"
          style={{
            backgroundImage: `url(${Page1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
      <Element prefixCls="banner-user-elem" key="3">
        <BgElement

          className="bg"
          style={{
            backgroundImage: `url(${Page2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <TweenOne
          className="banner-user-title"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
        <TweenOne
          className="banner-user-text"
          animation={{ y: 30, opacity: 0, type: "from" }}
        ></TweenOne>
      </Element>
    </BannerAnim>
  );

}

export default Slider;
