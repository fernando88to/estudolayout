import {Pessoa} from "@/types/Pessoa";

export const pessoasServices = {
    list: (): Pessoa[] => {
        let pessoasList: Pessoa[] = [];
        pessoasList.push({id: 1, nome: 'fernando', email: 'fernando88to@gmail.com'});
        pessoasList.push({id: 2, nome: 'Henrique', email: 'fernando88to@gmail.com1'});
        pessoasList.push({id: 3, nome: 'Lima', email: 'fernando88to@gmail.com2'});
        pessoasList.push({id: 4, nome: 'Soares', email: 'fernando88to@gmail.com3'});
        pessoasList.push({id: 5, nome: 'Marques', email: 'fernando88to@gmail.com4'});
        return pessoasList;
    },
    findById: (id: number): Pessoa | undefined => {
        return pessoasServices.list().find(element => element.id === id);
    },
    filterAllByName: (nomepesquisa: string): Pessoa[] => {
        let pessoasList: Pessoa[] = pessoasServices.list();
        if (nomepesquisa) {
            let p = pessoasList.filter(element => element.nome.toLowerCase().includes(nomepesquisa.toLowerCase()));
            return p;
        }

        return pessoasList;

    }


}
