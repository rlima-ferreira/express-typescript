"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config;
(function (Config) {
    Config.cors = {
        origin: false,
        allowHeaders: [
            "Content-Type",
            "Authorization"
        ],
        optionsSuccessStatus: 200,
        methods: [
            "GET",
            "PUT",
            "POST",
            "DELETE"
        ]
    };
})(Config = exports.Config || (exports.Config = {}));
