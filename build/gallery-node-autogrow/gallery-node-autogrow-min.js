YUI.add("gallery-node-autogrow",function(e,t){var n,r,i;n=function(t){var n;return t?n=e.ClassNameManager.getClassName(i.NAME,t):n=e.ClassNameManager.getClassName(i.NAME),n},r=function(t){var r,i,s;return i=t._node,r=document.createElement("div"),r.className=n(),e.UA.ie?r.applyElement(i,"outside"):(s=document.createRange(),s.selectNode(i),s.surroundContents(r)),e.one(r)},i=function(e){this._node=e.host,i.superclass.constructor.apply(this,arguments)},i.MIRROR_HTML="<pre><span></span><br></pre>",e.extend(i,e.Plugin.Base,{initializer:function(t){var s=this,o,u,a,f,l;u=i.MIRROR_HTML,f=t.host;if(f.get("nodeName").toLowerCase()!=="textarea")return!1;o=e.one(t.boundingBox)||null;if(!o||!o.one("textarea"))o=r(f),s._set("boundingBox",o);t.width&&parseInt(t.width,10)&&(l=parseInt(t.width,10),o.setStyle("width",l+"px")),o.one("pre span")||o.insert(u,f),a=o.one("span"),o.addClass(n()),a.setHTML(f.getHTML()),f.on("valuechange",function(){a.set("text",this.get("value"))})}}),i.NAME="nodeAutogrow",i.NS="autoGrow",e.namespace("Plugin"),e.Plugin.NodeAutoGrow=i},"@VERSION@",{requires:["node-style","event-valuechange","classnamemanager","plugin"]});