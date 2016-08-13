/*
License: CC BY-SA 4.0
Addition requirements: keep and copy license file into every software copy, keep and copy all license headers in files and license file without any changes.
Copyright (C) xmoonlight, 2016, All Rights Reserved
https://github.com/xmoonlight/includeHTML
*/
(function(){
 function load(dst, url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function() 
    {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) 
        {
           if(xmlhttp.status == 200){
              dst.innerHTML = xmlhttp.responseText;
              statusText = "success";
           }
           else {
              statusText = "error";
           }
               callback(xmlhttp.responseText, statusText, xmlhttp);
        }

    }

     try {      
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
     } catch(e) {callback(true, 'error', false);}

 }

window.includeHTML = function (src, destination, callback) {
  load(destination,src,function ( response, status, xhr ) {
    if (status == "error" ) {
       var iframe = document.createElement('iframe');
       iframe.onload = function() {
           if(!response && document.location.protocol.indexOf('http')==-1) { //всё, приехали...
                 if (navigator.userAgent.match(/Chrome/i)!==-1) //выводим подсказку.
                       msg='For Chrome: add parameter in shortcut link:'+"\n"+'"path_chrome_dir\chrome.exe" --allow-file-access-from-files';
                 alert(navigator.userAgent+"\nResponse: "+response+"\nURL: "+src+"\n-------\n"+msg);
           }
           destination.innerHTML = window[this.name].document.body.innerHTML;
           iframe.parentNode.removeChild( iframe );
           includeHTMLAuto(destination);
           if (callback) callback();
       }

       iframe.style.display = 'none';
       iframe.name = 'includer'+src+Math.random();
       iframe.src = src;
       document.body.appendChild(iframe);
    } else {
            includeHTMLAuto(destination);
            if(callback) callback();
    }
  });
 }

  function includeHTMLAuto(node) {
    var includes=node.querySelectorAll('include');
      for (var i=0; i<includes.length;i++) {
       includeHTML(includes[i].getAttribute("src"), includes[i]);
      }
  }

window.onload=function(){includeHTMLAuto(document.body);}
})();

/*
USAGE:

  1.Tag: <include scr="menu.html"></include>

  2.Async:
      <script>
        includeHTML('header.html', document.getElementById('mainmenu'));
        includeHTML('menu.html', document.getElementById('pagemenu'));
      </script>

  3.Sync:
      includeHTML('header.html', document.getElementById('mainmenu'), function(){
        includeHTML('menu.html', document.getElementById('pagemenu'));
      });
*/