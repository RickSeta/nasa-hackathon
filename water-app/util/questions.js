import messageService from "./messages";

class QuizzService {

    getQuizzSpecs(key) {
        return {
            desc: messageService.getMessage(key).desc,
            image: messageService.getMessage(key).imagemFundo,
            resps: [
                {text: messageService.getMessage(key).resp1, prox: messageService.getMessage(key).prox}, 
                {text: messageService.getMessage(key).resp2, prox: messageService.getMessage(key).prox} , 
                {text: messageService.getMessage(key).resp3, prox: messageService.getMessage(key).prox}, 
                {text: messageService.getMessage(key).resp4, prox: messageService.getMessage(key).prox}
            ],
        }  
        
    }
} 

let quizzService = Object.freeze(new QuizzService());
export default quizzService;
