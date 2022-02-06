import {Container} from './style';
import ImgChefe from '../../assets/Chef-amico 1.png' 
import { useState } from 'react';
import { Formik } from 'formik';
export function Register(){
    const [senha, setSenha] = useState();
    const [senhaRept, setSenhaRept] = useState();
    const [bairro, setBairro] = useState();
    const [logradouro, setLogradouro] = useState();
    const [cidade, setCidade] = useState();
    const [uf, setUF] = useState();
    const endereco = document.querySelector('.Endereco')
    const User = document.querySelector('.User');


    function cadUsuario(event: any){
        event.preventDefault();
        if(senha != senhaRept){
            alert('incorreto')
        }else if(senha === senhaRept){
            console.log('correto');
            endereco?.classList.add('active');
            User?.classList.add('active');
        }
    }

    function OnblueCep(event: any){

        const value1 = +event.target.value;
        if(value1.toLocaleString.length != 8){
            console.log('correto cep');
        }
        console.log(value1)
        fetch(`https://viacep.com.br/ws/${value1}/json/`)
        .then((res)=> res.json())
        .then((data) => {
            setBairro(data.bairro);
            setLogradouro(data.logradouro);
            setCidade(data.localidade);
            setUF(data.uf);
        });
    }
    console.log(bairro);

    console.log('senha',senha);
    console.log('rept', senhaRept)
    return(
        <Container>
            <div className='divRegister'>
                <h1>Faça seu Cadastro</h1>
                <form action="" onSubmit={cadUsuario} className='User'>
                <ul>
                    <li>
                        <label htmlFor="">Nome Completo</label>
                        <input 
                            type="text"  
                            placeholder='Nome Completo'
                            required
                            />
                    </li>
                    <li>
                        <label htmlFor="">E-mail</label>
                        <input 
                            type="email"  
                            placeholder='Email'
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="">Password</label>
                        <input 
                            type="password"  
                            placeholder='Password'
                            onChange={(event: any)=>{
                                setSenha(event.target.value)
                            }}
                            value={senha}
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="">Repte Password</label>
                        <input 
                            type="password"  
                            placeholder='Repite password'
                            onChange={(event: any)=>{
                                setSenhaRept(event.target.value)
                            }}
                            value={senhaRept}
                            required
                        />
                    </li>

                   
                </ul>
                <button className='buttoregisterUser' type='submit'>Proximo</button>
                </form>
                <form action="" className='Endereco'>
                <ul>
                    <label htmlFor="">CEP</label>
                    <li>
                        <input type="number" placeholder='CEP' onBlur={OnblueCep}/>
                    </li>
                    <li className='EndereçoNumero'>
                        
                        <input 
                            type="Text"  
                            placeholder='Logradouro'
                            value={logradouro}
                            required
                        />

                        <input 
                        className='numeroResidencia'
                            type="text"  
                            placeholder='Nº 452'
                            required
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='complemento (opcional)'
                            required
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='Bairro'
                            value={bairro}
                            required
                        />
                    </li>
                    <li>
                    <li className='EndereçoNumero'>
                        <input 
                            type="text"  
                            placeholder='Cidade'
                            value={cidade}
                            required
                        />
                        
                        <input 
                        className='UF'
                            type=""  
                            placeholder='UF'
                            value={uf}
                            required
                        />
                    </li>
                    </li>
                </ul>
                <button className='buttoregisterUser' type='submit'>Register</button>
                </form>
            </div>
            <div className='imgRegister'>
                <img src={ImgChefe} alt="" />
            </div>
        </Container>
    )
}