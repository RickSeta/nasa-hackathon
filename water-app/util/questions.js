import messageService from "./messages";

class QuizzService {

    getQuizzSpecs(key) {
        return {
            desc: messageService.getMessage(key).desc,
            image: messageService.getMessage(key).imagemFundo,
            comentario: messageService.getMessage(key).comentario,
            resps: [
                {text: messageService.getMessage(key).resp1, key: 'resp1', prox: messageService.getMessage(key).prox}, 
                {text: messageService.getMessage(key).resp2, key: 'resp2', prox: messageService.getMessage(key).prox}, 
                {text: messageService.getMessage(key).resp3, key: 'resp3', prox: messageService.getMessage(key).prox}, 
                {text: messageService.getMessage(key).resp4, key: 'resp4', prox: messageService.getMessage(key).prox}
            ],
            correct: messageService.getMessage(key).corretas
        }  
        
    }

}

let quizzService = Object.freeze(new QuizzService());
export default quizzService;
