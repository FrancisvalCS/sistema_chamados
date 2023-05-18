import { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiUser } from 'react-icons/fi'

export default function Customers(){

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name='Clientes'>
                    <FiUser size={25}/>
                </Title>
                <div className='content'>
                    <form className='form-profile'>
                        <label>Nome fantasia</label>
                        <input 
                            type="text"
                            placeholder="Nome da empresa" 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}