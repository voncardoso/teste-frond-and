import styled from 'styled-components';
import IllustrationIMg from '../../assets/Illustration.svg';

export const Container = styled.section`
    max-width: 1570px;
    width: 100%;
    position: relative;
    margin: 0 auto;
    height: 100vh;
`;

export const Intro = styled.section`
    max-width: 1570px;
    width: 100%;
    display: flex;
    z-index: 1;
    margin: 0 auto;

    .IntroText{
        align-self: center;  
        max-width: 380px;
        width: 100%;
        justify-content: center;
        margin: 0 auto;
        h1{
            font-size: 3.5rem;
            color: #1D164D;
        }
        div{
            input{
               height: 40px;
               width: 310px;
               padding-left: 10px;
               border-radius: 5px;
               font-size: 1rem;
               font-weight: normal;
            }

            button{
                position: relative;
                align-self: flex-end;
                border-radius: 5px;
                border: none;
                background: none;
                top: 2px;
                align-self: center;
            }
        
        }
    }

    img{
        display: block;
        position: relative;
        top: -40px;
        max-width: 850px;
        min-height: 200px;
        width: 100%;
    }

    .Search-button{
        background: #B9DB58;
        color: #FFFFFF;
        font-size: 20px;
        margin-left: 10px;
        align-self: center;
        position: relative;
        top: 16px;
        padding: 13px;
        border-radius: 5px;
    }

    .Search-button:hover{
        font-size: 20px;
        padding: 11px;
        background: #FFFFFF;
        color: #B9DB58;
        border: solid 2px #B9DB58;
    }

    @media (max-width: 1350px){
        margin: 0 auto;
        .IntroText{
            max-width: 450px;
            h1{
                max-width: 400px;
                margin-left: 44px;
                font-size: 3.5rem;
                color: #1D164D;
            }

        div{

            input{
                width: 300px;
               margin-left: 42px ;
            }
        }
        }
        img {
            max-width: 800px;
            width: 100%;
        }
   }

   @media (max-width: 1186px){
        img {
            max-width: 650px;
            width: 100%;
            top: -50px;
        }
   }

   @media (max-width: 1080px){
    .IntroText{
            h1{
                max-width: 320px;
                font-size: 3.125rem;
            }
            div{
                input{
                margin-top: 20px;
                height: 35px;
                width: 260px;
                }
                button{
                border-radius: 5px;
                border: none;
                background: none;
                top: 2.8px;
                align-self: center;
            }
            }
        }
        nav{
             margin-top: 10px;
            max-width: 1000px;
         }
         .Search-button{
        background: #B9DB58;
        color: #FFFFFF;
        font-size: 16px;
        margin-left: 10px;
        top: 13px;
   }

   img{
       width: 600px;
   }
   }

   @media (max-width: 1041px){
        img{
            width: 550px;
        }
   }

   @media (max-width: 918px){
       
       .IntroText{
        margin-left: 0px;
           h1{
               width: 250px;
               font-size: 2.875rem;
           }
           div{
            input{
               width: 240px;
            }
           }
       }
        img{
            width: 520px;
        }
   }

   @media (max-width: 918px){
    .IntroText{
        margin-left: 0px;
           h1{
               width: 250px;
               font-size: 2.75rem;
           }
           div{
            input{
               width: 230px;
            }
           }
       }
        img{
            width: 480px;
        }
   }

   @media (max-width: 818px){
    .IntroText{
        margin-left: 0px;
           h1{
               width: 250px;
               font-size: 2.375rem;
           }
           div{
            input{
               width: 200px;
            }
           }
       }
        img{
            width: 440px;
        }
   }

   @media (max-width: 748px){
       margin-top: 0px;
        .IntroText{
            margin-left: -8px;
            h1{
                margin-top: -50px;
                font-size: 2rem;
                width: 170px;
            }
            
            
            div{
                input{
                    width: 150px;
                    height: 25px;
                    font-size: 0.75rem;
                }

            }
        }
        img{
            width: 450px;
            height: 400px;
        }
        .Search-button{
            font-size: 0.75rem;
            top: 9px;
            padding: 10px;
            border-radius: 5px;
    }
    }

    @media (max-width: 689px){
        img{
            width: 400px;
            height: 350px;
        }
    }

    @media (max-width: 639px){
        img{
            margin-top: 40px;
            left: 20px;
            width: 340px;
            height: 300px;
        }
    }

    @media (max-width: 579px){
        .IntroText{
            position: relative;
            z-index: 20;
            margin-left: -8px;
            h1{
                margin-top: -50px;
                font-size: 1.625rem;
                width: 150px;
            }
            
            div{
                input{
                    width: 120px;
                    height: 20px;
                    font-size: 0.75rem;
                    border-radius: 4px;
                }

            }
        }
        img{
            position: relative;
            right: 30px;
            width: 320px;
            height: 280px;
        }
        .Search-button{
            font-size: 0.75rem;
            top: 8px;
            padding: 8px;
            border-radius: 5px;
    }
    }

    @media (max-width: 530px){
        .IntroText{
            position: relative;
            z-index: 20;
            margin-top: 60px;
            h1{

            }
            div{
                position: relative;
                z-index: 30;
                width: 220px;
                input{

                    
                }
            }
        }
        img{
            position: relative;
            top: -40px;
            width: 350px;
            height: 300px;
            left: -10px;
            z-index: 40;
        }
    }


    @media (max-width: 428px){
        .IntroText{
            margin-top: 20px;
            left: 10px;
            h1{
                font-size: 1.25rem;
                margin-left: 20px;
                width: 100px;
            }
            div{
                input{
                    margin-top:5px;
                margin-left: 20px;
                width: 90px;
                height: 15px;
                font-size: 8px;
                
            }
            }
        }
        img{
            position: relative;
            top: -40px;
            left: -50px;
            width: 260px;
            height: 200px;

        }
        .Search-button{
            font-size: 0.75rem;
            top: 5px;
            padding: 5px;
            border-radius: 3px;
    }
    }

`;

