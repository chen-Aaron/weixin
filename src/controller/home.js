const fetch = require('node-fetch')

const Home = {

    Home: async (ctx, next) => {
        let html = {status: true};

        let num = ctx.query.num;

        if (!/^\d{1,}$/.test(num)) {
                        
            html.error = 'num存在错误';

            html.status = false;

            ctx.body = html

            return ;
        }

        let path = `http://www.kuaidi100.com/autonumber/autoComNum?resultv2=1&text=${num}`;

        let res = await fetch(path);

        let json = await res.json();

        let rows = [];

        json.auto.forEach((item)=>{

            if(item.noCount > 300){

                rows.push(item)

            }

        })

        html.rows = rows;

        ctx.body = html

    }

}

module.exports = Home