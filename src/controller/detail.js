const fetch = require('node-fetch')

const Detail = {

    detail: async (ctx, next) => {

        let html = { status: true };

        let id = ctx.query.id;

        let type = ctx.query.company;

        
        if (!/^\d{1,}$/.test(id)) {

            html.error = 'id存在错误';

            html.status = false;

            ctx.body = html

            return;
        }

        if (!type) {

            html.error = 'company存在错误';

            html.status = false;

            ctx.body = html

            return;
        }

        let path = `http://www.kuaidi100.com/query?type=${type}&postid=${id}`;

        let res = await fetch(path);

        let json = await res.json();

        if(json.message !== 'ok'){
            html.error = '单号存在错误';

            html.status = false;

            ctx.body = html

            return;
        }

        html.rows = json.data;

        ctx.body = html

    }

}

module.exports = Detail