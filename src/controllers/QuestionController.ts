import {Request, Response} from 'express';

import db from '../database/connection';

export default class QuestionController {
    async show(request: Request, response: Response){
        const { subject, id } = request.params;
        if(!subject || !id){
            return response.status(400).json({
                error: "Missing filters to search questions"
            })
        }
        const question = await db('questions')
            .where('subject', '=', subject)
            .where('id', '=', id)
            .select(['questions.*']);

            return response.json(question);
    }

    async create(request: Request, response: Response){
        const {
            questionDialog,
            subject,
            fisrtOption,
            secondOption,
            thirdOption,
            fourthOption,
            questionImage,
            rightAnswer
        } = request.body;
     
        const trx = await db.transaction();

      try{
         const insertedUsersIds = await trx('questions').insert({
            questionDialog,
            subject,
            fisrtOption,
            secondOption,
            thirdOption,
            fourthOption,
            questionImage,
            rightAnswer
         });
                  
         await trx.commit();
         return response.status(201).send();
      
         }catch(err){
             await trx.rollback();
             return response.status(400).json({
                 error: "Unexpected error while creating new Question"
             })
         }
    }
}