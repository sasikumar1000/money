!function(o){Drupal.behaviors.initColorbox={attach:function(e,i){if(o.isFunction(o.colorbox)&&void 0!==i.colorbox){if(i.colorbox.mobiledetect&&window.matchMedia)if(window.matchMedia("(max-device-width: "+i.colorbox.mobiledevicewidth+")").matches)return;o(".colorbox",e).once("init-colorbox").colorbox(i.colorbox),o(e).bind("cbox_complete",function(){Drupal.attachBehaviors("#cboxLoadedContent")})}}}}(jQuery),function(o){Drupal.behaviors.initColorboxLoad={attach:function(e,i){o.isFunction(o.colorbox)&&void 0!==i.colorbox&&(o.urlParams=function(o){for(var e,i={},t=/\+/g,c=/([^&=]+)=?([^&]*)/g,r=function(o){return decodeURIComponent(o.replace(t," "))},n=o.split("?");e=c.exec(n[1]);){switch(e[1]=r(e[1]),e[2]=r(e[2]),e[2].toLowerCase()){case"true":case"yes":e[2]=!0;break;case"false":case"no":e[2]=!1}"width"==e[1]&&(e[1]="innerWidth"),"height"==e[1]&&(e[1]="innerHeight"),i[e[1]]=e[2]}return i},o(".colorbox-load",e).once("init-colorbox-load",function(){var e=o.urlParams(o(this).attr("href"));o(this).colorbox(o.extend({},i.colorbox,e))}))}}}(jQuery);


jQuery(document).ready(function () {
    jQuery("#loader").delay(3000).fadeOut("slow");
}); /**/
if (typeof CountryCode == 'undefined') {
    CountryCode = 'US';
}

var allapps = "accounts,mdm,appcreator,crmplus,sign,crm,campaigns,contactmanager,forms,sites,salesiq,survey,social,motivator,developer,pagesense,salesinbox|books,invoice,subscriptions,expense,checkout|bugtracker,connect,docs,writer,show,mail,meeting,projects,showtime,vault,chat,wiki,calendar,workplace,cliq,sprints,sheet,notebook|assist,support,desk|people,recruit|creator,reports,events,officeapi,flow,backstage,marketplace,commerce,teamdrive,officeplatform,peopleplus,inventory,workerly,zohoorchestly,phonebridge,knit,analytics,patchmanagerplus,mail360,marketinghub,workdrive,contacts,ziasearch,bookings,office,deluge,remoteaccessplus,creatorplus,wallet,docscanner,commerceplus,fsm,learn,identity-management,log360-cloud,ink,catalyst,analyticsplusplugin,apptics,bigin,annotator,teaminbox,lens,transmail,it-management,webinar,remotely,telephony,covid|"

var allProduct = ['home', 'CRM', 'Campaigns', 'ContactManager', 'Forms', 'Sites', 'SalesIQ', 'Survey', 'Social', 'Assist', 'Support', 'BugTracker', 'Connect', 'Docs', 'Mail', 'Meeting', 'Projects', 'ShowTime', 'Vault', 'Chat', 'Books', 'Invoice', 'Subscriptions', 'Expense', 'Checkout', 'People', 'Recruit', 'Creator', 'Reports', 'Motivator', 'Accounts', 'AppCreator', 'mdm', 'Seminar', 'crmplus', 'wiki', 'Desk', 'Cliq', 'Developer', 'SalesInbox', 'Sign', 'Calendar', 'WorkPlace', 'Events', 'officeapi', 'Sprints', 'pagesense', 'flow', 'show', 'sheet', 'writer', 'notebook', 'one', 'partnerstore', 'backstage', 'marketplace', 'Commerce', 'analytics-plus', 'teamdrive', 'officeplatform', 'peopleplus', 'inventory', 'workerly', 'zohoorchestly', 'phonebridge', 'knit', 'analytics', 'patchmanagerplus', 'mail360', 'marketinghub', 'workdrive', 'contacts', 'ziasearch', 'bookings', 'office', 'deluge', 'remoteaccessplus', 'dataprep', 'creatorplus', 'wallet', 'docscanner','commerceplus','fsm','learn','identity-management','log360-cloud', 'ink','catalyst', 'analyticsplusplugin', 'it-analytics', 'zohoscanner', 'apptics', 'Bigin', 'annotator', 'teaminbox', 'lens', 'Transmail', 'it-management', 'webinar', 'remotely','telephony','covid'];

var allProductCRM=["-","CRM","Campaigns","-","-","-","-","Survey","-","Assist","-","BugTracker","-","Docs","Mail","Meeting","Projects","-","-","-","Books","Invoice","Subscriptions","Expense","-","People","Recruit","Creator","Reports","Motivator","-","AppCreator","-","-","CRMPlus","Wiki","Desk","-","-","-","Sign","-","Workplace","-","-","-","PageSense","Flow","-","-","-","-","One","-","-","-","Commerce","-","TeamDrive","-","-","Inventory","Workerly","Orchestly","-","-","Analytics","-","-","MarketingHub","WorkDrive","-","-","Bookings","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"];

var nameServices = [['ZohoHome', 'ZohoCRM', 'ZohoCampaigns', 'ZohoContactManager', 'ZohoForms', 'ZohoSites', 'LiveDesk', 'ZohoSurvey', 'ZohoSocial', 'ZohoAssist', 'ZohoSupport', 'ZohoBugTracker', 'ZohoPulse', 'ZohoPC', 'VirtualOffice', 'ZohoMeeting', 'ZohoProjects', 'ZohoShowtime', 'ZohoVault', 'ZohoChat', 'ZohoBooks', 'ZohoInvoice', 'ZohoSubscriptions', 'ZohoExpense', 'ZohoCheckout', 'zohopeople', 'ZohoRecruit', 'ZohoCreator', 'ZohoReports', 'ZohoMotivator', '', '', '', '', 'CRMPlus', 'ZohoWiki', 'ZohoSupport', 'ZohoChat', 'ZohoCRM', 'SalesInbox', 'ZohoSign', 'ZohoCalendar', 'VirtualOffice', '', 'OfficeAPI', 'ZohoSprints', 'PageSense', 'ZohoFlow', 'ZohoShow', 'ZohoSheet', 'ZohoWriter', 'NoteBook', 'ZohoOne', '', 'ZohoBackStage', 'ZohomarketPlace', 'ZohoCommerce', '', 'TeamDrive', 'OfficeAPI', 'Peopleplus', '', 'ZohoWorkerly', 'Orchestly', 'phonebridge', 'zohostreamline', 'ZohoReports', 'PatchManagerPlusCloud', 'mail360', 'zohomarketinghub', 'TeamDrive', 'zohoContacts', 'ZohoSearch', 'ZohoBookings', 'office', 'deluge', '', 'ZohoDataprep', 'ZohoCreatorPlus', 'wallet', 'docscanner','ZohoCommerce','','ZohoLearn','IDMPOD', 'logs360cloud', 'ZohoInk', '', '', '', '', '', 'ZohoBigin','','','ZohoLens', '', '', '', '','','']];


var allProductlowerCase = [];
for (var i = 0; i < allProduct.length; i++) {
    allProductlowerCase[i] = allProduct[i].toLowerCase();
}

var metaName = ['apple-itunes-app', 'google-play-app'];
var ss = 0;
var appsIds = [];
var metaHas = false;
var android = location.href.match(/#android$/) || navigator.userAgent.match(/Android/i) != null;
var getDomain = document.domain;
var splitUrl = getDomain.split('.');
var domainOne = splitUrl.pop();
var Zdomain = splitUrl.pop();
var langsrc = "/";
if (document.domain == "www.zoho.com.cn") {
    Zdomain = 'zoho';
    domainOne = 'com.cn';
}
if(Zdomain == 'zohocorp'){
    Zdomain = 'zoho';   
}
var zPrdSignupLinkText;
var zPrdSignupLink = "https://www.zoho.com/signup.html";
var zPrdLoginLink = 'https://accounts.zoho.com/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html';
var ZdomainName = 'zoho';
var ZcheckDomain = "www.local" + '' + "zoho.com";
var _globalAccess = '';
var getusername;
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var newFooter = '';
var currentUrlLang = '';
var _com = 'com',
    _eu = 'eu';
var _lhref = window.location.href;
var _preZ = 'p' + 'r' + 'e' + 'z' + 'o' + 'h' + 'o' + '.' + 'z' + 'o' + 'h' + 'o' + '.com';
var _preZC = 'p' + 'r' + 'e' + 'z' + 'o' + 'h' + 'o' + '.' + 'z' + 'o' + 'h' + 'o' + 'corp' + '.com';
var _zcmsZC = 'z'+'c'+'m'+'s'+'.'+'z'+'o'+'h'+'o'+'c'+'o'+'r'+'p'+'.com';
var _lz = 'l'+'o'+'c'+'a'+'l'+'zoho';
var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
$ = jQuery.noConflict();
var DCoption = '';
var onlycom = false;

var currencyCodeArray = ['USD', 'EUR', 'INR', 'GBP', 'BRL', 'JPY', 'AUD', 'AUD', 'SGD', 'AED', 'SAR', 'MXN', 'CNY'];
var currencySymbolArray = ['$', '€', '₹', '£', 'R$', '¥', 'A$', 'A$', 'S$', 'AED', 'SAR', 'Mex$', '¥'];
var currencyCountryArray = ['ALL', 'EUlist', 'IN', 'GB', 'BR', 'JP', 'AU', 'NZ', 'SG', 'AE', 'SA', 'MX', 'CN'];

var _pathName = window.location.pathname;
var dcenabled = true;
var nondc = true;

if (Zdomain == 'local' + 'zoho' || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false;
}


var ipArr = ['172.24.125.24', '172.22.152.98', '172.24.105.146', '172.22.110.12'];
for (var i = 0; i < ipArr.length; i++) {
    if (_lhref.indexOf(ipArr[i]) > -1) {
        Zdomain = 'zoho';
        domainOne = 'com';
    }
}


var dcdomainOne = domainOne;
var dcVal = '0', myimagebool = 1;
var currentYear = '2020';
var creativeLang = '';
var czonebusiness = Drupal.t("Business");
var czoneindividual = Drupal.t("Individual");
var _txtIwould = Drupal.t('I would like to receive marketing communication from Zoho and Zoho&rsquo;s regional partners regarding Zoho&rsquo;s products, services, and events.');

var selectEvents = (function () {
    if ('ontouchstart' in document.documentElement === true)
        return 'touchstart';
    else
        return 'click';
})();

var customvar = {
    htmlencode: function (str) {
        var buf = [];
        for (var i = str.length - 1; i >= 0; i--) {
            buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
        }
        return buf.join('');
    },
    htmldecode: function (str) {
        return str.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
    },
	email: Drupal.t("Email"),
	eEmail: Drupal.t("Please Enter Your Email"),
	password: Drupal.t("Password"),
	epassword: Drupal.t("Please Enter Your Password"),
	firstName: Drupal.t("Full Name"),
	eFirstName: Drupal.t("Please Enter Your Full Name"),
	companyName: Drupal.t("Company Name"),
	eCompanyName: Drupal.t("Please Enter Your Company Name"),
	phoneNumber: Drupal.t("Phone Number"),
	ePhoneNumber: Drupal.t("Please Enter Your Phone Number"),
	eValidPhoneNumber: Drupal.t("Please Enter Valid Phone Number"),
	mobileNumber: Drupal.t("Mobile Number"),
	eMobileNumber: Drupal.t("Please Enter Your Mobile Number"),
	eValidMobileNumber: Drupal.t("Please Enter Valid Mobile Number"),
	eReMobileNumber: Drupal.t("Please Re-Enter Valid Mobile Number"),
	portalName: Drupal.t("Portal Name"),
	ePortalName: Drupal.t("Please Enter Your Portal Name"),
	eUserName: Drupal.t("Please Enter Your User Name"),
	eFirstName: Drupal.t("Please Enter Your First Name"),
	eLastName: Drupal.t("Please Enter Your Last Name"),
	cachedWidth: window.innerWidth,
	pathname: window.location.pathname,
    host: window.location.hostname,
	iphone: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
	ipad: navigator.userAgent.match(/iPad/i) != null,
	host: window.location.hostname,
    numberOfUsers: '50',
    optinArr: ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'GR', 'IT', 'LT', 'MT', 'NL', 'PL', 'RO', 'SK', 'SI', 'ES', 'IS', 'NO', 'CH', 'CA', 'XK'],
    optoutArr: ['EE', 'FI', 'FR', 'HU', 'IE', 'LV', 'LU', 'PT', 'SI', 'SE', 'GB'],
    doubleoptinArr: ['DE', 'AU'],
    domainArr: [
        ['com', 'in', 'eu', 'com.au'],
        [],
        ['zoho.com', 'zoho.in', 'zoho.eu', 'zoho.com.au']
    ],
    countries: [
        ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ascension", "Australia", "Aland Islands", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Diego Garcia", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Wallis and Futuna", "Yemen", "Zambia", "Zimbabwe"],
        ["AF", "AL", "DZ", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AC", "AU", "AX", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "CD", "DK", "DG", "DJ", "DM", "DO", "TL", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "KP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "SS", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "YE", "ZM", "ZW"],
        ["93", "355", "213", "376", "244", "1", "1", "54", "374", "297", "247", "61", "672", "43", "994", "1", "973", "880", "1", "375", "32", "501", "229", "1", "975", "591", "387", "267", "55", "1", "673", "359", "226", "257", "855", "237", "1", "238", "1", "236", "235", "56", "86", "57", "269", "242", "682", "506", "225", "385", "53", "599", "357", "420", "243", "45", "246", "253", "1", "1", "670", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "594", "689", "241", "220", "49", "233", "350", "30", "299", "1", "590", "502", "224", "245", "592", "509", "504", "852", "36", "354", "91", "62", "98", "964", "353", "972", "39", "1", "81", "962", "7", "254", "686", "383", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "52", "691", "373", "377", "976", "382", "1", "212", "258", "95", "264", "674", "977", "31", "599", "687", "64", "505", "227", "234", "683", "850", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "48", "351", "974", "262", "40", "7", "250", "290", "1", "1", "508", "1", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "82", "211", "34", "94", "249", "597", "268", "46", "41", "963", "886", "992", "255", "66", "228", "690", "676", "1", "216", "90", "993", "1", "688", "256", "380", "971", "44", "1", "598", "998", "678", "379", "58", "84", "681", "967", "260", "263"]
    ],
    countryEu: ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IM", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "GG", "JE", "XK", "SJ", "CS", "UK"],
    countryApac: ['AU','BD','BT','IO','BN','KH','CN','FJ','HK','IN','ID','JP','KP','KR','LA','MO','MY','MV','MN','MM','NP','NZ','PK','PG','PH','SG','LK','TW','TH','TL','VN'],
	lAmerica: ['BZ', 'CR', 'SV', 'GT', 'HN', 'MX', 'NI', 'PA', 'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'CU', 'DO', 'HT', 'PR', 'BL', 'MF'],
    countryTranstasman: ['AU', 'NZ'],
    usstates: ["", "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "Washington, D.C", "West Virginia", "Wisconsin", "Wyoming"],
    countrypop: function (a) {
        this._data = '';
        this.arr = customvar.countries;
        for (var i = 0; i < customvar.countries[0].length; i++) {
            if (a == 'dial') {
                this._data += '<option value="' + this.arr[1][i] + '" dialling_code="' + this.arr[2][i] + '">' + this.arr[0][i] + ' (+' + this.arr[2][i] + ')</option>';
            } else {
                this._val = "0";
                (customvar.optinArr.indexOf(this.arr[1][i]) > -1) ? this._val = '2' : (customvar.optoutArr.indexOf(this.arr[1][i]) > -1) ? this._val = '2' : (customvar.doubleoptinArr.indexOf(this.arr[1][i]) > -1) ? this._val = '3' : '';
                this._data += '<option value="' + this.arr[1][i] + '" newsletter_mode="' + this._val + '">' + this.arr[0][i] + '</option>';
            }
        }
        setTimeout(function () {
            if (typeof CountryCode != 'undefined') {
                if ($('.globalcountrycode-signup').length > 0) {
                    $('.globalcountrycode-signup').val(CountryCode);
                }
            }
			var _mycount = 0;
			var inervel = setInterval(function () {
				if(($('.dc-info').length > 0) && $('.za-state-container').length < 1){
					clearInterval(inervel);
					this._val = '';
					for (var i = 0; i < customvar.usstates.length; i++) {
						this._val += '<option value="' + customvar.usstates[i].toLowerCase() + '">' + customvar.usstates[i]+ '</option>';
					}
					$('.dc-info').after('<div class="za-state-container zhide-common"><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">'+this._val+'</select></div>');
					if(CountryCode == 'US'){
						$('.za-state-container').removeClass('zhide-common').addClass('zshow-common');
						$('.za-globalstate-signup option').eq(0).remove();
						$('.za-globalstate-signup').val($('.za-globalstate-signup option').eq(0).val());
					}
					if (typeof RegionName != 'undefined') {
						if ($('.za-globalstate-signup').length > 0) {
							 $('.za-globalstate-signup').val(RegionName.toLowerCase());
							 if($('.za-globalstate-signup').val() == null){
								 $('.za-globalstate-signup').val($('.za-globalstate-signup option').eq(0).val());
							 }
							 if(RegionName.toLowerCase() == 'california'){
								if($('.zrlink').length > 0){
									if(customvar.productName == 'identity-management' || customvar.productName == 'log360-cloud' || customvar.productName == 'Mobile Device Management' || customvar.productName == 'patchmanagerplus'){
										$('.zrlink').attr('href', 'https://www.manageengine.com/us-ca/privacy.html');
									}else{
										$('.zrlink').attr('href', 'https://www.zoho.com/us-ca/privacy.html');
									}
								}
							 }
						}
					}
				}
				if(_mycount > 25){
					clearInterval(inervel);
				}
				_mycount++;
			}, 100);
        }, 100);
        return this._data;
    },
	unique : function(list) {
		var result = [];
		$.each(list, function(i, e) {
			if ($.inArray(e, result) == -1) result.push(e);
		});
		return result;
	},
    productName: '',
	lsoval : '',
    absurl: window.location.origin+window.location.pathname,
    findproduct: function () {
        if(customvar.host.indexOf('www.orchestly') > -1){
            customvar.productName = "zohoorchestly";
        }else if(_lhref.indexOf('mdm-cloud.html') > 0){ 
            customvar.productName = 'Mobile Device Management';
        }else if(_lhref.indexOf('bigin.'+domainOne) > 0){ 
            customvar.productName = 'bigin';
        }else if(window.location.href.indexOf('analytics-plus/plugin/') > 0){
            customvar.productName = 'analyticsplusplugin';
        }else{
            var arr1 = window.location.pathname.split('/'),
                arr = [];
            for (var i = 0; i < arr1.length; i++) { if (arr1[i] != '') { arr.push(arr1[i]) } }
            a: for (var i = 0; i < arr.length; i++) {
                if (allProductlowerCase.indexOf(arr[i]) > -1) {
                    if (arr[i + 1] == 'crmplus') {
                        customvar.productName = 'crmplus';
                    } else {
                        customvar.productName = arr[i];
                    }
                    break a;
                }
            }
        }
        (customvar.productName == 'analytics-plus') ? (customvar.productName = 'analyticsplus') : '';
        (customvar.productName == '') ?  (customvar.productName = 'home') : ''; 
    },
    noteuinarr: [
        ['dataprep', 'learn','identity-management', 'log360-cloud', 'catalyst', 'it-management', 'remoteaccessplus'],
        ['dataprep', 'contactmanager', 'learn','identity-management', 'log360-cloud', 'catalyst', 'it-management', 'remoteaccessplus'],
        ['dataprep', 'contactmanager', 'learn','identity-management', 'log360-cloud', 'peopleplus', 'catalyst', 'lens', 'it-management', 'remoteaccessplus']
    ],
    cnarr:[],
    dcreset: function () {
        if (typeof CountryCode != 'undefined') {
            if (CountryCode == 'IN') {
                dcdomainOne = 'in';
                if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            }else if (CountryCode == 'CN' && customvar.cnarr.indexOf(customvar.productName) > -1) {
                dcdomainOne = domainOne;
            } else if (customvar.countryEu.indexOf(CountryCode) > -1) {
                dcdomainOne = 'eu';
                if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            } else if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
                dcdomainOne = 'com.au';
                if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                    dcdomainOne = domainOne;
                    onlycom = true;
                }
            } else {
                dcdomainOne = 'com';
            }
            if (Zdomain == 'local' + 'zoho') {
                dcdomainOne = 'com';
                onlycom = true;
            }
        } else {
            console.log('CountryCode undefined');
        }
    },
    dcselected: function(a){
		if(a == 'US'){
			if($('.za-globalstate-signup').length > 0){
				if($('.za-globalstate-signup option').eq(0).val() == ''){
					$('.za-globalstate-signup option').eq(0).remove();
				}
			}
            $('.za-state-container').removeClass('zhide-common').addClass('zshow-common');
	    }else{
			if($('.za-globalstate-signup').length > 0){
				if($('.za-globalstate-signup option').eq(0).val() != ''){
					$('.za-globalstate-signup').prepend('<option value=""></option>');
				}
			}
            $('.za-state-container').removeClass('zshow-common').addClass('zhide-common');  
        }
		if(productName == 'analytics'){
			if($('.globalcountrycode').length > 0){
				var _zcval = [];
				for(var i=0; i<$('.globalcountrycode').length; i++){
					_zcval[i] = ($('.globalcountrycode').eq(i).val())
				}
				setTimeout(function(){
					for(var i=0; i<$('.globalcountrycode').length; i++){
						$('.globalcountrycode').eq(i).val(_zcval[i])
					}	
				}, 500);
			}
			
			if($('.globalstatecode').length > 0){
				var _zsval = [];
				for(var i=0; i<$('.globalstatecode').length; i++){
					_zsval[i] = ($('.globalstatecode').eq(i).val())
				}
				setTimeout(function(){
					for(var i=0; i<$('.globalstatecode').length; i++){
						$('.globalstatecode').eq(i).val(_zsval[i])
					}	
				}, 500);
			}
		}
		
		if($('.za-globalstate-signup').length > 0){
			if($('.zrlink').length > 0){
				if($('.za-globalstate-signup').val().toLowerCase() == 'california' && a == 'US'){
					if(customvar.productName == 'identity-management' || customvar.productName == 'log360-cloud' || customvar.productName == 'Mobile Device Management' || customvar.productName == 'patchmanagerplus'){
						$('.zrlink').attr('href', 'https://www.manageengine.com/us-ca/privacy.html');
					}else{
						$('.zrlink').attr('href', 'https://www.zoho.com/us-ca/privacy.html');
					}
				}else{
					if(customvar.productName == 'identity-management' || customvar.productName == 'log360-cloud' || customvar.productName == 'Mobile Device Management' || customvar.productName == 'patchmanagerplus'){
						$('.zrlink').attr('href', 'https://ondemand.manageengine.com/privacy.html');
					}else{
						$('.zrlink').attr('href', 'https://www.zoho.com/privacy.html');
					}
				}
			}
		}
		if($('body').hasClass('zcstrip')){
            $('body').removeClass('zcstrip');
        }
        (a == 'IN') ? dcdomainOne = 'in' : (countryEu.indexOf(a) > -1) ? dcdomainOne = 'eu' : (customvar.countryTranstasman.indexOf(a) > -1) ? dcdomainOne = 'com.au' :  dcdomainOne = 'com';
        if(customvar.noteuinarr[1].indexOf(customvar.productName) > -1 && dcdomainOne == 'in'){
            dcdomainOne = 'com';
            onlycom = true;
        }else if(customvar.noteuinarr[0].indexOf(customvar.productName) > -1 && dcdomainOne == 'eu'){
            dcdomainOne = 'com';
            onlycom = true;
        }else if(customvar.noteuinarr[2].indexOf(customvar.productName) > -1 && dcdomainOne == 'com.au'){
            dcdomainOne = 'com';
            onlycom = true;
        }
        if(typeof customvar.cnarr != "undefined"){
            if(a == 'CN' && customvar.cnarr.indexOf(customvar.productName) > -1){
                dcdomainOne = 'com.cn'; 
            }
        }
    },
    dctext:function(){
        var _dc = 'US';
        (CountryCode == 'IN') ? _dc = 'India' : (customvar.countryEu.indexOf(CountryCode) > -1) ? _dc = 'Europe' :(customvar.countryTranstasman.indexOf(CountryCode) > -1) ? _dc = 'Australia' :  _dc = 'US';
        if(onlycom){
            _dc = 'US';
        }
        if(typeof dcenabled == "boolean"){
            if(!dcenabled){
                (domainOne == 'in') ? _dc = 'India' : (domainOne == 'eu') ? _dc = 'Europe' : (domainOne == 'com.au') ? _dc = 'Australia' :  _dc = 'US'; 
            }
        }   
        return _dc;
    },
    dccountry: function(){
        var _dc = 'US', aval = customvar.alink.split('accounts/register.js')[1];
        customvar.alink = "https://accounts."+Zdomain+"." + dcdomainOne + "/accounts/register.js"+aval;
        (dcdomainOne == 'in') ? _dc = 'India' : (dcdomainOne == 'eu') ? _dc = 'Europe' : (dcdomainOne == 'com.au') ? _dc = 'Australia' : (dcdomainOne == 'com.cn') ? _dc = 'China' :  _dc = 'US';   
        return _dc;
    },
    getGlobalCookie : function(t){
        try {
            for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), o = 0; o < n.length; o++) {
                for (var r = n[o];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
            }
            return ""
        } catch (t) {return ""}
    },
    removequots : function(a){
        if(typeof a != 'undefined'){
            if (a.split('"').length > 1) {
                return a.split('"')[1];
            } else {
                return a;
            }
        }else{
            return '';  
        }
    },
    expiryDateCheck: function(sd,ed){
        var a = sd.split('/').reverse(), b = ed.split('/').reverse(), today = new Date(), dd = today.getDate(), mm = today.getMonth()+1, yyyy = today.getFullYear(), dateOne = new Date(yyyy, mm, dd), dateTwo = new Date(a[0], a[1], a[2]), dateThree = new Date(b[0], b[1], b[2]);return dateOne >= dateTwo && dateOne <= dateThree;
    },
    dynamicLinks : function(a){
		for(b in a){
            for(c in a[b]){
                var _abcval = a[b][c];
				/*if(b == 'href'){
                    if(c.indexOf('.zgh-login') > -1){
						console.log(_abcval);
                        for(var i=0; i<customvar.domainArr[0].length; i++){
                            if(_abcval.split('signin?')[0].split('zoho.'+customvar.domainArr[0][i]).length > 1){
                                _abcval = _abcval.split('signin?')[0].split('zoho.'+customvar.domainArr[0][i]).join('zoho.'+dcdomainOne)+'signin?'+_abcval.split('?')[1];
                            }
                        }
                    }
                }*/
				if(b == 'href'){
                    if(c.indexOf('.zgh-login') > -1){
						if(_abcval.indexOf('zoho.com') > 0){
							_abcval = _abcval.split('zoho.com').join('zoho.'+dcdomainOne);
						}
                    }
                }
				(_abcval.indexOf('au.au') > 0) ? (_abcval = _abcval.split('au.au').join('au')) : '';
                (b == 'href') ? $(c).attr('href', _abcval) : (b == 'html') ? $(c).html(_abcval) : (b == 'val') ? $(c).val(_abcval) : '';
                if(b == 'href'){
                    if(c.indexOf('.zgh-login') > -1){
                        if($('.login-text .login').length > 0){
                            $('.login-text .login').attr('href', _abcval)
                        }
                        if($('.zlogin-menu a').length > 0){
                            $('.zlogin-menu a').attr('href', _abcval)
                        }
                    }
                    if($('.z-mobile-menu-v2 .loggedout').length > 0){
                        if(c.indexOf('.zgh-signup') > -1){
                            var _pval = '?';
                            if (_abcval.indexOf('?') > -1) {
                                _pval = '&';
                            }
			    			$('.z-mobile-menu-v2 .loggedout').attr('href', _abcval+_pval+'src=sticky');
                        }   
                    }
					
					if($('.z-mobile-menu-v2 .loggedin').length > 0){
						if(typeof $gotoPage != 'undefined'){
							var _isval = ($('#alogin-link').length > 0) ? $('#alogin-link').html():$gotoPage;
							$('.z-mobile-menu-v2 .loggedin').attr('href', _isval);
							if(productName == 'survey'){
								if(isMobile && customvar.iphone){
									$('.z-mobile-menu-v2 .loggedin').attr('href', 'https://itunes.apple.com/app/zoho-survey-survey-tool/id1348702782?ls=1&mt=8');
								}
							}
                        }   
                    }
			    }
            }
        }
    },
    dcbasedimage : function(){
        if(myimagebool){
            mybool = 0;
            if(dcdomainOne != 'com'){
                if($('.dc-image').length > 0){
                    $('.dc-image').each(function(){
                        if(typeof $(this).attr('dc-source') != 'undefined'){
                            var localdc = dcdomainOne;
                            (localdc == 'com.au') ? (localdc = 'au') : '';
                            if($(this).attr('dc-source').split(',').indexOf(localdc) > -1){
                                var imgsrc = $(this).attr('src').split($(this).attr('fname')).join($(this).attr('fname')+'-'+localdc);
                                $(this).attr('src', imgsrc);
                                if(typeof $(this).attr('srcset') != 'undefined'){
                                    var imgsrcset = $(this).attr('srcset').split($(this).attr('fname')).join($(this).attr('fname')+'-'+localdc);
                                    $(this).attr('srcset', imgsrcset);
                                }
                            }
                        }
                    });
                }
            }
        }   
    },
    langsrcremove : function(){
        $('.nonlang').each(function(){
            if(typeof currentUrlLang != 'undefined'){
                if($(this).attr('href').indexOf('/'+currentUrlLang+'/') > 0){
                    var _v = $(this).attr('href').split('/'+currentUrlLang+'/').join('/');
                    $(this).attr('href', _v)
                }
            }
        });
    },
	lsohandle : function(a){
		if(a == 'set'){
			localStorage.setItem('lso', customvar.lsoval);	
		}else if(a == 'get'){
			return customvar.lso;	
		}
	}
}

