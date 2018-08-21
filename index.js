const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, 'test_files', 'testImage.jpg');

console.log('Reading from ', filename);

const { ExifTool } = require('exiftool-vendored');
const exiftool = new ExifTool();

exiftool
  .read(filename, ['-struct', '-xmp:all'])
  .then((tags) => {
    console.log(tags);
    exiftool.end();
  })
  .catch(err => {
    console.error('Something terrible happened: ', err);
    exiftool.end();
  });