export const BestRecipes = styled.section`
    background: #FAFAFC;
    color: #1D164D;
    margin: 0 auto;
    h2{
        font-size: 2.5rem;
        text-align: center;
        padding-top: 60px;
    }
    p{
        text-align: center;
        font-size: 1.25em;
        font-weight: normal;
        max-width: 580px;
        letter-spacing: 0.5px;
        line-height: 30px;
        margin: 10px auto;
        color: #9D9AAF;
    }

    ul{
        width: 100%;
        margin: 0 auto;
        list-style: none;
        display: grid;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        flex-wrap: wrap;
        margin-top: 40px;
        padding-bottom: 60px;
        li{
            max-width: 600px;
            width: 100%;
            min-width: 250px;
            background: #FFFFFF;
            box-shadow: 5px 5px 15px 0px rgb(44, 44, 44, 0.15);
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            img{
                display: block;
                max-width: 280px;
                width: 100%;
            }
            div{
                margin-left: 40px;
                width: 250px;
                height: 250px;
                align-self: center;
                h3{
                    font-size: 2rem;
                    margin-top: 20%;
                    margin-bottom: 25px;
                }

                a {
                    background: #BADC58;
                    text-decoration: none;
                    padding: 10px 20px;
                    font-size: 1.375rem;
                    font-weight: normal;
                    color: #FFFFFF;
                    border-radius: 5px;
                }
                a:hover{
                    font-size: 20px;
                    font-size: 1.375rem;
                    padding: 8px 18px;
                    background: #FFFFFF;
                    color: #B9DB58;
                    border: solid 2px #B9DB58;
                }
            }
        }
    }
   @media (max-width: 918px){
            h2{
               font-size: 2.255rem;
           }

           ul{
                li{
                    max-width: 500px;
                    min-width: 200px;
                    height: 180px;
                    width: 100%;
                    img{
                        margin-top: 0px;
                        display: block;
                        max-width: 200px;
                        max-height: 200px;
                        height: 100%;
                        width: 100%;
                    }
                    div{
                        width: 220px;
                        height: 180px;
                        align-self: center;
                        h3{
                            font-size: 2rem;
                            margin-top: 15%;
                            margin-bottom: 25px;
                            align-self: center;
                        }
          
                            a {
                                background: #BADC58;
                                text-decoration: none;
                                padding: 10px 20px;
                                font-size: 1.25rem;
                                font-weight: normal;
                                color: #FFFFFF;
                                border-radius: 5px;

                            }
                            a:hover{
                                font-size: 20px;
                                font-size: 1.375rem;
                                padding: 8px 18px;
                                background: #FFFFFF;
                                color: #B9DB58;
                                border: solid 2px #B9DB58;
                            }
                        }
                  }
                  .H2Text{
                        margin-top: 40px;
                        width: 350px;
                        font-size: 2.125rem;
                }
            }
   }

   @media (max-width: 818px){

           h2{
               font-size: 2.255rem;
           }
   }
  
`;