$(document).on('change', '.za-globalstate-signup', function(){
	if($('.zrlink').length > 0){
		if($('.za-globalstate-signup').val().toLowerCase() == 'california' && $('.globalcountrycode-signup').val().toLowerCase() == 'us'){
			if(customvar.productName == 'identity-management' || customvar.productName == 'log360-cloud' || customvar.productName == 'Mobile Device Management' || customvar.productName == 'patchmanagerplus'){
				$('.zrlink').attr('href', 'https://www.manageengine.com/us-ca/privacy.html');
			}else{
				$('.zrlink').attr('href', 'https://www.zoho.com/us-ca/privacy.html');
			}
		}else{
			if(customvar.productName == 'identity-management' || customvar.productName == 'log360-cloud' || customvar.productName == 'Mobile Device Management' || customvar.productName == 'patchmanagerplus'){
				$('.zrlink').attr('href', 'https://ondemand.manageengine.com/privacy.html');
			}else{
				$('.zrlink').attr('href', 'https://www.zoho.com/privacy.html');
			}
		}
	}
});
		

customvar.hostName = 'www.zoho.com';
if(_preZ == window.location.hostname || _preZC == window.location.hostname || _zcmsZC == window.location.hostname){
    customvar.hostName = window.location.hostname;
}
customvar.sHostName="l";
(_preZ == window.location.hostname) ? customvar.sHostName="p" : (_preZC == window.location.hostname) ? (customvar.sHostName = "pz") : (_zcmsZC == window.location.hostname) &&(customvar.sHostName="z");

customvar.numberOfApps = '40+';
customvar.browserversion = (function(){
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
})();

customvar.getOS = navigator.sayswho = (function(){
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }
    return os;
})();

//customvar.browser = customvar.browserdetails.split(' ')[0].toLowerCase();
customvar.browser = customvar.browserversion.split(' ')[0].toLowerCase();
customvar.bversion = customvar.browserversion.split(' ')[1].toLowerCase();
customvar.myOs = customvar.getOS.toLowerCase();

$('body').addClass('zos-'+customvar.myOs);
$('body').addClass('zb-'+customvar.browser);
$('body').addClass('zbv-'+customvar.browser+'-'+customvar.bversion);

customvar.zmr = customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
customvar.zms = customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
customvar.isEU = ((customvar.countryEu.indexOf(CountryCode) > -1) ? true : false);
customvar.isAPAC = ((customvar.countryApac.indexOf(CountryCode) > -1) ? true : false);
if(customvar.isAPAC){
    $('body').addClass('ccode-apaccountries');
}
customvar.czmr = function(){
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
}
customvar.czms = function(){
    return customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
}
var countryEu = customvar.countryEu;
customvar.findproduct();
if(customvar.pathname.indexOf('creator/developers/signup.html') > 0){
    customvar.noteuinarr[0].push('creator');
    customvar.noteuinarr[1].push('creator');
}

if(window.location.hostname == _preZ){
//  if(isMobile) {
        //dcenabled = false;
//  }
}else{
    var dcArr = ['projects', 'creator'];
    //if(dcArr.indexOf(customvar.productName) < 0){
        if(customvar.browser == "safari" || customvar.browser == "brave" || isMobile) {
            //dcenabled = false;
        }
    //}
}

if (dcenabled) {
    customvar.dcreset();
}



if(customvar.cnarr.indexOf(customvar.productName) > -1){
    customvar.domainArr[0].push('com.cn');
    customvar.domainArr[2].push('zoho.com.cn');
}
var detectedLangNew = '';
if (document.getElementsByClassName('header').length > 0) {
    document.getElementsByClassName('header')[0].innerHTML = '';
}
if(customvar.pathname.indexOf('crm/lp/') > 0){
    $('body').addClass('crm-lp')
}

$('body').prepend('<div class="ztopstrip-container"></div>');


//if ($('body').length > 0 && window.location.hostname == _preZ) {
if($('body').attr('class')){
    if(!$('body').hasClass('node-type-zoho-home')){
        if ((_lhref.indexOf('orchestly') < 0 || _lhref.indexOf('bigin') < 0) && $('body').attr('class').indexOf('node-tnid-') > 0) {
            try {
				$.getJSON("/sites/default/files/json/" + $('body').attr('class').split('og-context-node-')[1].split(' ')[0] + ".json", function () { }).done(function (data) {
                    var obj = data.fileslist;
                    for (var key in obj) {
                        if ($('body').hasClass('node-tnid-' + key)) {
                            if (window.location.hostname == _preZ) {
								if(obj[key].prezoho != 'null'){
                                	detectedLangNew = obj[key].prezoho.split(',');
								}
                            } else {
								if(obj[key].zoho != 'null'){
                                	detectedLangNew = obj[key].zoho.split(',');
								}
                            }
                        }
                    }
                     setTimeout(function () {
                        if (detectedLangNew == '') {
                            var obj = data.list;
                            for (var key in obj) {
                                var _val = obj[key];
                                for (var prop in _val) {
                                    if ($('body').hasClass('node-tnid-' + prop)) {
                                        detectedLangNew = _val[prop].split(',');
                                    }
                                }
                            }
                        }
                    }, 500);
                });
               /* setTimeout(function () {
                    if (detectedLangNew == '') {
                        $.getJSON("/sites/default/files/json/" + $('body').attr('class').split('og-context-node-')[1].split(' ')[0] + ".json", function () { }).done(function (data) {
                            var obj = data.list;
                            for (var key in obj) {
                                var _val = obj[key];
                                for (var prop in _val) {
                                    if ($('body').hasClass('node-tnid-' + prop)) {
                                        detectedLangNew = _val[prop].split(',');
                                    }
                                }
                            }
                        });
                    }
                }, 500);*/
            } catch (err) { }
        }
    }
}

// TLS code start
function tlscall(){
    var avoideinfoload = _lhref.indexOf('zgs=1') < 0;
    if(avoideinfoload){
        $.getJSON("https://tlstest.zoho." + _com + "/api", function (data) {
            if (data.status != '200') {
                $('.ztopstrip-container').prepend('<div class="tls-infostrip"> <p>' + Drupal.t('Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services.') + '<a target="_blank" href="https://www.zoho.' + domainOne + '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>');
                $('.zclosestrip.tlsClose').on('click', function () {
                    $('.tls-infostrip').remove();
                });
            }
        });
    }
}
// TLS code end

if (getDomain == ZcheckDomain) {
    ZdomainName = 'local' + '' + 'zoho';
}

function global_getUrlParam(sParam) {
    var vars = {}, getval = '';
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        if(key == sParam){
            getval = value;
        }
    });
    return getval;
}

if (window.location.hostname == _preZ) {
    if (global_getUrlParam('autoDomain') != "") {
        domainOne = global_getUrlParam('autoDomain');
        console.log("autoDomain = " + global_getUrlParam('autoDomain'));
    }
}

function global_getUrlParam_sheet(sParam) {
    var sPageURL = '';
    sPageURL = window.location.search.substring(1);
    
    var sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        } //else{return '';}
    }
    return '';
}

function encodeFun(url) {
    try{
        url = decodeURI(url);
    }catch (e) {
        url = url;
    }
    if (url.indexOf('#') > -1) {
        var _length = url.split('#').length,
            _addUrl = '';
        for (var i = 1; i < _length; i++) {
            _addUrl += '#' + url.split('#')[i]
        }
        url = url.split('#')[0] + '' + encodeURI(_addUrl);
    }
    if (url.indexOf('?') > -1) {
        var _length = url.split('?').length,
            _addUrl = '';
        for (var i = 1; i < _length; i++) {
            _addUrl += '?' + url.split('?')[i]
        }
        url = url.split('?')[0] + '' + encodeURI(_addUrl);
    }
    return url;
}

function domainCheck() {
    var _Domain = document.domain.split('').splice(0, (document.domain.split('').length - 1)).join('');
    if (document.domain.split('')[document.domain.length - 1] == '.') {
        var newDoaminOne = window.location.href.split(getDomain)[0];
        var newDoaminTwo = window.location.href.split(getDomain)[1];
        var _direction = newDoaminOne + '' + _Domain + '' + newDoaminTwo;
        window.location.href = encodeFun(_direction);
    }
}

