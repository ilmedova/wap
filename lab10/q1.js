const { Resolver } = require("dns");

const resolver = new Resolver();

resolver.resolve4('www.miu.edu', ( err, addresses ) => {
    console.log(addresses); //Output: [ '192.249.118.206' ]
});
