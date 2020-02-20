const request = require('superagent');

module.exports = (app) => {
    app.get('/user/signin/callback', (req, res, next) => {
        const { query } = req;
        // ?code=29384791287
        const { code } = query;
        // console.log('code', code);

        if (!code) {
            return res.send({
                success: false,
                message: 'Error: no code'
            })
        }

        //POST
        request
            .post('https://github.com/login/oauth/access_token')
            .send({ 
                client_id: '690baf8f3ec899363b4f', 
                client_secret: '6c78de167fc0f5602cee8997852ac31b2365638e',
                code: code
             })
            .set('Accept', 'application/json')
            .then(result => {
                const data = result.body;

                res.send(data);
        });

        app.get('/user/', (req, res, next) => {
            const accessToken = '159276211d2254898f672cf9c3d76edab5400696';
            //the idea is you get it from backend
            
            request
                .get('https://api.github.com/user')
                .set('Authorization', 'token ' + accessToken)
                .then(result => {
                    res.send(result.body);
                });
        });
    });
}