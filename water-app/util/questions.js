import messageService from "./messages";

class QuizzService {
    #quizz = {
        'id1': {
            desc: messageService.getMessage('pergunta.id1.desc'),
            resps: [
                {text: messageService.getMessage('pergunta.id1.resp1'), prox: 'id?'}, 
                {text: messageService.getMessage('pergunta.id1.resp2'), prox: 'id!'} , 
                {text: messageService.getMessage('pergunta.id1.resp3'), prox: 'id@'}, 
                {text: messageService.getMessage('pergunta.id1.resp4'), prox: 'id%'}
            ],
        }  
    }

    getQuizzSpecs(key) {
        return this.#quizz[key]
    }
}

let quizzService = Object.freeze(new QuizzService());
export default quizzService;
