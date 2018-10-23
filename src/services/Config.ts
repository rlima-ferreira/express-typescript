export namespace Config {

    export const cors = {
        origin : false,
        allowHeaders : [
            "Content-Type", 
            "Authorization"
        ],
        optionsSuccessStatus : 200,
        methods : [
            "GET", 
            "PUT", 
            "POST", 
            "DELETE"
        ]
    }

}