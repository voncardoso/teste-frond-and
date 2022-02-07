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
    min-width: 360px;
    min-height: 200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
                top: 0.7px;
                align-self: center;
            }
        
        }
    }

    img{
        display: block;
        position: relative;
        top: -40px;
        max-width: 850px;
        min-height: 100px;
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
            max-width: 740px;
            width: 100%;
        }
   }

   @media (max-width: 1205px){
        img {
            max-width: 635px;
            width: 100%;
            top: -50px;
        }
   }

   @media (max-width: 1092px){
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
    .IntroText{
        margin-left: 20px;
    }
        img{
            width: 580px;
        }
        .Search-button:hover{
            font-size: 18px;
            padding: 9.5px;
        } 
   }
     
   @media (max-width: 949px){
    .IntroText{
        margin-left: 10px;
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
   }


   @media (max-width: 939px){
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
            width: 500px;
            height: 480px;
        }
        .Search-button:hover{
            font-size: 18px;
            padding: 9.5px;
        } 
   }

   @media (max-width: 833px){
    .IntroText{
        margin-left: -6px;
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
            margin: 0px;
            width: 460px;
            height: 430px;
        }
        .Search-button:hover{
            font-size: 18px;
            padding: 9.5px;
        } 
   }

   @media (max-width: 768px){
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
    .Search-button:hover{
            font-size: 10px;
            padding: 8.5px;
        } 
    }

    @media (max-width: 696px){
        img{
            width: 400px;
            height: 370px;
        }
        .Search-button:hover{
            font-size: 10px;
            padding: 8.5px;
        } 
    
    }

    @media (max-width: 647px){
        img{
            margin-top: 40px;
            left: 00px;
            width: 360px;
            height: 340px;
        }
        .Search-button:hover{
            font-size: 10px;
            padding: 8px;
        } 
    }

    @media (max-width: 608px){
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
           // right: 30px;
            width: 340px;
            height: 320px;
        }
        .Search-button{
            font-size: 0.75rem;
            top: 7px;
            padding: 8px;
            border-radius: 5px;
    }
    .Search-button:hover{
            font-size: 8px;
            padding: 7.6px;
        } 
    }

    @media (max-width: 553px){
        .IntroText{
            position: relative;
            z-index: 20;
            margin-top: 60px;
            div{
                position: relative;
                z-index: 30;
                width: 220px;
            }

        }

        img{
            top: -40px;
            width: 340px;
            height: 310px;
            left: 0px;
            z-index: 40;
        }

        .Search-button:hover{
            font-size: 8px;
            padding: 7.6px;
        } 
    }

    @media (max-width: 541px){
        img{
            top: -40px;
            width: 300px;
            height: 280px;
            left: 0px;
            z-index: 40;
        }
    }

    

    @media (max-width: 504px){
        img{
            width: 285px;
            height: 260px;
        }
    }

    @media (max-width: 488px){
        img{
            width: 270px;
            height: 260px;
        }
    }

    @media (max-width: 470px){
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
                    border-radius: 2.5px;
                    border: 0.10px solid #000000;
            }
            }
        }
        img{
            position: relative;
            top: -40px;
            left: -50px;
            width: 300px;
            height: 220px;

        }
        .Search-button{
            font-size: 0.75rem;
            top: 3px;
            padding: 4px;
            border-radius: 3px;
            margin-left: 5px;
    }
        .Search-button:hover{
            font-size: 5px;
            padding: 4px;
        }   
    }

    @media (max-width: 446px){
        img{
            width: 280px;
            height: 240px;
        }
    }

    @media (max-width: 421px){
        img{
            width: 250px;
            height: 240px;
        }
    }

    @media (max-width: 394px){
        img{
            width: 230px;
            height: 220px;
        }
    }

    @media (max-width: 378px){
        img{
            width: 215px;
            height: 190px;
        }
        .Search-button{
            font-size: 0.75rem;
            top: 3px;
            padding: 3.6px;
            border-radius: 3px;
            margin-left: 5px;
    }
    .Search-button:hover{
            font-size: 0.75rem;
            top: 2.8px;
            padding: 1.5px;
        }  
    }