export const BestServices = styled.section`
    max-width: 1570px;
    display: flex;
    margin: 0 auto;
    img{
        max-width: 726px;
        min-width: 100px;
        display: block;
        width: 100%;
    }
    div{
        align-self: center;
        max-width: 450px;
        margin-left: 30px;
        h2{
            font-size: 2.5rem;
            color: #1D164D;
            margin-bottom: 40px;
            letter-spacing: 0.5px;
        }

        p{
            font-size: 1.25em;
            font-weight: normal;
            letter-spacing: 0.5px;
            line-height: 30px;
            margin: 10px auto;
            color: #9D9AAF;
            margin-bottom: 40px;
        }

        a {
            background: #BADC58;
            box-shadow: 0px 5px 15px 0px rgb(186, 220, 88, 0.9);
            text-decoration: none;
            padding: 10px 20px;
            font-size: 1.375rem;
            font-weight: normal;
            color: #FFFFFF;
            border-radius: 5px;
        }
        
        a:hover{
            font-size: 20px;
            font-size: 1.375rem;
            padding: 8px 18px;
            background: #FFFFFF;
            color: #B9DB58;
            border: solid 2px #B9DB58;
        }
    }

   @media (max-width: 918px){
       img{
           height: 500px;
           border: none;
       }
    .H2Text{
        margin-top: 40px;
        width: 350px;
        font-size: 2.125rem;
        margin-bottom: 10px;
   }
   div{
       margin-top: -75px;
        p{
            font-size: 1rem;   
            letter-spacing: 0.5px;
            line-height: 30px;
            margin: 10px auto;
        }

        a {
            position: relative;
            top: 20px;
            font-size: 1rem;

        }
   }

   }
`;

export const OurBlog = styled.section`
    margin: 0 auto;
    background: #FAFAFC;
    h2{
        font-size: 2.5rem;
        text-align: center;
        padding-top: 60px;
    }
    p{
        text-align: center;
        font-size: 1.25em;
        font-weight: normal;
        max-width: 580px;
        letter-spacing: 0.5px;
        line-height: 30px;
        margin: 10px auto;
        color: #9D9AAF;
    }

    ul{
        max-width: 1577px;
        min-width: 300px;
        margin-left: 112px;
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        margin-top: 40px;
        padding-bottom: 60px;
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        
        li{
            margin-left: 30px;
            background: #FFFFFF;
        }
    }

    ul::after{
        content: '→';
        position: absolute;
        padding: 10px 12px;
        background: #FFFFFF;
        border-radius: 50%;
        font-weight: bold;
        top: 230px;
        right: 140px;
        color: #B9DB58;
        animation: seta .5s ease-in 0s infinite alternate; /* fazer funcionar a animação */
    }


`;