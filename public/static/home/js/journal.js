!function(b,f,l,h){var g=b(f);b.fn.lazyload=function(a){function c(){var a=0;k.each(function(){var c=b(this);if(!(d.skip_invisible&&!c.is(":visible")||b.abovethetop(this,d)||b.leftofbegin(this,d)))if(b.belowthefold(this,d)||b.rightoffold(this,d)){if(++a>d.failure_limit)return!1}else c.trigger("appear"),a=0})}var e,k=this,d={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:f,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};
return a&&(h!==a.failurelimit&&(a.failure_limit=a.failurelimit,delete a.failurelimit),h!==a.effectspeed&&(a.effect_speed=a.effectspeed,delete a.effectspeed),b.extend(d,a)),e=d.container===h||d.container===f?g:b(d.container),0===d.event.indexOf("scroll")&&e.bind(d.event,function(){return c()}),this.each(function(){var a=this,c=b(a);a.loaded=!1;(c.attr("src")===h||!1===c.attr("src"))&&c.is("img")&&c.attr("src",d.placeholder);c.one("appear",function(){this.loaded||(d.appear&&d.appear.call(a,k.length,
d),b("<img />").bind("load",function(){var e=c.attr("data-"+d.data_attribute);c.hide();c.is("img")?c.attr("src",e):c.css("background-image","url('"+e+"')");c[d.effect](d.effect_speed);a.loaded=!0;e=b.grep(k,function(a){return!a.loaded});(k=b(e),d.load)&&d.load.call(a,k.length,d)}).attr("src",c.attr("data-"+d.data_attribute)))});0!==d.event.indexOf("scroll")&&c.bind(d.event,function(){a.loaded||c.trigger("appear")})}),g.bind("resize",function(){c()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&
g.bind("pageshow",function(a){a.originalEvent&&a.originalEvent.persisted&&k.each(function(){b(this).trigger("appear")})}),b(l).ready(function(){c()}),this};b.belowthefold=function(a,c){var e;return e=c.container===h||c.container===f?(f.innerHeight?f.innerHeight:g.height())+g.scrollTop():b(c.container).offset().top+b(c.container).height(),e<=b(a).offset().top-c.threshold};b.rightoffold=function(a,c){var e;return e=c.container===h||c.container===f?g.width()+g.scrollLeft():b(c.container).offset().left+
b(c.container).width(),e<=b(a).offset().left-c.threshold};b.abovethetop=function(a,c){var e;return e=c.container===h||c.container===f?g.scrollTop():b(c.container).offset().top,e>=b(a).offset().top+c.threshold+b(a).height()};b.leftofbegin=function(a,c){var e;return e=c.container===h||c.container===f?g.scrollLeft():b(c.container).offset().left,e>=b(a).offset().left+c.threshold+b(a).width()};b.inviewport=function(a,c){return!(b.rightoffold(a,c)||b.leftofbegin(a,c)||b.belowthefold(a,c)||b.abovethetop(a,
c))};b.extend(b.expr[":"],{"below-the-fold":function(a){return b.belowthefold(a,{threshold:0})},"above-the-top":function(a){return!b.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return b.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return!b.rightoffold(a,{threshold:0})},"in-viewport":function(a){return b.inviewport(a,{threshold:0})},"above-the-fold":function(a){return!b.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return b.rightoffold(a,{threshold:0})},
"left-of-fold":function(a){return!b.rightoffold(a,{threshold:0})}})}(jQuery,window,document);var MESPC=MESPC||{};MESPC.introductJournal=function(b,f){function l(){var f=MES.statistics;b("#articleList").on("click","[op=articleOne]",function(){f.statisticsSend("viewArticle","title",b(this).data("title"))})}return{init:function(){b("#articleList").find("img[load=lazy]").lazyload({effect:"fadeIn"});l()}}}(jQuery,MES_GLOBAL_VARS);$(function(){MESPC.introductJournal.init()});
