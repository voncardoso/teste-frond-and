import {Container} from './style';
import ImgChefe from '../../assets/Chef-amico.png' 

export function Register(){
    return(
        <Container>
            <div className='divRegister'>
                <h1>Faça seu Cadastro</h1>
                <ul>
                    <li>
                        <input 
                            type="text"  
                            placeholder='Nome Completo'
                            />
                    </li>
                    <li>
                        <input 
                            type="email"  
                            placeholder='Email'
                        />
                    </li>
                    <li>
                        <input 
                            type="password"  
                            placeholder='Password'
                        />
                    </li>
                    <li>
                        <input 
                            type="password"  
                            placeholder='Repite password'
                        />
                    </li>
                    <li>
                        <input 
                            type="number"  
                            placeholder='Phone Number'
                        />
                    </li>
                    <li>
                        <input 
                            type="number"  
                            placeholder='CEP'
                        />
                    </li>
                    <li className='EndereçoNumero'>
                        <input 
                            type="text"  
                            placeholder='Endereço'
                        />
                        
                        <input 
                        className='numeroResidencia'
                            type="text"  
                            placeholder='Nº 452'
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='complemento (opcional)'
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='Bairro'
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='Cidade'
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='Estado'
                        />
                    </li>
                </ul>
            </div>
            <div className='imgRegister'>
                <img src={ImgChefe} alt="" />
            </div>
        </Container>
    )
}