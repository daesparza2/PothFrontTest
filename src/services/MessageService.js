import axios from "axios";

export default class MessageService{

    url = 'http://localhost:3001/messages';

    getMessages(){
        return axios.get(this.url);
    }

    saveMessage(message){
        return axios.post(this.url, message);
    }

}