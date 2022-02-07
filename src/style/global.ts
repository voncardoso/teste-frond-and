import {createGlobalStyle} from 'styled-components';



export const GlobalStyle = createGlobalStyle`
   :root{
        --background: #FFFFFF;
        --background-secondary: #FAFAFC;
   }
   
   *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
           
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
            
        }
    }

    body{
        background: var(--background);
        --webkit-font-font-smooth: antialiased; // deixar a finte mais nitida
    }

    body, input, textarea, button{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: bold;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay-sucesso{
        border: none;
        z-index: 10;
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content-sucesso{
        border: none;
        z-index: 10;
        max-width: 350px;
        width: 100%;
        margin: 0px 30px;
        height: 300px;
        background: #F2F4F5;
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
        display: flex;
           .CadastroSucesso{
                max-width: 400px;
                justify-content: center;
                align-items: center;
                align-self: center;
                margin: 0 auto;
                h4{
                    max-width: 250px;
                    width: 100%;
                    font-size: 1.5rem;
                    font-weight: normal;
                    color: #BADC58;
                    text-align: center;
                    margin-bottom: 30px;
                }
                h6{
                    font-size: 1.125rem;
                    text-align: center;
                    font-weight: normal;
                }
                button{
                    display: flex;
                    margin-top: 40px;
                    margin-left: auto;
                    margin-right: auto;
                    border: none;
                    background: #0074D8;
                    color: #FFFFFF;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 1.125rem;
                }
                Button:hover {
                    background: rgba(0, 116, 216, 0.8);
                }

                .buttomDelete{
                    display: flex;
                    margin-top: 40px;
                    margin-left: auto;
                    margin-right: auto;
                    border: none;
                    background: #E52E4D;
                    color: #FFFFFF;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-size: 16px;
                }
                .buttomDelete:hover {
                    background: rgba(229, 46, 77, 0.8);
                }
                .delete{
                    max-width: 250px;
                    width: 100%;
                    font-size: 18px;
                    color: #E52E4D;
                    text-align: center;
                    margin-bottom: 30px;
                }

           }
           .global-class-name{
            width: 87.5px;
           }
           .teste{
               width: 87.5px;
            
               margin: 0 auto;
           }
    }

`