import "dom4";

import * as $ from "jquery/dist/jquery";

window.$ = $;
window.jQuery = $;

import svgPolyfill from "svg4everybody/dist/svg4everybody";
import isMac from "./components/is-mac";
import "@fancyapps/fancybox";
import "retinajs/dist/retina";
import "slick-carousel";
import "jquery.scrollto";
import "hc-offcanvas-nav";

import vk from "./components/vk";
import stats from "./components/stats";
import mainGallery from "./components/main-gallery";
import featuresGallery from "./components/features-gallery";
import smoothScroll from "./components/smooth-scroll";
import header from "./components/header";

svgPolyfill();

$(document).ready(function () {
    isMac();
    header();
    vk();
    stats();
    mainGallery();
    featuresGallery();
    smoothScroll();
});
