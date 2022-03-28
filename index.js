const Crawler = require("crawler");
const fs = require('fs')

const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            $("a").each((i, el) => {
                if (el.attribs.title && el.attribs.title.includes('本草纲目/')) {
                    console.log(el.attribs.title);
                    // const detailCrawler = new Crawler({
                    //     maxConnections: 10,
                    //     // This will be called for each crawled page
                    //     callback: function (error, res, done) {
                    //         if (error) {
                    //             console.log(error);
                    //         } else {
                    //             const $ = res.$;
                    //             $('p').each((i, el) => {
                    //                 if (el.children[0] && el.children[0].data) console.log(el.children[0].data);
                    //                 // fs.appendFileSync('./result.txt', el.)
                    //             })
                    //         }
                    //         done();
                    //     }
                    // });
                    // detailCrawler.queue('http://www.a-hospital.com' + el.attribs.href)
                }
            })
        }
        done();
    }
});
c.queue("http://www.a-hospital.com/w/%E6%9C%AC%E8%8D%89%E7%BA%B2%E7%9B%AE");