import {pessoasServices} from "@/services/pessoasServices";
import {Pessoa} from "@/types/Pessoa";

describe('PessoaService', () => {
    it('pesquisa pelo id valido', () => {
        let findById = pessoasServices.findById(1);
        expect(findById).not.toBe(undefined);
    })
    it('pesquisa pelo id invalido', () => {
        let findById = pessoasServices.findById(-50);
        expect(findById).toBe(undefined);
    })
    it('pesquisa pelo nome que tem somente 1', () => {
        let pessoas:Pessoa[] = pessoasServices.filterAllByName('fernando');
        expect(pessoas).toHaveLength(1)
    })
})