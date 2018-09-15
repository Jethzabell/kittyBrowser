const request = require('request');

let id = 9999;

var getImage = (id) => {
    
    request({
        url: `https://api.cryptokitties.co/kitties/${id}`,
        json: true
    }, (error, request, body) => {
        if(error){
            console.log('Unable to connect to Crypto Kitty server');
        }else if(body.status === undefined){
            console.log('Unable to find the Kitty');
        }else if(body.id){
            console.log(JSON.stringify(body.image_url, undefined, 2));
        }
    });
}

/*

test resuqest:

- invalid ID         -> https://api.cryptties.co/kitties/99999999
- broken/invalid url -> https://api.cryptties.co/kitties/333
- OK                 -> https://api.cryptokitties.co/kitties/333

*/

getMaxKitties = () => {
    
    request({
        url: 'https://api.cryptokitties.co/kitties',
        json: true
    }, (error, request, body) => {
        if(error){
            console.log('Unable to connect to Crypto Kitty server');
        }else if(request.rawHeaders[17] === 'text/html; charset=utf-8'){
            console.log('Unable to connect to Crypto Kitty server, error 404');
        }else if(body.total){
            console.log(JSON.stringify(body.total, undefined, 2));
        }
    });
}


//just here for test
getMaxKitties();
getImage(id);

//module.exports.getImage = getImage;