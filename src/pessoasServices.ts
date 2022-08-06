import {Pessoa} from "./types/Pessoa";
import {number} from "prop-types";

export const pessoasServices = {
    list: (): Pessoa[] => {
        let pessoasList: Pessoa[] = [];
        pessoasList.push({id: 1, nome: 'fernando', email: 'fernando88to@gmail.com'});
        pessoasList.push({id: 2, nome: 'fernando1', email: 'fernando88to@gmail.com1'});
        pessoasList.push({id: 3, nome: 'fernando2', email: 'fernando88to@gmail.com2'});
        pessoasList.push({id: 4, nome: 'fernando3', email: 'fernando88to@gmail.com3'});
        pessoasList.push({id: 5, nome: 'fernando4', email: 'fernando88to@gmail.com4'});
        return pessoasList;
    },
    findById: (id:number):Pessoa | undefined => {
        return pessoasServices.list().find(element => element.id===id);
    }

}
