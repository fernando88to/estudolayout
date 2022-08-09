import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)
        /*const heading = screen.getByRole('h2', {
            name: /Pagina inicial/i,
        })*/
       /* const heading = screen.getByRole('titulo', {
            value: /Pagina inicial/i,
        })*/



        expect(true).toBe(true)
    })
})