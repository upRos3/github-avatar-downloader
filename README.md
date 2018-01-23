# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js [username of the repo owner] [name of repo]`

## Setting up your GitHub API token

In order to utilise this program to its maximum, you will need to set up a token with GitHub.

1) Follow this link to generate a new token with github: [https://github.com/settings/tokens](https://github.com/settings/tokens)

2) Once generated, copy the token into renameMe-secrets.js in place of "YOUR-TOKEN-HERE"

3) Rename the file renameMe-secrets.js => secrets.js . This is to ensure your keys are always kept private. When pushing this script to another repository, the .gitignore should keep your private keys/tokens safe.
