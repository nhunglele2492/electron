let request = require('request');

request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(err, response, body) {
  let  bodyJson = JSON.parse(body);
  let randomTitle = bodyJson[0]["title"];
  let randomBody = bodyJson[0]["content"];
  document.getElementById('quotetitle').innerHTML = randomTitle;
  document.getElementById('quotebody').innerHTML = randomBody;
})

setInterval(function(){
  request("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(err, response, body) {
    let  bodyJson = JSON.parse(body);
    let randomTitle = bodyJson[0]["title"];
    let randomBody = bodyJson[0]["content"];
    document.getElementById('quotetitle').innerHTML = randomTitle;
    document.getElementById('quotebody').innerHTML = randomBody;
  })

}, 5000);
