import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import { Config } from './services/Config';

const app = express();

app.disable('x-powered-by');
app.use(cors(Config.cors));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(__dirname + '/views'));

module.exports = app;