function decodeHexString(str) {
    str = str.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    str = str.replace(/\\u([\d\w]{4})/gi, function () {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
    return str;
}
        
domainCheck();


var langArr = ['en', 'es-xl', 'pt-br', 'de', 'fr', 'nl', 'jp', 'ar', 'id', 'th', 'vi', 'it'];
var onlylocal = ['zh-hans', 'ko', 'ru', 'tr'];
var usedLanArr = ['fr', 'de', 'pt-br', 'es-xl', 'nl'];

var lancountry = {
    "en": "English",
    "fr": "Français",
    "de": "Deutsch",
    "es-xl": "Español",
    "pt-br": "Português (Brasil)",
    "jp": "日本語",
    "nl": "Nederlands",
    "zh-hans": "简体中文",
    "id": "Bahasa Indonesia",
    "th": "ภาษาไทย",
    "ar": "العربية",
    "vi": "Tiếng Việt",
    "ko": "한국어",
    "it": "Italiano",
    "ru": "Русский",
    "tr": "Türkçe"
};


for (var i = 0; i < onlylocal.length; i++) {
    langArr.push(onlylocal[i]);
}
var footer_ebable = true;

function findeLanguage() {
    var lVal = '';
    langArr.forEach(function (index) {
        if (window.location.href.split('/').indexOf(index) > -1) {
            lVal = index;
        }
    });
    currentUrlLang = lVal;
    creativeLang = usedLanArr.indexOf(currentUrlLang) > -1;
    (currentUrlLang != '') ? (langsrc = '/' + currentUrlLang + '/') : '';
    if (lVal == 'es-xl') {
        lVal = 'es';
    } else if (lVal == 'pt-br') {
        lVal = 'pt';
    } else if (lVal == 'jp') {
        lVal = 'ja';
    } else if (lVal == 'zh-hans') {
        lVal = 'zh';
        domainOne = 'com.cn';
    }
    (lVal == 'in') ? (lVal = '', currentUrlLang = '') : '';
    (lVal == 'id') ? (lVal = 'in') : '';
    return lVal;
}

var currentLang = findeLanguage();
customvar.clang = (currentUrlLang == '') ? '' : ('service_language='+currentLang+'&'); 
customvar.alink = "https://accounts."+Zdomain+"." + dcdomainOne + "/accounts/register.js?temp_redirect=true&"+customvar.clang+"load_country=false&";

var _txtBySubmit = Drupal.t('By submitting this form, you agree to the processing of personal data according to our') + ' <a href="' + langsrc + 'privacy.html" target="_blank">' + Drupal.t('Privacy Policy') + '.</a>';
var predomain = window.location.hostname == _preZ || window.location.hostname == _preZC || Zdomain == _lz;
if(currentLang == 'ar'){
    var arCount = 0;
    for(var i=0; i<$('link').length; i++){
        if($('link').eq(i).attr('href') != 'undefined'){
            if($('link').eq(i).attr('href').indexOf('/css/ar.css') > 0){
                arCount++;
            }
        }
    }
    setTimeout(function(){
        if(arCount == 0){
            var transcss = document.createElement('link');  
            transcss.rel = 'stylesheet';  
            transcss.type = 'text/css'; 
            if(predomain){
                transcss.href = "/sites/all/themes/zoho/css/ar.css";
            }else{
                transcss.href = "https://www.zohowebstatic.com/sites/all/themes/zoho/css/ar.css";
            } 
            document.getElementsByTagName('head')[0].appendChild(transcss);
        }
    }, 100);
}


function getGlobalCookie(cname) {
    return customvar.getGlobalCookie(cname);
}

var doc = $(document);
var wW = $(window).width();
var prdName = customvar.productName;
(prdName == 'one') ? (prdName = 'zohoone') : '';
(prdName == 'officeplatform') ? (prdName = 'officeintegrator') : '';
(prdName == 'zohoorchestly') ? (prdName = 'orchestly') : '';
(_lhref.indexOf('mdm-cloud.html') > 0) ? (prdName = 'Mobile Device Management') : '';
(_lhref.indexOf('online-service-desk-software.html') > 0) ? (prdName = 'ServiceDesk Plus') : '';
/*  Global Menu Block Starts */
var _zclang = langsrc;
(customvar.productName == 'zohoorchestly' || domainOne == 'com.cn') ? (_zclang = 'https://www.zoho.' + domainOne + '/') : '';
var zghBrand = ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a href="' + _zclang + '">Zoho.com</a></div>';
var zghNav;
if (prdName == 'home') {
    var _suportlink = 'https://help.zoho.com/portal/home';
    if (currentUrlLang == 'jp') {
        _suportlink = 'https://support.zoho.com/portal/jpzoho/home';
    }
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.com/customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="' + _suportlink + '" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="https://www.zoho.com/aboutus.html">' + Drupal.t("About Us") + '</a></li></ul></div>';
    if (_lhref.indexOf('index-new') > 0) {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li class="zgh-megaMenu zgh-solutions"> <a href="javascript:;">Solutions</a> <div class="zgh-megaMenuBox"> <div class="zgh-megaMenuInner"> <ul class="zgh-megaMenuCat"> <li><span>By Size</span> <ul> <li> <a href="javascript:;">Small</a> </li> <li> <a href="javascript:;">Medium</a> </li> <li> <a href="javascript:;">Enterprise</a> </li> </ul> </li> <li><span>By Role</span> <ul> <li> <a href="javascript:;">Sales</a> </li> <li> <a href="javascript:;">Marketing</a> </li> <li> <a href="javascript:;">Finance</a> </li> <li> <a href="javascript:;">Teams/Collaboration</a> </li> <li> <a href="javascript:;">IT</a> </li> <li> <a href="javascript:;">HR</a> </li> </ul> </li> <li><span>By Industry</span> <ul> <li> <a href="javascript:;">Education</a> </li> <li> <a href="javascript:;">Manufacturing</a> </li> <li> <a href="javascript:;">Non-profits</a> </li> <li> <a href="javascript:;">Logistics</a> </li> <li> <a href="javascript:;">Retail</a> </li> </ul> </li> </ul> </div> </div> </li><li><a href="customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="aboutus.html">' + Drupal.t("About Us") + '</a></li></ul></div>';
    }
} else {
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("All Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>';
}
var _val = 'English';
(currentUrlLang != '') ? (_val = lancountry[currentUrlLang]) : '';
var zghSearch = ' <div class="zgh-search"> <span class="zgh-search-icon"></span> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" aria-label="Search for product overviews, FAQs, and more..." id="zgh-search-query" name="query" placeholder="' + Drupal.t('Search for product overviews, FAQs, and more...') + '" type="text"><input class="zgh-search-btn" type="button"> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
var zghLoc = '<div class="zgh-localization"><span class="zgh-localSelect">' + _val + '</span><div class="zgh-localBox"><ul></ul></div></div>';
var getstart = Drupal.t('Get Started');
if(customvar.productName == 'crm'){
    getstart = Drupal.t('Sign Up For Free');    
}
var zghAcc = '<div class="zgh-accounts"><a href="https://accounts.'+Zdomain+'.'+dcdomainOne+'/signin?'+customvar.clang+'servicename=ZohoHome&signupurl=https://www.'+Zdomain+'.'+domainOne+langsrc+'signup.html" class="zgh-login">' + Drupal.t("LOGIN") + '</a><a href="https://www.'+Zdomain+'.'+domainOne+langsrc+'signup.html" class="zgh-signup">' + getstart + '</a></div>';
var zghUtil;
if((window.location.host == "www.localzoho." + _com + "" || window.location.host == "prezoho.zoho." + _com + "" || window.location.host == "www.zoho." + _com + "" || window.location.host == "www.zoho." + _eu + "" || window.location.host == "www.zoho.in" || window.location.host == _preZC || window.location.host == "zoho.zohocorp.com" || window.location.host == _zcmsZC)) {
    zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + '</div>';
} else {
    zghUtil = '<div class="zgh-utilities">' + zghLoc + zghAcc + '</div>';
}
var zghBlock = '<div class="zgh-headerWrap">' + zghBrand + zghNav + zghUtil + '</div>';
$('#header .header').html('');
$('#mini-panel-product_menu .product-nav-links').before(zghAcc);
$('.product-header-top .product-nav-links').before(zghAcc);
$('#header .header').append(zghBlock);


function dcOption() {
    if (typeof CountryCode != 'undefined') {
        if (CountryCode == 'IN') {
            if (window.location.href.indexOf('prezoho.zoho') > 0) {
                dcdomainOne = 'in';
            }
            DCoption = '<div class="zdatacentre get-signup-plan"><div>Choose your preferred data center.</div><input checked="checked" name="dc" id="india-dc-in" value="0" type="radio"><label for="india-dc">India DC</label><input name="dc" id="us-dc-com" value="1" type="radio"><label for="us-dc">US DC</label></div>';
        } else if (countryEu.indexOf(CountryCode) > -1) {
            if (window.location.href.indexOf('prezoho.zoho') > 0) {
                dcdomainOne = 'eu';
            }
            DCoption = '<div class="zdatacentre get-signup-plan"><div>Choose your preferred data center.</div><input checked="checked" name="dc" id="europe-dc-eu" value="0" type="radio"><label for="europe-dc">Europe DC</label><input name="dc" id="us-dc-com" value="1" type="radio"><label for="us-dc">US DC</label>';
        }
    }
}

jQuery(document).ready(function () {
    
    if (!$('body').hasClass('domain-' + domainOne)) {
        var _element = document.getElementsByTagName('body')[0];
        if (domainOne == "com.cn") {
            _element.classList.add("domain-com");
        } else {
            _element.classList.add("domain-" + domainOne);
        }
    }
    jQuery('.zoho-child-wrapper').toggle();
    jQuery("#back-top").hide();
    jQuery('.service-links ul,.partners-info,.node-type-product-help .dropBox,.featured-news .views-row .hidden-news').toggle();
    jQuery(".service-links").click(function () {
        jQuery(".service-links ul").slideToggle("slow");
    });
    jQuery(".zoho-parent-toggle").click(function () {
        if (!(/\/reports\/help\//.test(document.URL)) && !(/\/developer\/help\//.test(document.URL))) {
            jQuery(this).parent().find('.zoho-child-wrapper').slideToggle();
            if (jQuery(this).parent().hasClass('open')) {
                jQuery(this).parent().removeClass('open');
            } else {
                jQuery(this).parent().siblings().removeClass('open');
                jQuery(this).parent().siblings().find('.zoho-child-wrapper').slideUp('slow');
                jQuery(this).parent().addClass('open');
            }
        }
    });
    jQuery('.featured-news .views-row').click(function () {
        jQuery(this).find('.hidden-news').slideToggle('slow');
    });
    jQuery(".node-type-product-help #faq h4").click(function () {
        var classtoremove = jQuery(this).attr('class');
        if (classtoremove) {
            jQuery(this).next('div').slideToggle('slow');
            jQuery(this).removeClass(classtoremove);
        } else {
            if (jQuery(this).siblings().hasClass('open')) {
                if (jQuery(this).siblings('.open .hidden-news, .open + .ans.dropBox').is(":visible")) {
                    jQuery(this).addClass('open');
                    jQuery(this).next('div').slideToggle('slow');
                } else {
                    var news_toggle = jQuery(this).addClass('open').siblings().removeClass('open');
                    jQuery('.open .hidden-news, .open + .ans.dropBox').slideToggle('slow');
                }
            } else {
                var news_toggle = jQuery(this).addClass('open').siblings().removeClass('open');
                jQuery('.open .hidden-news, .open + .ans.dropBox').slideToggle('slow');
            }
        }
    });
    jQuery('.footer-wrapper a').each(function () {
        if (jQuery(this).hasClass('zoho-and')) {
            jQuery(this).parent().addClass('zoho-and-wrapper');
        }
    });
    jQuery('.zoho-child-wrapper li a').each(function () {
        if (/\/people\/help\//.test(document.URL)) {
            jQuery('.zoho-parent-toggle').remove();
        }
        if (/\/people\/help\//.test(document.URL) || jQuery(this).hasClass('active')) {
            jQuery(this).parent().parent().parent().addClass('open');
        }
    });
    jQuery('.zoho-child-wrapper').each(function () {
        if (/\/people\/help\//.test(document.URL) || jQuery(this).parent().hasClass('open')) {
            jQuery(this).css("display", "block");
        }
    });
    jQuery('.countries .names').click(function () {
        var text = jQuery(this).text();
        jQuery('.' + text).show();
    });
    jQuery('.close').click(function () {
        var divtohide = jQuery(this).attr('class').split(' ')[1].split('-')[0];
        jQuery('.' + divtohide).hide();
    });

    jQuery('.info').click(function () {
        var $nid = jQuery(this).attr('class').split('_')[2];
        jQuery('.expand_view_' + $nid).slideToggle("slow");
    })
    jQuery('.testimonial_addons').each(function () {
        jQuery(this).parent().parent().parent().addClass("testimonial-wrapper");
    });
    jQuery(".dynamic-width:contains('True')").addClass("tick");
    jQuery(".dynamic-width:contains('TRUE')").addClass("tick");
    jQuery(".dynamic-width:contains('False')").addClass("cross");
    jQuery(".dynamic-width:contains('FALSE')").addClass("cross");

    /** Pricing Comparison **/
    jQuery('.pricing-row-wrapper').each(function (i) {
        jQuery(this).children(":first").removeClass("dynamic-width");
        var div_count = jQuery(this).find(".dynamic-width").length;
        var result = 70 / div_count;
        jQuery(this).find(".dynamic-width").css("width", result + "%");
    });
    /** Pricing Comparison end **/

    /** Pricing list tables **/
    var totalsum = 0;
    jQuery('.pricing-blocks .view-pricing .views-row').each(function (key, value) {
        var width = jQuery(this).outerWidth();
        totalsum = totalsum + width;
    });
    jQuery('.pricing-blocks .view-pricing .view-content').css("width", totalsum + "px");
    /** Pricing list tables **/

    /** Universal Color User **/
    var universal_color_user = jQuery(".universal-color-user .field-content").text();
    var universal_color_theme = jQuery(".universal-color-theme .field-item").text();
    var universal_color_quicktabs = jQuery(".universal-color-quicktabs").text();
    var universal_button_color = jQuery(".universal-button-color .field-item").text();
    jQuery(".universal-color-user-1,.cell-empty-row,.pricing-faq .views-field-body a,.view-resourses-listing-page .views-field-nothing .learn-more a").css("color", universal_button_color);
    jQuery(".dynamic-width a,.plan-bottom-wrapper a").css("background-color", universal_button_color);
    jQuery(".products-theme").css("background-color", universal_color_theme);
    jQuery(".quicktabs-wrapper li.active").css("border-right-color", universal_color_quicktabs);
    jQuery(".getstarted-box a,.views-row.testimonial-wrapper .benefit-testimonial-wrapper,#footer-banner-image .get-started a").css("background-color", universal_button_color);
    jQuery(".header-menu-2 li a.active").css("border-bottom-color", universal_button_color);
    jQuery(".plan-wrapper[data-highlight='1'] .plan-top-wrapper").css("border-top-color", universal_button_color);

    /** Universal Color User **/

    jQuery("a[href='#top']").click(function () {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    var headerHeight = jQuery('#block-panels-mini-products-header-dropdown-menu').innerHeight();
    jQuery('.look-down').click(function () {
        jQuery("body").animate({
            scrollTop: jQuery('.catagory-mobapps-part').offset().top - headerHeight + 55
        }, 1000);
    });
    jQuery('.explore').click(function () {
        jQuery("body").animate({
            scrollTop: jQuery('.zoho-timeline').offset().top - headerHeight + 55
        }, 1000);
    });
    var homeheaderheight = jQuery('#block-panels-mini-home-page-sliding-header').innerHeight();
    jQuery('.zoho-home-page .scroll-down .scrolldown-arrow').click(function () {
        jQuery("body").animate({
            scrollTop: jQuery('.pane-home-page-view-panel-pane-1').offset().top - homeheaderheight + 55
        }, 1000);

    });
    jQuery('.view-home-page-view').each(function () {
        var highestBox = 0;
        jQuery('.view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)').each(function () {
            if (jQuery(this).height() > highestBox)
                highestBox = jQuery(this).height();
        });
        jQuery('.view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)').height(highestBox);
    });
    jQuery('.view-home-page-view').each(function () {
        var highestBox = 0;
        jQuery('.view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)').each(function () {
            if (jQuery(this).height() > highestBox)
                highestBox = jQuery(this).height();
        });
        jQuery('.view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)').height(highestBox);
    });

    /** Dynamic Pricing blocks height **/
    jQuery('.pricing-view-content-wrapper .pricing-row-wrapper').each(function () {
        var heightofpricingblock = 0;
        jQuery(this).children('.dynamic-width').each(function () {
            if (jQuery(this).height() > heightofpricingblock)
                heightofpricingblock = jQuery(this).height();
        });
        jQuery(this).children('.dynamic-width').height(heightofpricingblock);
    });
    /** Dynamic Pricing blocks height end **/

});

function showhide(showhideDiv, chantxt) {
    var divobj = document.getElementById(showhideDiv);
    if (divobj.style.display == 'none') {
        divobj.style.display = 'block';
        document.getElementById(chantxt).innerHTML = '<span class="up">Up</span>';
    } else {
        divobj.style.display = 'none';
        document.getElementById(chantxt).innerHTML = '<span class="down">Down</span>';
    }
}

function expcollps(curr, isexpand) {
    var more_div = (isexpand) ? jQuery(curr) : jQuery(curr).parent().prev();
    var less_div = (isexpand) ? jQuery(curr).next() : jQuery(curr).parent();
    if (isexpand) {
        jQuery('.ldjs_cnt').slideUp(700, function () {
            jQuery('.ldjs_readmr').css('visibility', 'visible');
        });
        less_div.slideDown(700, function () {
            more_div.css('visibility', 'hidden');
        });

    } else {
        less_div.slideUp(700, function () {
            more_div.animate({ 'opacity': 1 }, 700).css('visibility', 'visible');
        });
    }
}

function setSlidingMenuMobile(){
if(langsrc=="/"){
if($('body').hasClass('node-type-features') || $('body').hasClass('node-type-product-success-stories') || $('body').hasClass('node-type-zoho-one-applications')){
var mobileSMobj = JSON.parse(mobileSMjson);
var mobileDOM='<div class="ztop-slide-mobile-menu"><div class="ztop-smm-inner">';
var menuCount=0;
$.each( mobileSMobj, function( key, value ) {
menuCount++;
mobileDOM=mobileDOM+'<a href="'+langsrc+value+'">'+Drupal.t(key)+'</a>';
});
mobileDOM=mobileDOM+'</div></div>';
$(mobileDOM).appendTo($('.main-container-wrapper'));

if(menuCount==2)
    $('.ztop-smm-inner').addClass('z2menu');
}
}
}
        
var hidelogin = 0;
(function ($) {
    $(document).ready(function (e) {
        var infoElm = document.createElement('script');
		var avoideinfoload = _lhref.indexOf('zgs=1') < 0;
        if(avoideinfoload){
            if (dcenabled && nondc) {
                var _infocount = 0;
                var errorCount = 0;
                for (var i = 0; i < customvar.domainArr[0].length; i++) {
                    var infoElm = document.createElement('script');
					infoElm.className = "infoload";
                    infoElm.src = "https://accounts." + ZdomainName + "." + customvar.domainArr[0][i] + "/u/info";
                    document.getElementsByTagName('head')[0].appendChild(infoElm);
                    $(infoElm).on('load', function () {
                        _infocount++;
                        if (typeof zohouser.DC_INFO != 'undefined') {
                            (zohouser.DC_INFO == 'cn') ? customvar.domainArr[1].push('com.cn') : (zohouser.DC_INFO == 'au') ? customvar.domainArr[1].push('com.au') : customvar.domainArr[1].push(zohouser.DC_INFO);
                            if (zohouser.DC_INFO == 'in' && customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                                hidelogin = 1;
                            }else if (zohouser.DC_INFO == 'eu' && customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                                hidelogin = 1;
                            }else if (zohouser.DC_INFO == 'au' && customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                                hidelogin = 1;
                            }
                            if (customvar.domainArr[0].length == $('.infoload').length) {
                                $('script.infoload').remove();
                                if (customvar.domainArr[1][0] == 'us') {
                                    dcdomainOne = 'com';
                                } else {
                                    dcdomainOne = customvar.domainArr[1][0];
                                }
                                var infoElm = document.createElement('script');
								infoElm.className = "infoload";
                                infoElm.src = "https://accounts." + ZdomainName + "." + dcdomainOne + "/u/info";
                                document.getElementsByTagName('head')[0].appendChild(infoElm);
                                infoElm.onload = logindDetailedFroAll;
                                resetUrl(productName);
                            }
                        }
                        if (_infocount == $('.infoload').length && customvar.domainArr[1].length == 0) {
                            if (typeof CountryCode != 'undefined') {
                                if (CountryCode == 'IN') {
                                    dcdomainOne = 'in';
                                    if (customvar.noteuinarr[1].indexOf(customvar.productName) > -1) {
                                        dcdomainOne = 'com';
                                        onlycom = true;
                                    }
                                } else if (customvar.countryEu.indexOf(CountryCode) > -1) {
                                    dcdomainOne = 'eu';
                                    if (customvar.noteuinarr[0].indexOf(customvar.productName) > -1) {
                                        dcdomainOne = 'com';
                                        onlycom = true;
                                    }
                                }else if (customvar.countryTranstasman.indexOf(CountryCode) > -1) {
                                    dcdomainOne = 'com.au';
                                    if (customvar.noteuinarr[2].indexOf(customvar.productName) > -1) {
                                        dcdomainOne = 'com';
                                        onlycom = true;
                                    }
                                } else {
                                    dcdomainOne = 'com';
                                }
    
                                if($('.czone-dc form').length > 0){
                                    if (window.location.href.indexOf('desk/index1.html') > 0) {
                                        if (typeof handleDomain != 'undefined') {
                                            handleDomain();
                                        }
                                    } else if (typeof z_add_account_script != 'undefined') {
                                        z_add_account_script();
                                    } else if (typeof z_set_account_src != 'undefined') {
                                        z_set_account_src();
                                    }
                                }
                            }
                            logindDetailedFroAll();
                        }
                    });
                    $(infoElm).on('error', function(){
                        errorCount++;
                        //if(errorCount >= customvar.domainArr[0].length){
                            console.log('accounts failed');
                            logindDetailedFroAll();
                        //}
                    });
                }
            } else {
                if (window.location.hostname != "www.zohohelp.com") {
                    //(domainOne == '') ? (domainOne = 'com') : '';
                    infoElm.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    if (window.location.host == "www.zoho.com.cn") {
                        infoElm.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    } else if (currentUrlLang == 'zh-hans') {
                        infoElm.src = "https://accounts." + ZdomainName + ".com/u/info";
                    }
                    document.getElementsByTagName('head')[0].appendChild(infoElm);
                }
            }
        }
        var lan = "";
        var href = "";
        var href1 = "";
        var terms = "";
        var privacy = "/privacy.html ";
        var security = "";
        var antispam = "/policy.html ";
        var refound = "";
        var fb = "//www.facebook.com/zoho";
        var tw = "//twitter.com/zoho";
        var linkedin = "<a class='on-in' href='https://www.linkedin.com/company/38373' target='_blank' class='linkedin' title='LinkedIn'>'+Drupal.t('Linkedin')+'</a>";
        var languagecode = ['/es/', '/fr/', '/it/'];
        var lan1 = "";
        var GDPR = '/jp/gdpr.html';
        var lan2 = "";
        var moblieViewed = 0;
        var jpcontacuus = '/contactus.html';


        if (currentUrlLang == 'jp') {
            href = "//www.zoho.com";
            href1 = "//www.zoho.com/jp";
            terms = "ofservice";
            privacy = "//www.zoho.com/jp/PrivacyPolicy.html";
            security = "policy";
            antispam = "https://www.zoho.com/jp/policy.html";
            refound = "<li><a href='//www.zoho.com/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>";
            fb = "//www.facebook.com/zohoJapan";
            tw = "//twitter.com/jpzoho";
            linkedin = "";
            //jpcontacuus = 'https://www.zoho.com/jp/inquiry.html';
            jpcontacuus = 'https://www.zoho.com/jp/contactus.html';
        }

        if (dcenabled && nondc) {

        } else {
            infoElm.onload = logindDetailedFroAll;
        }

        var getTextval = $('#emailfield').val();
        if (getTextval == "" || getTextval == null) {
            $('#emailfield').parent().removeClass('added-placeholder');
        } else {
            $('#emailfield').parent().addClass('added-placeholder');
        }

        /* JS FOR PLACEHOLDER MOVING EFFECTS ENDS */

        getWidth = 0; // set welcome popup width;
        $gotoPage = '';
        productName = '';

        breaks = false;

        currentProduct();
        addString = "'" + productName + "'"
        resetUrl(productName);

        /* Header footer Common HTML Js */
        for (var i = 0; i < languagecode.length; i++) {
            if (window.location.href.indexOf(languagecode[i]) > -1) {
                var url_path = window.location.pathname.split('/');
                if (url_path[2] == (languagecode[i].slice(1, -1))) {
                    var lan1 = languagecode[i];
                    lan1 = lan1.slice(1);
                    lan2 = '/' + lan1.slice(0, -1);
                } else {
                    var lan = languagecode[i];
                    var lan = lan.slice(0, -1);
                }
            }
        }

        var footer = '<ul><li><a href="' + href1 + '/">' + Drupal.t('Zoho Home') + '</a></li><li><a href="' + jpcontacuus + '">' + Drupal.t('Contact') + '</a></li><li><a href="' + href1 + '/security' + security + '.html">' + Drupal.t('Security') + '</a></li><li><a href="' + href1 + '/ipr-complaints.html">' + Drupal.t('IPR Complaints') + '</a></li><li><a href="' + antispam + '">' + Drupal.t('Anti-spam Policy') + '</a></li><li class="footer-terms"><a href="' + href1 + '/terms' + terms + '.html">' + Drupal.t('Terms of Service') + '</a></li><li><a href="' + privacy + '">' + Drupal.t('Privacy Policy') + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t('Cookie Policy') + '</a></li><li class="gdprc"><a href="' + GDPR + '" class="gdprc">' + Drupal.t('GDPR Compliance') + '</a></li><li><a href="'+langsrc+'abuse-policy/">' + Drupal.t('Abuse Policy') + '</a></li>' + refound + '</ul><p>&copy; 2020, ' + Drupal.t('Zoho Corporation Pvt. Ltd. All Rights Reserved.') + '</p>';

        var new_footer = '';
        if (currentUrlLang == 'jp') {
            new_footer = '<ul class=ZPprivacy> <li><a href="' + href1 + '/">' + Drupal.t('Zoho Home') + '</a></li><li><a href="' + jpcontacuus + '">' + Drupal.t('Contact') + '</a></li><li><a href="' + href1 + lan + lan2 + '/security' + security + '.html">' + Drupal.t('Security') + '</a></li> <li><a href="' + href1 + lan + lan2 + '/ipr-complaints.html">' + Drupal.t('IPR Complaints') + '</a></li><li><a href="' + lan + lan2 + antispam + '"> ' + Drupal.t('Anti-spam Policy') + '</a></li><li class="footer-terms"><a href="' + href1 + lan + lan2 + '/terms' + terms + '.html">' + Drupal.t('Terms of Service') + '</a></li><li><a href="' + lan + lan2 + privacy + '">' + Drupal.t('Privacy Policy') + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">' + Drupal.t('Cookie Policy') + '</a></li><li><a href="' + GDPR + '" class="gdprc">' + Drupal.t('GDPR Compliance') + '</a></li>' + refound + '</ul><p>&copy; 2020, ' + Drupal.t('Zoho Corporation Pvt. Ltd. All Rights Reserved.') + '</p>';
        } else {
            var fSecuritypolicy = langsrc+'security.html';
            if (productName == 'mail') {
                   fSecuritypolicy = langsrc + 'mail/secure-email-hosting.html';
            }
			var _livelink = '';
			if (productName == 'zohoorchestly') {
                   _livelink = 'https://www.zoho.com';
            }
            new_footer = '<ul class=ZPprivacy> <li><a href="' + _livelink+langsrc + '">' + Drupal.t('Zoho Home') + '</a></li><li><a href="' + _livelink+langsrc + 'contactus.html">' + Drupal.t('Contact') + '</a></li><li><a href="' + _livelink+fSecuritypolicy + '">' + Drupal.t('Security') + '</a></li> <li><a href="' + _livelink+langsrc + 'ipr-complaints.html">' + Drupal.t('IPR Complaints') + '</a></li><li><a href="' + _livelink+langsrc + 'policy.html"> ' + Drupal.t('Anti-spam Policy') + '</a></li><li class="footer-terms"><a href="' + _livelink+langsrc + 'terms.html">' + Drupal.t('Terms of Service') + '</a></li><li><a href="' + _livelink+langsrc + 'privacy.html">' + Drupal.t('Privacy Policy') + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t('Cookie Policy') + '</a></li><li><a href="'+_livelink+'/gdpr.html" class="gdprc">' + Drupal.t('GDPR Compliance') + '</a></li><li><a href="'+_livelink+langsrc+'abuse-policy/">' + Drupal.t('Abuse Policy') + '</a></li>' + refound + '</ul><p>&copy; 2020, ' + Drupal.t('Zoho Corporation Pvt. Ltd. All Rights Reserved.') + '</p>';
            if (window.location.hostname.indexOf('.cn') > 0 || currentUrlLang == 'zh-hans') {
                new_footer = '<ul class=ZPprivacy><li> <a href="https://www.zoho.com.cn/">' + Drupal.t('Zoho Home') + '</a> </li> <li><a href="https://www.zoho.com.cn/aboutus.html">' + Drupal.t('Aboutus') + '</a></li> <li><a href="https://www.zoho.com.cn/contactus.html">' + Drupal.t('Contact') + '</a></li> <li> <a href="https://www.zoho.com.cn/security.html" rel="nofollow">' + Drupal.t('Security') + '</a> </li> <li> <a href="https://www.zoho.com.cn/ipr-complaints.html" rel="nofollow">' + Drupal.t('IPR Complaints') + '</a> </li> <li> <a href="https://www.zoho.com.cn/policy.html" rel="nofollow">' + Drupal.t('Anti-spam Policy') + '</a> </li> <li> <a href="https://www.zoho.com.cn/terms.html" rel="nofollow">' + Drupal.t('Terms of Service') + '</a> </li> <li> <a href="https://www.zoho.com.cn/privacy.html" rel="nofollow">' + Drupal.t('Privacy Policy') + '</a> </li></ul><p>&copy; 2020, ' + Drupal.t('Zoho Corporation Pvt. Ltd. All Rights Reserved.') + '</p><p>&#21271;&#20140;&#24066;&#28023;&#28096;&#21306;&#21518;&#23663;&#36335;28&#21495;KPHZ&#22269;&#38469;&#25216;&#26415;&#36716;&#31227;&#20013;&#24515;&#19977;&#23618; 400-660-8680 &#20140;ICP&#22791;15015257&#21495; &#20140;ICP&#35777;150718&#21495;</p>';
            }
        }

        var footercheck = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li><a href="mailto:support@zoho.com">support@zoho.com</a></li><li><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>' + new_footer;

        newFooter = new_footer;

        /* NEW DESIGN FOR BELOW 767px */
        mobileView();

        function checkCookies() {
            if (getGlobalCookie('_z_identity') == 'true' || getGlobalCookie('_z_identity') == '_z_identity') {
                if(!$('body').hasClass('body-umain')){
                    $('body').addClass('body-umain');
                }
                if ($("body").find("main")) {
                    $('.main').addClass('umain');
                    $(document).trigger('umain-trigger');
                }
                if ($("body").find(".main-container-wrapper")) {
                    $('.main-container-wrapper').addClass('umain');
                }
            }
        }

        //checkCookies();
        if (langArr.indexOf(currentUrlLang) > -1) {
            if ($(".common-footer").length > -1) {
                if (!$(".common-footer").hasClass('common-links')) {
                    $(".common-footer").addClass('common-links')
                } else if (!$(".common-footer").hasClass('common-links-js')) {
                    $(".common-footer").addClass('common-links-js')
                }
            }
        }

        if (langArr.indexOf(currentUrlLang) > -1) {
            if (productName == 'notebook' || productName == 'writer' || productName == 'salesinbox') {
                if (typeof $('body').attr('data-lang-list') != 'string') {
                    $('body').attr("data-lang-list", "en,es-xl,pt-br,de,fr");
                }
            }
        }

        function footerfun(){
			if (typeof customvar.supportId != 'undefined') {
                $('.ZF-contact ul li a').eq(0).html(customvar.supportId());
                $('.ZF-contact ul li a').eq(0).attr('href', "mailto:"+customvar.supportId());   
            }
            var footerSer = '';
            if ((window.location.host == "www.localzoho." + _com + "" || window.location.host == "prezoho.zoho." + _com + "" || window.location.host == "www.zoho." + _com + "" || window.location.host == "www.zoho." + _eu + "" || window.location.host == "www.zoho.in" || window.location.host == _preZC || window.location.host == "zoho.zohocorp.com" || window.location.host == _zcmsZC)) {
                footerSer = '<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." placeholder="' + Drupal.t('Search for product overviews, FAQs, and more...') + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>';
                if (window.innerWidth <= 767) {
                    $('.footer-search-input').attr('placeholder', Drupal.t('Search')+' zoho.'+domainOne);
                }else{
                    $('.footer-search-input').attr('placeholder', Drupal.t('Search for product overviews, FAQs, and more...'));
                }
            }
            if($('.common-links-js .footer-search').length < 1){
                $('.ZPprivacy').before(footerSer);
            }
             if (currentUrlLang != "") {
                 $('.gdprc').attr('target', '_blank');
             }
            $(document).ready(function() {
                $(document).on('submit', '#footer-search-action', function(e) {
                    e.preventDefault();
                    var formval = $('.footer-search-input').val().trim();
                    var actionURL;
                    if (currentUrlLang == "") {
                        actionURL = window.location.origin + '/search-results.html';
                    } else {
                        actionURL = window.location.origin + '/' + currentUrlLang + '/' + 'search-results.html';
                    }
                    if (formval != "") {
                        window.location = actionURL + "?query=" + encodeURIComponent(formval);
                    }
                });
            });
            if($('.footer-links-wrap .product-links').hasClass('four-column')){
                $('.footer-sec-wrap.two-column').addClass('fourColList');   
            }
        }
        
        //script.onload = urlL;
        allapps = allapps.split('|');
        for (i = 0; i < allapps.length; i++) {
            cat = allapps[i].split(',');
            for (j = 0; j < cat.length; j++) {
                if (cat[j] == productName) {
                    $(window).trigger('z-header-added');
                    if (/\/zoholics\//.test(location.href) == false)
                        $(".common-footer").html(footer);
                    $(".common-links").html(new_footer);
                    var interCount = 0;
                    var checkinter = setInterval(function(){
                        interCount++;
                        if($(".common-links-js").length > 0 || interCount > 20 || $('.zgf-common-links').length){
                            $(".common-links-js").html(new_footer);
                            if (footer_ebable) {
                                $(".common-links-js").html(footercheck);
                                $(".common-links-js, .common-links").addClass('czonefooter');
                                if (_lhref.indexOf('search-results.html') < 0) {
                                    var a = $('.czonefooter').clone();
                                    $('.czonefooter').remove();
                                    $('.footer-sec-wrap').after(a);
                                }
                            }
                            languageredirect();
                            footerfun();
                            
                            if ($('.ZPprivacy .footer-terms a').length > 0) {
                                if (productName == 'sites' || productName == 'developer' || productName == 'cliq' || productName == 'commerce' || productName == 'transmail') {
                                    var aval = $('.ZPprivacy .footer-terms a').attr('href').split('terms.html').join(productName + '/terms.html');
                                    $('.ZPprivacy .footer-terms a').attr('href', aval);
                                } else if (productName == 'campaigns') {
                                    var aval = $('.ZPprivacy .footer-terms a').attr('href').split('terms.html').join('campaigns/zc-terms.html?src=zc-footer');
                                    $('.ZPprivacy .footer-terms a').attr('href', aval);
                                    $('.ZPprivacy .footer-terms a').html(Drupal.t('Terms of Use'));
                                } else if (productName == 'crm') {
                                    var aval = $('.ZPprivacy .footer-terms a').attr('href').split('terms.html').join('crm/zohocrm-terms.html');
                                    $('.ZPprivacy .footer-terms a').attr('href', aval)
                                } else if (productName == 'creator') {
                                    var aval = 'https://www.zoho.com/creator/terms.html'
                                    $('.ZPprivacy .footer-terms a').attr('href', aval)
                                } else if (productName == 'pagesense') {
                                    var aval = 'https://www.zoho.com/pagesense/terms-of-use.html'
                                    $('.ZPprivacy .footer-terms a').attr('href', aval)
                                } else if (productName == 'officeapi') {
                                    var aval = 'https://officeapi.zoho.com/jsp/terms.jsp'
                                    $('.ZPprivacy .footer-terms a').attr('href', aval)
                                } else if (productName == 'salesiq') {
                                    var aval = $('.ZPprivacy .footer-terms a').attr('href').split('terms.html').join('salesiq/zoho-salesiq-terms-of-use.html');
                                    $('.ZPprivacy .footer-terms a').attr('href', aval)
                                }
                            }

                            clearInterval(checkinter);
                        }
                    }, 500);
                    
                    var menuLi = $(".header .menu").children();
                    $(menuLi[i]).addClass('selected');
                }
            }
        }

        if ((window.location.pathname.split('/')[1] == 'contacts' || $('body').hasClass('og-context-node-17848') || $('body>div').eq(0).hasClass('wpblog') || window.location.href.indexOf('/one/') > 0 || window.location.pathname == "/events.html") && !$('body').hasClass('node-tnid-48314') || window.location.pathname == "/mdm-cloud.html") {
            var cCount = 0;

            function cllingMe() {
                var intervl = setTimeout(function () {
                    if ($('.common-links').length > 0) {
                        ($('.common-links').html() == '') ? $(".common-links").html(new_footer) : '';
                        if(window.location.href.indexOf('/one/') > 0){
                            $(".common-links-js").html(footercheck);
                            $(".common-links-js, .common-links").addClass('czonefooter');
                            $('.ZF-contact ul li a').eq(0).html("support@zohoone.com");
                            $('.ZF-contact ul li a').eq(0).attr('href', "mailto:support@zohoone.com");
                            if (currentUrlLang == 'es-xl') {
                                $('.ZF-contact ul li a').eq(0).html("consultas@zohocorp.com");
                                $('.ZF-contact ul li a').eq(0).attr('href', "mailto:consultas@zohocorp.com");
                            }else if(_lhref.indexOf('one/startups/') > 0){
                                $('.ZF-contact ul li a').eq(0).html("info@zohoforstartups.com");
                                $('.ZF-contact ul li a').eq(0).attr('href', "mailto:info@zohoforstartups.com");
                            }
                        }
                        languageredirect();
                        footerfun();
                        clearInterval(intervl);
                    } else {
                        cCount++;
                        if (cCount < 10) {
                            cllingMe();
                        }
                    }
                }, 500);
            }
            cllingMe();
        }
        //}

        /* End of Header footer common HTML Js */

        $('.product-header-top').html($('#mini-panel-product_menu').html());

        $('.product-header-top .menu-icon-help-header > a').addClass('logo').html('ZOHO');


        /* Remove the sites24*7 for zoho.eu*/
        if (domainOne == "in") {
            $('.zcomtctmanager').hide();
            if ($('.zp-apps.zp-contactmanager').length > 0) {
                $('.zp-apps.zp-contactmanager').remove();
            }
        }
        var zohoDomain = document.domain;
        if (zohoDomain == "www.zoho.eu") {
            $('.business-proc .no-border').remove();
            $('.business-proc a[href="/appcreator/"]').parent().remove();
        }

        $(window).scroll(function () { /*  slide down the menu  */
            $('.zlang-container-inner').hide();
            if($('.zlang-container').children('.zlang-container-inner').length > 0){
                $('.zlang-container').children('.zlang-container-inner').removeClass('show').addClass('hide');
            }
            slideDown();
        })
        slideDown();

        var clicked = false;
        var navClick = false;
        // menu icon event for tab view
        $('.menu-icon').click(function () {
            if (window.innerWidth <= 550) {
                $('.product-menu').hide();
            }

            if (navClick == false) {
                navClick = true;
                $('.mask-holder').removeClass('hide');
                setTimeout(function () {
                    $('.mobile-menu').css({ 'left': '0%' });
                    var _w = parseInt(window.innerHeight) - parseInt($('.header').height());
                    $('.mobile-menu').css({ 'height': _w + 'px' });
                }, 100)

                setTimeout(function () {
                    $('html,body').css({ 'overflow': 'hidden' })
                }, 0)
            } else {
                hide();
            }
        })

        // for tab menu dropdown
        $('.mask-holder').click(function (e) {
            if (e.delegateTarget.className == e.target.className) {
                hide();
            }
        });

        /* this is for adding signout popup */
        gotoSignupnav();

        var checkVisible = $('.product-nav-links .menu').css('display');
        $('.userinfo-container').css({
            'display': 'block'
        });
        $('body').on('touchstart click', function(e) {
            var container = $(".zlang-container");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.zlang-container').children('.zlang-container-inner').removeClass('show').addClass('hide');
                $('.zlang-container-inner').hide();
            }
        });
        
        
        $('body').click(function (e) {
            var mailvar = true;
            if (productName == 'mail' && $('.signup-box form').css('display') == 'none') {
                mailvar = false;
            }else if(_lhref.indexOf('/creator/apps/') > 0 || $(e.target).hasClass('scrollstop')){
                mailvar = false;
            }
            var getsignupTarget = '',
                bottomSignup = '',
                getTargetId = '';
            (e.target.parentNode.parentNode != null) ? (getTargetId = e.target.parentNode.parentNode.className) : '';
            (e.target.parentNode.className != null) ? (bottomSignup = e.target.parentNode.className) : '';
            (e.target.className != null) ? (getsignupTarget = e.target.className) : '';
            if (window.location.href.indexOf('crm/what-is-crm.html') < 0 && mailvar) {
                if (getsignupTarget == 'signup' || bottomSignup == 'get-started' || ($(e.target).hasClass('act-btn') && $(e.target).hasClass('cta-btn') && !$(e.target).hasClass('zwp-pricing-link')) || $(e.target).hasClass('zgh-signup')) {
                    if (window.innerWidth > 991) {
                        if ($('.signup-box .sgfrm').length != 0 && $('.zp-home-right').css('display') != 'none' && typeof getusername == 'undefined') {
                            e.preventDefault();
                            gotoSignupnav();
                        }
                    }
                }
            }

            if (e.target.className == 'menu') { } else if (e.target.className == 'mobile-menu-icon') {
                if ($('.product-nav-links .menu').css('display') == 'none') {
                    clicked = false;
                } else {
                    clicked = true;
                }
                $('.product-nav-links .menu').css({
                    'height': window.innerHeight - $('#mini-panel-product_menu').outerHeight()
                });
                if (clicked == false) {
                    $('.zgh-accounts .zgh-signup').fadeOut(100);
                    $('.menu').slideDown(300);
                    $('body').css({ 'overflow': 'hidden' });
                    $('.product-nav-links .menu').css({ 'overflow': 'scroll' });
                } else {
                    if (!$('.main-container-wrapper').hasClass('umain')) {
                        $('.zgh-accounts .zgh-signup').fadeIn(100);
                    }
                    $('.product-nav-links .menu').slideUp(300);
                    $('body').css({ 'overflow': 'auto' });
                }
            } else {
                if (clicked == true) {
                    $('.product-nav-links .menu').slideUp(300);
                    $('html,body').css({
                        'overflow': 'auto'
                    })
                }
            }

            if (getTargetId == 'userinfo-details') {
                $('.userinfo-details').addClass("zoho-expand");
                if (getWidth > 285) {
                    $('.userinfo-details.zoho-expand').css({
                        'width': getWidth + 10,
                        'height': '135px'
                    });
                }

            } else {

                $('.userinfo-details').removeClass("zoho-expand");
                if (getWidth > 285) {
                    $('.userinfo-details').css({
                        'width': '35px',
                        'height': '35px'
                    });
                    $('.product-header-top .userinfo-details, .product-header-top .userinfo-container').css({
                        'height': '43px'
                    });
                }
            }
        })


        $(document).on('keydown', function (e) {
            keys = e.which;
            if (keys == 27) {
                $('.userinfo-details').removeClass("zoho-expand");
            }
        })

        jQuery('.get-started a,.posibilities-bot').click(function (e) {
            if (window.innerWidth > 767) {
                e.preventDefault();
                gotoSignupnav();
            }

        })


        anchorN = $('a');
        aa = [];
        for (i = 0; i < anchorN.length; i++) {
            aa[i] = $(anchorN[i]).attr('href');
            if (aa[i] == "javascript:void(0);") {
                $(anchorN[i]).css({
                    "cursor": "text"
                });
            }

        }

        window.onscroll = function () {
            var height = jQuery(window).height();
            var scrollTop = jQuery(window).scrollTop();
            var obj = jQuery(".footer-wrapper");
            if (typeof obj !== 'undefined') {
                var pos = obj.position();
                if (pos && pos.top && (height + scrollTop) > pos.top) {
                    jQuery(".service-links").css("position", "absolute");
                } else {
                    jQuery(".service-links").css("position", "fixed");
                }
            }
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
                jQuery('#back-top a').css("position", "fixed");
            } else {
                jQuery('#back-top').fadeOut();
            }
        }
        /* this is for header hover animation */

        var timeout;
        var $getCh;
        var menutimeout;
        var mouseEnter = true;
        var timeDelay = 200;

        $('.dropdown-mask').css({ 'height': '200px' })
        $('.header .menu >  li').hover(
            function (e) {

                $this = $(this);
                var bposX = e.clientX;
                timeout = setTimeout(function () {
                    var aposX = e.clientX;
                    if ($('.dropdown-mask').hasClass('showmaskCheck')) {
                        timeDelay = 0;
                        if (bposX == aposX) {
                            $getCh = $this.children()[1];
                            $($getCh).addClass('addMe');
                            $('.catagory-dropdown.addMe').children().addClass('showMe');
                        }
                    }
                }, timeDelay);
            },
            function () {
                clearTimeout(timeout);
                $($getCh).removeClass('addMe');
                $('.catagory-dropdown').children().removeClass('showMe');
            });

        $('.header .menu').hover(function () {
            if ($('.dropdown-mask').hasClass('showmaskCheck')) {
                timeDelay = 0;
            } else {
                timeDelay = 200;
            }
            menutimeout = setTimeout(function () {
                $('.dropdown-mask').addClass('showmask');
            }, 100);
            $('.dropdown-mask').addClass('showmaskCheck');
        }, function () {
            clearTimeout(menutimeout);
            $('.dropdown-mask').removeClass('showmaskCheck');
            $('.dropdown-mask').removeClass('showmask');
            timeDelay = 200;
        })



        function hide() {
            navClick = false;
            $('.mobile-menu').css({
                'left': '-100%'
            });
            setTimeout(function () {
                $('.mask-holder').addClass('hide');
            }, 100)

            setTimeout(function () {
                $('html,body').css({
                    'overflow': 'auto'
                });
            }, 400)
        }

        function slideDown(getWidth) {
            $('.userinfo-details').removeClass("zoho-expand");
            if (getWidth > 285) {
                $('.userinfo-details').css({
                    'width': 35,
                    'height': 35
                });
                $('.product-header-top .userinfo-details, .product-header-top .userinfo-container').css({
                    'height': '43px'
                });
            }

            if ($(window).scrollTop() > 200) {
                $('.product-header-top').removeClass('slide');
                $('.product-header-top').css({
                    'overflow': 'visible'
                });
            } else {
                $('.product-header-top').addClass('slide');
                $('.product-header-top').css({
                    'overflow': 'hidden'
                });
            }
        }
        
        // never called - have to check

        function intervelStart() {
            setInt = setTimeout(function () {
                count += 1;
                if (count <= 1) {
                    $('.banner-part').css({
                        'left': 0 - ($(bannerCh[count]).offset().left)
                    })
                    $(zSlide[count]).addClass('Zselect').siblings().removeClass('Zselect');
                    intervelStart();
                } else {
                    $('.banner-part').css({
                        'left': 0
                    })
                    count = 0;
                    $(zSlide[count]).addClass('Zselect').siblings().removeClass('Zselect');
                    intervelStart();
                }
            }, speed)
        }
        
        $(window).resize(function () {
            if($('.footer-search-input').length > 0){
                if (window.innerWidth <= 767) {
                    $('.footer-search-input').attr('placeholder', Drupal.t('Search')+' zoho.'+domainOne);
                }else{
                    $('.footer-search-input').attr('placeholder', Drupal.t('Search for product overviews, FAQs, and more...'));
                }
            }
                
            mobileView();
            hideFeatureheader();
            if ($(window).outerWidth() <= 767) {
                if (!$('.mobile-menu-icon .hamburger-box').hasClass('active')) {
                    $('.product-nav-links .menu').css({ 'height': window.innerHeight - $('#mini-panel-product_menu').outerHeight(), 'display': 'none' });
                }
                $('#mini-panel-product_menu .goto-link').hide();
                $('.product-nav-links .menu .featured-apps-part').css('display', 'block');
                $('#mini-panel-product_menu .zlang-container').show();
                if ($('#mini-panel-product_menu .zlang-container').length < 1 && $('.header .zlang-container').length != 0) {
                    var _apElm = '<div class="zlang-container">' + $('.header .zlang-container').html() + '</div>';
                    $('#mini-panel-product_menu .menu-icon-help-header').after(_apElm);
                    $('.overMe, .zlang-container').on('mouseover', function () {
                        $(this).children('.zlang-container-inner').show();
                    });
                    $('.overMe, .zlang-container').on('mouseout', function () {
                        $(this).children('.zlang-container-inner').hide();
                    });
                    $('.zlang-container').on('click', function () {
                        $(this).children('.zlang-container-inner').show();
                    });
                }
            } else {
                $('.product-nav-links .menu').css({ 'height': 'auto', 'top': 'auto', 'display': 'block' });
                $('.product-header-inner .userinfo-container,.product-header-inner .goto-link').remove();
                $('.product-nav-links .menu .featured-apps-part').css('display', 'none');
                $('#mini-panel-product_menu .zlang-container').remove();
            }

        })


        function helpPagesResponsive() {
            if ($('.node-type-product-help .panel-region-sidebar-first').length) {
                $('<div id="helpMenuIconCont"><span id="help-menu">Menu</span></div>').insertBefore('.panel-region-content.crm-help-content');
                addMenu();
                $(window).resize(function (e) {
                    addMenu();
                    hideFeatureheader();
                });

                $('#help-menu').click(function () {
                    $('.node-type-product-help .panel-region-sidebar-first').toggleClass('slide-in');
                    $('.node-type-product-help #help-menu').toggleClass('slide-in-menu');
                    setTimeout(function () {
                        $('body').toggleClass('overflowHidden');
                    }, 500)
                });
            }

            var benefitsCh = $('#benefits ul').children().length;
            if (benefitsCh == 5) {
                $('#benefits').addClass('mid-align');
            } else if (benefitsCh == 4) {
                $('#benefits').addClass('two-column-box');
            }
        }

        function addMenu() {
            $('.node-type-product-help .panel-region-sidebar-first').is(":visible");
            if (window.innerWidth <= 1000) {
                $('.node-type-product-help .panel-region-sidebar-first').css({
                    'height': window.innerHeight - $('.panel-region-sidebar-first').offset().top
                });
            }
        }

        /*function appendingMetaTag() {
            $('meta').each(function (index, tag) {
                var content = tag.getAttribute('name');
                if (content == 'apple-itunes-app' || content == 'google-play-app') {
                    metaHas = true;
                    appTitle = tag.getAttribute('app-title');
                    appIcon = tag.getAttribute('app-icon');
                }
            });
            if (!metaHas) {
                if (productName == 'survey' || productName == 'inventory' || productName == 'assist') {
                    loopVal = 0
                } else {
                    loopVal = 1;
                }
                for (var i = 0; i <= loopVal; i++) {
                    var meta = document.createElement('meta');
                    meta.name = metaName[i];
                    meta.content = appsIds[i];
                    document.getElementsByTagName('head')[0].appendChild(meta);
                }
            }
        }

        function addsmartBanner(a) {
            if (a) {
                if (typeof $.smartbanner != 'undefined') {
                    $.smartbanner({
                        title: a,
                        author: ' ',
                        force: android ? 'android' : 'ios',
                        daysHidden: 0,
                        daysReminder: 0
                    });
                }
            }
        }*/

        function signupPageProductLink() {
            var _sLink = '/' + productName;
            if (productName == "zohoorchestly") {
                _sLink = '';
            }
            var val = '';
            (productName == 'crmplus') ? (_sLink = '/crm' + _sLink) : (_sLink = _sLink);
            (currentLang != '') ? (val = '/' + currentUrlLang) : (val = val);
            (currentLang != '') ? (_sLink = '/' + currentUrlLang + _sLink) : (_sLink = _sLink);
            $('.signup-form .z-product a, .z-signup-page-wrap .signup-form a span').attr('href', _sLink + '/');
            if (window.location.href.indexOf('agencies-signup.html') > -1) {
                $('.signup-form .z-product a').attr('href', val + '/social/agencies.html')
            }
        }

        function hideFeatureheader() {
            if (window.innerWidth < 768) {
                $('.mobile-menu-icon').css({ 'display': 'block' });
                if (!$('.mobile-menu-icon .hamburger-box').hasClass('active')) {
                    $('#header .menu').css({ 'display': 'none' });
                }
            } else {
                $('.mobile-menu-icon').css({ 'display': 'none' });
                $('#header .menu').css({ 'display': 'block' });
            }

            if (window.innerWidth > 1140) {
                $('.header .menu').css({ 'display': 'block' });
            } else {
                $('.header .menu').css({ 'display': 'none' });
            }

        }

        //  need to check

        function hidechildWrapper() {
            if (jQuery('body').hasClass('og-context-node-3434')) {
                if (jQuery('body').hasClass('node-type-product-help')) {
                    jQuery('.menu-panel .zoho-parent-wrapper .hasChild ').each(function (index, val) {
                        if (index == 0) {
                            var onBoardingMenuLink = jQuery(this).find('.zoho-child-wrapper li a').eq(1).text();
                            if (onBoardingMenuLink == 'Onboarding') {
                                jQuery(this).find('.zoho-child-wrapper li a').eq(1).hide()
                            }
                        }
                        if (index == 6) {
                            var onReportsMenuLink = jQuery(this).find('.zoho-child-wrapper li a').eq(0).text();
                            if (onReportsMenuLink == 'Reports') {
                                jQuery(this).find('.zoho-child-wrapper li a').eq(0).hide()
                            }
                        }
                    });
                }
            }
        }

        function addCrmPath() {
            var crmOG = jQuery('body').hasClass('og-context-node-96');
            if (crmOG) {

                var locPath = window.location.pathname.split('/');
                if (locPath.length == 3) {
                    jQuery('.bottom-promo .ct-action-btn').attr('href', '/crm/lp/signup.html?plan=enterprise?src=' + locPath[2] + '')
                } else if (locPath.length > 3) {
                    jQuery('.bottom-promo .ct-action-btn').attr('href', '/crm/lp/signup.html?plan=enterprise?src=' + locPath[2] + '/' + locPath[3] + '')
                }

            }
        }

        function addCrmPlusHrefLinks() {
            var proTi = jQuery('#mini-panel-product_menu .product-title a').text();
            if (proTi == "DRE") {
                jQuery('#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a').attr('href', "https://www.zoho.com/");
            }
            if (proTi == "CRM Plus") {
                var CrmPLUS_URL = window.location.pathname.split('/');
                for (var i = 0; i < CrmPLUS_URL.length; i++) {
                    if (CrmPLUS_URL[1] != 'crm') {
                        lang = CrmPLUS_URL[1];
                        url = "/" + lang + "/crm/crmplus/";
                        jQuery('#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a').attr('href', url);
                        jQuery('.product-header-top .menu-icon-help-header a,.product-header-top .product-title a').attr('href', url);
                    } else if (CrmPLUS_URL[1] == 'crm' && CrmPLUS_URL[2] == 'crmplus') {
                        jQuery('#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a').attr('href', langsrc + 'crm/crmplus/');
                        jQuery('.product-header-top .menu-icon-help-header a,.product-header-top .product-title a').attr('href', langsrc + 'crm/crmplus/');
                    }
                }
            } else if (proTi == "Writer") {
                jQuery('#mini-panel-product_menu .menu-icon-help-header a,#mini-panel-product_menu .product-title a').attr('href', langsrc + 'writer/');
                jQuery('.product-header-top .menu-icon-help-header a,.product-header-top .product-title a').attr('href', langsrc + 'writer/');
            }
        }

        function addSitesPath() {
            var prodGID = jQuery('body').hasClass('og-context-node-8078');
            if (prodGID) {
                jQuery('.only-common .common-links ul li:nth-child(6) a').attr('href', '/sites/terms.html');
                jQuery('.only-common .common-links ul li:nth-child(6) a').text('Terms of Use')
            }
        }

        function geturL() {
            var logedUsername = zohouser.DISPLAY_NAME;
            if (logedUsername) {
                $('.header').addClass('uheader');
                if(!$('body').hasClass('body-umain')){
                    $('body').addClass('body-umain');
                }
                if ($("body").find(".main")) {
                    $('.main').addClass('umain');
                    $(document).trigger('umain-trigger');
                }

                if ($("body").find(".main-container-wrapper")) {
                    $('.main-container-wrapper').addClass('umain');
                }
                if (dcenabled) {
                    if (!$('.umain').hasClass('zNewDcSetup')) {
                        $('.umain').addClass('zNewDcSetup');
                    }
                }

                getusername = decodeHexString(zohouser.DISPLAY_NAME);
            }
        }

        /* this is for goto signup form */
        function gotoSignupnav() {
            if (window.location.href.indexOf('social/hootsuite-alternative.html') < 0) {
                getAllField = $('.signup-box .sgfrm input');
                if (getAllField.length != 0) {
                    $('.signup-box form').eq(0).css({'opacity': '0'});
                    setTimeout(function(){
                        $('.signup-box form').eq(0).animate({'opacity': '1'});
                    },1000);
                    $('html, body').animate({ scrollTop: 0, }, 1000, function () {
                        setTimeout(function () { $('.focusin').removeClass('focusin'); }, 500);
                    })
                    setTimeout(function () {
                        var _iput = $('.signup-box .sgfrm').eq(0).find('input');
                        (_iput.length > 1) ? _iput.eq(1).addClass('focusin').focus() : _iput.eq(0).addClass('focusin').focus();
                    }, 1200);
                }
            }
        }

        function settingSignupLoginMobile() {
            var signupLoginMenuLinkInner = '<div class="mobile-menu-signup"><a href="' + zPrdSignupLink + '?src=mtry-hbm">' + zPrdSignupLinkText + '</a><a href="' + zPrdLoginLink + '">Login</a> <div class="mobile-menu-moreprd"><a href="https://www.zoho.' + domainOne + '/products.html?ref=m-' + productName + '">All Zoho Products</a></div></div>';
            $('.product-nav-links .menu .featured-apps-part').html(signupLoginMenuLinkInner);
        }

        function mobileView() {
            var insertUsericon;
            if (!getusername) {
                var GSN = nameServices[0][allProductlowerCase.indexOf(productName)];
                if (typeof GSN != 'undefined' && typeof GSN != '') {
                    var _serviceLang = '';
                    (currentLang != '') ? (_serviceLang = "service_language=" + currentLang + "&") : (_serviceLang = '');
                    insertUsericon = '<a class="user-icon" href="https://accounts.zoho.com/login?' + _serviceLang + 'servicename=' + GSN + '">User Icon</a>'
                    _globalAccess = insertUsericon;
                }
            }
            if ($('.product-nav-links .menu .featured-apps-part').length < 1) {
                var rProducts = Drupal.t('Related Products');
                if (productName == 'home') {
                    rProducts = Drupal.t('Our Products');
                }
                var signupLoginMenuLink = '<li class="featured-apps-part"><div class="mobile-menu-moreprd moreprd-nonloggedin"><a href="'+langsrc+'">'+Drupal.t('All Zoho Products')+'</a></div></li>';
                $('.product-nav-links .menu').append(signupLoginMenuLink);
            }

            if (window.outerWidth <= 767) {
                if (moblieViewed == 0) {
                    moblieViewed = 1;
                    $('.ptmenu').addClass('sticky');
                    $('.product-nav-links .menu').css({
                        'height': window.innerHeight - $('#mini-panel-product_menu').outerHeight()
                    });
                }
            }
            var menuLi = $(".product-header-top .menu").children();
            $(menuLi[1]).addClass('selected');

            /* pricing common script */

            var chpriceTarget = $('.view-content');
            var pricplan = $('body').find(chpriceTarget);
            if ((pricplan.length) > 0) {
                var pricplan = $(chpriceTarget).children();
                if (pricplan.length > 3) {
                    chpriceTarget.addClass('plane-four-column');
                }
            }
            /* pricing common script */
        }

        function logindDetailedFroAll() {
            if ((window.innerWidth > 992) && (window.innerHeight < 800)) {
                if ($('.testimonial-content').length > 0) {
                    var testiHeight = $('.testimonial-content').innerHeight();
                    $('.testimonial-content').css('margin-top', ((window.innerHeight - 20) - testiHeight) / 2);
                }
            }
            if (typeof zohouser != 'undefined') {
                getusername = zohouser.DISPLAY_NAME;
                geturL();
            }
            if (getusername) {
                $('.signing .signup, .signing .signin, .signup-box').hide();
                if ($('.zh-access').length > 0 && $('body').hasClass('node-type-zoho-home')) {
                    $('.zh-access').attr('href', "https://home." + Zdomain + "." + dcdomainOne + "/home");
                }
            }
            if (!getusername) {
                if ($('.loggedin-userinfo').length > 0) {
                    $('.loggedin-userinfo').hide();
                }
                if (window.location.href.indexOf('pricing-comparison.html') > 0 || window.location.href.indexOf('pricing.html') > 0) {
                    $('.signing .signup').hide();
                } else {
                    $('.signing .signup').show();
                }

                if (window.innerWidth > 991) {
                    $('.signup-box').show();
                }
                $('.signing .signin').show();
                $('.try-now').addClass('signupbtn-hide').removeClass('signupbtn-show');
                var zsignup_url = "/" + productName + "/";
                var zsignup_text = Drupal.t("Sign Up Now");


                var zsignup_products = ['meeting', 'workplace', 'assist', 'salesiq'];
                var zsignup_url_Arr = ['signup.html?version=freetrial&service=meeting&src=topbar-try', 'pricing.html', 'signup.html?version=freetrial', 'signup.html?source=Website.Header'];


                if (zsignup_products.indexOf(productName) > -1) {
                    zsignup_url += zsignup_url_Arr[zsignup_products.indexOf(productName)];
                    if (productName == "mail" || productName == "workplace") {
                        zsignup_text = Drupal.t("Get Started");
                    } else if (productName == 'docs') {
                        zsignup_text = Drupal.t("Get Started Now");
                    }
                } else {
                    zsignup_url += "signup.html";
                }

                if (productName == 'writer') {
                    zsignup_text = Drupal.t("Get Started Now");
                }
                var loginProductArr = ['show', 'writer', 'crmplus', 'appcreator', 'crm'];
                href = '';
                (currentLang != '') ? (href = '/' + currentUrlLang) : (href = href);
                var aVal = href + zsignup_url;
                var bVal = href + '/' + productName;
                var cVal = zsignup_text;
                if (loginProductArr.indexOf(productName) < 0) {
                    var bVal = href + '/' + productName + "/login.html";
                    (productName == 'home') ? (aVal = (aVal.split('/home')[0] + aVal.split('/home')[1])) : '';
                    (productName == 'mail') ? (aVal = langsrc + 'mail/zohomail-pricing.html') : '';
                }

                if (loginProductArr.indexOf(productName) > -1) {
                    if (productName == 'crmplus') {
                        if ((window.location.host) != "www.zoho.com.cn") {
                            aVal = langsrc + "crm/crmplus/signup.html";
                            bVal = "crm/crmplus/login.html";
                            cVal = Drupal.t("Sign Up");
                        }
                    } else if (productName == 'crm') {
                        var _PN = window.location.pathname;
                        //aVal = langsrc + "crm/signup.html?src=top";
                        aVal = langsrc + "crm/signup.html";
                        bVal = "/crm/lp/login.html";
                        if (_PN != '/crm/index.html' && _PN != '/crm/zohocrm-pricing.html' && _PN != '/crm/comparison.html') {
                            cVal = Drupal.t('Get Started');
                        } else {
                            cVal = Drupal.t('Sign Up Now');
                        }
                    } else if (productName == 'show') {
                        aVal = "https://docs.zoho."+domainOne+"/" + productName + "/signup";
                        bVal = "https://docs.zoho."+domainOne+"/" + productName + "/signup?signin=true";
                        cVal = Drupal.t('Get Started Now');
                    }
                }

                $('.header .signing .signin').css({
                    'opacity': 1
                });
                if (window.innerWidth <= 767) {
                    $('.user-icon').css({
                        'display': 'block'
                    })
                }
                /****For language based signup ***/
            }
            
            if(getusername){
                if($('.act-btn.cta-btn').length > 0){
                    $('.act-btn.cta-btn').attr('href', 'https://'+customvar.productName+'.'+Zdomain+'.'+dcdomainOne);
                }
                if (typeof customvar.logged != 'undefined') {
                    customvar.logged();
                }
                
                if ($(".loggedin-userinfo").length > 0) {
                    if (productName == "assist") {
                        var href = document.location.href;
                        if (href.indexOf("?") != -1) {
                            var params = href.split("?")[1];
                            var param = params.split("&");
                            $gotoPage = "https://assist.zoho." + dcdomainOne + "/login/redirect-page.jsp" + "?" + params;
                        } else {
                            $gotoPage = "https://assist.zoho." + dcdomainOne + "/login/redirect-page.jsp";
                        }
                    }
                    $(".loggedin-userinfo").show()
                    $('.signup-form h3,.signup-box,.login-text').hide();
                    if ($('.access-apps').length < 1) {
                        if (productName == 'zohoorchestly') {
                            $gotoPage = $gotoPage + '/blueprints?marketing_source=' + customvar.czms() + '&referral=' + customvar.czmr() + '&newlogin=true';
                        }
                        $(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t('Welcome') + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                        $(".loggedin-userinfo .access-apps").html(accessZoho + " " + k2)
                        if (_lhref.indexOf('signup.html') > 0 && currentUrlLang == 'jp') {
                            $(".loggedin-userinfo .access-apps").html(accessZoho);
                        }
                    }
                    if (productName == "zohoorchestly") {
                        var _txt = Drupal.t('Access')+' orchestly';
                        $(".loggedin-userinfo .access-apps").html(_txt);
                    }else if (productName == "it-management") {
						var _txt = Drupal.t('Access')+' It-Management';
						 $(".loggedin-userinfo .access-apps").html(_txt);
					}else if (productName == "remoteaccessplus") {
						var _txt = Drupal.t('Access')+' remoteaccessplus';
						$('.zgh-userAccess a').html(_txt);
					}
                }
                if(!hidelogin){
                    $('.getstartedbox .signup-btn.mobile-btn, .zp-home-left .act-btn.cta-btn, .content-wrap .act-btn.cta-btn, .non-temp .act-btn.cta-btn, .bot-cta-con .act-btn.cta-btn, .getstartedbox .signup-btn.mobile-btn').css('display', 'inline-block');
                    $('.node-type-zoho-home .zh-access, .act-btn.cta-btn').css({'opacity':'1', 'visibility' : 'visible'});
                }
                var getHref = window.location.href;
                var logOutUrl = 'https://accounts.' + Zdomain + '.' + dcdomainOne + '/logout?serviceurl=' + encodeURI(getHref);
				var myaccountlink = 'https://accounts.' + Zdomain + '.' + dcdomainOne + '/u/h#home';
                if (productName == 'zohoorchestly') {
                    logOutUrl = 'https://accounts.zoho.' + dcdomainOne + '/logout?serviceurl=' + encodeURI(getHref);
					myaccountlink = 'https://accounts.zoho.' + dcdomainOne + '/u/h#home';
                }
                var userAccount = '<div class="zgh-user-box"> <div class="zgh-userPanel"> <img src=' + $userAvator + ' alt=' + customvar.htmlencode(getusername) + ' class="zgh-userAvatar"> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' + $userAvator + ' alt=' + customvar.htmlencode(getusername) + '> </li><li class="zgh-userName">' + customvar.htmlencode(getusername) + '</li><li class="zgh-userAccess"> <a href=' + $gotoPage + '></a> </li><li class="zgh-userAccount"> <a href='+myaccountlink+'>' + myAccount + '</a> </li><li class="zgh-userLogout"><a href="' + logOutUrl + '">' + signOut + '</a> </li></ul> </div></div></div>';
                $('.signing .goto-link').hide();
				$('.zgh-accounts').html(userAccount);
                if(k2 == 'crm'){
                    k2 = 'CRM'; 
                }else if(k2 == 'crmplus'){
                    k2 = 'CRM plus'; 
                }
				$('.zgh-userAccess a').html(accessZoho + ' ' + k2);
                if (productName == "zohoorchestly") {
                    var _txt = Drupal.t('Access')+' orchestly';
                    $('.zgh-userAccess a').html(_txt);
                }else if (productName == "it-management") {
                    var _txt = Drupal.t('Access')+' It-Management';
                    $('.zgh-userAccess a').html(_txt);
                }else if (productName == "remoteaccessplus") {
                    var _txt = Drupal.t('Access')+' remoteaccessplus';
                    $('.zgh-userAccess a').html(_txt);
                }
                if (hidelogin) {
                    var _dc = customvar.dccountry();
                    $('.act-btn.cta-btn, .zgh-userAccess, .access-apps, .trynow-plan, .zfeatures-btn .zcta, a.logged-out, a.logged-in').hide();
                    $('body').prepend('<div class="zDCnotif-container">' + Drupal.t('Sorry') + ', ' + productName + ' ' + Drupal.t('is not available in') + ' ' + _dc.toUpperCase() + Drupal.t(' data center.') + '<span class="zDCnotifClose">x</span></div>');
                    $('.zDCnotifClose').on('click', function () {
                        $('.zDCnotif-container').remove();
                    });
                    var _icount = 0;
                    var inervl = setInterval(function () {
                        if($('.z-bottom-cta-menu').length > 0){
                            clearInterval(inervl);
                            $('.z-bottom-cta-menu').addClass('z-disabled');
                            $('.loggedin').html("Not available");
                        }
                        if(_icount > 20){
                            clearInterval(inervl);
                        }
						_icount++;
                    }, 100);
                }
                dropRight();
            }else{
                tlscall();
				$('body').addClass('non-umain');
                if (typeof customvar.nonlogged != 'undefined') {
                    customvar.nonlogged();
                }
                if (typeof customeCallWatchBtn != 'undefined') {
                    customeCallWatchBtn();
                }
                $('.product-header-top .zgh-accounts .zgh-signup, .zgh-accounts .zgh-login').css('display', 'inline-block');
                $(".act-btn.cta-btn, .node-type-zoho-home .zh-signup").css({'opacity':'1', 'visibility' : 'visible'});
                $('.product-header-top .zgh-accounts .zgh-login').css('display', 'none');
                if(productName != 'commerceplus') {
					if(!$('body').hasClass('node-type-zp-home') && !$('body').hasClass('node-type-zp-home-2-0')){
						$('.zgh-signup').css('display', 'inline-block')
					}
                    //(!$('body').hasClass('node-type-zp-home') && !$('body').hasClass('node-type-zp-home-2-0')) ? $('.zgh-signup').css('display', 'inline-block'): '';
                }   
            }
            customvar.dcbasedimage();
            signupPageProductLink();
        }
        
        function resetUrl(productName) {
            m = window.location.href;
            m = m.replace("http://www.", '');
            m = m.replace("https://www.", '');
            m = m.replace("http://", '');
            m = m.replace("https://", '');
            k = m.split(".com");
            if (k[1] != null) {
                findEs = k[1].split('/');
                if (productName == 'crm' && findEs.indexOf('es') > -1) {
                    accessZoho = 'Accesar Zoho ';
                    myAccount = 'Mi Cuenta';
                    signOut = 'Salir';
                } else {
                    accessZoho = Drupal.t('Access Zoho');
                    myAccount = Drupal.t('My Account');
                    signOut = Drupal.t('Sign Out');
                }
            }
            if (k.length > 1) {
                k = k[0];
                k2 = productName;
                /*if (k2 == 'officeplatform') {
                    k2 = 'Office API';
                }*/
            } else {
                k2 = '';
            }

            var k2product = ['crm', 'projects', 'bugtracker', 'people', 'assist', 'survey', 'sites', 'social', 'meeting', 'vault', 'recruit', 'creator', 'contactmanager', 'motivator', 'crmplus', 'appcreator', 'reports', 'wiki', 'show', 'writer', 'desk', 'cliq', 'developer', 'salesinbox', 'officeapi', 'sprints', 'officeplatform', 'phonebridge', 'ziasearch','identity-management', 'log360-cloud', 'it-management'];

            var k2productLink = ['https://crm.' + Zdomain + '.' + dcdomainOne + '/crm/ShowHomePage.do', 'https://projects.zoho.' + dcdomainOne + '/portals.do', 'https://bugtracker.zoho.' + dcdomainOne + '/portals.do', 'https://people.zoho.' + dcdomainOne + '/people', 'https://assist.zoho.' + dcdomainOne + '/assist', 'https://survey.zoho.' + dcdomainOne + '/home.do', 'https://sites.zoho.' + dcdomainOne + '/index', 'https://social.' + Zdomain + '.' + dcdomainOne + '/Home.do', 'https://meeting.zoho.' + dcdomainOne + '/jsp/service-check.jsp?service=meeting', 'https://vault.zoho.' + dcdomainOne + '/online/main', 'https://recruit.zoho.' + dcdomainOne + '/recruit/ShowHomePage.do', 'https://creator.zoho.' + dcdomainOne + '/home', 'https://cm.zoho.' + dcdomainOne + '/index.do', 'https://motivator.zoho.' + dcdomainOne + '/login', 'https://crmplus.zoho.' + dcdomainOne + '/', 'https://appcreator.zoho.' + dcdomainOne + '', 'https://reports.zoho.' + dcdomainOne + '', 'https://wiki.zoho.' + dcdomainOne + '', 'https://show.zoho.' + dcdomainOne + '/presentations', 'https://writer.zoho.' + dcdomainOne + '/', 'https://desk.zoho.' + dcdomainOne + '/', 'https://cliq.zoho.' + dcdomainOne + '/index.do', 'https://developer.zoho.' + dcdomainOne + '/', 'https://crm.zoho.' + dcdomainOne + '/crm/tab/SalesInbox', 'https://officeapi.zoho.' + dcdomainOne + '', 'https://sprints.zoho.' + dcdomainOne + '/team.do', 'https://officeintegrator.zoho.' + dcdomainOne + '', 'https://phonebridge.zoho.' + dcdomainOne + '/phonebridge/register', 'https://search.' + Zdomain + '.' + dcdomainOne + '/', 'https://identitymanager.manageengine.com/', 'https://log360cloud.manageengine.com/', 'https://alarmsone.manageengine.com/'];

            /* thisis for product homepage link url*/
            $userAvator = 'https://contacts.zoho.com/file?t=user&fs=thumb';

            (k2product.indexOf(k2) > -1) ? $gotoPage = k2productLink[k2product.indexOf(k2)] : $gotoPage = 'https://' + k2 + '.zoho.' + dcdomainOne;
            if (productName == "connect" && window.location.href.indexOf('/jp/connect/cybozu-live-alternative.html') > 0) {
                $gotoPage = "https://connect." + Zdomain + "." + dcdomainOne;
            }
            if (productName == 'patchmanagerplus') {
                $gotoPage = "https://patch.manageengine." + dcdomainOne;
            } else if (productName == 'zohoorchestly') {
                $gotoPage = "https://orchestly.zoho." + dcdomainOne;
            } else if (productName == 'assist' && global_getUrlParam('src') != '') {
                $gotoPage = "https://assist." + Zdomain + "." + dcdomainOne + "/assist-cross-registration?version=freetrial&src=" + global_getUrlParam('src');
            }
            if (_lhref.indexOf('sheet/whats-new/zohosheet5.html') > 0 || _lhref.indexOf('sheet/data-cleaning.html') > 0 || _lhref.indexOf('sheet/custom-function.html') > 0 || _lhref.indexOf('sheet/zia.html') > 0) {
                $gotoPage = 'https://sheet.' + Zdomain + '.' + dcdomainOne + '/enablesheet5';
            }
		}

        function currentProduct() {
            var url = window.location.href.split('/');
            findproduct:
            for (var k = 0; k < url.length; k++) {
                for (var m = 0; m < allProduct.length; m++) {
                    if (allProduct[m].toLowerCase() == url[k]) {
                        if (allProduct[m].toLowerCase() != 'crm' && allProduct[m].toLowerCase() != 'docs') {
                            productName = allProduct[m].toLowerCase();
                            break findproduct;
                        }
                        if (allProduct[m].toLowerCase() == 'crm') {
                            if (url[k + 1] != 'crmplus') {
                                productName = 'crm'
                            }
                            if (url[k + 1] == 'crmplus') {
                                productName = 'crmplus'
                            }
                        }
                        if (allProduct[m].toLowerCase() == 'docs') {
                            if ((url[k + 1] != 'writer') || (url[k + 1] != 'writer.html') || (url[k + 1] != 'show') || (url[k + 1] != 'show.html')) {
                                productName = 'docs';
                            }
                            if ((url[k + 1] == 'writer') || (url[k + 1] == 'writer.html')) {
                                productName = 'writer';
                            }
                            if ((url[k + 1] == 'show') || (url[k + 1] == 'show.html')) {
                                productName = 'show';
                            }
                            if ((url[k + 1] == 'sheet') || (url[k + 1] == 'sheet.html')) {
                                productName = 'sheet';
                            }
                        }
                    }

                }
            }
            (_lhref.indexOf('mdm-cloud.html') > 0) ? (productName = 'Mobile Device Management') : '';
            if (productName == 'social') {
                if (url[3] == 'crm' && url[5] == 'social') {
                    productName = 'crm';
                }
            }

            if (productName != 'crmplus') {
                if (url.indexOf('crm') > 0 && productName != 'campaigns' && productName != 'deluge') {
                    productName = 'crm';
                } else if (url.indexOf('creator') > 0 && productName != 'developer') {
                    productName = 'creator';
                }
            }
            if (productName == 'campaigns') {
                if (url[3] == 'crm' && url[5] == 'campaigns') {
                    productName = 'crm';
                }
            }
            var urlPath = window.location.pathname;
            (urlPath.split('/')[1] == 'one' || urlPath.split('/')[2] == 'one') ? (productName = 'one') : '';
            (productName == '') ? (productName = 'home') : '';
            (productName == 'analytics-plus') ? (productName = 'analyticsplus') : '';
            (window.location.href.indexOf('orchestly.' + domainOne) > 0) ? productName = 'zohoorchestly' : '';
            (window.location.href.indexOf('bigin.' + domainOne) > 0) ? productName = 'bigin' : '';
            (window.location.href.indexOf('analytics-plus/plugin/') > 0) ? productName = "analyticsplusplugin" : '';
        }

        function signupfieldcheck() {
            setTimeout(function () {
                if ($('.signup-box').length > 0) {
                    for (var i = 0; i < $('.sgfrm input').length; i++) {
                        if ($('.sgfrm input').eq(i).val() != 'undefined' && $('.signup-box').css('display') == 'block') {
                            if ($('.sgfrm input').eq(i).val() != '') {
                                if ($('.sgfrm input').eq(i).prev().hasClass('placeholder')) {
                                    $('.sgfrm input').eq(i).parent().addClass('added-placeholder');
                                }
                            }
                        }
                    }
                }
            }, 500);
        }

        $(document).on('blur', 'input', function () {
            var getTextval = $(this).val();
            if (getTextval == "" || getTextval == null) {
                $(this).parent().removeClass('added-placeholder');
            } else {
                $(this).parent().addClass('added-placeholder');
            }
        }).on('focus', 'input', function () {
            var getTextval = $(this).val()
            if (getTextval == "" || getTextval == null) {
                $(this).parent().removeClass('').addClass('added-placeholder');
            } else {
                $(this).parent().addClass('added-placeholder');
            }
        }).on('change', 'input', function () {
            signupfieldcheck()
        });


        helpPagesResponsive();
        //EuRedirection();
        addCrmPlusHrefLinks();
        addSitesPath();
        addCrmPath();
        hidechildWrapper();
        hideFeatureheader();

        checkIpAppend();

        $('.navbar-toggle').click(function (e) {
            e.stopPropagation();
            $('.header-menu-2 ul.menu').slideToggle();
        });

        // login local - zoho handling
        if ($('#zohoiam').length > 0) {
            var sourceVal = $('#zohoiam').attr('src').split('.zoho.').join('.' + ZdomainName + '.');
            $('#zohoiam').attr('src', sourceVal)
        }

        setTimeout(function () {
            jQuery('.animation-wrap > div').each(function (i) {
                var t = jQuery(this);
                setTimeout(function () {
                    t.addClass('animated');
                }, (i + 1) * 100);
            });
        }, 100)

        /* feature list */
        var getAlllist = jQuery('.features-list').children();
        var gerAlltopval = [];
        for (var i = 0; i < getAlllist.length; i++) {
            gerAlltopval[i] = jQuery(getAlllist[i]).offset().top - window.innerHeight + jQuery('.features-list li').innerHeight();
        }

        jQuery(window).scroll(function () {
            var sTop = jQuery(window).scrollTop();
            for (var i = 0; i < getAlllist.length; i++) {
                if (sTop > gerAlltopval[i]) {
                    if (i % 2 == 1) {
                        jQuery(getAlllist[i]).addClass('from-right');
                    } else {
                        jQuery(getAlllist[i]).addClass('from-left');
                    }
                }
            }

            if (sTop > gerAlltopval[getAlllist.length - 1] + 150) {
                jQuery('.bottom-signup,.download-features a').css({
                    'opacity': 1
                })
            }

            jQuery('.product-header.sub-header').css({
                'top': -76
            });
        })


        var clicked = false;
        var checkVisible = jQuery('.product-menu').css('display');
        jQuery('body').click(function (e) {
            if (e.target.className == 'product-menu') { } else if (e.target.className == 'sub-menu-icon') {
                if (clicked == false) {
                    clicked = true;
                    jQuery('.product-menu').slideDown(300);
                } else {
                    clicked = false;
                    jQuery('.product-menu').slideUp(300);
                }
            } else {
                if (clicked == true) {
                    clicked = false;

                    jQuery('.product-menu').slideUp(300);
                    jQuery('html,body').css({ 'overflow': 'auto' })
                }
            }
        })

        jQuery('.product-menu li').click(function (e) {
            var getClass = jQuery(this).attr('class');
            var getSplit = getClass.split('-');
            if (getSplit[0] == 'crmplus') {
                e.preventDefault();
                var moveTotop = jQuery("section[data=" + getSplit[1] + "]").offset().top;
                jQuery('html, body').animate({
                    scrollTop: moveTotop - jQuery('.sub-header').innerHeight(),
                }, 1000, "easeInOutQuad")
            }
        })

        jQuery('.bottom-signup,.signing .signup').click(function (e) {
            if (productName == 'crm') {
                return;
            }
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0,
            }, 1000, "easeInOutQuad")
            setTimeout(function () {
                jQuery('.signup-box div:first-child input').focus();
            }, 1000)
        });

    });
})(jQuery);


; /**/


/***************** ADD ANIMATION SCRIPT *******************/
;
(function (jQuery) {
    jQuery.fn.visible = function (partial) {
        var jQueryt = jQuery(this),
            jQueryw = jQuery(window),
            viewTop = jQueryw.scrollTop() - 200,
            viewBottom = viewTop + (jQueryw.height() + 300),
            _top = (jQueryt.length > 0) ? (jQueryt.offset().top) + 250 : 0,
            _bottom = _top + jQueryt.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
})(jQuery);
(function (jQuery) {
    function animation() {
        if ($(window).outerWidth() > 767) {
            jQuery(".content-wrap:not(.animated)").each(function () {
                var jQuerythis = jQuery(this),
                    jQuerydelay = (jQuerythis.attr('data-delay')) ? jQuerythis.attr('data-delay') : 0;
                setTimeout(function () {
                    if (jQuerythis.visible(true)) {
                        jQuerythis.addClass(jQuerythis.attr('data-animation'));
                        jQuerythis.addClass('animated');
                    }
                }, jQuerydelay);
            });
        }
        jQuery(".content-wrap:not(.bottom-animated)").each(function () {
            var _this = jQuery(this), _jw = jQuery(window), _stop = _jw.scrollTop(), _top = _this.offset().top, _wh = _jw.height();
            if(_stop > (_top-_wh)){
                _this.addClass('bottom-animated');  
            }
        });
        jQuery(".content-wrap:not(.top-animated)").each(function () {
            var _this = jQuery(this), _jw = jQuery(window), _stop = _jw.scrollTop(), _top = _this.offset().top, _wh = _jw.height();
            if(_stop > _top){
                _this.addClass('top-animated'); 
            }
        });
        jQuery(".content-wrap:not(.middle-animated)").each(function () {
            var _this = jQuery(this), _jw = jQuery(window), _stop = _jw.scrollTop(), _top = _this.offset().top, _wh = _jw.height();
            if(_stop > (_top-(_wh/2))){
                _this.addClass('middle-animated');  
            }
        });
    }
    jQuery(document).ready(function () {
        animation();
    });
    jQuery(window).resize(function () {
        animation();
    });
    jQuery(window).scroll(function () {
        animation();
    });
})(jQuery);
/***************** ADD ANIMATION SCRIPT *******************/


/* To override zohoGASignupEvent function called for GTM */
function zohoGASignupEvent() { }

function zohoFedClickEvent() { }

function zcTrackClick() { }


//*CHINA site header-footer starts*// 
jQuery(document).ready(function () {
    if ((window.location.host) == "www.zoho.com.cn") {
        var footer = '<div class="common-footer"><ul><li><a href="https://www.zoho.com.cn/">Zoho&#39318;&#39029;</a></li><li><a href="https://www.zoho.com.cn/contactus.html">&#32852;&#31995;&#25105;&#20204;</a></li><li><a href="https://www.zoho.com.cn/aboutus.html">Zoho&#21382;&#21490;</a></li><li><a href="https://www.zoho.com.cn/press.html">&#20135;&#21697;&#36164;&#35759;</a></li><li><a href="https://www.zoho.com.cn/articles.html">&#21457;&#24067;&#35266;&#28857;</a></li><li><a href="https://www.zoho.com.cn/partners.html" rel="nofollow">&#20195;&#29702;&#21512;&#20316;</a></li><li><a href="https://www.zoho.com.cn/security.html"rel="nofollow">&#23433;&#20840;&#20445;&#38556;</a></li><li><a href="https://www.zoho.com.cn/ipr-complaints.html" rel="nofollow">&#30693;&#35782;&#20135;&#26435;&#30003;&#35785;</a></li><li><a href="https://www.zoho.com.cn/policy.html" rel="nofollow">&#21453;&#22403;&#22334;&#37038;&#20214;&#25919;&#31574;</a></li><li><a href="https://www.zoho.com.cn/terms.html" rel="nofollow">&#26381;&#21153;&#26465;&#27454;</a></li><li><a href="https://www.zoho.com.cn/privacy.html" rel="nofollow">&#38544;&#31169;&#25919;&#31574;</a></li></ul><p>© 2020, Zoho Corporation.&#20445;&#30041;&#25152;&#26377;&#26435;&#21033;.</p><p>&#21271;&#20140;&#24066;&#28023;&#28096;&#21306;&#30693;&#26149;&#36335;6&#21495;&#38182;&#31179;&#22269;&#38469;&#22823;&#21414;B&#24231;13&#23618;  400-660-8680</p><p>&#20140;ICP&#22791;15015257&#21495;&nbsp;&nbsp;&#20140;ICP&#35777;150718&#21495;</p><p>&#21451;&#24773;&#38142;&#25509;&#65306;QQ1610576843&nbsp;&nbsp; <a href="https://www.bangongyi.com" target="_blank">&#24494;&#20449;&#21150;&#20844;</a> &nbsp;&nbsp;<a href="https://www.fangcloud.com/" target="_blank">&#20159;&#26041;&#20113;</a></p><div class="china-social"> <a class=on-weibo target="_blank" href="https://weibo.com/zohochina" rel="nofollow"></a><!--&#24494;&#20449;--><a class="on-vchat1"> </a><a class="on-vchat2"> </a><!--&#24494;&#20449;&#32467;&#26463;--></div><div class="footer-zohologo"> <a href="https://www.zoho.com.cn/"><img src="images/zoho.png" alt="&#20225;&#19994;&#20113;&#26381;&#21153;" title="&#20113;&#26381;&#21153;"></a> </div></div>';
        $(".sales-marketing .app-box:nth-child(2)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(4)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(6)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(8)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(9)").css("display", "none");
        $(".sales-marketing .app-box:nth-child(10)").css("display", "none");
        $(".email-collab .app-box:nth-child(4)").css("display", "none");
        $(".email-collab .app-box:nth-child(5)").css("display", "none");
        $(".email-collab .app-box:nth-child(6)").css("display", "none");
        $(".email-collab .app-box:nth-child(7)").css("display", "none");
        $(".email-collab .app-box:nth-child(8)").css("display", "none");
        $(".help-desk .app-box:nth-child(2)").css("display", "none");
        $(".help-desk .app-box:nth-child(3)").css("display", "none");
        $(".help-desk .app-box:nth-child(4)").css("display", "none");
        $(".finance").css("display", "none");
        $(".business-proc .app-box:nth-child(3)").css("display", "none");
        $(".business-proc .app-box:nth-child(4)").css("display", "none");
        $(".common-links").html(footer);

        var allProduct = ['crm', 'crmplus', 'campaigns', 'survey', 'salesiq', 'mail', 'notebook', 'docs', 'projects', 'chat', 'desk', 'recruit', 'people', 'creator', 'reports'];
        var url = window.location.href.split('/');
        for (var k = 0; k < url.length; k++) {
            for (var m = 0; m < allProduct.length; m++) {
                if (allProduct[m] == url[k]) {
                    $(".menu-icon-help-header a ,.product-title a").attr("href", "/" + url[k] + "/");
                    $('.signing').html('<a class="signup" href="/' + allProduct[m] + '/signup.html">' + Drupal.t("Sign Up") + '</a> <a class="signin" href="/' + allProduct[m] + '/login.html">' + Drupal.t("LOGIN") + '</a>');
                }
            }
        }
    }
});


$(window).on('load', function () {
	for (var i = 0; i < $('body a').length; i++) {
		if ($('body a').eq(i).attr('href') != 'undefined' && $('body a').eq(i).attr('href') != null && $('body a').eq(i).attr('href') != '') {
			if(typeof $('body a').eq(i).attr('target') != 'undefined'){
				if($('body a').eq(i).attr('target') == '_blank'){
					$('body a').eq(i).attr('rel', 'noopener')
				}
			}
			if($('body a').eq(i).attr('href').indexOf('forums.zoho.com') > -1){
				$('body a').eq(i).attr('href' , $('body a').eq(i).attr('href').split('forums.zoho.com').join('help.zoho.com/portal/en/community'));
			}
		}
	}
    $('.copy-right-year').html('2020');
    if (domainOne == "eu") {
        $('.vi-linkedin, .vi-office365').hide();
    }
    if ((window.location.host) == "www.zoho.com.cn") {
        $("a[href*='.com']").attr("href", function (i, href) {
            return href.replace('zoho.com/', 'zoho.com.cn/');
        });
    }
});


function zSignupPrevent() {
    var getsignupClass = document.getElementsByClassName('disabled-z-signup').length;
    if (0 < getsignupClass) {
        return false;
    }
}
//*CHINA site header-footer ends*// // JavaScript Document

/******************Quick Links JS - START ***********************/
jQuery(document).on('click', '.hide-links-btn', function () {
    jQuery('.quick-connect-links').animate({
        'left': 225
    }, '1000');
    jQuery('.quick-connect-links-wrap .show-links-btn').show()
    jQuery('.quick-connect-links-wrap .show-links-btn').animate({
        'right': 0
    }, '1500');
});


jQuery(document).on('click', '.show-links-btn', function () {
    jQuery('.quick-connect-links').show()
    jQuery('.quick-connect-links').animate({
        'left': 0
    }, '1000');
    jQuery('.quick-connect-links-wrap .show-links-btn').show('slow')
    jQuery('.quick-connect-links-wrap .show-links-btn').animate({
        'right': -45
    }, '1200');
})
    
jQuery(window).on('load', function () {
    jQuery('.quick-connect-links-wrap .show-links-btn').show();
});


/****************************************Footer Content Starts****************************************/

$(document).ready(function () {
    var winWidth = $(window).width();
    if (window.innerWidth < 480 || isMobile) {
        var inervl = setInterval(function () {
            if ($(".footer-sec-wrap .product-links").length > 0) {
                clearInterval(inervl);
                if ($(".footer-sec-wrap .product-links ul.contact-zoho").length <= 0) {
                    var contactLinks = '<ul class="contact-zoho" > <li><a href="' + langsrc + '">' + Drupal.t('Zoho Home') + '</a></li><li><a href=' + langsrc + 'contactus.html>' + Drupal.t('Contact') + '</a></li></ul>';
                    var privacyLinks = '<ul class="security-policy" > <li><a href=' + langsrc + 'security.html>' + Drupal.t('Security') + '</a></li> <li><a href=' + langsrc + 'ipr-complaints.html>' + Drupal.t('IPR Complaints') + '</a></li><li><a href=' + langsrc + 'policy.html> Anti-spam Policy</a></li><li class="footer-terms"><a href=' + langsrc + 'terms.html>' + Drupal.t('Terms of Service') + '</a></li><li><a href=' + langsrc + 'privacy.html>' + Drupal.t('Privacy Policy') + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t('Cookie Policy') + '</a></li><li class="gdprc"><a href="/gdpr.html">' + Drupal.t('GDPR Compliance') + '</a></li><li><a href="'+langsrc+'/abuse-policy/">' + Drupal.t('Abuse Policy') + '</a></li></ul>';
                    if ($('.footer-links-wrap .product-links').hasClass('one-column')) {
                        $('.footer-links-wrap .one-column div').eq(0).prepend('<h4>Quick Links</h4>')
                    }
                    var contact = "<div><h4>" + Drupal.t("Contact") + "</h4>" + contactLinks + "</div>";
                    contact += "<div><h4>" + Drupal.t("Security and Privacy") + "</h4>" + privacyLinks + "</div>";
                    $(".footer-sec-wrap .product-links").append(contact);
                }

                $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({ "display": "none" });
                $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({ "display": "none" });
                
                $(document).on("click", ".footer-sec-wrap .product-links h4", function (e) {
                    if (window.innerWidth < 480) {
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                            $(this).next("ul").slideUp();
                        } else {
                            $(".footer-sec-wrap .product-links ul").slideUp();
                            $(".footer-sec-wrap .product-links h4").removeClass("active");
                            $(this).addClass("active");
                            $(this).next("ul").slideDown();
                        }
                    }
                });

                function changeFooterView() {
                    if (window.innerWidth < 480) {
                        $(".footer-sec-wrap .product-links ul").slideUp();
                        $(".footer-sec-wrap .product-links h4").removeClass("active");
                        $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({ "display": "block" });
                        $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({ "display": "block" });
                        if (productName == 'reports' || productName == 'analytics') {
                            $('.lang-support').prev().hide();
                            $('.lang-support').hide();
                        }
                    } else {
                        $(".footer-sec-wrap .product-links ul").slideDown();
                        $(".footer-sec-wrap .product-links ul ul").slideUp();
                        $(".footer-sec-wrap .product-links h4").removeClass("active");
                        $(".footer-sec-wrap .product-links ul.contact-zoho").parent("div").css({ "display": "none" });
                        $(".footer-sec-wrap .product-links ul.security-policy").parent("div").css({ "display": "none" });
                        if (productName == 'reports' || productName == 'analytics') {
                            $('.lang-support').show();
                            $('.lang-support').prev().show();
                        }
                    }
                }
                
                $(window).resize(function () {
                    if ($(this).width() != winWidth) {
                        winWidth = $(this).width();
                        changeFooterView();
                    }
                });

                changeFooterView();
            }
        }, 500);
    }
});

$(window).on('load', function () {
    if ($('body').hasClass('og-context-node-20384') || $('body').hasClass('og-context-node-17577')) {
        if (langArr.indexOf(currentUrlLang) > -1) {
            var footer = "<div class='region region-footer'><section id='block-zoho-navigation-links-product-pages-footer-links'><div class='footer-sec-wrap'><div class='content-wrap'><div class='footer-links-wrap'><div class='common-links common-links-js'><ul><li><a href='" + langsrc + "'>" + Drupal.t('Zoho Home') + "</a></li><li><a href=" + langsrc + "contactus.html>" + Drupal.t('Contact') + "</a></li><li><a href=" + langsrc + "security.html>" + Drupal.t('Security') + "</a></li> <li><a href=" + langsrc + "ipr-complaints.html>" + Drupal.t('IPR Complaints') + "</a></li><li><a href=" + langsrc + "policy.html>" + Drupal.t('Anti-spam Policy') + "</a></li><li><a href=" + langsrc + "terms.html>" + Drupal.t('Terms of Service') + "</a></li><li><a href=" + langsrc + "privacy.html>" + Drupal.t('Privacy Policy') + "</a></li></ul><p>&copy; 2020, " + Drupal.t('Zoho Corporation Pvt. Ltd. All Rights Reserved.') + "</p></div></div></div></section></div>";
            jQuery('.footer-wrapper footer').append(footer);
            jQuery('.common-links:before').css("background", "none");
        }
    }
});

/****************************************Footer Content Ends***************************************/

var scriptCheck = 0;
var countryCodeArr = countryEu;

function checkIpAppend() {
    for (var i = 0; i < $('script').length; i++) {
        if ($('script').eq(i).attr('src') == 'https://www.zoho.com/js/ipcallback.js') {
            scriptCheck++;
        }
    }
    if (scriptCheck == 0) {
        EuRedirection();
    }
}

function ipLoaded() {
    clearInterval(ipIntervalTime)
    EuRedirection();
}

function langStrip() {
    var gotoCountry = CountryCode.toLowerCase();
    (CountryCode.toLowerCase() == 'br') ? (gotoCountry = 'pt-br') : '';
    var countryLatin = ['ES', 'AR', 'BO', 'CL', 'CO', 'EC', 'GF', 'PY', 'PE', 'SR', 'UY', 'VE', 'MX'];
    (countryLatin.indexOf(CountryCode) > -1) ? (gotoCountry = 'es-xl') : '';

    var _ele = document.getElementsByTagName('body')[0].getAttribute("data-lang-list");
    if ((_ele != null && _ele != 'undefined') || detectedLangNew != '') {
        if (detectedLangNew == '') {
            //console.log('from template =  '+detectedLangNew);
            detectedLangNew = document.getElementsByTagName('body')[0].getAttribute('data-lang-list').split(',');
        }
        var detectedLang = [];
        for (var i = 0; i < detectedLangNew.length; i++) {
            if (langArr.indexOf(detectedLangNew[i]) > -1) {
                var _x = langArr[langArr.indexOf(detectedLangNew[i])];
                if (_x != 'en' && _x != 'jp') {
                    detectedLang.push(langArr[langArr.indexOf(detectedLangNew[i])]);
                }
            }
        }
        
        var _loaded = localStorage.getItem('zloaded') == '1';
        try { } catch (err) { _loaded = true; }
        if ((detectedLang.indexOf(gotoCountry) > -1 || gotoCountry == 'ae' || gotoCountry == 'sa') && window.location.pathname.split('/')[1] != gotoCountry && !_loaded) {
            if (gotoCountry != 'ar') {
                var _txt = '',
                    _btnTxt = '',
                    _lo = window.location.href,
                    _val = '';
                /*(lancountry[gotoCountry] != 'undefined') ? (_val = lancountry[gotoCountry]) : _val = '';
                _txt = Drupal.t('Now you can navigate ')+_val+'!';
                _btnTxt =Drupal.t('Hello');*/
                if (gotoCountry == 'fr') {
                    _txt = 'Vous pouvez maintenant naviguer en français!';
                    _btnTxt = 'Bonjour';
                } else if (gotoCountry == 'de') {
                    _txt = 'Sie k&ouml;nnen diese Seite jetzt auf Deutsch anzeigen!';
                    _btnTxt = 'Hallo';
                } else if (gotoCountry == 'pt-br') {
                    _txt = 'Agora você pode navegar em português!';
                    _btnTxt = 'Olá';
                } else if (gotoCountry == 'es-xl') {
                    _txt = '¡Ahora puede navegar en español!';
                    _btnTxt = 'Hola';
                } else if (gotoCountry == 'nl') {
                    _txt = 'Nu kun je navigeren';
                    _btnTxt = 'Hallo';
                } else if (gotoCountry == 'ae' || gotoCountry == 'sa') {
                    _txt = "الآن يمكنك التنقل";
                    _btnTxt = "مرحبا";
                }
                if (_btnTxt != '' && window.location.pathname.indexOf('/in/') < 0) {
                    $('.ztopstrip-container').append('<div class="langstrip"><span class="langTxt">' + _txt + '</span><span class="langBtn">' + _btnTxt + '</span><span class="langClose">X</span></div>');
                    $('.langstrip').css('display', 'block');
                    $('.langstrip .langClose').on('click', function () {
                        try {
                            localStorage.setItem('zloaded', '1');
                        } catch (err) { console.log('catch');}
                        $('.langstrip').remove();
                    });

                    $('.langstrip .langBtn').on('click', function () {
                        if (gotoCountry == 'ae' || gotoCountry == 'sa') {
                            gotoCountry = 'ar';
                        }
                        if (currentUrlLang == '') {
                            _lo = _lo.split(window.location.host).join(window.location.host + '/' + gotoCountry);
                        } else {
                            _lo = _lo.split('/' + currentUrlLang + '/').join('/' + gotoCountry + '/');
                        }
                        window.location = encodeURI(_lo);
                        try {
                            localStorage.setItem('zloaded', '1');
                        } catch (err) { }
                    });
                }
            }
        }
    }
}

function coockieStrip() {
    if ($('.cookiestrip').length < 1) {
        var cookieStorage = localStorage.getItem('coockiechecked') == '1';
        if (!cookieStorage) {
            var _txt = Drupal.t('We use cookies to help us understand and serve you better. Take a look at our ') + '<a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html" target="_blank">' + Drupal.t('Cookie Policy') + '.</a>';
            $('body').prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + _txt + '</span><a class="cookieManage" href="'+langsrc+'privacy/cookie-policy.html?src=manage" target="_blank">' + Drupal.t('Manage') + '</a><span class="cookieClose">' + Drupal.t('OK') + '</span></div></div>');
            $('body').addClass('zcstrip');
            $('.cookieClose').on('click', function () {
                try {
                    localStorage.setItem('coockiechecked', '1');
                } catch (err) { }
                $('body').removeClass('zcstrip');
                $('.cookiestrip').remove();
            });
        }
    }
}

function EuRedirection() {
    if (typeof CountryCode != 'undefined') {
        if (countryEu.indexOf(CountryCode) > -1) {
            if (!$('body').hasClass('ccode-eucountries')) {
                var _element = document.getElementsByTagName('body')[0];
                _element.classList.add("ccode-eucountries");
            }
        }
    }
    if ((currentUrlLang != '' && currentUrlLang != 'en') || domainOne == "com.cn") {
        if (!$('body').hasClass('other-lang')) {
            var _element = document.getElementsByTagName('body')[0];
            _element.classList.add("other-lang");
        }
        if (!$('body').hasClass('lang-' + currentUrlLang)) {
            var _element = document.getElementsByTagName('body')[0];
            if (domainOne == "com.cn") {
                _element.classList.add("lang-zh-hans");
            } else {
                _element.classList.add("lang-" + currentUrlLang);
            }
        }
    } else {
        if (!$('body').hasClass('lang-en')) {
            var _element = document.getElementsByTagName('body')[0];
            _element.classList.add("lang-en");
        }
    }
}

//  EU Redirection End  //




function testimonialHeight() {
    var _height, _getHeight;
    _height = 0;
    $('.z-testimonial-head').removeAttr('style');
    $('.z-testimonial-head').find('h4').each(function () {
        _getHeight = $(this).innerHeight();
        if (_getHeight > _height) {
            _height = _getHeight;
        }
    });
    $('.z-testimonial-head').height(_height);
    $('.z-testimonial-head').find('h4').removeAttr('style');
    $('.z-testimonial-head').removeClass('active');
    $('.z-testimonial-head').find('h4').each(function () {
        $(this).height($(this).innerHeight());
    });
    $('.z-testimonial-head').addClass('active');
}

/*SET EQUAL HEIGHT FOR TESTIMONIAL HEAD*/
if ($('.z-testimonial-item').length > 1) {
    testimonialHeight();
}
/*SET EQUAL HEIGHT FOR TESTIMONIAL HEAD*/

/* change href links as per the language */

function languageredirect() {
    if (window.location.hostname.indexOf('.cn') > 0 || currentUrlLang == 'zh-hans') {

    } else {
        $('.cookie-policy').css('display', 'inline-block');
        if (typeof CountryCode != 'undefined') {
            if (domainOne != "in") {
                langStrip();
            }
            if (countryEu.indexOf(CountryCode) > -1 || domainOne == "eu") {
                coockieStrip();
            }
        }
        if (domainOne != "in") {
            //if (currentUrlLang != 'jp') {
                if (typeof $('body').attr('data-lang-list') == 'string' || detectedLangNew != '') {
                    if (detectedLangNew == '') {
                        //console.log('from template =  '+detectedLangNew);
                        detectedLangNew = $('body').attr('data-lang-list').split(',');
                    }
                    var detectedLang = [];
                    for (var i = 0; i < langArr.length; i++) {
                        if (detectedLangNew.indexOf(langArr[i]) > -1) {
                            detectedLang.push(langArr[i])
                        }
                    }
                    if(domainOne == 'com'){
                        (detectedLangNew.indexOf('ja') > -1) ? detectedLang.push('jp') : '';
                    }
                    //var detectedLang = ['en','fr','de','es-xl','pt-br'];
                    var _com = 'com',
                        _eu = 'eu';
                    var nolangvar = true;
                    if(detectedLang.length == 1 && detectedLang[0] == currentUrlLang){
                        nolangvar = false;
                    }
                    if(detectedLang.length == 1 && detectedLang[0] == 'en'){
                        nolangvar = false;
                    }
                    if (detectedLang.length > 0 && nolangvar) {
                        var _val = 'English';
                        (currentUrlLang != '') ? (_val = lancountry[currentUrlLang]) : '';
                        if (detectedLang.indexOf(window.location.pathname.split('/')[1]) < 0) {
                            (detectedLang.indexOf('en') > -1) ? detectedLang.splice(detectedLang.indexOf('en'), 1) : '';
                        } else {
                            detectedLang.splice(detectedLang.indexOf(window.location.pathname.split('/')[1]), 1);
                            //_val = window.location.pathname.split('/')[1]
                        }
                        var _apElm = '<div class="zlang-container"><span class="zlang-text">' + _val + '</span><div class="zlang-container-inner" style="display: none;"><ul></ul></div></div>'

                        if($('.ZF-dlsel').length){
                            $('.ZF-dlsel').append(_apElm);
                        }else{
                            $('.common-links').append(_apElm);
                        }
                        $('.header .signing').after(_apElm);
                    
                        if (typeof CountryCode != 'undefined') {
                            if (countryEu.indexOf(CountryCode) > -1) {
                                $('.zlang-container').addClass('lang-domain-show')
                            }
                        }
                        $('.zgh-localBox ul').html('');
                        if(detectedLang.length == 1){
                            $('.zgh-localBox, .zlang-container-inner').addClass('localBox-single');
                        }
                        for (var i = 0; i < detectedLang.length; i++) {
                            if (langArr.indexOf(detectedLang[i]) > -1 || (detectedLang[i] == 'en' && langArr.indexOf(detectedLang[i]) < 0) || (detectedLang[i] == '.com' && langArr.indexOf(detectedLang[i]) < 0) || (detectedLang[i] == '.eu' && langArr.indexOf(detectedLang[i]) < 0)) {
                                var _langCountry = 'English';
                                if (langArr.indexOf(detectedLang[i]) > -1) {
                                    _langCountry = lancountry[detectedLang[i]];
                                }
                                var _myClass = '';
                                if (detectedLang[i] == '.com') {
                                    _langCountry = 'zoho.' + _com;
                                    _myClass = 'class="lang-domain"';
                                } else if (detectedLang[i] == '.eu') {
                                    _langCountry = 'zoho.' + _eu;
                                    _myClass = 'class="lang-domain"';
                                }

                                if (_langCountry == 'zoho.' + _eu || _langCountry == 'zoho.' + _com) { _myClass = 'class="lang-domain"'; }

                                if (onlylocal.indexOf(detectedLang[i]) > -1) {
                                    if (window.location.host == _preZ || window.location.host == _zcmsZC) {
                                        if (detectedLang[i] == 'ar') {
                                            if (($('body').hasClass('node-type-zoho-home') || window.location.href.indexOf('/crm/') > 0 || window.location.href.indexOf('/crmplus/') > 0 || window.location.href.indexOf('/one/') > 0 || window.location.href.indexOf('/people/') > 0 || window.location.href.indexOf('/workplace/') > 0 || window.location.href.indexOf('/mail/') > 0) && (window.location.host == (_preZ) || window.location.host == _zcmsZC)) {
                                                $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a data-lang="'+detectedLang[i]+'" href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                            }
                                        } else {
                                            $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a data-lang="'+detectedLang[i]+'" href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                        }
                                    }
                                } else {
                                    if($('.latam-other-lang').length > 0){
                                        if(i == 0){
                                            $('.latam-other-lang').append('<div class="zgh-localization init"><span class="zgh-localSelect">'+_val+'</span> <div class="zgh-localBox"> <ul> </ul> </div> </div>');
                                        }
                                    }
                                    $('.zlang-container-inner ul, .zgh-localBox ul').append('<li ' + _myClass + '><a data-lang="'+detectedLang[i]+'" href="' + movelocation(detectedLang[i]) + '">' + _langCountry + '</a></li>');
                                }
                            }
                        }
                        $('.zgh-localization').addClass('init');

                        $('.zlang-text').show();
                        $('.overMe, .zlang-container').on('mouseover', function () {
                            $(this).children('.zlang-container-inner').show();
                        });
                        $('.overMe, .zlang-container').on('mouseout', function () {
                            $(this).children('.zlang-container-inner').hide();
                        });
                        
                        $('.zlang-container').on('click', function (e) {
                            if(!$(this).children('.zlang-container-inner').hasClass('show')){
                                $(this).children('.zlang-container-inner').removeClass('hide').addClass('show');
                                $(this).children('.zlang-container-inner').show();
                            }else{
                                $(this).children('.zlang-container-inner').removeClass('show').addClass('hide');    
                                $(this).children('.zlang-container-inner').hide();
                            }
                        });
                    }

                }
            //}
        }
        if ($('.ZF-contact .zlang-container').length == 0) {
            $('.ZF-contact ul li').eq(1).hide();
        }
    }
}

function movelocation(a) {
    var _loation = window.location.href;
    var HrefLink = '';
    if (a == '.com') {
        var v = '?rdc';
        if (window.location.href.indexOf('?rdc') > -1) { v = ''; }
        HrefLink = encodeFun(window.location.origin.split('eu').join('com') + window.location.href.split(window.location.origin)[1] + v)
    } else if (a == '.eu') {
        HrefLink = encodeFun(window.location.origin.split('com').join('eu') + window.location.href.split(window.location.origin)[1])
        if (HrefLink.indexOf('?rdc') > 0) { HrefLink = encodeURI(HrefLink.split('?rdc').join('')); }
    } else {
        if (langArr.indexOf(window.location.pathname.split('/')[1]) > -1) {
            _loation = '/' + window.location.href.split('/' + langArr[langArr.indexOf(window.location.pathname.split('/')[1])] + '/')[1];
        } else {
            _loation = _loation.split(window.location.host)[1];
        }
        (a == 'en') ? (HrefLink = encodeFun(window.location.href.split(window.location.pathname)[0] + _loation)) :
            (HrefLink = encodeFun(window.location.href.split(window.location.pathname)[0] + '/' + a + '' + _loation));
        if (HrefLink.indexOf('?rdc') > 0) { HrefLink = encodeURI(HrefLink.split('?rdc').join('')); }
    }
    //window.location = HrefLink;
    return encodeURI(HrefLink);
}

$(document).ready(function (e) {
    $('.header .logo, .header-part .logo').attr('href', langsrc);
    if (productName == 'zohoorchestly' || productName == 'bigin') {
        $('.header .logo, .header-part .logo').attr('href', 'https://www.zoho.' + domainOne + langsrc);
    }

    function resetLangUrl() {
        if (langArr.indexOf(currentUrlLang) > -1) {
            for (var i = 0; i < $('body a').length; i++) {
                if ($('body a').eq(i).attr('href') != 'undefined' && $('body a').eq(i).attr('href') != null && $('body a').eq(i).attr('href') != '') {
					var _cOne = ($('body a').eq(i).attr('href').split('/').indexOf('help') < 0);
                    var _cOnee = ($('body a').eq(i).attr('href').split('/').indexOf('newhelp') < 0);
                    var _cTwo = ($('body a').eq(i).attr('href').indexOf('/userguide/') < 0);
                    var _cThree = ($('body a').eq(i).attr('href').indexOf('/resources/') < 0);
                    var _cFour = ($('body a').eq(i).attr('href').indexOf('/resources.html') < 0);
                    var _cFive = ($('body a').eq(i).attr('href').indexOf('blog') < 0);
                    var _cSix = window.location.href != 'https://www.zoho.com/assist/lp/demo-registration.html?src=pricing-faq';
                    var _cSeven = ($('body a').eq(i).attr('href').indexOf('.pdf') < 0);
                    var _cEight = ($('body a').eq(i).attr('href').indexOf('.exe') < 0);
                    var _cNine = ($('body a').eq(i).attr('href').indexOf('/get-support-plugin.html') < 0);
                    var _cTen = ($('body a').eq(i).attr('href').indexOf('/demo-registration.html') < 0);
                    var _cOneOne = ($('body a').eq(i).attr('href').indexOf('/extension/zoho-assist.xpi') < 0);
                    var _cOneTwo = ($('body a').eq(i).attr('href').indexOf('/books/') < 0);
                    var _cOneThree = ($('body a').eq(i).attr('href').indexOf('/expense/') < 0);
                    var _cOneFour = ($('body a').eq(i).attr('href').indexOf('/invoice/') < 0);
                    var _cOneFive = ($('body a').eq(i).attr('href').indexOf('/subscriptions/') < 0);
                    var _cOneSix = ($('body a').eq(i).attr('href').indexOf('/inventory/') < 0);
                    var _cOneSeven = ($('body a').eq(i).attr('href').indexOf('/checkout/') < 0);
                    var _cOneEight = ($('body a').eq(i).attr('href').indexOf('/gst/') < 0);
                    var _cOneNine = ($('body a').eq(i).attr('href').indexOf('recruit/referrals.html') < 0);
                    var _cOneTen = ($('body a').eq(i).attr('href').indexOf('.deb') < 0);
                    var _cTwoOne = ($('body a').eq(i).attr('href').indexOf('https://www.zoho.com/campaigns/contact-us.html') < 0);
                    var _cTwoTwo = ($('body a').eq(i).attr('href').indexOf('https://www.zoho.com/survey/education-discount.html') < 0);
                    var _cTwoThree = ($('body a').eq(i).attr('href').indexOf('https://www.zoho.com/developer/signup.html') < 0);
                    var _cTwoFour = ($('body a').eq(i).attr('href').indexOf('reports/onpremise/eula.html') < 0);
                    var _cTwoFive = ($('body a').eq(i).attr('href').indexOf('reports/onpremise/get-quote.html') < 0);
                    var _cTwoSix = ($('body a').eq(i).attr('href').indexOf('cliq/developers/terms.html') < 0);
                    var _cTwoSeven = ($('body a').eq(i).attr('href').indexOf('/developer/') < 0);
                    var _cTwoEight = ($('body a').eq(i).attr('href').indexOf('/creator/request-quote.html') < 0);
                    var _cTwoNine = ($('body a').eq(i).attr('href').indexOf('/sprints/contact.html') < 0);
                    var _cTwoTen = ($('body a').eq(i).attr('href').indexOf('/backstage/contact.html') < 0);
                    var _cThreeOne = ($('body a').eq(i).attr('href').indexOf('https://www.zoho.com/teamdrive/contact.html') < 0);
                    var _cThreeOnee = ($('body a').eq(i).attr('href').indexOf('https://www.zoho.com/workdrive/contact.html') < 0);
                    var _cThreeTwo = ($('body a').eq(i).attr('href').indexOf('webinars.html') < 0);
                    var _cThreeThree = ($('body a').eq(i).attr('href').indexOf('analytics/onpremise/get-quote.html') < 0);
                    var _cThreeFour = ($('body a').eq(i).attr('href').indexOf('/workdrive/contact.html') < 0);
                    var _cThreeFive = true;
                    if (domainOne == "com.cn") {
                        _cThreeFive = false;
                    }
                    if (productName == 'crm' && (currentUrlLang == 'fr' || currentUrlLang == 'de' || currentUrlLang == 'pt-br' || currentUrlLang == 'es-xl')) {
                        _cOne = true;
                        _cThree = true;
                        _cTwoSeven = true;
                    }
                    var _cThreeSix = ($('body a').eq(i).attr('href').indexOf('.zip') < 0);
                    var _cThreeSeven = ($('body a').eq(i).attr('href').indexOf('become-a-partner') < 0);
                    var _cThreeEight = ($('body a').eq(i).attr('href').indexOf('creator/developers/find-a-developer.html') < 0);
                    var _cThreeNine = ($('body a').eq(i).attr('href').indexOf('campaigns/email-marketing-demo.html') < 0);
                    var _cThreeTen = ($('body a').eq(i).attr('href').indexOf('marketinghub/marketing-automation-demo.html') < 0);
                    var _cFourOne = ($('body a').eq(i).attr('href').indexOf('sign/legal-guide.html') < 0);
                    var _cFourTwo = ($('body a').eq(i).attr('href').indexOf('marketinghub/request-quote.html') < 0);
                    var _cFourFive = ($('body a').eq(i).attr('href').indexOf('.rpm') < 0);
                    var _cFourSix = ($('body a').eq(i).attr('href').indexOf('schedule-your-instagram-posts-on-zoho-social.html') < 0);
                    var _cFourSeven = ($('body a').eq(i).attr('href').indexOf('people/request-quote.html') < 0);
                    var _cFourEight = ($('body a').eq(i).attr('href').indexOf('forms/integrations/zoho-campaigns.html') < 0);
                    var classCheck = (!$('body a').eq(i).hasClass('nonlang'));
                    
                    if (_cOne && _cOnee && _cTwo && _cThree && _cFour && _cFive && _cSix && _cSeven && _cEight && _cNine && _cTen && _cOneOne && _cOneTwo && _cOneThree && _cOneFour && _cOneFive && _cOneSix && _cOneSeven && _cOneEight && _cOneNine && _cOneTen && _cTwoOne && _cTwoTwo && _cTwoThree && _cTwoFour && _cTwoFive && _cTwoSix && _cTwoSeven && _cTwoEight && _cTwoNine && _cTwoTen && _cThreeOne && _cThreeTwo && _cThreeThree && _cThreeFour && _cThreeOnee && _cThreeFive && _cThreeSix && _cThreeSeven && _cThreeEight && _cThreeNine && _cThreeTen && _cFourOne && _cFourTwo && _cFourFive && _cFourSix && _cFourSeven && classCheck && _cFourEight) {
                        if ($('body a').eq(i).attr('href').split('/')[1] == productName) {
                            var _hRef = encodeURI('/' + currentUrlLang + $('body a').eq(i).attr('href'));
                            $('body a').eq(i).attr('href', _hRef);
                        } else if ($('body a').eq(i).attr('href').split('/')[2] == 'www.zoho.com') {
                            if ((allProductlowerCase.indexOf($('body a').eq(i).attr('href').split('/')[3]) > -1)) {
                                var _hRef = encodeURI('https://www.zoho.com/' + currentUrlLang + $('body a').eq(i).attr('href').split('www.zoho.com')[1]);
                                $('body a').eq(i).attr('href', _hRef);
                            }
                        } else if ($('body a').eq(i).attr('href').split('/')[2] == 'www.zoho.com') {
                            if (allProductlowerCase.indexOf($('body a').eq(i).attr('href').split('/')[3]) > -1) {
                                var _hRef = encodeURI('https://www.zoho.com/' + currentUrlLang + $('body a').eq(i).attr('href').split('www.zoho.com')[1]);
                                $('body a').eq(i).attr('href', _hRef);
                            }
                        } else if (window.location.pathname == "/gdpr.html" || window.location.pathname == "/privacy.html" || window.location.pathname == "/terms.html" || window.location.pathname == "/policy.html" || window.location.pathname == "/ipr-complaints.html" || window.location.pathname == "/security.html") {
                            var _hRef = encodeURI('https://www.zoho.com/' + currentUrlLang + $('body a').eq(i).attr('href').split('www.zoho.com')[1]);
                            $('body a').eq(i).attr('href', _hRef);
                        } else if ($('body a').eq(i).attr('href') == '/privacy.html' || $('body a').eq(i).attr('href') == '/security.html') {
                            var _hRef = encodeURI('/' + currentUrlLang + $('body a').eq(i).attr('href'));
                            $('body a').eq(i).attr('href', _hRef);
                        }
                    }
                    if ($('body a').eq(i).attr('href').indexOf('help') > -1 || $('body a').eq(i).attr('href').indexOf('blog') > -1) {
                        $('body a').eq(i).attr('target', '_blank');
                        if ($('body a').eq(i).attr('href').split('/' + currentUrlLang + '/') > -1) {
                            var _hRef = encodeURI($('body a').eq(i).attr('href').split.split('/' + currentUrlLang + '/').join('/'));
                            $('body a').eq(i).attr('href', _hRef);
                        }
                    }
                }
            }
        }
    }

    resetLangUrl();
});

/* change href links as per the language End */

var intervalCount = 0;

function CheckelEment() {
    var runintervl = setTimeout(function () {
        if ($('.zgdprform-countrylist-container').length > 0) {
            var gdprElm = document.createElement("script");
            gdprElm.type = "text/javascript";
            if(window.location.host == _preZ){
                gdprElm.src = "https://www.zoho.com/js/gdpr-compliance-pre.js";
			}else{
                gdprElm.src = "https://www.zoho.com/js/gdpr-compliance.js";
			}
            document.getElementsByTagName('head')[0].appendChild(gdprElm);
            clearInterval(runintervl);
        } else {
            intervalCount++;
            if (intervalCount < 50) {
                CheckelEment();
            }
        }
    }, 500);
}
var intervalSignupCount = 0;

function CheckelEmentSignup() {
    var runintervlSignup = setTimeout(function () {
        if ($('.signup-box form').length > 0) {
            if ($('.za-captcha-container').length > 0) {
                if ($('.za-country-container').length < 1) {
                    $('.za-captcha-container').after('<div class="za-country-container za-country-container-arrow"> <select class="form-input countryCnt za-country-select globalcountrycode-signup" name="country" id="country" placeholder="Select Country" aria-invalid="false"></select> </div>');
                    //$('.za-country-container').hide();
                }

                if ($('.za-newsletter-container').length > 0) {
                    $('.za-newsletter-container').html('<label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium unchecked" id="signup-newsletter"></span> <span>' + _txtIwould + '</span> </label>');
                    $('.za-newsletter-container').css('display', 'none');
                }
            }
            var gdprElm = document.createElement("script");
            gdprElm.type = "text/javascript";
            gdprElm.src = "https://www.zoho.com/js/gdpr-compliance-signup-new.js";
            if(window.location.host == _preZ){
                gdprElm.src = "https://www.zoho.com/js/gdpr-compliance-signup-new-pre.js";
            }
            document.getElementsByTagName('head')[0].appendChild(gdprElm);
            clearInterval(runintervlSignup);
        } else {
            intervalSignupCount++;
            if (intervalSignupCount < 500) {
                CheckelEmentSignup();
            }
        }
    }, 1);
}
$(document).ready(function () {
    if (typeof CheckelEment == 'function') {
        CheckelEment();
    }
    if (typeof CheckelEmentSignup == 'function') {
        CheckelEmentSignup();
    }
});

/* Access button click */
$(document).on("click", ".umain .cta-btn.logged-in, .userinfo-details .userinfo-access", function (e) {
    if ($(this).attr('href').indexOf("_ga")) {
        e.preventDefault();
        window.location = $(this).attr('href').split('?_ga')[0];
    }
});


/***********Dropdown Starts***********/
function dropEqualHei() {
    var wW = $(window).width();
    if (wW > 767) {
        $('.dropdown ul').css({ 'height': '', 'width': '' });
        $('.dropdown').each(function () {
            var that = $(this);
            var widInnerSub = 0;
            that.find('.sub-dropdown').each(function () {
                var thatChild = $(this);
                thatChild.find('> li > a').each(function () {
                    var thatInnerChild = $(this);
                    if (thatInnerChild.innerWidth() > widInnerSub) {
                        widInnerSub = thatInnerChild.innerWidth();
                    }
                });
            });
            that.find('.sub-dropdown').css({ 'width': widInnerSub });
            var dropDownMenuHt=0;
            that.find('.dropdown-menu').each(function () {
                var thatChild = $(this);
                var wid = 0;
                thatChild.find('> li > a').each(function () {
                    var thatInnerChild = $(this);
                    if (thatInnerChild.innerWidth() > wid) {
                        wid = thatInnerChild.innerWidth();
                    }
                });
                thatChild.css({ 'width': wid });
                dropDownMenuHt=$(this).outerHeight();
            });
            var hei = 0;
            that.find('ul').each(function () {
                var thatChild = $(this);
                if (thatChild.height() > hei) {
                    hei = thatChild.height();
                }
            });
            that.find('ul').not('.dropdown-menu').css({ 'min-height': dropDownMenuHt });
        });
    } else {
        $('.dropdown ul').css({ 'height': '', 'width': '' });
    }
    dropRight();    
}

function dropRight() {
    var wW = $(window).width();
    if (wW > 767) {
        $('.dropdown-menu').each(function () {
            var element = $(this);
            var offRight = (wW - (element.offset().left + element.outerWidth()));
            if (offRight < 20) {
                element.closest('.dropdown').addClass('dropdown-right');
            }
        });
        $('.sub-dropdown').each(function () {
            var element = $(this);
            var offRight = (wW - (element.offset().left + element.outerWidth()));
            if (offRight < 20) {
                element.closest('.dropdown').addClass('subdropdown-right');
            }
        });
    }
}

function productMenuEvents() {
    var wW = $(window).outerWidth();
    if (wW > 767) {
        $('.dropdown,.hamburger-box').removeClass('active');
        $('.dropdown-menu').removeAttr('style');
        $(document).off('touchstart click', '.dropdown > a,.dropdown > span');
        if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            var selectEvents = (function () {
                if ('ontouchstart' in document.documentElement === true)
                    return 'touchstart';
                else
                    return 'click';
            })();
            $(document).on('click', '.dropdown > span,.dropdown > a', function (e) {
                e.stopImmediatePropagation();
                var that = $(this);
                if (!that.parent().hasClass('active')) {
                    //$('.dropdown').removeClass('dropdown-right subdropdown-right');
                    $('.dropdown,.dropdown-menu li,.sub-dropdown').removeClass('active');
                    $('.sub-dropdown li').removeAttr('style');
                    that.parent().addClass('active');
                    dropRight();
                } else {
                    $('.dropdown,.dropdown-menu li,.sub-dropdown').removeClass('active');
                    $('.sub-dropdown li').removeAttr('style');
                }
                return false;
            });
        } else {
            $(document).on('mouseenter', '.dropdown', function (e) {
                e.stopImmediatePropagation();
                var that = $(this);
                that.addClass('active');
                dropRight();
            });
            $(document).on('mouseleave', '.dropdown', function (e) {
                e.stopImmediatePropagation();
                var that = $(this);
                that.removeClass('active');
                $('.dropdown-menu li,.sub-dropdown').removeClass('active');
                $('.sub-dropdown li').removeAttr('style');
            });
        }
        var trans = 0;
        $(document).on('mouseenter touchstart', '.dropdown-menu > li', function (e) {
            e.stopImmediatePropagation();
            var that = $(this);
            $('.dropdown-menu li,.sub-dropdown').removeClass('active');
            $('.sub-dropdown li').removeAttr('style');
            that.addClass('active');
            that.find('.sub-dropdown').addClass('active');
            that.find('.sub-dropdown li').each(function () {
                var thatElm = $(this);
                thatElm.css('transition-delay', trans + 'ms');
                trans = trans + 100;
            });
            trans = 0;
        });
        //if (!/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('body').on(selectEvents, function (e) {
                var container = $('.dropdown');
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    $('.dropdown,.dropdown-menu li,.sub-dropdown').removeClass('active');
                    $('.sub-dropdown li').removeAttr('style');
                }
            });
        //}
    } else {
        $(document).off('mouseenter', '.dropdown');
        $(document).off('mouseleave', '.dropdown');
        $(document).off('mouseenter touchstart', '.dropdown-menu > li');
        $('.dropdown,.hamburger-box').removeClass('active');
        $('.dropdown-menu,.sub-dropdown').removeAttr('style');
    }
}
$(document).ready(function () {
    $('.mobile-menu-icon').on('click', function () {
        var that = $(this);
        if (that.find('.hamburger-box').hasClass('active')) {
            that.find('.hamburger-box').removeClass('active');
            $('.dropdown').removeClass('active');
            $('.dropdown-menu').removeAttr('style');
        } else {
            that.find('.hamburger-box').addClass('active');
        }
        if ($(this).attr('data-click') == "zhb-click-track") {
            window.pagesense = window.pagesense || [];
            window.pagesense.push(['trackEvent', 'menu-click']);
        }


    });
    $('.mobile-menu-icon').append('<span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span>');
    dropEqualHei();
    productMenuEvents();
});
var mobileWidth = $(window).innerWidth();
$(window).on('resize', function () {
    dropEqualHei();
    if ($(window).innerWidth() != mobileWidth) {
        productMenuEvents();
        mobileWidth = $(window).innerWidth();
    }
});
$(window).on('load', function () {
    dropEqualHei();
});
/***********Dropdown Ends***********/

