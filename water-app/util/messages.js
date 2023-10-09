import { ptbr_msgs } from "./ptbr";
import { en_msgs } from "./en";

class MessageService {

    #msgs = {
        'ptbr': ptbr_msgs,
        'en':  en_msgs,
    }

    getLocale() {
        return 'en';
    }

    getMessage(key) {
        return this.#msgs[this.getLocale()][key]
    }


}

let messageService = Object.freeze(new MessageService());
export default messageService;
