import express from 'express';

import QuestionController from './controllers/QuestionController';

const routes = express.Router();

const questionController = new QuestionController();

routes.post('/questions', questionController.create);

routes.get('/questions/:subject/:id', questionController.show);
routes.get('/questions/total', questionController.indexTotal);
routes.get('/questions', questionController.index);

export default routes;