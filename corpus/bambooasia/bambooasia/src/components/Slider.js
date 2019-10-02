import React from 'react'
import styled from 'styled-components'
import jQuery from "jquery";
import { Link } from 'gatsby'
import sliderCSS from '../styles/slider';

let $;
if (typeof window !== 'undefined') {
  $ = window.$ = window.jQuery = window.jquery = jQuery;
}

const handleScriptLoad = () => {
  if(typeof document !== 'undefined') {
    let s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/js/jquery.themepunch.tools.min.js";
    document.body.appendChild(s);

    s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/js/jquery.themepunch.revolution.min.js";
    document.body.appendChild(s);
  }
};

const waitForEl = function(selector, method, callback) {
  let timeout = null;
  if (!method && jQuery(selector).length) {
    clearTimeout(timeout);
    callback();
  }
  else if (method && typeof jQuery(selector)[method] !== 'undefined') {
    clearTimeout(timeout);
    callback();
  } else {
    timeout = setTimeout(function () {
      waitForEl(selector, method, callback);
    }, 10);
  }
};

let sliderLoaded = false;

class Slider extends React.Component {
  componentWillMount() {
    if(!sliderLoaded) {
      handleScriptLoad();
      sliderLoaded = true;
    }

    initSlider();
  }

  render() {
    const { data } = this.props;
    if (!data) return null

    return <>
      <style dangerouslySetInnerHTML={{ __html: sliderCSS }}/>
      <FlatSliderContainer>
        <BannerContainer>
          <div className="tp-banner" style={{ display: 'none' }}>
            <ul>
              {data.slides.map((slide, index) => {
                return (
                  <li key={'slide_'+index} data-transition="random-static" data-slotamount="7" data-masterspeed="1000" data-saveperformance="on">
                    {slide.image ? <img src={slide.image.fluid.src}/> : null}

                    {slide.headline ? <div className="tp-caption sfl title-slide style6" data-x="140" data-y="320" data-speed="1500" data-start="1500" data-easing="Sine.easeInOut">
                      {slide.headline}
                    </div> : null}
                    {slide.headline ? <div className="tp-caption sfr description-slider style1" data-x="140" data-y="450" data-speed="1000" data-start="1500" data-easing="Power3.easeInOut">
                      {slide.subHeadline}
                    </div> : null}
                  </li>
                )
              })}
            </ul>
            <div id="slider-counter">
              {data.slides.map((link, index) => {
                return (
                  <a key={index} href="" data-id={index}><span>0{index}</span></a>
                )
              })}
            </div>
          </div>
          <div className="flat-vertical social-links">
            <a href="https://www.instagram.com/bambooasia/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" />
            </a>
            <span>FOLLOW US</span>
          </div>
          <div className="flat-vertical reservation">
            <Link to={'/order-online'}>
              ORDER ONLINE
            </Link>
          </div>
        </BannerContainer>
      </FlatSliderContainer>
    </>
  }
}

const initSlider = () => {
  if (typeof document !== 'undefined') {
    $(document).ready(function() {
      waitForEl('.tp-banner', 'revolution', function() {

        const revapi1 = $('.tp-banner').show().revolution({
          dottedOverlay: "none",
          delay: 6000,
          startwidth: 1170,
          startheight: 853,
          hideThumbs: 200,

          thumbWidth: 100,
          thumbHeight: 50,
          thumbAmount: 5,

          navigationType: "bullet",
          navigationArrows: "solo",
          navigationStyle: "square",

          touchenabled: "on",
          onHoverStop: "on",

          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,

          parallax: "mouse",
          parallaxBgFreeze: "on",
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

          keyboardNavigation: "off",

          navigationHAlign: "center",
          navigationVAlign: "bottom",
          navigationHOffset: 0,
          navigationVOffset: 20,

          soloArrowLeftHalign: "left",
          soloArrowLeftValign: "center",
          soloArrowLeftHOffset: 20,
          soloArrowLeftVOffset: 0,

          soloArrowRightHalign: "right",
          soloArrowRightValign: "center",
          soloArrowRightHOffset: 20,
          soloArrowRightVOffset: 0,

          shadow: 0,
          fullWidth: "on",
          fullScreen: "off",

          spinner: "spinner4",

          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,

          shuffle: "off",

          autoHeight: "off",
          forceFullWidth: "off",

          hideThumbsOnMobile: "off",
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: "off",
          hideArrowsOnMobile: "off",
          hideThumbsUnderResolution: 0,

          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          startWithSlide: 0,
          fullScreenOffsetContainer: "",

          disableProgressBar: "on"
        });
        revapi1.bind("revolution.slide.onloaded", function(e, data) {
          // $("#slider-counter .current-number").text( add_zero_num(revapi1.revcurrentslide(),2) );
          // $("#slider-counter .total-numbers").text( add_zero_num(revapi1.revmaxslide(),2) );
        });

        revapi1.bind("revolution.slide.onchange", function(e, data) {
          // $("#slider-counter .current-number").text( add_zero_num(revapi1.revcurrentslide(),2) );
          // $("#slider-counter .total-numbers").text( add_zero_num(revapi1.revmaxslide(),2) );
          const $dataID = 'a[data-id=' + revapi1.revcurrentslide() + ']';
          $("#slider-counter a").removeClass("active");
          $("#slider-counter " + $dataID).addClass("active");
        });
        $("#slider-counter a").on('click', function(e) {
          e.preventDefault();
          revapi1.revshowslide($(this).data('id'));
        })
      })
    })
  }
};

const FlatSliderContainer = styled.div`
	position: relative;
	width: 100%;
`

const BannerContainer = styled.div`
	max-height: 853px !important;
	width: 100% !important;
	position: relative;
	padding: 0;
	background-color: #fff;

  #slider-counter a {
    font-size: 12px;
    color: #000000;
    font-family: 'BrownProRegular', sans-serif;
    font-weight: 400;
  }

  #slider-counter a.active {
    color: #ffffff;
    position: relative;

  }


  #slider-counter a.active:before {
    content: "";
    position: absolute;
    width: 49px;
    height: 2px;
    background-color: #ffffff;
    top: 50px;
    right: -7px;
    transform: rotate(-90deg) !important;
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    transform-origin: 0% 50%;
    -webkit-transform-origin: 0% 50%;
    -o-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    -moz-transform-origin: 0% 50%;
  }
`

export default Slider
