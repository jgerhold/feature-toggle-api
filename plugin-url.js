"use strict";function parseValue(n){return"true"===n}function getParams(n,i){var r={};if(!n)return[];var e=n.split("?");return e.length<2?[]:(e[1].split("&").forEach(function(n){var e=n.split("=");e[0]=i.decodeURIComponent(e[0]),e[1]=parseValue(i.decodeURIComponent(e[1])),r[e[0]]="undefined"===e[1]||e[1]}),r)}function urlplugin(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return n.window&&(window=n.window),n=Object.assign({},{url:window.isMocked?"":window.location.href,prefix:""},n),function(i){i.url=n.url;var r=getParams(n.url,window),u=n.prefix;return Object.keys(r).forEach(function(n){if(n.startsWith(u)){var e=n.replace(u,"");i.visibility(e,r[n])}}),{name:"urlplugin"}}}"undefined"!=typeof window&&(window.urlplugin=urlplugin),"undefined"!=typeof module&&(module.exports=urlplugin);