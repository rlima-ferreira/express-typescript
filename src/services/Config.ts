export namespace Config {

    export const cors = {
        origin : true,
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