function checkIE() {
    if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
        $('body').addClass('IE');
    }
}

function czonevideoModal() {
    if ($('.zcpopup-controller').length > 0) {
        var videoTemplate =
            '<div class="zc-video-modal"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"></div></div></div></div>';
        $('body').append(videoTemplate);
    }
    $(document).on('click', '.zcpopup-controller', function(e) {
        e.preventDefault()
        var thatObj = $(this);
        if (thatObj[0].hasAttribute('data-iframe')) {
            var iframeURL = thatObj.data('iframe');
            $('body').addClass('zclock');
            $('.zc-video-modal').fadeIn();
            $('.zc-video-box .zc-video-iframe').remove();
            $('.zc-video-box').append('<iframe src="' + iframeURL + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>');
            $('.zc-video-modal').addClass('zc-iframe-box');
            setTimeout(function() {
                $('.zc-video-modal').addClass('click-out');
            }, 500);
        } else {
            var videoURL = thatObj.data('video');
            var videoControl = '';
            if (videoURL.indexOf('vimeo') > 0) {
                  var videoControl = "?muted=1&autoplay=1";
            }else {
                 var videoControl = "?rel=0&autoplay=1&showinfo=0&autohide=1&mute=1";
            }
            (videoURL.indexOf('showtime.zoho.com') > -1) ? videoControl = '': '';
            /*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.open(videoURL + videoControl, '_blank');
            } else {*/
                $('body').addClass('zclock');
                $('.zc-video-modal').fadeIn();
                $('.zc-video-box .zc-video-iframe').remove();
                $('.zc-video-box').append('<iframe src="' + videoURL + videoControl + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>');
                $('.zc-video-modal').addClass('zc-media-box');
                setTimeout(function() {
                    $('.zc-video-modal').addClass('click-out');
                }, 500);
            //}
        }
        return false;
    });

    function vidClose() {
        $('.zc-video-modal').fadeOut();
        $('body').removeClass('zclock');
        $('.zc-video-iframe').remove();
        $('.zc-video-modal').removeClass('click-out zc-iframe-box zc-media-box');
    }
    $(document).on('click', '.zc-video-close', function() {
        vidClose()
    });
    $(document).on('click', '.click-out', function() {
        vidClose()
    });
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            vidClose()
        }
    });
}

