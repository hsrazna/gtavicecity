if("undefined"==typeof PSMA)var PSMA={_i:-1,_q:[],_domain:"",_webp:0,_dmp:{guid:null,hash:"1"},_scripts:function(){if(document.currentScript)return document.currentScript;var e,t,n,i="sys.js",s=document.getElementsByTagName("script"),a=s.length;for(e=0;a>e;e++)if(n=s[e].getAttribute("src"),n&&(t=n,t=t.split("?")[0].split("/").pop(),t===i))return s[e];return null},webp:function(){if(-1===this._i){this._i=0;var e=new Image;e.onload=function(){PSMA._webp=e.width>0&&e.height>0?1:0,PSMA._init()},e.onerror=function(){PSMA._webp=0,PSMA._init()},e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}},_init:function(){var e=PSMA._scripts();if(e){var t=e.src,n=t.substring(t.indexOf("/")+2);n=n.substring(0,n.indexOf("/")),this._domain=n,this._dmpCall(function(){this._i=1;var e,t=this._q.length;for(e=0;t>e;++e)this.display(this._q[e].p,this._q[e].x)})}else this._i=-1},display:function(e,t){if(1===this._i){var n="//"+this._domain+"/"+e.join("/");if(n+="?1",PSMA._dmp.guid&&(n=n+"&dmpguid="+PSMA._dmp.guid+"&dmphash="+PSMA._dmp.hash),document.referrer&&(n=n+"&ref="+encodeURIComponent(document.referrer)),PSMA._webp&&(n+="&webp=1"),t){var i;try{window.XDomainRequest?(i=new XDomainRequest,i.onload=function(){window.eval(i.responseText)}):i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),i.withCredentials=!0,i.onreadystatechange=function(){4==i.readyState&&200==i.status&&window.eval(i.responseText)},i.open("GET",n,!0),i.send()}catch(s){}}else{var a=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",n),a.insertBefore(r,a.firstChild.nextSibling)}}else this._q.push({p:e,x:t})},_dmpCall:function(e){
var t,n=function(){try{data=JSON.parse(t.responseText),"undefined"!=typeof data.res&&"undefined"!=typeof data.res.dmpguid&&(PSMA._dmp.guid=data.res.dmpguid,"undefined"!=typeof data.res.dmphash&&(PSMA._dmp.hash=data.res.dmphash))}catch(n){}e.call(PSMA)};try{window.XDomainRequest?(t=new XDomainRequest,t.onload=function(){n(t)}):t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),t.timeout=1e3,t.withCredentials=!0,t.onreadystatechange=function(){4==t.readyState&&(200==t.status?n():e.call(PSMA))},t.onerror=function(){e.call(PSMA)},t.open("GET","//c1.onedmp.com/c/?cmd=0012&oper=advget&olo="+Math.random(),!0),t.send()}catch(i){e.call(PSMA)}
}};PSMA.webp();