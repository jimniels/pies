# Pies

A site where I archive posts from Instagram and store them as a JSON feed + images for use in building and hosting a site.

- `cdn.jim-nielsen.com/pies` hosts the source feed and images
- `pies.jim-nielsen.com` hosts the HTML + truncated feed but points to images hosted on CDN

## Extracting content from the archive

1. Export your archive from Instagram
2. Unzip the archive and stick it in this directory named `archive-instagram`
3. Run `npm run extract` to copy contents from instagram to local folder
4. Run `npm run extract:copy` to copy the contents to the cdn folder

## Building the site

- `npm run build` to build the site (will look at production folder)
- `npm start` to look at site locally