$(window).on('load', function () {
    if ($('.zc-video-modal').length == 0) {
        czonevideoModal();
    }
});

$(document).ready(function (e) {
    checkIE();
    czonevideoModal();
});

if(!$('body').hasClass('node-type-zoho-home')){
    var zchf = document.createElement('script');
	if(predomain){
        zchf.src = "/sites/all/themes/zoho/scripts/zc-headerfooter.js";
    }else{
        zchf.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zc-headerfooter.js";
    }
    document.getElementsByTagName('head')[0].appendChild(zchf);
}

if($('.zoholics-global-container').length>0){
var zoholics_global = document.createElement('script');
	if(predomain){
        zoholics_global.src = "/sites/all/themes/zoho/scripts/zoholics-banner.js";
    }else{
        zoholics_global.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zoholics-banner.js";
    }
    document.getElementsByTagName('head')[0].appendChild(zoholics_global);
}
if($('.zpricegroup-common').length>0 || $('.zpricegroup-common-sl').length>0){
    var zcprice = document.createElement('script');
	if(predomain){
        zcprice.src = "/sites/all/themes/zoho/scripts/zc-pricing.js";
    }else{
        zcprice.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/zc-pricing.js";
    }
    document.getElementsByTagName('head')[0].appendChild(zcprice);
}

