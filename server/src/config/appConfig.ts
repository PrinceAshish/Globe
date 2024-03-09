import express from 'express';
import path from 'path';

export const configureApp = (app: express.Application) => {
    // EJS Configuration
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../views'));
  };