var _lhref = window.location.href;
var checkurl = (_lhref.indexOf('\'') > -1 || _lhref.indexOf('<') > -1 || _lhref.indexOf('>') > -1 || _lhref.indexOf('"') > -1)
if(checkurl){
    window.location = _lhref.replace(/'/g, '%27').replace(/"/g, '%22').replace(/</g, '%3C').replace(/>/g, '%3E');
}


(function () {
   
    if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
        var d = document, e = d.documentElement, s = d.createElement('style');
        //if (e.style.transform === '') {
        s.textContent = 'body{visibility:hidden;opacity:0}';
        e.firstChild.appendChild(s);
        function f() {
            var ffrendertime = setTimeout(function () { s.parentNode && s.parentNode.removeChild(s) }, 200);
        }
        addEventListener('load', f, false);
        setTimeout(f, 1000);
        //}
    }
    else{
         function supportsToken(token) {
                return function (relList) {
                    if (relList.supports && token) {
                        return relList.supports(token);
                    }
                    return false;
                }
            };

            var supportsPreload = supportsToken("preload");
            var rl = document.createElement("link").relList;
            if (supportsPreload(rl) != true) {
                var d = document, e = d.documentElement, s = d.createElement('style');
                //if (e.style.transform === '') {
                s.textContent = 'body{visibility:hidden;opacity:0}';
                e.firstChild.appendChild(s);
                function f() {
                    var ffrendertime = setTimeout(function () { s.parentNode && s.parentNode.removeChild(s) }, 200);
                }
                addEventListener('load', f, false);
                setTimeout(f, 1000);
                //}
            }
    }
    
    
    
    var langArr = ['en', 'es-xl', 'pt-br', 'de', 'fr', 'nl', 'jp', 'ar', 'id', 'th'];
    var currentUrlLang = '';
    function findeLanguage() {
        var lVal = '';
        langArr.forEach(function (index) {
            if (window.location.href.split('/').indexOf(index) > -1) {
                lVal = index;
            }
        });
        currentUrlLang = lVal;
    }
    
    findeLanguage();
    if(currentUrlLang != ''){
        var intr = setInterval(function () {
            if (document.getElementsByTagName('body').length > 0) {
                var _element = document.getElementsByTagName('body')[0];
                _element.classList.add("other-lang");
                clearInterval(intr);
            }
        }, 10);
    }
    
    
})();
var RegionName, IPAddress;
var CountryName = "United States";
var CountryCode = "US";
function ipcallbk_getUrlParam(sParam) {
    var vars = {}, getval = '';
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        if(key == sParam){
            getval = value;
        }
    });
    return getval;
}
if(ipcallbk_getUrlParam('ismobilesignup') != ''){
    var intr = setInterval(function () {
        if (document.getElementsByTagName('body').length > 0) {
            var _element = document.getElementsByTagName('body')[0];
            _element.classList.add("ismobileapp");
            clearInterval(intr);
        }
    }, 10); 
}
var ipIntervalTime;
var redirectFilesList = [{
    Url: 'https://www.zoho.' + 'com' + '/crm/', // Multiple url seperation by comma (,)
    Cc: 'IN', // Multiple country seperation by comma (,)
    Rurl: 'https://www.zoho.' + 'com' + '/in/crm/'
},
{
    Url: 'https://www.zoho.' + 'com' + '/crm/',
    Cc: 'AU',
    Rurl: 'https://www.zoho.' + 'com' + '/au/crm/'
}
];

function checkRedirectFileList() {
    for (i = 0; i < redirectFilesList.length; i++) {
        var windowHrefVal = window.location.href.split('?');

        for (j = 0; j < redirectFilesList[i].Url.split(',').length; j++) { // Url loop

            if (redirectFilesList[i].Url.split(',')[j] == windowHrefVal[0]) {
                if (ipcallbk_getUrlParam('zredirect') != 'f') {
                    for (k = 0; k < redirectFilesList[i].Cc.split(',').length; k++) { // Country loop

                        if (redirectFilesList[i].Cc.split(',')[k] == CountryCode) {
                            if (windowHrefVal.length > 1) {
                                window.location = redirectFilesList[i].Rurl + '?' + windowHrefVal[1];
                            } else {
                                window.location = redirectFilesList[i].Rurl;
                            }
                        }
                    }
                }
            }
        }
    }
}

var checkIPcookie = false;

function ipcallbk_getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function afterIPloadded() {
    if (ipcallbk_getUrlParam('autoCC') != "") {
        var autoCCVal = ipcallbk_getUrlParam('autoCC');
        if (autoCCVal.length == 2) {
            CountryCode = autoCCVal;
            CountryName = autoCCVal;
            IPAddress = "1.2.3.4";
        }
    }
    checkRedirectFileList();

    var intr = setInterval(function () {
        if (document.getElementsByTagName('body').length > 0) {
            var _element = document.getElementsByTagName('body')[0];
            _element.classList.add("ccode-" + CountryCode.toLowerCase());
            clearInterval(intr);
        }
    }, 10);
    ipIntervalTime = setInterval(function () {
        if (typeof EuRedirection != 'undefined') {
            ipLoaded();
        }
    }, 100);
}

function ipCallBack(ipData) {
    if (checkIPcookie == false) {
        checkIPcookie = true;
        CountryCode = ipData.COUNTRY_CODE;
        CountryName = ipData.COUNTRY_NAME;
        RegionName = ipData.REGION.replace("_", " ");
        if (typeof ipData.IP_ADDRESS != "undefined") {
            IPAddress = ipData.IP_ADDRESS;
        }
        afterIPloadded();
    }
}

if (ipcallbk_getCookie('zip') != "") {

    checkIPcookie = true;
    zip_split = ipcallbk_getCookie('zip').split('|');
    CountryName = zip_split[2];
    RegionName = zip_split[3].replace("_", " ");
    CountryCode = zip_split[1];
    IPAddress = zip_split[0];
    afterIPloadded();
}
else {
     afterIPloadded();
    /*var ipcallBkJs = document.createElement('script');
    ipcallBkJs.src = "https://iplocation.zoho.com/getipinfo?includeip=1&type=jsonp&callback=ipCallBack&includeip=1";
    document.getElementsByTagName('head')[0].appendChild(ipcallBkJs);*/
}