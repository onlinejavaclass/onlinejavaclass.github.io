'use strict';
const marked = require('@onlinejavaclass/marked');
const through = require('through2');

module.exports = function (opts) {
    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(null, file);
        }

        if (file.isBuffer()) {
            const fileType = file.path.substring(file.path.lastIndexOf('.') + 1, file.path.length);
            if (fileType === 'md') {
                const filePath = file.path.substring(0, file.path.lastIndexOf('/'));
                const fileName = file.path.substring(file.path.lastIndexOf('/') + 1, file.path.lastIndexOf('.'));
                file.path = filePath + '/' + fileName + (opts.outExtension || '.html');
                //file.path = filePath.replace('src', opts.dest.replace('./', '')) + "/" + fileName + (opts.outExtension || '.html');
                file.contents = Buffer.from(marked(new TextDecoder().decode(file.contents)));
            }
            return cb(null, file);
        }
    });
}