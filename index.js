const exif = require('fast-exif');
const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, 'testFiles', 'yeti-8.jpg');

console.log('Reading from ', filename);

const { ExifTool } = require("exiftool-vendored");
const exiftool = new ExifTool();

exiftool
.read(filename)
.then((tags /*: Tags */) => {console.log(tags); exiftool.end(); })
.catch(err => { console.error("Something terrible happened: ", err); exiftool.end(); });

//exif.read(filename, true).then(console.log).catch(console.error);