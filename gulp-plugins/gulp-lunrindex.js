'use strict';
var through = require('through2');
var lunr = require('lunr');

module.exports = function (opts) {

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(null, file);
        }

        if (file.isBuffer()) {
            const sitemap = JSON.parse(file.contents);
            const index = lunr(function () {
                this.field('tags', {
                    boost: 10
                })
                this.field('title', {
                    boost: 5
                })
//                this.field('body')
                this.ref('id')
            });

            for (const resourcePath in sitemap) {
                const resource = sitemap[resourcePath];

                index.add({
                    id: resourcePath,
                    title: resource.title,
                    tags: resource.tags.join(' '),
                })
            }
            file.path = file.base + '/' + (opts.filename || 'searchindex.json');
            console.log(file.path);
            file.contents = new Buffer(JSON.stringify(index.toJSON()));
            return cb(null, file);
        }
    });
}
