!function(t){t.countrymerge=function(t,e){return t.regions.reduce(function(n,r,a){if(-1===e.indexOf(r))n.push(r);else for(var i=r+1;i<(t.regions[a+1]||t.names.length);i++)n.push(i);return n},[])}}("undefined"!=typeof exports&&exports||window.Globalmigration||(window.Globalmigration={})),function(t){var e=Math.PI,n=e/180,r=180/e;t.layout=function(){function a(t){for(var e=0,n=0;n<s.regions.length&&!(s.regions[n]>t);n++)e=n;return s.regions[e]}function i(){var t,n,r,i,g,x={},w=[],M=d3.range(h),R=[];for(s=s||{matrix:{},names:[],regions:[]},f=f||Object.keys(s.matrix)[0],d=f&&s.matrix[f]||[],u=[],l=[],t=0,i=-1;++i<h;){for(n=0,g=-1;++g<h;)n+=d[c[i]][c[g]],n+=d[c[g]][c[i]];w.push(n),R.push({source:d3.range(h),target:d3.range(h)}),t+=n}for(p&&M.sort(function(t,e){return p(w[t],w[e])}),A&&R.forEach(function(t,e){t.source.sort(function(t,n){return A(d[c[e]][c[t]],d[c[e]][c[n]])}),t.target.sort(function(t,n){return A(d[c[t]][c[e]],d[c[n]][c[e]])})}),t=(2*e-y*h)/t,n=m.alpha(),i=-1;++i<h;){var P=0,k=0,G=M[i];for(r=n,g=-1;++g<h;){var T=R[G].target[g],O=d[c[T]][c[G]],D=n,B=O*t;n+=B,x["target-"+G+"-"+T]={originalIndex:c[T],index:G,subindex:T,startAngle:D,dAngle:O*t,value:O},P+=O}var C=r;for(r=n,g=-1;++g<h;){var T=R[G].source[g],O=d[c[G]][c[T]],D=n,B=O*t;n+=B,x["source-"+G+"-"+T]={originalIndex:c[G],index:G,subindex:T,startAngle:D,dAngle:O*t,value:O},k+=O}l[G]={id:c[G],region:a(c[G]),index:G,startAngle:C,endAngle:n,angle:C+(n-C)/2,inflow:P,outflow:k,value:Math.round((n-C)/t)},n+=y}for(i=-1;++i<h;)for(g=i-1;++g<h;){var S=x["source-"+i+"-"+g],I=x["target-"+g+"-"+i];if(i===g){if(null===b||S.value>b){var I=x["target-"+i+"-"+g];u.push({id:"source-"+c[i]+"-"+c[g],source:{id:c[S.index],region:a(c[S.index]),index:S.index,subindex:S.subindex,startAngle:S.startAngle,endAngle:S.startAngle+S.dAngle,value:S.value},target:{id:c[I.index],region:a(c[I.index]),index:I.index,subindex:I.subindex,startAngle:I.startAngle,endAngle:I.startAngle+I.dAngle,value:I.value}})}}else{(null===b||S.value>b)&&u.push({id:"source-"+c[i]+"-"+c[g],source:{id:c[S.index],region:a(c[S.index]),index:S.index,subindex:S.subindex,startAngle:S.startAngle,endAngle:S.startAngle+S.dAngle,value:S.value},target:{id:c[I.index],region:a(c[I.index]),index:I.index,subindex:I.subindex,startAngle:I.startAngle,endAngle:I.startAngle+I.dAngle,value:I.value}});var S=x["source-"+g+"-"+i],I=x["target-"+i+"-"+g];(null===b||S.value>b)&&u.push({id:"target-"+c[i]+"-"+c[g],source:{id:c[S.index],region:a(c[S.index]),index:S.index,subindex:S.subindex,startAngle:S.startAngle,endAngle:S.startAngle+S.dAngle,value:S.value},target:{id:c[I.index],region:a(c[I.index]),index:I.index,subindex:I.subindex,startAngle:I.startAngle,endAngle:I.startAngle+I.dAngle,value:I.value}})}}v&&o()}function o(){u.sort(function(t,e){return v(t.source.value,e.source.value)})}var u,l,s,d,c,g,f,h,p,A,v,x,m={},y=0,b=null;return m.data=function(t){return arguments.length?(s=t,c=s.regions.slice(),h=c.length,u=l=null,m):s},m.year=function(t){return arguments.length?(f=t,u=l=null,m):f},m.countries=function(e){return arguments.length?(g=e,c=t.countrymerge(s,g),h=c.length,u=l=null,m):g},m.padding=function(t){return arguments.length?(y=t,u=l=null,m):y},m.threshold=function(t){return arguments.length?(b=t,u=l=null,m):b},m.sortGroups=function(t){return arguments.length?(p=t,u=l=null,m):p},m.sortSubgroups=function(t){return arguments.length?(A=t,u=null,m):A},m.sortChords=function(t){return arguments.length?(v=t,u&&o(),m):v},m.chords=function(){return u||i(),u},m.groups=function(){return l||i(),l},m.alpha=function(t){return arguments.length?(x=0===t?1e-5:t,x*=n,x=x.mod(2*e),u=l=null,m):x*r},Number.prototype.mod=function(t){return(this%t+t)%t},m}}(window.Globalmigration||(window.Globalmigration={})),function(t){function e(t){return t.source}function n(t){return t.target}function r(t){return t.startAngle}function a(t){return t.endAngle}function i(t){return t.radius}function o(t){return t.targetPadding}function u(t){return t.sourcePadding}var l=d3.functor,s=Math.PI,d=-s/2;t.chord=function(){function t(t,e){var n=g(this,A,t,e),r=g(this,v,t,e,!0);f(n,r)&&(n.a1=n.a1-(n.a1-n.a0)/2,n.p1=[n.r*Math.cos(n.a1),n.r*Math.sin(n.a1)],r.a0=r.a0+(r.a1-r.a0)/2,r.p0=[r.r*Math.cos(r.a0),r.r*Math.sin(r.a0)]);var a=c(n,r,.618*n.r);return"M"+n.p0+h(n.r,n.p1,n.a1-n.a0)+p(a.cps1,a.cpt0,r.p0)+h(r.r,r.p1,r.a1-r.a0)+p(a.cpt1,a.cps0,n.p0)+"Z"}function c(t,e,n){return cps0=[n*Math.cos(t.a0),n*Math.sin(t.a0)],cps1=[n*Math.cos(t.a1),n*Math.sin(t.a1)],cpt0=[n*Math.cos(e.a0),n*Math.sin(e.a0)],cpt1=[n*Math.cos(e.a1),n*Math.sin(e.a1)],{cps0:cps0,cps1:cps1,cpt0:cpt0,cpt1:cpt1}}function g(t,e,n,r,a){var i=e.call(t,n,r),o=x.call(t,i,r),u=b.call(t,i,r)+d,l=w.call(t,i,r)+d;if(a){var n=y.call(t,i,r)||0;o-=n}else{var n=m.call(t,i,r)||0;o-=n}return{r:o,a0:u,a1:l,p0:[o*Math.cos(u),o*Math.sin(u)],p1:[o*Math.cos(l),o*Math.sin(l)]}}function f(t,e){return t.a0==e.a0&&t.a1==e.a1}function h(t,e,n){return"A"+t+","+t+" 0 "+ +(n>s)+",1 "+e}function p(t,e,n){return"C "+t+" "+e+" "+n}var A=e,v=n,x=i,m=u,y=o,b=r,w=a;return t.radius=function(e){return arguments.length?(x=l(e),t):x},t.sourcePadding=function(e){return arguments.length?(m=l(e),t):m},t.targetPadding=function(e){return arguments.length?(y=l(e),t):y},t.source=function(e){return arguments.length?(A=l(e),t):A},t.target=function(e){return arguments.length?(v=l(e),t):v},t.startAngle=function(e){return arguments.length?(b=l(e),t):b},t.endAngle=function(e){return arguments.length?(w=l(e),t):w},t}}(window.Globalmigration||(window.Globalmigration={})),function(t){t.timeline=function(t,e){var n=Object.keys(t.data.matrix).map(function(t){return parseInt(t)});e=e||{},e.element=e.element||"body",e.now=e.now||n[0],e.incr=e.incr||5;var r=d3.select(e.element).append("form"),a=r.selectAll(".year").data(n),i=a.enter().append("span").classed("year",!0);i.append("input").attr({name:"year",type:"radio",id:function(t){return"year-"+t},value:function(t){return t},checked:function(t){return t===e.now||null}}).on("click",function(e){var n=e;a.selectAll("input").attr("checked",function(t){return n===t||null}),t.draw(e)}),i.append("label").attr("for",function(t){return"year-"+t}).text(function(t){return t+(1===e.incr?"":"-"+(t+e.incr))}),d3.select(document.body).on("keypress",function(){var t=d3.event.which-49,e=n[t];e&&a.selectAll("input").each(function(t){t===e&&d3.select(this).on("click")(t)})})}}(window.Globalmigration||(window.Globalmigration={})),function(t){var e=Math.PI;t.chart=function(t,n){function r(t){if(t.region===t.id)return y(t.region);var e=d3.hsl(y(t.region));return[e.brighter(.75),e.darker(2),e,e.brighter(1.5),e.darker(1)][(t.id-t.region)%5]}function a(t){return r(t.source)}function i(t){var r=t.mod(2*e);return{x:Math.cos(r-e/2)*n.labelRadius,y:Math.sin(r-e/2)*n.labelRadius,r:180*(r-e/2)/e}}function o(t,e){e=e||",",t+="",x=t.split("."),x1=x[0],x2=x.length>1?"."+x[1]:"";for(var n=/(\d+)(\d{3})/;n.test(x1);)x1=x1.replace(n,"$1"+e+"$2");return x1+x2}function u(t){var e=d3.rgb(t);return.21*e.r+.71*e.g+.07*e.b}function l(e){var r=this;S&&clearTimeout(S);var a=r.getBBox();S=setTimeout(function(){var n=d3.select(r).style("fill");C.attr("transform","translate("+(a.x+a.width/2)+","+(a.y+a.height/2)+")");var i=C.select(".text").selectAll("text").data([t.names[e.id],"Total In: "+o(e.inflow),"Total Out: "+o(e.outflow)]);i.enter().append("text"),i.text(function(t){return t}).style({fill:u(n)>160?"black":"white"}).attr({transform:function(t,e){return"translate(6, "+(14*e+16)+")"}}),i.exit().remove();var l=C.select(".text").node().getBBox();C.select("rect").style("color",n).style("fill",n).attr({width:l.width+12,height:l.height+10}),C.transition().attr("opacity",1)},n.infoPopupDelay)}function s(e){var r=this;S&&clearTimeout(S);var a=r.getBBox();S=setTimeout(function(){var n=d3.select(r).style("fill");C.attr("transform","translate("+(a.x+a.width/2)+","+(a.y+a.height/2)+")").attr("opacity",0).transition().attr("opacity",1);var i=C.select(".text").selectAll("text").data([t.names[e.source.id]+" \u2192 "+t.names[e.target.id]+": "+o(e.source.value)]);i.enter().append("text"),i.exit().remove(),i.text(function(t){return t}).style({fill:u(n)>160?"black":"white"}).attr("transform",function(t,e){return"translate(6, "+(12*e+16)+")"}),C.selectAll("rect").style("fill",d3.select(r).style("fill"));var l=C.select(".text").node().getBBox();C.select("rect").attr({width:l.width+12,height:l.height+10})},n.infoPopupDelay)}function d(){b.groups=P.groups().reduce(function(t,e){return t[e.id]=e,t},{})}function c(){b.chords=P.chords().reduce(function(t,e){return t[e.source.id]=t[e.source.id]||{},t[e.source.id][e.target.id]=e,t},{})}function g(e){var n=t.regions[t.regions.indexOf(e)+1];return{start:e+1,end:n?n-1:t.names.length-1}}function f(t,e){return t>=e.start&&t<=e.end}function h(t,e){return!!e.filter(function(e){return f(t.source.id,e)||f(t.target.id,e)}).length}function p(t){if(t.id===t.region){var e=g(t.id),n=b.groups[e.start],r=b.groups[e.end];if(n&&r)return{angle:n.startAngle+(r.endAngle-n.startAngle)/2,startAngle:n.startAngle,endAngle:r.endAngle}}}function A(t){if(t.source.id===t.source.region){var e={source:{},target:{}};return Object.keys(b.chords).forEach(function(n){Object.keys(b.chords[n]).forEach(function(r){var a=b.chords[n][r];a.source.region===t.source.id&&((!e.source.startAngle||a.source.startAngle<e.source.startAngle)&&(e.source.startAngle=a.source.startAngle),(!e.source.endAngle||a.source.endAngle>e.source.endAngle)&&(e.source.endAngle=a.source.endAngle)),a.target.region===t.target.id&&((!e.target.startAngle||a.target.startAngle<e.target.startAngle)&&(e.target.startAngle=a.target.startAngle),(!e.target.endAngle||a.target.endAngle>e.target.endAngle)&&(e.target.endAngle=a.target.endAngle))})}),e.source.startAngle=e.source.startAngle||0,e.source.endAngle=e.source.endAngle||m,e.target.startAngle=e.target.startAngle||0,e.target.endAngle=e.target.endAngle||m,e.source.endAngle=e.source.startAngle+m,e.target.endAngle=e.target.startAngle+m,e}}function v(o,u){o=o||Object.keys(t.matrix)[0],u=u||b.countries,b.countries=u;var f=u.map(g);d(),c(),P.year(o).countries(u);var x=T.selectAll(".group").data(P.groups,function(t){return t.id});x.enter().append("g").attr("class","group"),x.on("mouseover",function(t){C.classed("fade",function(e){return e.source.id!==t.id&&e.target.id!==t.id})}),x.exit().remove();var y=x.selectAll(".group-arc").data(function(t){return[t]});y.enter().append("path").attr("class","group-arc").attr("id",function(t,e,n){return"group"+n}),y.style("fill",r).on("mousemove",l).transition().duration(n.animationDuration).attrTween("d",function(t){var e=d3.interpolate(b.groups[t.id]||b.groups[t.region]||p(t)||n.initialAngle.arc,t);return function(t){return R(e(t))}}),y.exit().remove(),y.filter(function(t){return t.id===t.region}).on("click",function(t){u.length+1>n.maxRegionsOpen&&u.shift(),v(o,u.concat(t.id))}),y.filter(function(t){return t.id!==t.region}).on("click",function(t){u.splice(u.indexOf(t.region),1),v(o,u)});var G=T.selectAll(".label").data(P.groups,function(t){return t.id});G.enter().append("g").attr("class","label"),G.filter(function(t){return t.id!==t.region}).transition().duration(n.animationDuration).attrTween("transform",function(t){var e=d3.interpolate(b.groups[t.id]||b.groups[t.region]||p(t)||{angle:0},t);return function(t){var t=i(e(t).angle);return"translate("+t.x+" "+t.y+") rotate("+t.r+")"}}),G.exit().transition().duration(n.animationDuration).style("opacity",0).attrTween("transform",function(t){if(t.id!==t.region){var e=P.groups().filter(function(e){return e.id===t.region});e=e&&e[0];var n=e&&e.startAngle+(e.endAngle-e.startAngle)/2;n=n||0;var r=d3.interpolate(t,{angle:n});return function(t){var t=i(r(t).angle);return"translate("+t.x+" "+t.y+") rotate("+t.r+")"}}}).each("end",function(){d3.select(this).remove()});var O=G.selectAll("text").data(function(t){return[t]});O.enter().append("text"),O.classed("region",function(t){return t.id===t.region}).text(function(e){return e.id!==e.region?t.names[e.id]:void 0}).attr("transform",function(t){return t.id!==t.region?t.angle.mod(2*e)>e?"translate(0, -4) rotate(180)":"translate(0, 4)":void 0}).attr("text-anchor",function(t){return t.id===t.region?"middle":t.angle.mod(2*e)>e?"end":"start"}).style("fill",function(t){return t.id===t.region?r(t):null}).classed("fade",function(t){return t.value<n.layout.labelThreshold});var D=x.filter(function(t){return t.id===t.region}).selectAll(".group-textpath-arc").data(function(t){return[t]});D.enter().append("path").attr("class","group-textpath-arc").attr("id",function(t){return"group-textpath-arc"+t.id}),D.style("fill","none").transition().duration(n.animationDuration).attrTween("d",function(t){var r=d3.interpolate(b.groups[t.id]||b.groups[t.region]||p(t)||n.initialAngle.arc,t);return t.angle.mod(2*e)>e/2&&t.angle.mod(2*e)<3*e/2?function(t){return M(r(t))}:function(t){return w(r(t))}}),D.exit().remove();var B=O.filter(function(t){return t.id===t.region}).selectAll("textPath").data(function(t){return[t]});B.enter().append("textPath"),B.text(function(e){return t.names[e.id]}).attr("startOffset",function(t){return t.angle.mod(2*e)>e/2&&t.angle.mod(2*e)<3*e/2?"75%":"25%"}).attr("xlink:href",function(t){return"#group-textpath-arc"+t.id}),B.filter(function(t){return this.getComputedTextLength()>(t.endAngle-t.startAngle)*(n.outerRadius+18)}).remove();var C=T.selectAll(".chord").data(P.chords,function(t){return t.id});C.enter().append("path").attr("class","chord").on("mousemove",s),C.style("fill",a).transition().duration(n.animationDuration).attrTween("d",function(t){var e=b.chords[t.source.id]&&b.chords[t.source.id][t.target.id];e=e||b.chords[t.source.region]&&b.chords[t.source.region][t.target.region],e=e||A(t),e=e||n.initialAngle.chord;var r=d3.interpolate(e,t);return function(t){return k(r(t))}}),C.exit().transition().duration(n.animationDuration).style("opacity",0).attrTween("d",function(t){var e=d3.interpolate(t,{source:{startAngle:t.source.endAngle-m,endAngle:t.source.endAngle},target:{startAngle:t.target.endAngle-m,endAngle:t.target.endAngle}});return function(t){return k(e(t))}}).each("end",function(){d3.select(this).remove()}),C.classed("unselected",!!f.length&&function(t){return!h(t,f)}),d3.select(window).on("resize.svg-resize")()}t=t||{regions:[],names:[],matrix:[]},n=n||{},n.element=n.element||"body",n.now=n.now||Object.keys(t.matrix)[0],n.width=n.width||1100,n.height=n.height||1100,n.margin=n.margin||125,n.outerRadius=n.outerRadius||Math.min(n.width,n.height)/2-n.margin,n.arcWidth=n.arcWidth||24,n.innerRadius=n.innerRadius||n.outerRadius-n.arcWidth,n.arcPadding=n.arcPadding||.005,n.sourcePadding=n.sourcePadding||3,n.targetPadding=n.targetPadding||20,n.labelPadding=n.labelPadding||10,n.labelRadius=n.labelRadius||n.outerRadius+n.labelPadding;var m=e/1e5;n.animationDuration=n.animationDuration||1e3,n.initialAngle=n.initialAngle||{},n.initialAngle.arc=n.initialAngle.arc||{startAngle:0,endAngle:m},n.initialAngle.chord=n.initialAngle.chord||{source:n.initialAngle.arc,target:n.initialAngle.arc},n.layout=n.layout||{},n.layout.sortSubgroups=n.layout.sortSubgroups||d3.descending,n.layout.sortChords=n.layout.sortChords||d3.descending,n.layout.threshold=n.layout.threshold||1e3,n.layout.labelThreshold=n.layout.labelThreshold||1e5,n.layout.alpha=n.layout.alpha||m,n.maxRegionsOpen=n.maxRegionsOpen||2,n.infoPopupDelay=n.infoPopupDelay||300;var y=d3.scale.category10().domain(t.regions);n.layout.colors&&y.range(n.layout.colors);var b={countries:[]};Number.prototype.mod=function(t){return(this%t+t)%t};var w=d3.svg.arc().innerRadius(n.outerRadius+10).outerRadius(n.outerRadius+10),M=d3.svg.arc().innerRadius(n.outerRadius+18).outerRadius(n.outerRadius+18),R=d3.svg.arc().innerRadius(n.innerRadius).outerRadius(n.outerRadius),P=Globalmigration.layout().padding(n.arcPadding).threshold(n.layout.threshold).data(t).year(n.now);n.layout.sortGroups&&P.sortGroups(n.layout.sortGroups),n.layout.sortSubgroups&&P.sortSubgroups(n.layout.sortSubgroups),n.layout.sortChords&&P.sortChords(n.layout.sortChords),n.layout.alpha&&P.alpha(n.layout.alpha);var k=Globalmigration.chord().radius(n.innerRadius).sourcePadding(n.sourcePadding).targetPadding(n.targetPadding),G=d3.select(n.element).append("svg").attr("preserveAspectRatio","xMidYMid").attr("viewBox","0 0 "+n.width+" "+n.height).attr("width",n.width).attr("height",n.height),T=G.append("g").attr("id","circle").attr("transform","translate("+n.width/2+","+n.height/2+")");d3.select(window).on("resize.svg-resize",function(){var t=G.node().parentNode.clientWidth;t&&t<n.width&&G.attr("height",t)});var O=T.append("circle").attr("r",n.outerRadius+24),D=G.append("filter").attr("id","dropshadow");D.append("feGaussianBlur").attr({"in":"SourceAlpha",stdDeviation:2}),D.append("feOffset").attr({dx:0,dy:1,result:"offsetblur"}),D.append("feComponentTransfer").append("feFuncA").attr({type:"linear",slope:.5});var B=D.append("feMerge");B.append("feMergeNode"),B.append("feMergeNode").attr("in","SourceGraphic");var C=G.append("g").attr("class","info-group").attr("transform","translate("+n.width/2+","+n.height/2+")").append("g").attr("class","info").attr("opacity",0);C.append("rect").style("filter","url(#dropshadow)"),C.append("g").attr("class","text"),G.on("mousemove",function(){C.transition().duration(10).attr("opacity",0)}),O.on("mouseout",function(){S&&clearTimeout(S),C.transition().duration(10).attr("opacity",0)});var S;return{draw:v,data:t}}}(window.Globalmigration||(window.Globalmigration={}));