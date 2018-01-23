var request = require('request');
var secret = require('./secrets');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader')

// function getRepoContributors(repoOwner, repoName, cb) {
//   var options = {
//     url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': secret.GITHUB_TOKEN
//     }
//   };

//   request(options, function(err, res, body) {
//     cb(err, body)
//   });
// }

// getRepoContributors("nodejs", "node", function(err, result) {
//   console.log("Error:", err);
//   var js0n = JSON.parse(result);
//     for (var obj of js0n) {
//       console.log(obj["avatar_url"]);
//     }
//   console.log("Result:");
// });

function downloadImageByURL(url, filePath) {
  request.get(url.toString())
       .on('error', function (err) {
          console.log('There was an error: ', err);
        })
       .on('response', function (response) {
          console.log('Downloading image...');
          console.log('Response Status: ', response.statusMessage);
          console.log('Content Type: ', response.headers['content-type']);
          console.log('Download complete!')

       })
       .pipe(fs.createWriteStream(filePath.toString()));
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");