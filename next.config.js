module.exports={
    async header(){
        return[
            {
                source:'/:path*',
                header: [
                    {key: 'Access-Control-Allow-Credentials',value:'true'},
                    {key: 'Access-Control-Allow-Origin',value:'*'},
                    {key: 'Access-Control-Allow-Methods',value:'GET,OPTIONS,PATCH,DELETE,POST,PUT'},
                    {key: 'Access-Control-Allow-Headers',value:'X-CSRF-Token,X-Request-With'},
                ]
            }
        ]
    }
}