`;

export const BestRecipes = styled.section`
    background: #FAFAFC;
    color: #1D164D;
    margin: 0 auto;
    max-width: 1575px;
    h2{
        font-size: min(2.5rem, 4vw);
        text-align: center;
        padding-top: 60px;
    }
    p{
        text-align: center;
        font-size: min(1.25em, 3vw);
        font-weight: normal;
        padding-right: 40px;
        padding-left: 40px;
        max-width: 580px;
        min-width: 100px;
        letter-spacing: 0.5px;
        line-height: min(30px, 4vw);
        margin: 10px auto;
        color: #9D9AAF;
    }

    ul{
        max-width: 1100px;
        display: grid;
        grid-template-columns: minmax(100px,1fr) minmax(100px,1fr);
        margin: 0 auto;
        padding: min(60px, 10vw);
        gap: 40px;
       li{  
           display: flex;
           justify-self: center;
           max-width: 520px;
           min-width: 100px;
           min-height: 80px;
           max-height: 230px;
           width: 100%;
           background: #FFFFFF;
           border-radius: 10px;
           box-shadow: 5px 5px 15px 0px rgb(44, 44, 44, 0.15);
           div{
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            height: 100%;
            
             div{

                 max-width: 200px;
                 min-width: 100px;
                 max-height: 128px;
                 min-height: 50px;
                 height: 100%;
                 width: 100%;
                 align-self: center;
                 margin: 4vh auto 4vh auto;
                 padding-left: 5px;
                 
                h3{
                   display: flex;
                   max-width: 200px;
                   width: 100%;
                   font-size: min(1.75rem, 3.4vw); 
                }
                button{
                    padding: 8px 16px;
                    margin: min(10px, 5vh) auto 0px 0px;
                    background: #BADC58;
                    font-size: min(1rem, 3vw);
                    color: #FFFFFF;
                    border: none;
                    border-radius: 5px;
                    font-weight: normal;
               }
               button:hover{
                    background: #FFFFFF;
                    color: #B9DB58;
                    border: solid 2px #B9DB58;
                }
             }
           }
            img{
                max-width: 300px;
                min-width: 100px;
                min-height: 80px;
                width: 100%;
                
            }
       }
    }    

    @media (max-width: 890px){
        ul{
            display: grid;
            grid-template-columns: 1fr;

            li{
                max-height: 170px;
                max-width: 385px;
            }

           
        }
        .divInterna{
            width:165px;
        }
    }

    @media (max-width: 690px){
        ul{
            li{
            max-width: 370px;
            height: 140px;
                div{
                    margin-left: 15px;
                    margin-right: 15px;
                    
                }
            }
        }

        .divInterna{
            height: 110px;
            button{
                height: 40px;
            }
        }

    }
    
    @media (max-width: 604px){
        ul{
            li{
            width: 350px;
            height: 130px;
            div{
            margin-left: 15px;
            margin-right: 15px;
        }
        }
        }

        .divInterna{
            h3{
                width: 140px;
            }
        }

    }

    @media (max-width: 460px){
        ul{
            li{
                height: 90px;
                width: 240px;
                img{
                    width: 120px;
                }
            }
        }
        .divInterna{
            height: 80px;
            margin-left: 0px;
            margin-bottom: 0px;
            margin-top: 6px;
                h3{
                    margin-top: 0px;
                    height: 30px;
                    width: 120px;
                }
                button{
                    margin-top: 5px;
                    height: 25px;
                    width: 65px;
                    padding: 0px;
                    font-size: 11px;
                }
        }
    }

    @media (max-width: 420px){
        .divInterna{
            width: 140px;
            margin-left: -10px;
        }
    }

`;


export const BestServices = styled.section`
    max-width: 1570px;
    width: 100%;
    min-width: 360px;
    display: flex;
    margin: 40px auto;
    img{
        max-width: 726px;
        min-width: 100px;
        display: block;
        width: 100%;
    }

    div{
        max-width: 300px;
        min-width: 200px;
        width: 100%;
        align-self: center;
        max-width: 450px;
        padding-right: 30px;
        h2{
            font-size: min(2.5rem, 4vw);
            color: #1D164D;
            margin-bottom: 40px;
            letter-spacing: 0.5px;
        }

        p{
            font-size: min(1.25em, 3.8vw);
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
           position: relative;
           width: 600px;
           height: 500px;
           border: none;
       }
    .H2Text{
        margin-top: 40px;
     //   max-width: 350px;
       // font-size: 1.866rem;
        margin-bottom: 15px;
   }
   div{
       position: relative;
       z-index: 10;
       margin-top: -75px;
       margin-left: 20px;
       max-width: 350px;
        p{
            font-size: 1rem;   
            letter-spacing: 0.5px;
            line-height: 30px;
            margin: 10px auto;
            padding-right: 10px;
        }

        a {
            position: relative;
            top: 20px;
            font-size: 1rem;

        }
   }

   }

   @media (max-width: 561px){
        div{
            p{
                line-height: 20px;
            }
        }
   }

   @media (max-width: 450px){
    img{
        display: none;
    }
    

    div{
        padding: 60px;

        p{
            line-height: 25px;
        }
    }
   }
   @media (max-width: 280px){
       max-width: 280px;
    div{
        padding: 10px;

        p{
            line-height: 25px;
        }
    }
   }
