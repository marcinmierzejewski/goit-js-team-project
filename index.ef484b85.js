!function(){function e(e,a,n,o){Object.defineProperty(e,a,{get:n,set:o,enumerable:!0,configurable:!0})}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},c=a.parcelRequired7c6;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in o){var a=o[e];delete o[e];var c={id:e,exports:{}};return n[e]=c,a.call(c.exports,c,c.exports),c.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,a){o[e]=a},a.parcelRequired7c6=c),c.register("gzzNY",(function(a,n){e(a.exports,"searchCountryCode",(function(){return m}));var o,d=c("jpZFq"),r=document.querySelector(".selected"),i=document.querySelector(".options-container"),t=d.countryList.map((function(e){return'  <div class="option">\n       <input\n         class="radio"\n         data-code = "'.concat(e.code,'"\n       />\n       <label for="').concat(e.name,'">').concat(e.name,"</label>\n     </div>\n     ")})).join("");function m(){return r.getAttribute("value")}i.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".option").forEach((function(e){e.addEventListener("click",(function(){r.innerHTML=e.querySelector("label").innerHTML;var a=e.querySelector("input[data-code]");o=a.dataset.code,r.setAttribute("value",o),i.classList.remove("active")}))})),r.addEventListener("click",(function(){i.classList.toggle("active")}))})),c.register("jpZFq",(function(a,n){e(a.exports,"countryList",(function(){return o}));var o=[{code:"US",name:"United States Of America"},{code:"AD",name:"Andorra"},{code:"AI",name:"Anguilla"},{code:"AR",name:"Argentina"},{code:"AU",name:"Australia"},{code:"AT",name:"Austria"},{code:"AZ",name:"Azerbaijan"},{code:"BS",name:"Bahamas"},{code:"BH",name:"Bahrain"},{code:"BB",name:"Barbados"},{code:"BE",name:"Belgium"},{code:"BM",name:"Bermuda"},{code:"BR",name:"Brazil"},{code:"BG",name:"Bulgaria"},{code:"CA",name:"Canada"},{code:"CL",name:"Chile"},{code:"CN",name:"China"},{code:"CO",name:"Colombia"},{code:"CR",name:"Costa Rica"},{code:"HR",name:"Croatia"},{code:"CY",name:"Cyprus"},{code:"CZ",name:"Czech Republic"},{code:"DK",name:"Denmark"},{code:"DO",name:"Dominican Republic"},{code:"EC",name:"Ecuador"},{code:"EE",name:"Estonia"},{code:"FO",name:"Faroe Islands"},{code:"FI",name:"Finland"},{code:"FR",name:"France"},{code:"GE",name:"Georgia"},{code:"DE",name:"Germany"},{code:"GH",name:"Ghana"},{code:"GI",name:"Gibraltar"},{code:"GB",name:"Great Britain"},{code:"GR",name:"Greece"},{code:"HK",name:"Hong Kong"},{code:"HU",name:"Hungary"},{code:"IS",name:"Iceland"},{code:"IN",name:"India"},{code:"IE",name:"Ireland"},{code:"IL",name:"Israel"},{code:"IT",name:"Italy"},{code:"JM",name:"Jamaica"},{code:"JP",name:"Japan"},{code:"KR",name:"Korea"},{code:"LV",name:"Latvia"},{code:"LB",name:"Lebanon"},{code:"LT",name:"Lithuania"},{code:"LU",name:"Luxembourg"},{code:"MY",name:"Malaysia"},{code:"MT",name:"Malta"},{code:"MX",name:"Mexico"},{code:"MC",name:"Monaco"},{code:"ME",name:"Montenegro"},{code:"MA",name:"Morocco"},{code:"NL",name:"Netherlands"},{code:"AN",name:"Netherlands Antilles"},{code:"NZ",name:"New Zealand"},{code:"ND",name:"Northern Ireland"},{code:"NO",name:"Norway"},{code:"PE",name:"Peru"},{code:"PL",name:"Poland"},{code:"PT",name:"Portugal"},{code:"RO",name:"Romania"},{code:"RU",name:"Russian Federation"},{code:"LC",name:"Saint Lucia"},{code:"SA",name:"Saudi Arabia"},{code:"RS",name:"Serbia"},{code:"SG",name:"Singapore"},{code:"SK",name:"Slovakia"},{code:"SI",name:"Slovenia"},{code:"ZA",name:"South Africa"},{code:"ES",name:"Spain"},{code:"SE",name:"Sweden"},{code:"CH",name:"Switzerland"},{code:"TW",name:"Taiwan"},{code:"TH",name:"Thailand"},{code:"TT",name:"Trinidad and Tobago"},{code:"TR",name:"Turkey"},{code:"UA",name:"Ukraine"},{code:"AE",name:"United Arab Emirates"},{code:"UY",name:"Uruguay"},{code:"VE",name:"Venezuela"}]})),c("gzzNY")}();
//# sourceMappingURL=index.ef484b85.js.map
