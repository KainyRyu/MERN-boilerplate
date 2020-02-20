module.exports = (app) => {
    app.get('/user/signin/callback', (req, res, next) => {
        const { query } = req;
        // ?code=29384791287
        const { code } = code;
        console.log('code', code);

        if (!code) {
            return res.send({
                success: false,
                message: 'Error: no code'
            })
        }

        //POST

        console.log('code', code);
    });
}