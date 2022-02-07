import {Container} from './style'; 
import { useState } from 'react';
import {initMenuMobile, mask1} from "./script";

import  Modal  from "react-modal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import ImgChefe from '../../assets/Chef-amico 1.png'


export function Register(){
    const [name, setName] = useState(()=>{
        const storage = localStorage.getItem('name');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(name){
        localStorage.setItem('name', JSON.stringify(name));
      }
    const [cpf, setCpf] = useState(()=>{
        const storage = localStorage.getItem('cpf');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(cpf){
        localStorage.setItem('cpf', JSON.stringify(cpf));
      }
      
    const [date, setDate] = useState(()=>{
        const storage = localStorage.getItem('date');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(date){
        localStorage.setItem('date', JSON.stringify(date));
      }
      const [cep, setCep] = useState(()=>{
        const storage = localStorage.getItem('cep');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(cep){
        localStorage.setItem('cep', JSON.stringify(cep));
      }
    const [email, setEmail] = useState(()=>{
        const storage = localStorage.getItem('email');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(email){
        localStorage.setItem('email', JSON.stringify(email));
      }
    const [bairro, setBairro] = useState(()=>{
        const storage = localStorage.getItem('bairro');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(bairro){
        localStorage.setItem('bairro', JSON.stringify(bairro));
      }
    const [logradouro, setLogradouro] = useState(()=>{
        const storage = localStorage.getItem('logradouro');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(logradouro){
        localStorage.setItem('logradouro', JSON.stringify(logradouro));
      }
    const [cidade, setCidade] = useState(()=>{
        const storage = localStorage.getItem('cidade');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(cidade){
        localStorage.setItem('cidade', JSON.stringify(cidade));
      }
    const [uf, setUF] = useState(()=>{
        const storage = localStorage.getItem('uf');
  
        if(storage){
          const jsonParse = JSON.parse(storage);
          return jsonParse;
        }
  
        return
      });
      if(uf){
        localStorage.setItem('uf', JSON.stringify(uf));
      }


    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
   
    function handleOpenNewModal() {
      setIsNewModalOpen(true);
      
    }
  
    function handleCloseNewModal(event: any) {
      setIsNewModalOpen(false);
      
    }

    function cadUsuario(event: any){
        event.preventDefault();
        const quantCPF = cpf.length;
        if(quantCPF !== 14){
            alert("CPF incorreto");
            return;
        }
        console.log('correto');
        initMenuMobile();
    }

    function OnblueCep(event: any){
        setCep(event.target.value);
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

   
  mask1();

    return(
      <>
        <Container>
            <div className='divRegister'>
                <h1>Faça seu Cadastro</h1>
                <form action="" onSubmit={cadUsuario} className='User'>
                <ul>
                    <li>
                       <label htmlFor="">Full name</label>
                        <input 
                            type="text"  
                            placeholder='Rafael Cardoso'
                            onChange={(event: any)=>{
                                setName(event.target.value)
                            }}
                            value={name}
                            required
                            />
                    </li>
                    <li>
                        <label htmlFor="">CPF</label>
                      
                       <input 
                          
                          maxLength={14}
                          className='CPF'
                          type="text"  
                          placeholder='000.000.000-00'
                          onChange={(event: any)=>{
                          setCpf(event.target.value)
                          }}
                          value={cpf}
                          required
                        />
                   </li>
                   <li>
                       <label htmlFor="">Birth date</label>
                        <input 
                            type="date"  
                            onChange={(event: any)=>{
                                setDate(event.target.value)
                            }}
                                value={date}
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="">E-mail</label>
                        <input 
                            type="email"  
                            onChange={(event: any)=>{
                                setEmail(event.target.value)
                            }}
                                value={email}
                            placeholder='@exemplo.com'
                            required
                        />
                    </li>
                </ul>
                <button className='buttoregisterUser' type='submit'>Proximo</button>
                </form>
                <form className='Endereco' onSubmit={handleOpenNewModal}>
                <ul>
                    <li>
                        <input 
                            type="number" 
                            placeholder='CEP' 
                            onBlur={OnblueCep}
                            value={cep}
                            required
                        />
                    </li>
                    <li className='EndereçoNumero'>

                            <input 
                                type="Text"  
                                placeholder='Public place'
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
                            placeholder='Add-on (optional)'
                        />
                    </li>
                    <li>
                        <input 
                            type="text"  
                            placeholder='District'
                            value={bairro}
                            required
                        />
                    </li>
                    <li>
                    <li className='EndereçoNumero'>
                        <input 
                            type="text"  
                            placeholder='City'
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
                <button className='buttoregisterUser' type='submit' >Register</button>
                </form>
            </div>
            <div className='imgRegister'>
                <img src={ImgChefe} alt="" />
            </div>
        </Container>
           <Modal
            isOpen={isNewModalOpen}
            onRequestClose={handleCloseNewModal}
            overlayClassName="react-modal-overlay-sucesso"
            className="react-modal-content-sucesso"
        >
            <div className="CadastroSucesso">
                <IconContext.Provider value={{className: "global-class-name" }}>
                    <div className="teste">
                        <AiOutlineCheckCircle color="#BADC58" size={100}/>
                    </div>
                </IconContext.Provider>
                <h4>Successfully registered</h4>
            </div>
        </Modal>
        </>
    )
}