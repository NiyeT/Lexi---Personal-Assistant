// all revolution slider related css
// keep these out of the js that gets processed
// too big will slow the site down

export default `
.flat-vertical {
	display: inline-block;
	position: absolute;
	top: 47.8%;
	transform: translate(-50%,50%) rotate(-90deg);
	-ms-transform: translate(-50%,50%) rotate(-90deg);
	-webkit-transform: translate(-50%,50%) rotate(-90deg);
	z-index: 10000;
	color:black;
}

.flat-vertical .fa {

  font-size: 14px;
}

.flat-vertical a {
  color: black;
  text-decoration: none;
}

.flat-vertical a:hover, .flat-vertical a:active {
      color: #F26722;
    text-decoration: none;
    outline: 0;
  }

.flat-vertical.social-links a {
  margin: 10px;
	transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-webkit-transform: rotate(90deg);
	display: inline-block;
}

.flat-vertical.social-links {
	left: -2%;
}

.flat-vertical.social-links span:after {
	content: '';
	height: 1px;
	width: 40px;
	background: #b5b5b5;
	left: 5px;
	top: 36%;
	position: absolute;
}

.flat-vertical.social-links span {
	padding-left: 65px;
	position: relative;
	letter-spacing: 1px;
}

.wide.flat-vertical.social-links,
.wide.flat-vertical.reservation {
	display: none;
}

.flat-vertical.reservation {
	right: -1.2%;
	transform: translate(50%,50%) rotate(90deg);
	-ms-transform: translate(50%,50%) rotate(90deg);
	-webkit-transform: translate(50%,50%) rotate(90deg);
	top: 47.1%;
	letter-spacing: 1.2px;
}

.flat-sliders-container {
	position: relative;
	width: 100%;
}

.flat-vertical.social-links a,
.flat-vertical.social-links span,
.flat-vertical.reservation {
	font-size: 12px;
	font-weight: 700;
}

/*-----------------------------------------------------------------------------

	-	Revolution Slider 4.1 Captions -

		Screen Stylesheet

version:   	1.4.5
date:      	27/11/13
author:		themepunch
email:     	info@themepunch.com
website:   	http://www.themepunch.com
-----------------------------------------------------------------------------*/



/*************************
	-	CAPTIONS	-
**************************/

.tp-static-layers	{	position:absolute; z-index:505; top:0;left:0px}

.tp-hide-revslider,.tp-caption.tp-hidden-caption	{	visibility:hidden !important; display:none !important}


.tp-caption { z-index:1; white-space:nowrap}

.tp-caption-demo .tp-caption	{	position:relative !important; display:inline-block; margin-bottom:10px; margin-right:20px !important}


.tp-caption.whitedivider3px {

	color: #000000;
	text-shadow: none;
	background-color: rgb(255, 255, 255);
	background-color: rgba(255, 255, 255, 1);
	text-decoration: none;
	min-width: 408px;
	min-height: 3px;
	background-position: initial initial;
	background-repeat: initial initial;
	border-width: 0px;
	border-color: #000000;
	border-style: none;
}


.tp-caption.finewide_large_white {
color:#ffffff;
text-shadow:none;
font-size:60px;
line-height:60px;
font-weight:300;
font-family:"Open Sans", sans-serif;
background-color:transparent;
text-decoration:none;
text-transform:uppercase;
letter-spacing:8px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.whitedivider3px {
color:#000000;
text-shadow:none;
background-color:rgb(255, 255, 255);
background-color:rgba(255, 255, 255, 1);
text-decoration:none;
font-size:0;
line-height:0;
min-width:468px;
min-height:3px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.finewide_medium_white {
color:#ffffff;
text-shadow:none;
font-size:37px;
line-height:37px;
font-weight:300;
font-family:"Open Sans", sans-serif;
background-color:transparent;
text-decoration:none;
text-transform:uppercase;
letter-spacing:5px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.boldwide_small_white {
font-size:25px;
line-height:25px;
font-weight:800;
font-family:"Open Sans", sans-serif;
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
text-shadow:none;
text-transform:uppercase;
letter-spacing:5px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.whitedivider3px_vertical {
color:#000000;
text-shadow:none;
background-color:rgb(255, 255, 255);
background-color:rgba(255, 255, 255, 1);
text-decoration:none;
font-size:0;
line-height:0;
min-width:3px;
min-height:130px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.finewide_small_white {
color:#ffffff;
text-shadow:none;
font-size:25px;
line-height:25px;
font-weight:300;
font-family:"Open Sans", sans-serif;
background-color:transparent;
text-decoration:none;
text-transform:uppercase;
letter-spacing:5px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.finewide_verysmall_white_mw {
font-size:13px;
line-height:25px;
font-weight:400;
font-family:"Open Sans", sans-serif;
color:#ffffff;
text-decoration:none;
background-color:transparent;
text-shadow:none;
text-transform:uppercase;
letter-spacing:5px;
max-width:470px;
white-space:normal !important;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.lightgrey_divider {
text-decoration:none;
background-color:rgb(235, 235, 235);
background-color:rgba(235, 235, 235, 1);
width:370px;
height:3px;
background-position:initial initial;
background-repeat:initial initial;
border-width:0;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.finewide_large_white {
color: #FFF;
text-shadow: none;
font-size: 60px;
line-height: 60px;
font-weight: 300;
font-family: "Open Sans", sans-serif;
background-color: rgba(0, 0, 0, 0);
text-decoration: none;
text-transform: uppercase;
letter-spacing: 8px;
border-width: 0px;
border-color: #000;
border-style: none;
}

.tp-caption.finewide_medium_white {
color: #FFF;
text-shadow: none;
font-size: 34px;
line-height: 34px;
font-weight: 300;
font-family: "Open Sans", sans-serif;
background-color: rgba(0, 0, 0, 0);
text-decoration: none;
text-transform: uppercase;
letter-spacing: 5px;
border-width: 0px;
border-color: #000;
border-style: none;
}

.tp-caption.huge_red {
position:absolute;
color:rgb(223,75,107);
font-weight:400;
font-size:150px;
line-height:130px;
font-family: 'Oswald', sans-serif;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
background-color:rgb(45,49,54);
padding:0;
}

.tp-caption.middle_yellow {
position:absolute;
color:rgb(251,213,114);
font-weight:600;
font-size:50px;
line-height:50px;
font-family: 'Open Sans', sans-serif;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.huge_thin_yellow {
	position:absolute;
color:rgb(251,213,114);
font-weight:300;
font-size:90px;
line-height:90px;
font-family: 'Open Sans', sans-serif;
margin:0;
letter-spacing: 20px;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.big_dark {
position:absolute;
color:#333;
font-weight:700;
font-size:70px;
line-height:70px;
font-family:"Open Sans";
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.medium_dark {
position:absolute;
color:#333;
font-weight:300;
font-size:40px;
line-height:40px;
font-family:"Open Sans";
margin:0;
letter-spacing: 5px;
border-width:0;
border-style:none;
white-space:nowrap;
}


.tp-caption.medium_grey {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:20px;
line-height:20px;
font-family:Arial;
padding:2px 4px;
margin:0;
border-width:0;
border-style:none;
background-color:#888;
white-space:nowrap;
}

.tp-caption.small_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:14px;
line-height:20px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.medium_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:20px;
line-height:20px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}


.tp-caption.large_bold_white_25 {
font-size:55px;
line-height:65px;
font-weight:700;
font-family:"Open Sans";
color:#fff;
text-decoration:none;
background-color:transparent;
text-align:center;
text-shadow:#000 0px 5px 10px;
border-width:0;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.medium_text_shadow {
font-size:25px;
line-height:25px;
font-weight:600;
font-family:"Open Sans";
color:#fff;
text-decoration:none;
background-color:transparent;
text-align:center;
text-shadow:#000 0px 5px 10px;
border-width:0;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.large_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:40px;
line-height:40px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.medium_bold_grey {
font-size:30px;
line-height:30px;
font-weight:800;
font-family:"Open Sans";
color:rgb(102, 102, 102);
text-decoration:none;
background-color:transparent;
text-shadow:none;
margin:0;
padding:1px 4px 0px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.very_large_text {
position:absolute;
color:#fff;
text-shadow:0px 2px 5px rgba(0, 0, 0, 0.5);
font-weight:700;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
letter-spacing:-2px;
}

.tp-caption.very_big_white {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
padding:0px 4px;
padding-top:1px;
background-color:#000;
}

.tp-caption.very_big_black {
position:absolute;
color:#000;
text-shadow:none;
font-weight:700;
font-size:60px;
line-height:60px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
padding:0px 4px;
padding-top:1px;
background-color:#fff;
}

.tp-caption.modern_medium_fat {
position:absolute;
color:#000;
text-shadow:none;
font-weight:800;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_medium_fat_white {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_medium_light {
position:absolute;
color:#000;
text-shadow:none;
font-weight:300;
font-size:24px;
line-height:20px;
font-family:"Open Sans", sans-serif;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.modern_big_bluebg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:800;
font-size:30px;
line-height:36px;
font-family:"Open Sans", sans-serif;
padding:3px 10px;
margin:0;
border-width:0;
border-style:none;
background-color:#4e5b6c;
letter-spacing:0;
}

.tp-caption.modern_big_redbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:30px;
line-height:36px;
font-family:"Open Sans", sans-serif;
padding:3px 10px;
padding-top:1px;
margin:0;
border-width:0;
border-style:none;
background-color:#de543e;
letter-spacing:0;
}

.tp-caption.modern_small_text_dark {
position:absolute;
color:#555;
text-shadow:none;
font-size:14px;
line-height:22px;
font-family:Arial;
margin:0;
border-width:0;
border-style:none;
white-space:nowrap;
}

.tp-caption.boxshadow {
-moz-box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
-webkit-box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
box-shadow:0px 0px 20px rgba(0, 0, 0, 0.5);
}

.tp-caption.black {
color:#000;
text-shadow:none;
}

.tp-caption.noshadow {
text-shadow:none;
}

.tp-caption a {
color:#fff;
text-shadow:none;
-webkit-transition:all 0.2s ease-out;
-moz-transition:all 0.2s ease-out;
-o-transition:all 0.2s ease-out;
-ms-transition:all 0.2s ease-out;
}

.tp-caption a:hover {
color:#00bac9;
}

.tp-caption.thinheadline_dark {
position:absolute;
color:rgba(0,0,0,0.85);
text-shadow:none;
font-weight:300;
font-size:30px;
line-height:30px;
font-family:"Open Sans";
background-color:transparent;
}

.tp-caption.thintext_dark {
position:absolute;
color:rgba(0,0,0,0.85);
text-shadow:none;
font-weight:300;
font-size:16px;
line-height:26px;
font-family:"Open Sans";
background-color:transparent;
}

.tp-caption.medium_bg_red a {
	color: #fff;
    text-decoration: none;
}

.tp-caption.medium_bg_red a:hover {
	color: #fff;
    text-decoration: underline;
}

.tp-caption.smoothcircle {
font-size:30px;
line-height:75px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
background-color:rgba(0, 0, 0, 0.498039);
padding:50px 25px;
text-align:center;
border-radius:500px 500px 500px 500px;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.largeblackbg {
font-size:50px;
line-height:70px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
padding:0px 20px 5px;
text-shadow:none;
border-width:0;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.largepinkbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#db4360;
padding:0px 20px;
-webkit-border-radius:0;
-moz-border-radius:0;
border-radius:0;
}

.tp-caption.largewhitebg {
position:absolute;
color:#000;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#fff;
padding:0px 20px;
-webkit-border-radius:0;
-moz-border-radius:0;
border-radius:0;
}

.tp-caption.largegreenbg {
position:absolute;
color:#fff;
text-shadow:none;
font-weight:300;
font-size:50px;
line-height:70px;
font-family:"Open Sans";
background-color:#67ae73;
padding:0px 20px;
-webkit-border-radius:0;
-moz-border-radius:0;
border-radius:0;
}

.tp-caption.excerpt {
font-size:36px;
line-height:36px;
font-weight:700;
font-family:Arial;
color:#ffffff;
text-decoration:none;
background-color:rgba(0, 0, 0, 1);
text-shadow:none;
margin:0;
letter-spacing:-1.5px;
padding:1px 4px 0px 4px;
width:150px;
white-space:normal !important;
height:auto;
border-width:0;
border-color:rgb(255, 255, 255);
border-style:none;
}

.tp-caption.large_bold_grey {
font-size:60px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(102, 102, 102);
text-decoration:none;
background-color:transparent;
text-shadow:none;
margin:0;
padding:1px 4px 0px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_thin_grey {
font-size:34px;
line-height:30px;
font-weight:300;
font-family:"Open Sans";
color:rgb(102, 102, 102);
text-decoration:none;
background-color:transparent;
padding:1px 4px 0px;
text-shadow:none;
margin:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.small_thin_grey {
font-size:18px;
line-height:26px;
font-weight:300;
font-family:"Open Sans";
color:rgb(117, 117, 117);
text-decoration:none;
background-color:transparent;
padding:1px 4px 0px;
text-shadow:none;
margin:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.lightgrey_divider {
text-decoration:none;
background-color:rgba(235, 235, 235, 1);
width:370px;
height:3px;
background-position:initial initial;
background-repeat:initial initial;
border-width:0;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bold_darkblue {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(52, 73, 94);
text-decoration:none;
background-color:transparent;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_darkblue {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(52, 73, 94);
padding:10px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bold_red {
font-size:24px;
line-height:30px;
font-weight:800;
font-family:"Open Sans";
color:rgb(227, 58, 12);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_red {
font-size:21px;
line-height:26px;
font-weight:300;
font-family:"Open Sans";
color:rgb(227, 58, 12);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_red {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(227, 58, 12);
padding:10px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bold_orange {
font-size:24px;
line-height:30px;
font-weight:800;
font-family:"Open Sans";
color:rgb(243, 156, 18);
text-decoration:none;
background-color:transparent;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_orange {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(243, 156, 18);
padding:10px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.grassfloor {
text-decoration:none;
background-color:rgba(160, 179, 151, 1);
width:4000px;
height:150px;
border-width:0;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bold_white {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_white {
font-size:30px;
line-height:36px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_white {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_white_center {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:#ffffff;
text-decoration:none;
background-color:transparent;
padding:0px 0px 0px 0px;
text-align:center;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_bg_asbestos {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(127, 140, 141);
padding:10px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.medium_light_black {
font-size:30px;
line-height:36px;
font-weight:300;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.large_bold_black {
font-size:58px;
line-height:60px;
font-weight:800;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:transparent;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumlarge_light_darkblue {
font-size:34px;
line-height:40px;
font-weight:300;
font-family:"Open Sans";
color:rgb(52, 73, 94);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.small_light_white {
font-size:17px;
line-height:28px;
font-weight:300;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:transparent;
padding:0;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.roundedimage {
border-width:0;
border-color:rgb(34, 34, 34);
border-style:none;
}

.tp-caption.large_bg_black {
font-size:40px;
line-height:40px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(0, 0, 0);
padding:10px 20px 15px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}

.tp-caption.mediumwhitebg {
font-size:30px;
line-height:30px;
font-weight:300;
font-family:"Open Sans";
color:rgb(0, 0, 0);
text-decoration:none;
background-color:rgb(255, 255, 255);
padding:5px 15px 10px;
text-shadow:none;
border-width:0;
border-color:rgb(0, 0, 0);
border-style:none;
}

.tp-caption.medium_bg_orange_new1 {
font-size:20px;
line-height:20px;
font-weight:800;
font-family:"Open Sans";
color:rgb(255, 255, 255);
text-decoration:none;
background-color:rgb(243, 156, 18);
padding:10px;
border-width:0;
border-color:rgb(255, 214, 88);
border-style:none;
}



.tp-caption.boxshadow{
		-moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
		-webkit-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}

.tp-caption.black{
		color: #000;
		text-shadow: none;
		font-weight: 300;
		font-size: 19px;
		line-height: 19px;
		font-family: 'Open Sans', sans;
	}

.tp-caption.noshadow {
		text-shadow: none;
	}


.tp_inner_padding	{	box-sizing:border-box;
						-webkit-box-sizing:border-box;
						-moz-box-sizing:border-box;
						max-height:none !important;	}


/*.tp-caption			{	transform:none !important}*/


/*********************************
	-	SPECIAL TP CAPTIONS -
**********************************/
.tp-caption .frontcorner		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0;
									}

.tp-caption .backcorner		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;right:0;top:0;
									}

.tp-caption .frontcornertop		{
										width: 0;
										height: 0;
										border-left: 40px solid transparent;
										border-right: 0px solid transparent;
										border-bottom: 40px solid #00A8FF;
										position: absolute;left:-40px;top:0;
									}

.tp-caption .backcornertop		{
										width: 0;
										height: 0;
										border-left: 0px solid transparent;
										border-right: 40px solid transparent;
										border-top: 40px solid #00A8FF;
										position: absolute;right:0;top:0;
									}


/***********************************************
	-	SPECIAL ALTERNATIVE IMAGE SETTINGS	-
***********************************************/

img.tp-slider-alternative-image	{	width:100%; height:auto;}

/******************************
	-	BUTTONS	-
*******************************/

.tp-simpleresponsive .button				{	padding:6px 13px 5px; border-radius: 3px; -moz-border-radius: 3px; -webkit-border-radius: 3px; height:30px;
												cursor:pointer;
												color:#fff !important; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6) !important; font-size:15px; line-height:45px !important;
												background:url(../../img/revolution-slider/gradient/g30.png) repeat-x top; font-family: arial, sans-serif; font-weight: bold; letter-spacing: -1px;
											}

.tp-simpleresponsive  .button.big			{	color:#fff; text-shadow:0px 1px 1px rgba(0, 0, 0, 0.6); font-weight:bold; padding:9px 20px; font-size:19px;  line-height:57px !important; background:url(../../img/revolution-slider/gradient/g40.png) repeat-x top}


.tp-simpleresponsive  .purchase:hover,
.tp-simpleresponsive  .button:hover,
.tp-simpleresponsive  .button.big:hover		{	background-position:bottom, 15px 11px}



	@media only screen and (min-width: 768px) and (max-width: 959px) {

	 }



	@media only screen and (min-width: 480px) and (max-width: 767px) {
		.tp-simpleresponsive  .button	{	padding:4px 8px 3px; line-height:25px !important; font-size:11px !important;font-weight:normal;	}
		.tp-simpleresponsive  a.button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }


	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tp-simpleresponsive  .button	{	padding:2px 5px 2px; line-height:20px !important; font-size:10px !important}
		.tp-simpleresponsive  a.button { -webkit-transition: none; -moz-transition: none; -o-transition: none; -ms-transition: none;	 }
	}





/*	BUTTON COLORS	*/



.tp-simpleresponsive  .button.green, .tp-simpleresponsive  .button:hover.green,
.tp-simpleresponsive  .purchase.green, .tp-simpleresponsive  .purchase:hover.green			{ background-color:#21a117; -webkit-box-shadow:  0px 3px 0px 0px #104d0b;        -moz-box-shadow:   0px 3px 0px 0px #104d0b;        box-shadow:   0px 3px 0px 0px #104d0b;  }


.tp-simpleresponsive  .button.blue, .tp-simpleresponsive  .button:hover.blue,
.tp-simpleresponsive  .purchase.blue, .tp-simpleresponsive  .purchase:hover.blue			{ background-color:#1d78cb; -webkit-box-shadow:  0px 3px 0px 0px #0f3e68;        -moz-box-shadow:   0px 3px 0px 0px #0f3e68;        box-shadow:   0px 3px 0px 0px #0f3e68}


.tp-simpleresponsive  .button.red, .tp-simpleresponsive  .button:hover.red,
.tp-simpleresponsive  .purchase.red, .tp-simpleresponsive  .purchase:hover.red				{ background-color:#cb1d1d; -webkit-box-shadow:  0px 3px 0px 0px #7c1212;        -moz-box-shadow:   0px 3px 0px 0px #7c1212;        box-shadow:   0px 3px 0px 0px #7c1212}

.tp-simpleresponsive  .button.orange, .tp-simpleresponsive  .button:hover.orange,
.tp-simpleresponsive  .purchase.orange, .tp-simpleresponsive  .purchase:hover.orange		{ background-color:#ff7700; -webkit-box-shadow:  0px 3px 0px 0px #a34c00;        -moz-box-shadow:   0px 3px 0px 0px #a34c00;        box-shadow:   0px 3px 0px 0px #a34c00}

.tp-simpleresponsive  .button.darkgrey, .tp-simpleresponsive  .button.grey,
.tp-simpleresponsive  .button:hover.darkgrey, .tp-simpleresponsive  .button:hover.grey,
.tp-simpleresponsive  .purchase.darkgrey, .tp-simpleresponsive  .purchase:hover.darkgrey	{ background-color:#555; -webkit-box-shadow:  0px 3px 0px 0px #222;        -moz-box-shadow:   0px 3px 0px 0px #222;        box-shadow:   0px 3px 0px 0px #222}

.tp-simpleresponsive  .button.lightgrey, .tp-simpleresponsive  .button:hover.lightgrey,
.tp-simpleresponsive  .purchase.lightgrey, .tp-simpleresponsive  .purchase:hover.lightgrey	{ background-color:#888; -webkit-box-shadow:  0px 3px 0px 0px #555;        -moz-box-shadow:   0px 3px 0px 0px #555;        box-shadow:   0px 3px 0px 0px #555}



/****************************************************************

	-	SET THE ANIMATION EVEN MORE SMOOTHER ON ANDROID   -

******************************************************************/

/*.tp-simpleresponsive				{	-webkit-perspective: 1500px;
										-moz-perspective: 1500px;
										-o-perspective: 1500px;
										-ms-perspective: 1500px;
										perspective: 1500px;
									}*/




/**********************************************
	-	FULLSCREEN AND FULLWIDHT CONTAINERS	-
**********************************************/

.fullscreen-container {
		width:100%;
		position:relative;
		padding:0;
}



.fullwidthbanner-container{
	width:100%;
	position:relative;
	padding:0;
	overflow:hidden;
}

.fullwidthbanner-container .fullwidthbanner{
	width:100%;
	position:relative;
}



/************************************************
	  - SOME CAPTION MODIFICATION AT START  -
*************************************************/
.tp-simpleresponsive .caption,
.tp-simpleresponsive .tp-caption {
	/*-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";		-moz-opacity: 0;	-khtml-opacity: 0;	opacity: 0; */
	position:absolute;visibility: hidden;
	-webkit-font-smoothing: antialiased !important;
}


.tp-simpleresponsive img	{	max-width:none}



/******************************
	-	IE8 HACKS	-
*******************************/
.noFilterClass {
	filter:none !important;
}


/******************************
	-	SHADOWS		-
******************************/
.tp-bannershadow  {
		position:absolute;

		margin-left:auto;
		margin-right:auto;
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
	}

.tp-bannershadow.tp-shadow1 {	background:url(../../assets/revolution-slider/shadow1.png) no-repeat; background-size:100% 100%; width:890px; height:60px; bottom:-60px}
.tp-bannershadow.tp-shadow2 {	background:url(../../assets/revolution-slider/shadow2.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px}
.tp-bannershadow.tp-shadow3 {	background:url(../../assets/revolution-slider/shadow3.png) no-repeat; background-size:100% 100%; width:890px; height:60px;bottom:-60px}


/********************************
	-	FULLSCREEN VIDEO	-
*********************************/
.caption.fullscreenvideo {	left:0; top:0; position:absolute;width:100%;height:100%}
.caption.fullscreenvideo iframe,
.caption.fullscreenvideo video	{ width:100% !important; height:100% !important; display: none}

.tp-caption.fullscreenvideo	{	left:0; top:0; position:absolute;width:100%;height:100%}


.tp-caption.fullscreenvideo iframe,
.tp-caption.fullscreenvideo iframe video	{ width:100% !important; height:100% !important; display: none}


.fullcoveredvideo video,
.fullscreenvideo video					{	background: #000}

.fullcoveredvideo .tp-poster		{	background-position: center center;background-size: cover;width:100%;height:100%;top:0;left:0px}

.html5vid.videoisplaying .tp-poster	{	display: none}

.tp-video-play-button		{	background:#000;
								background:rgba(0,0,0,0.3);
								padding:5px;
								border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;
								position: absolute;
								top: 50%;
								left: 50%;
								font-size: 40px;
								color: #FFF;
								z-index: 3;
								margin-top: -27px;
								margin-left: -28px;
								text-align: center;
								cursor: pointer;
							}

.html5vid .tp-revstop		{	width:15px;height:20px; border-left:5px solid #fff; border-right:5px solid #fff; position:relative;margin:10px 20px; box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}
.html5vid .tp-revstop	{	display:none}
.html5vid.videoisplaying .revicon-right-dir	{	display:none}
.html5vid.videoisplaying .tp-revstop	{	display:block}

.html5vid.videoisplaying .tp-video-play-button	{	display:none}
.html5vid:hover .tp-video-play-button { display:block}

.fullcoveredvideo .tp-video-play-button	{	display:none !important}

.tp-video-controls {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 5px;
	opacity: 0;
	-webkit-transition: opacity .3s;
	-moz-transition: opacity .3s;
	-o-transition: opacity .3s;
	-ms-transition: opacity .3s;
	transition: opacity .3s;
	background-image: linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -o-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(0,0,0) 13%, rgb(50,50,50) 100%);

	background-image: -webkit-gradient(
		linear,
		left bottom,
		left top,
		color-stop(0.13, rgb(0,0,0)),
		color-stop(1, rgb(50,50,50))
	);
	
	display:table;max-width:100%; overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;
}

.tp-caption:hover .tp-video-controls {
	opacity: .9;
}

.tp-video-button {
	background: rgba(0,0,0,.5);
	border: 0;
	color: #EEE;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-o-border-radius: 3px;
	border-radius: 3px;
	cursor:pointer;
	line-height:12px;
	font-size:12px;
	color:#fff;
	padding:0;
	margin:0;
	outline: none;
	}
.tp-video-button:hover {
	cursor: pointer;
}


.tp-video-button-wrap,
.tp-video-seek-bar-wrap,
.tp-video-vol-bar-wrap 	{ padding:0px 5px;display:table-cell; }

.tp-video-seek-bar-wrap	{	width:80%}
.tp-video-vol-bar-wrap	{	width:20%}

.tp-volume-bar,
.tp-seek-bar		{	width:100%; cursor: pointer;  outline:none; line-height:12px;margin:0; padding:0;}


/********************************
	-	FULLSCREEN VIDEO ENDS	-
*********************************/


/********************************
	-	DOTTED OVERLAYS	-
*********************************/
.tp-dottedoverlay						{	background-repeat:repeat;width:100%;height:100%;position:absolute;top:0;left:0;z-index:4}
.tp-dottedoverlay.twoxtwo				{	background:url(../../assets/revolution-slider/gridtile.png)}
.tp-dottedoverlay.twoxtwowhite			{	background:url(../../assets/revolution-slider/gridtile_white.png)}
.tp-dottedoverlay.threexthree			{	background:url(../../assets/revolution-slider/gridtile_3x3.png)}
.tp-dottedoverlay.threexthreewhite		{	background:url(../../assets/revolution-slider/gridtile_3x3_white.png)}
/********************************
	-	DOTTED OVERLAYS ENDS	-
*********************************/


/************************
	-	NAVIGATION	-
*************************/

/** BULLETS **/

.tpclear		{	clear:both}


.tp-bullets									{	z-index:100; position:absolute;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
												-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;-webkit-transform: translateZ(5px);
											}
.tp-bullets.hidebullets					{
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
												-moz-opacity: 0;
												-khtml-opacity: 0;
												opacity: 0;
											}


.tp-bullets.simplebullets.navbar						{ 	border:1px solid #666; border-bottom:1px solid #444; background:url(../../assets/revolution-slider/boxed_bgtile.png); height:40px; padding:0px 10px; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px }



.tp-bullets.simplebullets.round .bullet					{	cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/bullet.png) no-Repeat top left;	width:20px;	height:20px;  margin-right:0; float:left; margin-top:0; margin-left:3px}
.tp-bullets.simplebullets.round .bullet.last			{	margin-right:3px}

.tp-bullets.simplebullets.round-old .bullet				{	cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/bullets.png) no-Repeat bottom left;	width:23px;	height:23px;  margin-right:0; float:left; margin-top:0px}
.tp-bullets.simplebullets.round-old .bullet.last		{	margin-right:0px}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square .bullet.last			{	margin-right:0px}


/**	SQUARE BULLETS **/
.tp-bullets.simplebullets.square-old .bullet			{	cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/bullets2.png) no-Repeat bottom left;	width:19px;	height:19px;  margin-right:0; float:left; margin-top:0px}
.tp-bullets.simplebullets.square-old .bullet.last		{	margin-right:0px}


/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar .bullet			{	cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/bullet_boxed.png) no-Repeat top left;	width:18px;	height:19px;   margin-right:5px; float:left; margin-top:0px}

.tp-bullets.simplebullets.navbar .bullet.first		{	margin-left:0px !important}
.tp-bullets.simplebullets.navbar .bullet.last		{	margin-right:0px !important}



/** navbar NAVIGATION VERSION **/
.tp-bullets.simplebullets.navbar-old .bullet			{	cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/navigdots.png) no-Repeat bottom left;	width:15px;	height:15px;  margin-left:5px !important; margin-right:5px !important;float:left; margin-top:10px}
.tp-bullets.simplebullets.navbar-old .bullet.first		{	margin-left:0px !important}
.tp-bullets.simplebullets.navbar-old .bullet.last		{	margin-right:0px !important}


.tp-bullets.simplebullets .bullet:hover,
.tp-bullets.simplebullets .bullet.selected				{	background-position:top left}

.tp-bullets.simplebullets.round .bullet:hover,
.tp-bullets.simplebullets.round .bullet.selected,
.tp-bullets.simplebullets.navbar .bullet:hover,
.tp-bullets.simplebullets.navbar .bullet.selected		{	background-position:bottom left}



/*************************************
	-	TP ARROWS 	-
**************************************/
.tparrows												{	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
															-moz-opacity: 1;
															-khtml-opacity: 1;
															opacity: 1;
															-webkit-transition: opacity 0.2s ease-out; -moz-transition: opacity 0.2s ease-out; -o-transition: opacity 0.2s ease-out; -ms-transition: opacity 0.2s ease-out;
															-webkit-transform: translateZ(5000px);
															-webkit-transform-style: flat;
															-webkit-backface-visibility: hidden;
															z-index:600;
															position: relative;

														}
.tparrows.hidearrows									{
															-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
															-moz-opacity: 0;
															-khtml-opacity: 0;
															opacity: 0;
														}
.tp-leftarrow											{	z-index:100;cursor:pointer; position:relative;	width:40px;	height:40px;   }
.tp-rightarrow											{	z-index:100;cursor:pointer; position:relative;	width:40px;	height:40px;   }


.tp-leftarrow.round										{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/small_left.png) no-Repeat top left;	width:19px;	height:14px;  margin-right:0; float:left; margin-top:0;	}
.tp-rightarrow.round									{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/small_right.png) no-Repeat top left;	width:19px;	height:14px;  margin-right:0; float:left;	margin-top:0px}


.tp-leftarrow.round-old									{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/arrow_left.png) no-Repeat top left;	width:26px;	height:26px;  margin-right:0; float:left; margin-top:0;	}
.tp-rightarrow.round-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/arrow_right.png) no-Repeat top left;	width:26px;	height:26px;  margin-right:0; float:left;	margin-top:0px}


.tp-leftarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/small_left_boxed.png) no-Repeat top left;	width:20px;	height:15px;   float:left;	margin-right:6px; margin-top:12px}
.tp-rightarrow.navbar									{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/small_right_boxed.png) no-Repeat top left;	width:20px;	height:15px;   float:left;	margin-left:6px; margin-top:12px}


.tp-leftarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/arrowleft.png) no-Repeat top left;		width:9px;	height:16px;   float:left;	margin-right:6px; margin-top:10px}
.tp-rightarrow.navbar-old								{	z-index:100;cursor:pointer; position:relative;	background:url(../../assets/revolution-slider/arrowright.png) no-Repeat top left;	width:9px;	height:16px;   float:left;	margin-left:6px; margin-top:10px}

.tp-leftarrow.navbar-old.thumbswitharrow				{	margin-right:10px}
.tp-rightarrow.navbar-old.thumbswitharrow				{	margin-left:0px}

.tp-leftarrow.square									{	z-index:100;cursor:pointer; position:relative;	width:12px;	height:17px;   float:left;	margin-right:0; margin-top:0px}
.tp-rightarrow.square									{	z-index:100;cursor:pointer; position:relative;	width:12px;	height:17px;   float:left;	margin-left:0; margin-top:0px}


.tp-leftarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	width:12px;	height:17px;   float:left;	margin-right:0; margin-top:0px}
.tp-rightarrow.square-old								{	z-index:100;cursor:pointer; position:relative;	width:12px;	height:17px;   float:left;	margin-left:0; margin-top:0px}


.tp-leftarrow.default									{	z-index:100;cursor:pointer; position:relative;	width:40px;	height:40px;

														}
.tp-rightarrow.default									{	z-index:100;cursor:pointer; position:relative;	width:40px;	height:40px;

														}




.tp-leftarrow:hover,
.tp-rightarrow:hover 									{	background-position:bottom left}






/****************************************************************************************************
	-	TP THUMBS 	-
*****************************************************************************************************

 - tp-thumbs & tp-mask Width is the width of the basic Thumb Container (500px basic settings)

 - .bullet width & height is the dimension of a simple Thumbnail (basic 100px x 50px)

 *****************************************************************************************************/


.tp-bullets.tp-thumbs						{	z-index:1000; position:absolute; padding:3px;background-color:#fff;
												width:500px;height:50px; 			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												margin-top:-50px;
											}


.fullwidthbanner-container .tp-thumbs		{  padding:3px}

.tp-bullets.tp-thumbs .tp-mask				{	width:500px; height:50px;  			/* THE DIMENSIONS OF THE THUMB CONTAINER */
												overflow:hidden; position:relative}


.tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer	{	width:5000px; position:absolute}

.tp-bullets.tp-thumbs .bullet				{   width:100px; height:50px; 			/* THE DIMENSION OF A SINGLE THUMB */
												cursor:pointer; overflow:hidden;background:none;margin:0;float:left;
												-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
												/*filter: alpha(opacity=50);	*/
												-moz-opacity: 0.5;
												-khtml-opacity: 0.5;
												opacity: 0.5;

												-webkit-transition: all 0.2s ease-out; -moz-transition: all 0.2s ease-out; -o-transition: all 0.2s ease-out; -ms-transition: all 0.2s ease-out;
											}


.tp-bullets.tp-thumbs .bullet:hover,
.tp-bullets.tp-thumbs .bullet.selected		{ 	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";

												-moz-opacity: 1;
												-khtml-opacity: 1;
												opacity: 1;
											}
.tp-thumbs img								{	width:100%}


/************************************
		-	TP BANNER TIMER		-
*************************************/
.tp-bannertimer								{	width:100%; height:10px; background:url(../images/slides/timer.png);position:absolute; z-index:200;top:0;display: none;}
.tp-bannertimer.tp-bottom					{	bottom:0;height:5px; top:auto}




/***************************************
	-	RESPONSIVE SETTINGS 	-
****************************************/




    @media only screen and (min-width: 0px) and (max-width: 479px) {
				.responsive .tp-bullets	{	display:none}
				.responsive .tparrows	{	display:none}
	}





/*********************************************

	-	BASIC SETTINGS FOR THE BANNER	-

***********************************************/

 .tp-simpleresponsive img {
		-moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}



.tp-simpleresponsive a{	text-decoration:none}

.tp-simpleresponsive ul,
.tp-simpleresponsive ul li,
.tp-simpleresponsive ul li:before {
	list-style:none;
	padding:0 !important;
	margin:0 !important;
	list-style:none !important;
	overflow-x: visible;
	overflow-y: visible;
	background-image:none
}


.tp-simpleresponsive >ul >li{
	list-style:none;
	position:absolute;
	visibility:hidden
}

/*  CAPTION SLIDELINK   **/
.caption.slidelink a div,
.tp-caption.slidelink a div {	width:3000px; height:1500px;  background:url(../../assets/revolution-slider/coloredbg.png) repeat}

.tp-caption.slidelink a span	{	background:url(../../assets/revolution-slider/coloredbg.png) repeat}



/*****************************************
	-	NAVIGATION FANCY EXAMPLES	-
*****************************************/

.tparrows .tp-arr-imgholder								{ display: none}
.tparrows .tp-arr-titleholder							{ display: none}



/*****************************************
	-	NAVIGATION FANCY EXAMPLES	-
*****************************************/

/* NAVIGATION PREVIEW 1 */
.tparrows.preview1 							{	width:100px;height:100px;-webkit-transform-style: preserve-3d; -webkit-perspective: 1000; -moz-perspective: 1000; -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden;background: transparent}
.tparrows.preview1:after					{	position:absolute; left:0;top:0; font-family: "revicons"; color:#fff; font-size:30px; width:100px;height:100px;text-align: center; background:#fff;background:rgba(0,0,0,0.15);z-index:2;line-height:100px; -webkit-transition: background 0.3s, color 0.3s; -moz-transition: background 0.3s, color 0.3s; transition: background 0.3s, color 0.3s}
.tp-rightarrow.preview1:after				{	content: '\\e825';  }
.tp-leftarrow.preview1:after				{	content: '\\e824';  }

.tparrows.preview1:hover:after 				{	background:rgba(255,255,255,1); color:#aaa}

.tparrows.preview1 .tp-arr-imgholder 		{	background-size:cover; background-position:center center; display:block;width:100%;height:100%;position:absolute;top:0;
												-webkit-transition: -webkit-transform 0.3s;
												transition: transform 0.3s;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
											}
.tparrows.preview1 .tp-arr-iwrapper			{	  -webkit-transition: all 0.3s;transition: all 0.3s;
												-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0}
.tparrows.preview1:hover .tp-arr-iwrapper	{	  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1}


.tp-rightarrow.preview1 .tp-arr-imgholder	{	right:100%;
												-webkit-transform: rotateY(-90deg);
												transform: rotateY(-90deg);
												-webkit-transform-origin: 100% 50%;
												transform-origin: 100% 50%;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;



											}
.tp-leftarrow.preview1 .tp-arr-imgholder	{	left:100%;
												-webkit-transform: rotateY(90deg);
												transform: rotateY(90deg);
												-webkit-transform-origin: 0% 50%;
												transform-origin: 0% 50%;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;



											}


.tparrows.preview1:hover .tp-arr-imgholder	{	-webkit-transform: rotateY(0deg);
												transform: rotateY(0deg);
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

											}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:80px; height:80px;line-height:80px; font-size:24px}

	}

    @media only screen and (min-width: 480px) and (max-width: 767px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:60px; height:60px;line-height:60px;font-size:20px}

	}



    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tparrows.preview1,
		.tparrows.preview1:after	{	width:40px; height:40px;line-height:40px; font-size:12px}
    }

/* PREVIEW 1 BULLETS */

.tp-bullets.preview1 						{ 	height: 21px}
.tp-bullets.preview1 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.15) !important;
											    /*-webkit-border-radius: 10px;
											    border-radius: 10px;*/
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 5px !important;
											    height: 5px !important;
											    border: 8px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 5px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview1 .bullet.last 			{	margin-right: 0px}
.tp-bullets.preview1 .bullet:hover,
.tp-bullets.preview1 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: #aaa !important;
												width: 5px !important;
											    height: 5px !important;
											    border: 8px solid rgba(255, 255, 255, 1) !important;
}




/* NAVIGATION PREVIEW 2 */
.tparrows.preview2 							{	min-width:60px; min-height:60px; background:#fff; ;

												border-radius:30px;-moz-border-radius:30px;-webkit-border-radius:30px;
												overflow:hidden;
												-webkit-transition: -webkit-transform 1.3s;
												-webkit-transition: width 0.3s, background-color 0.3s, opacity 0.3s;
												transition: width 0.3s, background-color 0.3s, opacity 0.3s;
												backface-visibility: hidden;
}
.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; color:#aaa; font-size:25px; margin-top: -12px; -webkit-transition: color 0.3s; -moz-transition: color 0.3s; transition: color 0.3s }
.tp-rightarrow.preview2:after				{	content: '\\e81e';  right:18px}
.tp-leftarrow.preview2:after				{	content: '\\e81f';  left:18px}


.tparrows.preview2 .tp-arr-titleholder 		{	background-size:cover; background-position:center center; display:block; visibility:hidden;position:relative;top:0;
												-webkit-transition: -webkit-transform 0.3s;
												transition: transform 0.3s;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
												white-space: nowrap;
												color: #000;
												text-transform: uppercase;
												font-weight: 400;
												font-size: 14px;
												line-height: 60px;
												padding:0px 10px;
											}

.tp-rightarrow.preview2 .tp-arr-titleholder	{	 right:50px;
												-webkit-transform: translateX(-100%);
												transform: translateX(-100%);
											}
.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:50px;
												-webkit-transform: translateX(100%);
												transform: translateX(100%);
											}

.tparrows.preview2.hovered					{	width:300px}
.tparrows.preview2:hover					{	background:#fff}
.tparrows.preview2:hover:after				{	color:#000}
.tparrows.preview2:hover .tp-arr-titleholder{	-webkit-transform: translateX(0px);
													transform: translateX(0px);
													visibility: visible;
													position: absolute;
											}

/* PREVIEW 2 BULLETS */

.tp-bullets.preview2 						{ 	height: 17px}
.tp-bullets.preview2 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview2 .bullet.last 			{	margin-right: 0px}
.tp-bullets.preview2 .bullet:hover,
.tp-bullets.preview2 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}

.tp-arr-titleholder.alwayshidden			{	display:none !important}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview2 {	min-width:40px; min-height:40px; width:40px;height:40px;
								border-radius:20px;-moz-border-radius:20px;-webkit-border-radius:20px;
							}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:20px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\\e81e';  right:11px}
		.tp-leftarrow.preview2:after				{	content: '\\e81f';  left:11px}
		.tparrows.preview2 .tp-arr-titleholder		{	font-size:12px; line-height:40px; letter-spacing: 0px}
		.tp-rightarrow.preview2 .tp-arr-titleholder	{	right:35px}
		.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:35px}

	}

    @media only screen and (min-width: 480px) and (max-width: 767px) {
   		 .tparrows.preview2 						{	min-width:30px; min-height:30px; width:30px;height:30px;
														border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;
													}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:14px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\\e81e';  right:8px}
		.tp-leftarrow.preview2:after				{	content: '\\e81f';  left:8px}
		.tparrows.preview2 .tp-arr-titleholder		{	font-size:10px; line-height:30px; letter-spacing: 0px}
		.tp-rightarrow.preview2 .tp-arr-titleholder	{	right:25px}
		.tp-leftarrow.preview2 .tp-arr-titleholder	{	left:25px}
		.tparrows.preview2 .tp-arr-titleholder		{	display:none;visibility:none}


	}

    @media only screen and (min-width: 0px) and (max-width: 479px) {
		.tparrows.preview2 							{	min-width:30px; min-height:30px; width:30px;height:30px;
														border-radius:15px;-moz-border-radius:15px;-webkit-border-radius:15px;
													}
		.tparrows.preview2:after					{	position:absolute; top:50%; font-family: "revicons"; font-size:14px; margin-top: -12px}
		.tp-rightarrow.preview2:after				{	content: '\\e81e';  right:8px}
		.tp-leftarrow.preview2:after				{	content: '\\e81f';  left:8px}
		.tparrows.preview2 .tp-arr-titleholder		{	display:none;visibility:none}
		.tparrows.preview2:hover					{	width:30px !important; height:30px !important}
    }



/* NAVIGATION PREVIEW 3 */
.tparrows.preview3 							{	width:70px; height:70px; background:#fff; background:rgba(255,255,255,1); -webkit-transform-style: flat}
.tparrows.preview3:after					{	position:absolute;  line-height: 70px;text-align: center; font-family: "revicons"; color:#aaa; font-size:30px; top:0;left:0;;background:#fff; z-index:100; width:70px;height:70px; -webkit-transition: color 0.3s; -moz-transition: color 0.3s; transition: color 0.3s}
.tparrows.preview3:hover:after					{	color:#000}
.tp-rightarrow.preview3:after				{	content: '\\e825';  }
.tp-leftarrow.preview3:after				{	content: '\\e824';  }


.tparrows.preview3 .tp-arr-iwrapper			{
												  -webkit-transform: scale(0,1);
												  transform: scale(0,1);
												  -webkit-transform-origin: 100% 50%;
												  transform-origin: 100% 50%;
												  -webkit-transition: -webkit-transform 0.2s;
												  transition: transform 0.2s;
												  z-index:0;position: absolute; background: #000; background: rgba(0,0,0,0.75);
												  display: table;min-height:90px;top:-10px}

.tp-leftarrow.preview3 .tp-arr-iwrapper		{	 -webkit-transform: scale(0,1);
												  transform: scale(0,1);
												  -webkit-transform-origin: 0% 50%;
												  transform-origin: 0% 50%;
											}

.tparrows.preview3 .tp-arr-imgholder 		{	display:block;background-size:cover; background-position:center center; display:table-cell;min-width:90px;height:90px;
												position:relative;top:0px}

.tp-rightarrow.preview3 .tp-arr-iwrapper	{	right:0;padding-right:70px}
.tp-leftarrow.preview3 .tp-arr-iwrapper		{	left:0; direction: rtl;padding-left:70px}
.tparrows.preview3 .tp-arr-titleholder		{	display:table-cell; padding:30px;font-size:16px; color:#fff;white-space: nowrap; position: relative; clear:right;vertical-align: middle}

.tparrows.preview3:hover .tp-arr-iwrapper	{
												-webkit-transform: scale(1,1);
												  transform: scale(1,1);

											}

/* PREVIEW 3 BULLETS */
.tp-bullets.preview3 						{ 	height: 17px}
.tp-bullets.preview3 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview3 .bullet.last 			{	margin-right: 0px}
.tp-bullets.preview3 .bullet:hover,
.tp-bullets.preview3 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}


	@media only screen and (min-width: 768px) and (max-width: 979px) {
		.tparrows.preview3:after,
		.tparrows.preview3 							{	width:50px; height:50px; line-height:50px;font-size:20px}
		.tparrows.preview3 .tp-arr-iwrapper			{	min-height:70px}
		.tparrows.preview3 .tp-arr-imgholder 		{	min-width:70px;height:70px}
		.tp-rightarrow.preview3 .tp-arr-iwrapper	{	padding-right:50px}
		.tp-leftarrow.preview3 .tp-arr-iwrapper		{	padding-left:50px}
		.tparrows.preview3 .tp-arr-titleholder		{	padding:10px;font-size:16px}



	}

    @media only screen  and (max-width: 767px) {

		.tparrows.preview3:after,
		.tparrows.preview3 							{	width:50px; height:50px; line-height:50px;font-size:20px}
		.tparrows.preview3 .tp-arr-iwrapper			{	min-height:70px}
	}





/* NAVIGATION PREVIEW 4 */
.tparrows.preview4 							{	width:30px; height:110px;  background:transparent;-webkit-transform-style: preserve-3d; -webkit-perspective: 1000; -moz-perspective: 1000}
.tparrows.preview4:after					{	position:absolute;  line-height: 110px;text-align: center; font-family: "revicons"; color:#fff; font-size:20px; top:0;z-index:0; width:30px;height:110px; background: #000; background: #15416e;
												-webkit-transition: all 0.2s ease-in-out;
											    -moz-transition: all 0.2s ease-in-out;
											    -o-transition: all 0.2s ease-in-out;
											    transition: all 0.2s ease-in-out;
												   -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

											}

.tp-rightarrow.preview4:after				{	content: '\\e825'; right: 20px;  }
.tp-leftarrow.preview4:after				{	content: '\\e824'; left: 20px;  }


.tparrows.preview4 .tp-arr-allwrapper		{	visibility:hidden;width:180px;position: absolute;z-index: 1;min-height:120px;top:0; overflow: hidden;-webkit-perspective: 1000px;-webkit-transform-style: flat}

.tp-leftarrow.preview4 .tp-arr-allwrapper	{	left: 20px;}
.tp-rightarrow.preview4 .tp-arr-allwrapper	{	right: 20px;}
.tparrows.preview4 .tp-arr-iwrapper			{	position: relative; }

.tparrows.preview4 .tp-arr-imgholder 		{	display:block;background-size:cover; background-position:center center;width:180px;height:110px;
												position:relative;top:0;

												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;



											}


.tparrows.preview4 .tp-arr-imgholder2 		{	display:block;background-size:cover; background-position:center center; width:180px;height:110px;
												position:absolute;top:0; left:180px;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;

											}

.tp-leftarrow.preview4 .tp-arr-imgholder2 	{	left:-180px}




.tparrows.preview4 .tp-arr-titleholder		{	display:block; font-size:12px; line-height:25px; padding:0px 10px;text-align:left;color:#fff; position: relative;
												background: #000;
												color: #FFF;
												text-transform: uppercase;
												white-space: nowrap;
												letter-spacing: 1px;
												font-weight: 700;
												font-size: 11px;
												line-height: 2.75;
												-webkit-transition: all 0.3s;
												transition: all 0.3s;
												-webkit-transform: rotateX(-90deg);
												transform: rotateX(-90deg);
												-webkit-transform-origin: 50% 0;
												transform-origin: 50% 0;
												-webkit-backface-visibility: hidden;
												backface-visibility: hidden;
												  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter: alpha(opacity=0);-moz-opacity: 0.0;-khtml-opacity: 0.0;opacity: 0.0;


}



.tparrows.preview4:after				{	transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%}
.tp-leftarrow.preview4:after			{	transform-origin: 0% 0%; -webkit-transform-origin: 0% 0%}




@media only screen and (min-width: 768px)  {
		.tparrows.preview4:hover:after				{	-webkit-transform: rotateY(-90deg); transform:rotateY(-90deg)}
		.tp-leftarrow.preview4:hover:after			{	-webkit-transform: rotateY(90deg); transform:rotateY(90deg)}


		.tparrows.preview4:hover .tp-arr-titleholder	{	-webkit-transition-delay: 0.4s;
															transition-delay: 0.4s;
															-webkit-transform: rotateX(0deg);
															transform: rotateX(0deg);
															-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter: alpha(opacity=100);-moz-opacity: 1;-khtml-opacity: 1;opacity: 1;

														}
}

/* PREVIEW 4 BULLETS */

.tp-bullets.preview4 						{ 	height: 17px}
.tp-bullets.preview4 .bullet 				{	cursor: pointer;
											    position: relative !important;
											    background: rgba(0, 0, 0, 0.5) !important;
											    -webkit-border-radius: 10px;
											    border-radius: 10px;
											    -webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
											    width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 0) !important;
											    display: inline-block;
											    margin-right: 2px !important;
											    margin-bottom: 0px !important;
											    -webkit-transition: background-color 0.2s, border-color 0.2s;
											    -moz-transition: background-color 0.2s, border-color 0.2s;
											    -o-transition: background-color 0.2s, border-color 0.2s;
											    -ms-transition: background-color 0.2s, border-color 0.2s;
											    transition: background-color 0.2s, border-color 0.2s;
											    float:none !important;
											    box-sizing:content-box;
												-moz-box-sizing:content-box;
												-webkit-box-sizing:content-box;
}
.tp-bullets.preview4 .bullet.last 			{	margin-right: 0px}
.tp-bullets.preview4 .bullet:hover,
.tp-bullets.preview4 .bullet.selected 		{	-webkit-box-shadow: none;
											    -moz-box-shadow: none;
											    box-shadow: none;
												background: rgba(255, 255, 255, 1) !important;
												width: 6px !important;
											    height: 6px !important;
											    border: 5px solid rgba(0, 0, 0, 1) !important;
}


    @media only screen  and (max-width: 767px) {
   		 .tparrows.preview4 						{	width:20px; height:80px}
   		 .tparrows.preview4:after					{	width:20px; height:80px; line-height:80px; font-size:14px}

   		 .tparrows.preview1 .tp-arr-allwrapper,
   		 .tparrows.preview2 .tp-arr-allwrapper,
   		 .tparrows.preview3 .tp-arr-allwrapper,
   		 .tparrows.preview4 .tp-arr-allwrapper		{	display: none !important}
    }



/******************************
	-	LOADER FORMS	-
********************************/

.tp-loader 	{
				top:50%; left:50%;
				z-index:10000;
				position:absolute;


			}

.tp-loader.spinner0 {
  width: 40px;
  height: 40px;
  background:url(../../assets/revolution-slider/loader.gif) no-repeat center center;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}


.tp-loader.spinner1 {
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  margin-top:-20px;
  margin-left:-20px;
  -webkit-animation: tp-rotateplane 1.2s infinite ease-in-out;
  animation: tp-rotateplane 1.2s infinite ease-in-out;
  border-radius: 3px;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
}


@-webkit-keyframes tp-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes tp-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}


.tp-loader.spinner2 {
  width: 40px;
  height: 40px;
  margin-top:-20px;margin-left:-20px;
  background-color: #ff0000;
   box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  border-radius: 100%;
  -webkit-animation: tp-scaleout 1.0s infinite ease-in-out;
  animation: tp-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes tp-scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes tp-scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}




.tp-loader.spinner3 {
  margin: -9px 0px 0px -35px;
  width: 70px;
  text-align: center;

}

.tp-loader.spinner3 .bounce1,
.tp-loader.spinner3 .bounce2,
.tp-loader.spinner3 .bounce3 {
  width: 18px;
  height: 18px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: tp-bouncedelay 1.4s infinite ease-in-out;
  animation: tp-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.tp-loader.spinner3 .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.tp-loader.spinner3 .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes tp-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}

.tp-loader.spinner4 {
  margin: -20px 0px 0px -20px;
  width: 40px;
  height: 40px;
  text-align: center;
  -webkit-animation: tp-rotate 2.0s infinite linear;
  animation: tp-rotate 2.0s infinite linear;
}

.tp-loader.spinner4 .dot1,
.tp-loader.spinner4 .dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #fff;
  border-radius: 100%;
  -webkit-animation: tp-bounce 2.0s infinite ease-in-out;
  animation: tp-bounce 2.0s infinite ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.15);
}

.tp-loader.spinner4 .dot2 {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes tp-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes tp-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes tp-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes tp-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}



.tp-transparentimg {	content:"url(../../assets/revolution-slider/transparent.png)"}
.tp-3d				{	-webkit-transform-style: preserve-3d;
						 -webkit-transform-origin: 50% 50%;
					}



.tp-caption img {
background: transparent;
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)";
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF);
zoom: 1;
}


@font-face {
  font-family: 'revicons';
  src: url('../font/revicons90c6.eot?5510888');
  src: url('../font/revicons90c6.eot?5510888#iefix') format('embedded-opentype'),
       url('../font/revicons90c6.woff?5510888') format('woff'),
       url('../font/revicons90c6.ttf?5510888') format('truetype'),
       url('../font/revicons90c6.svg?5510888#revicons') format('svg');
  font-weight: normal;
  font-style: normal;
}
/* Chrome hack: SVG is rendered more smooth in Windozze. 100% magic, uncomment if you need it. */
/* Note, that will break hinting! In other OS-es font will be not as sharp as it could be */
/*
@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: 'revicons';
    src: url('../../font/revicons.svg?5510888#revicons') format('svg');
  }
}
*/

 [class^="revicon-"]:before, [class*=" revicon-"]:before {
  font-family: "revicons";
  font-style: normal;
  font-weight: normal;
  speak: none;

  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  /* opacity: .8; */

  /* For safety - reset parent styles, that can break glyph codes*/
  font-variant: normal;
  text-transform: none;

  /* fix buttons height, for twitter bootstrap */
  line-height: 1em;

  /* Animation center compensation - margins should be symmetric */
  /* remove if not needed */
  margin-left: .2em;

  /* you can be more comfortable with increased icons size */
  /* font-size: 120%; */

  /* Uncomment for 3D effect */
  /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
}

.revicon-search-1:before { content: '\\e802'} /* '' */
.revicon-pencil-1:before { content: '\\e831'} /* '' */
.revicon-picture-1:before { content: '\\e803'} /* '' */
.revicon-cancel:before { content: '\\e80a'} /* '' */
.revicon-info-circled:before { content: '\\e80f'} /* '' */
.revicon-trash:before { content: '\\e801'} /* '' */
.revicon-left-dir:before { content: '\\e817'} /* '' */
.revicon-right-dir:before { content: '\\e818'} /* '' */
.revicon-down-open:before { content: '\\e83b'} /* '' */
.revicon-left-open:before { content: '\\e819'} /* '' */
.revicon-right-open:before { content: '\\e81a'} /* '' */
.revicon-angle-left:before { content: '\\e820'} /* '' */
.revicon-angle-right:before { content: '\\e81d'} /* '' */
.revicon-left-big:before { content: '\\e81f'} /* '' */
.revicon-right-big:before { content: '\\e81e'} /* '' */
.revicon-magic:before { content: '\\e807'} /* '' */
.revicon-picture:before { content: '\\e800'} /* '' */
.revicon-export:before { content: '\\e80b'} /* '' */
.revicon-cog:before { content: '\\e832'} /* '' */
.revicon-login:before { content: '\\e833'} /* '' */
.revicon-logout:before { content: '\\e834'} /* '' */
.revicon-video:before { content: '\\e805'} /* '' */
.revicon-arrow-combo:before { content: '\\e827'} /* '' */
.revicon-left-open-1:before { content: '\\e82a'} /* '' */
.revicon-right-open-1:before { content: '\\e82b'} /* '' */
.revicon-left-open-mini:before { content: '\\e822'} /* '' */
.revicon-right-open-mini:before { content: '\\e823'} /* '' */
.revicon-left-open-big:before { content: '\\e824'} /* '' */
.revicon-right-open-big:before { content: '\\e825'} /* '' */
.revicon-left:before { content: '\\e836'} /* '' */
.revicon-right:before { content: '\\e826'} /* '' */
.revicon-ccw:before { content: '\\e808'} /* '' */
.revicon-arrows-ccw:before { content: '\\e806'} /* '' */
.revicon-palette:before { content: '\\e829'} /* '' */
.revicon-list-add:before { content: '\\e80c'} /* '' */
.revicon-doc:before { content: '\\e809'} /* '' */
.revicon-left-open-outline:before { content: '\\e82e'} /* '' */
.revicon-left-open-2:before { content: '\\e82c'} /* '' */
.revicon-right-open-outline:before { content: '\\e82f'} /* '' */
.revicon-right-open-2:before { content: '\\e82d'} /* '' */
.revicon-equalizer:before { content: '\\e83a'} /* '' */
.revicon-layers-alt:before { content: '\\e804'} /* '' */
.revicon-popup:before { content: '\\e828'} /* '' */

/* navigation */
.tp-leftarrow.square,
.tp-rightarrow.square {
	width: 60px;
	height: 60px;
	background-color: rgba(255, 255, 255, 1);	
	text-align: center;
	line-height: 20px;
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.05);
	-webkit-transition: all 0.3s ease-in-out;
	   -moz-transition: all 0.3s ease-in-out;
		-ms-transition: all 0.3s ease-in-out;
		 -o-transition: all 0.3s ease-in-out;
			transition: all 0.3s ease-in-out;
}

.tp-leftarrow.square:before,
.tp-rightarrow.square:before {
	position: absolute;	
	content: "\\f104";
	left: 25px;
    top: 21px;
	color: #000000;
   	font-family: "FontAwesome";
   	font-size: 22px;	
   	-webkit-transition: all 0.3s ease-in-out;
	   -moz-transition: all 0.3s ease-in-out;
	    -ms-transition: all 0.3s ease-in-out;
	     -o-transition: all 0.3s ease-in-out;
	        transition: all 0.3s ease-in-out;	
}

.tp-rightarrow.square:before {
	content: "\\f105";
}

.tp-leftarrow.square:hover,
.tp-rightarrow.square:hover {
	opacity: 0.7;
}

.tp-leftarrow.square:hover:before,
.tp-rightarrow.square:hover:before {
	color: #21242b;
	opacity: 1;
	font-size: 32px;
}

/* Text slider */
.tp-caption.title-slide {
	font-family: "Poppins", sans-serif;
	font-size: 8em;
    color: rgb(0,0, 0);
	max-width: 90%;
    transition: none;
    line-height: 66px;
    border-width: 0px;
    margin: 30px 0px 0px;
    padding: 0px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 27px;

}

.tp-caption.description-slider{
	font-family: "Poppins", sans-serif;
	font-size: 38px;
    color: rgb(0,0, 0);
    transition: none;
    line-height: 66px;
    border-width: 0px;
    margin: 30px 0px 0px;
    padding: 0px;
    letter-spacing: 16px;
    font-weight: 300;
    text-transform: uppercase;
   

}

.tp-caption.desc-slide {
	font-family: "Poppins", sans-serif;
	font-size: 13px;
    color: rgb(0,0, 0);
    transition: none;
    line-height: 18px;
    border-width: 0px;
    padding-left: 40px;
    font-weight: 400;
     transform: rotate(90deg) !important ;
		-moz-transform: rotate(-90deg);
		 -ms-transform: rotate(-90deg);
		  -o-transform: rotate(-90deg);
	 -webkit-transform: rotate(-90deg);
		    transform-origin: 0% 50%;
    -webkit-transform-origin: 0% 50%;
	     -o-transform-origin: 0% 50%;
	    -ms-transform-origin: 0% 50%;
	   -moz-transform-origin: 0% 50%;
	   border-left: 20px solid #000000;

}

.tp-caption.desc-slide span {
	font-family: "Poppins", sans-serif;
	font-size: 21px;
    color: rgb(0,0, 0);
    transition: none;
    line-height: 20px;
    border-width: 0px;
    padding: 0px;
    font-weight: 700;
    text-transform: uppercase;
    display: block;
    letter-spacing: 3px;

}

#slider-counter {
	line-height: 24px;
	font-size: 12px;
	font-weight: 500;	
	color: #000000;
	position: absolute;
			 transform: rotate(-90deg) !important;
		-moz-transform: rotate(180deg);
		 -ms-transform: rotate(180deg);
		  -o-transform: rotate(180deg);
	 -webkit-transform: rotate(180deg);
		    transform-origin: 0% 50%;
    -webkit-transform-origin: 0% 50%;
	     -o-transform-origin: 0% 50%;
	    -ms-transform-origin: 0% 50%;
	   -moz-transform-origin: 0% 50%;
    left: 50px;
    bottom: 0;
    z-index: 1000;
}

#slider-counter span {
	padding: 0 20px 0 20px;
}


/* Button slider */
.tp-caption.flat-button-slider {
	font-family: "Poppins", sans-serif;
	padding: 18px 28px;
    font-size: 15px;
    font-weight: 600;
    display: inline-block;
    line-height: 1;
    background: #333;
    color: #fff;    
    z-index: 1;
    -webkit-transition-duration: 0.3s;
       -moz-transition-duration: 0.3s;
        -ms-transition-duration: 0.3s;
         -o-transition-duration: 0.3s;
            transition-duration: 0.3s;
}

.flat-button-slider.bg-button-slider-32bfc0 {
	background-color: #eab702;
}

.flat-button-slider.bg-button-slider-32bfc0:hover {
	background-color: #eab702;
}

.flat-button-slider:hover {
	background-color: #eab702;
}

.flat-button-slider:hover a {
	color: #fff;
}
`
