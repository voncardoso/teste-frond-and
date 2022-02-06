import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1570px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    height: 100vh;
    color: #1D164D;

        h1{
            margin-bottom: 40px;
            color: #1D164D;
            font-size: 2.3rem;
            
        }

        .divRegister{
            justify-self: center;
            align-self: center;
            max-width: 300px;
            ul{
                
                list-style: none;
                text-decoration: none;
                li{
                    label{
                        font-weight: normal;
                        
                    }
                    input{
                        margin-top: 5px;
                        width: 290px;
                        height: 35px;
                        margin-bottom: 20px;
                        padding-left: 5px;
                        font-size: 0.875rem;
                        border: 1px solid #E8E8E8;
                        border-radius: 5px;
                        font-weight: normal;
                        transition: 0.5s ease-in-out;
                        outline: none;
                    }

                    input:focus{
                        border: 2px solid #7AC562;
                        transition: 0.1s ease-in-out;
                    }
                }
            }
        }

        .User.active{
            display: none;
        }
        
        .buttoregisterUser{
            margin-top: 0px;
            height: 40px;
            width: 100%;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            color: #FFFFFF;
            background: #B9DB58;
        }

        .buttoregisterUser:hover{
            color: #B9DB58;
            background: #FFFFFF;
            border: 2px solid #B9DB58;
        }
        .EndereçoNumero{
            display: flex;
            margin-right: 10px;
            max-width: 340px;
            width: 100%;
            input + input{
                margin-left: 10px;
                max-width: 60px;
                width: 100%;
            }
        }
        .Endereco{
            display: none;
            ul{
                li{
                    label{
                        font-weight: normal;
                        
                    }
                }
            }
        }

        .Endereco.active{
            display: block;
        }

        .imgRegister{
            background-image: linear-gradient(to bottom, #53A546, #A7DF63);
            height: 100vh;
            display: grid;
           img{
               max-width: 600px;
               width: 100%;
               justify-self: center;
                align-self: center;
           }
        }

        @media (max-width: 720px){
            display: grid;
            grid-template-columns: 1fr;
            .imgRegister{
           display: none;
        }
        }
`;