import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1570px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    height: 100vh;

        h1{
            margin-bottom: 40px;
        }

        .divRegister{
            justify-self: center;
            align-self: center;
            max-width: 300px;
            ul{
                
                list-style: none;
                text-decoration: none;
                li{
                    input{
                        width: 290px;
                        height: 30px;
                        margin-bottom: 20px;
                        padding-left: 5px;
                    }
                }
            }
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

        .imgRegister{
            background: #F2F8F0;
            height: 100vh;
            display: grid;
           img{
               max-width: 600px;
               width: 100%;
               justify-self: center;
                align-self: center;
           }
        }
`;