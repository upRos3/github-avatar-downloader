var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader')

function getRepoContributors(repoOwner, repoName, cb) {
  getRepoContributors("nodejs", "node", function(err, result) {
    console.log("There was an error:", err);
    console.log("Result:", result);
  });
}

