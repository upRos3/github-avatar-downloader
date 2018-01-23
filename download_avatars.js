var request = require('request');
var secret = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader')

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request'
      'Authorization': secret.GITHUB_TOKEN;
    }
  };

  request(url, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("nodejs", "node", function(err, result) {
  console.log("There was an error:", err);
  console.log("Result:", result);
});


