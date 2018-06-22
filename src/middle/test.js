const fetch = require('node-fetch')

async function log(ctx) {
    try{

        let res = await fetch('http://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text=561005181080')
        
        let json = await res.json();
        
        console.log(json);
    
    }catch(e){
        
        console.log(e)
    
    }

}

module.exports = function () {
    
    return async function (ctx, next) {
        
        log(ctx);
        
        await next()
    
    }
    
}