if(currentUrlLang == 'nl' || currentUrlLang == 'fr' || currentUrlLang == 'de'){
	var transjs = document.createElement('script');
	if(predomain){
		transjs.src = "/sites/all/themes/zoho/scripts/transfeedback.js";
	}else{
		transjs.src = "https://www.zohowebstatic.com/sites/all/themes/zoho/scripts/transfeedback.js";
	}
	document.getElementsByTagName('head')[0].appendChild(transjs);
	
	var transcss = document.createElement('link');  
	transcss.rel = 'stylesheet';  
	transcss.type = 'text/css'; 
	if(predomain){
		transcss.href = "/sites/all/themes/zoho/css/transfeedback.css";
	}else{
		transcss.href = "https://www.zohowebstatic.com/sites/all/themes/zoho/css/transfeedback.css";
	} 
	document.getElementsByTagName('head')[0].appendChild(transcss);
}


/*  single scroll code */
customvar.singlescroll = false;
customvar.sscount = 0;
customvar.maxcount = 5;
if(window.location.hostname == _preZ){
    $('body').on('mousewheel DOMMouseScroll', function(e){
        if($('body').attr('scrolled') != '1' && customvar.singlescroll){
            if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
                if(e.originalEvent.detail > 0) {
                    customvar.sscount++;
                } else if(e.originalEvent.detail < 0){
                    customvar.sscount--;
                }
            } else if (typeof e.originalEvent.wheelDelta == 'number') {
                if(e.originalEvent.wheelDelta < 0) {
                    customvar.sscount++;
                } else if(e.originalEvent.wheelDelta > 0) {
                    customvar.sscount--;
                }
            }
            (customvar.sscount < 0)?customvar.sscount=0:''; 
            (customvar.sscount > customvar.maxcount)?customvar.sscount=customvar.maxcount :''; 
            $('body').attr('scrolled', '1');
            setTimeout(function(){
                $('body').attr('scrolled', '0');
            }, 2000);
        }
    });
}
/*$('body').append('<span class="zaccordion"> <span> <h4 class="zmain">heading1</h4> <ul> <li> <span> <h4 class="zin">heading3</h4> <ul> <li>text 1</li> <li>text 2</li> <li>text 3</li> <li>text 4</li> <li>text 5</li> <li>text 6</li> <li>text 7</li> </ul> </span> </li> <li><span> <h4 class="zin">heading3</h4> <ul> <li>text 1</li> <li>text 2</li> <li>text 3</li> <li>text 4</li> <li>text 5</li> <li>text 6</li> <li>text 7</li> </ul> </span></li> <li>text 3</li> <li>text 4</li> <li>text 5</li> <li>text 6</li> <li>text 7</li> </ul> </span> <span> <h4 class="zmain">heading2</h4> <ul> <li>text 1</li> <li>text 2</li> <li>text 3</li> <li>text 4</li> <li>text 5</li> <li>text 6</li> <li>text 7</li> </ul> </span> <span> <h4 class="zmain">heading3</h4> <ul> <li>text 1</li> <li>text 2</li> <li>text 3</li> <li>text 4</li> <li>text 5</li> <li>text 6</li> <li>text 7</li> </ul> </span> </span>');

$('span.zaccordion li').css('margin-left','20px');
$('span.zaccordion h4').css({'margin-bottom':'0px', 'cursor':'pointer'});
$('span.zaccordion ul').css('display','none');*/

$(document).on('click', '.zaccordion h4', function(){
    if(!$(this).hasClass('zin')){
        //$('.zaccordion ul').css('display', 'none');
        $('.zaccordion ul').slideUp();
    }
    if($(this).hasClass('zin')){
        //$('.zaccordion .zin').next('ul').css('display', 'none');
        $('.zaccordion .zin').next('ul').slideUp();
    }
    //$(this).siblings('ul').css('display', 'block');
    $(this).siblings('ul').slideDown();
});