`;

export const OurBlog = styled.section`
    max-width: 1575px;
    margin: 0 auto;
    background: #FAFAFC;
    h2{
        font-size: min(2.5rem, 4vw);
        text-align: center;
        padding-top: 60px;
    }
    p{
        text-align: center;
        font-size: min(1.25em,2.5vw);
        font-weight: normal;
        max-width: 580px;
        min-width: 100px;
        padding-right: 40px;
        padding-left: 40px;
        letter-spacing: 0.5px;
        line-height: min(30px,4vw);
        margin: 10px auto;
        color: #9D9AAF;
    }

    ul{
        max-width: 1575px;
        display: flex;
        justify-content: flex-start;
        list-style: none;
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        margin-left: 10%;
        margin-top: 30px;
        li{
            max-width: 348px;
            min-width: 200px;
            max-height: 470px;
            min-height: 200px;
            height: 100%;
            width: 100%;
            margin-left: 15px;
            margin-bottom: 60px;
            background: #FFFFFF;
            box-shadow: 5px 5px 15px 0px rgb(44, 44, 44, 0.15);
            border-radius: 8px;
            img{
                max-width: 348px;
                min-width: 40px;
                width: 100%;
            }
            .divContainer{
                margin-left: 20px;
                margin-right: 20px;
              h5{
                  max-width: 240px;
                  margin-top: 20px;
                  font-size: min(1.75rem, 3.8vw);
              }  
              div{
                display: flex;
                justify-content: flex-start;
                align-items:center;
                height: 70px;
                padding-bottom: 20px;
                  img{
                      width: 40px;
                      height: 40px;
                      border-radius: 100%;
                    }
                  strong{
                      font-size: min(14px, 3vw);
                      margin-left: 5px;
                      color: #9D9AAF;
                      font-weight: normal;
                    }
              }
            }

        }


    }
    .ulOverflow.active{
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

   .Search-Seta{
       position: relative;
       top: -260px;
       left: 95%;
       z-index: 40;
       align-self: flex-end;
       color: #B9DB58;
       padding: 10px 10px;
       background: #FAFAFC;
       border-radius: 100%;
   }

   @media (max-width: 1196px){
       .Search-Seta{
        top: -300px;
       }
    
   }

   @media (max-width: 845px){
    .Search-Seta{
        top: -290px;
    }
   }
   @media (max-width:  638px){
    .Search-Seta{
        top: -280px;
    }
   }
   @media (max-width: 577px){
    .Search-Seta{
        top: -275px;
        left: 90%;
    }
   }
   @media (max-width: 551px){
    .Search-Seta{
        top: -245px;
        left: 90%;
    }
   }

   @media (max-width: 473px){
    .Search-Seta{
        top: -240px;
        left: 90%;
    }
   }
   @media (max-width: 397px){
    .Search-Seta{
        top: -230px;
        left: 90%;
    }
   }

`;

export const Membership = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1575px;
    margin: 0 auto;
    background: #FFFFFF;
    img{
        width: 100%;
        justify-self: end;
    }
    div{
        margin: 0 auto 40px auto;
        align-self: center;
        max-width: 500px;
        min-width: 100px;
        width: 100%;
        h2{
            font-size: min(2.5rem, 4vw);
            max-width: 400px;
            padding-top: 60px;
            color: #1D164D;
            margin-bottom: 20px;
            letter-spacing: 0.5px;
        }

        div{
            max-width: 600px;
            width: 100%;
            input{
                font-size: 1rem;
                max-width: 360px;
                min-width: 50px;
                width: 100%;
                height: 50px;
                border-radius: 5px;
                border: 0.5px solid #1D164D ;
                font-weight: normal;
                padding-left: 5px;
            }
            button{
                position: relative;
                top: 2px;
                margin-left: 10px;
                height: 52px;
                width: 70px;
                font-weight: normal;
                color: #FFFFFF;
                font-size: 1.2rem;
                border: none;
                border-radius: 5px;
                background: #B9DB58;
            }
        }

        button:hover{
            background: #FFFFFF;
            color: #B9DB58;
            border: solid 1px #B9DB58;
        }
        
    }

    @media (max-width: 1061px) {
        .divInputs{
            max-width: 380px;
            h2{
                font-size: 34px;
            }
            input{
                height: 40px;
                margin: 0px;
                max-width: 280px;
            }
            button{
                height: 42px;
                width: 70px;
            }
        }
    }

    @media (max-width: 1061px) {
        .divInputs{
            max-width: 360px;
            h2{
                font-size: min(34px, 4vw);
                max-width: 320px;
            }
            input{
                height: 35px;
                margin: 0px;
                max-width: 280px;
            }
            button{
                height: 38px;
                width: 60px;
                margin-left: 10px;
            }
        }
    }

    @media (max-width: 804px){
        .divInputs{
            max-width: 320px;
            h2{
                font-size: min(28px, 4vw);
                max-width: 300px;
            }
            input{
                height: 35px;
                margin: 0px;
                max-width: 240px;
            }
            button{
                height: 38px;
                width: 60px;
                margin-left: 10px;
            }
        }
    }

    @media (max-width: 644px){
        .divInputs{
            max-width: 260px;
            h2{
                font-size: min(24px, 4vw);
                max-width: 300px;
            }
            input{
                height: 30px;
                margin: 0px;
                max-width: 180px;
            }
            button{
                top: 1px;
                height: 32px;
                width: 60px;
                margin-left: 10px;
            }
        }
    }

    @media (max-width: 550px)
    {
        display: grid;
        grid-template-columns: 1fr;
        img{
            display: none;
        }
        .divInputs{
            max-width: 300px;
            h2{
                font-size: 22px;
                max-width: 300px;
            }
            input{
                height: 30px;
                margin: 0px;
                max-width: 220px;
            }
            button{
                top: 1px;
                height: 32px;
                width: 60px;
                margin-left: 10px;
            }
        }
    }
`
export const CookiesContainer = styled.div`
    color:#FFFFFF;
    position: fixed;
    max-width: 1570px;
    width: 100%;
    bottom: 2rem;
    z-index: 1000;
    font-size: 1rem;
    font-weight: normal;
    .cookies-content{
        box-shadow: 0 1px 3px rgba(0,0,0, 0.15);
        background: #B9DB58;
        max-width: 900px;
        min-width: 200px;
        width: 100%;
        border-radius: 5px;
        padding: 1rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 0.5rem;
        transform: translateY(1rem);
        animation: slideUp 0.5s forwards;

    }
    .cookies-save{
        grid-column: 2;
        grid-row: 1/3;
        background: #FFFFFF;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.8rem 1rem;
        border-radius: 5px;
        color: #B9DB58;
    }
    .cookies-save:hover{
        background: #B9DB58;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
    }

    .cookies-pref{
        label{
            margin-left: 20px;
        }
    }

    @keyframes slideUp{
        to{
            transform: initial;
            opacity: initial;
        }
    }

    @media (max-width: 949px){
        .cookies-content{
            max-width: 800px;
            
        }
    }
    @media (max-width: 860px){
        .cookies-content{
            max-width: 700px;
            
        }
    }
    @media (max-width: 743px){
        .cookies-content{
            max-width: 600px;
            
        }
    }
    @media (max-width: 646px){
        .cookies-content{
            max-width: 500px;
        }
        .cookies-save{
            border-radius: 5px;
            color: #B9DB58;
            padding: 0.6rem 0.8rem;
    } 
    }

    @media (max-width: 537px){
        .cookies-content{
            max-width: 400px;
            
        }
        .cookies-save{
            border-radius: 5px;
            color: #B9DB58;
            padding: 0px;
            height: 40px;
            padding: 0 5px;
            align-self: center;
    } 

    @media (max-width: 537px){
        .cookies-content{
            max-width: 300px;
            
        }
        .cookies-save{
            border-radius: 5px;
            color: #B9DB58;
            padding: 0px;
            height: 40px;
            padding: 0 5px;
            align-self: center;
    } 
    }
`;
