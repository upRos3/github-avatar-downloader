var args = process.argv.splice(2);
var request = require('request');
var secret = require('./secrets');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader')

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secret.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    cb(err, body)
  });
}

getRepoContributors(args[0], args[1], function(err, result, callback) {
  console.log("Error:", err);
  console.log('Downloading images...');
  var js0n = JSON.parse(result);
    for (var obj of js0n) {
      downloadImageByURL(obj['avatar_url'], './' + './avatars/' + '/' + obj['login'] + '.jpg', obj['login']);
    }

  function downloadImageByURL(url, filePath, login) {
    request.get(url)
      .on('error', function (err) {
      console.log('There was an error: ', err);
    })
      .on('response', function (response) {

      console.log('Image of: ' + login + ' downloaded!');
    })
       .pipe(fs.createWriteStream(filePath));
  }
});
