const requestURL = 'https://raw.githubusercontent.com/H4rp0/CRsGradDb/main/crsGradMetis.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const crs = request.response;
  console.log(crs);
}
