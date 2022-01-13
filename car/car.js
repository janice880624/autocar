let loc = location.href;
let n1 = loc.length; 
let n2 = loc.indexOf("="); 
let device_id = decodeURI(loc.substr(n2+1, n1-n2));
alert("Device ID:" + device_id); 
console.log('=> ' + device_id);