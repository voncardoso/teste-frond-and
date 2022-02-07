import styled  from 'styled-components';

export const Container = styled.header`
    max-width: 1227px;
    margin: 0 auto;
    min-width: 400px;
    width: 100%;
    background: transparent;
    position: relative;
    top: 30px;
        nav{
            max-width: 1138px;
            min-width: 400px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-left: auto;
            margin-right: auto;
            h2{
                font-size: 1.875rem;
                color: #BADC58;
                align-self: flex-end;
                z-index: 10;
                
            }

            ul{
                display: flex;
                list-style: none;
                justify-content: flex-end;
                z-index: 10;
                li{
                    margin-left: 32px;
                    font-size: 1rem;
                    align-self: center;
                    font-weight: 600;
                    color: #FFFFFF;
                    cursor: pointer;
                }
                li:hover{
                    color: rgba(255,255,255, 0.5);
                }
            }
        }   

        .ButtonMobile{
            display: none;
        }
        .ListNav{
           display: none;
        }

        img{
            position: relative;
        }
        .buttonRegister{
            padding: 10px 25px;
            background: #FFFFFF;
            color: #BADC58;
            border-radius: 4px;
            text-decoration: none;
            cursor: pointer;
        }

        .buttonRegister:hover{
            padding: 8px 23px;
            background: #81C861;
            color: #FFFFFF;
            border: 2px solid #FFFFFF;
        }
    
    @media (max-width: 1350px){
        top: 20px;
         nav{
            max-width: 1010px;
         }
   }


   @media (max-width: 1205px){
       top: 15px;
         nav{
        
            max-width: 1012px;
         }
   }
   @media (max-width: 1186px){
    top: 10px;
         nav{
             margin-top: 10px;
            max-width: 1000px;
         }
   }
   @media (max-width: 1093px){
       top: 10px;
    nav{
             margin-top: 10px;
            max-width: 920px;
         }
   }

   @media (max-width: 1041px){
        display: flex;
        justify-content: center;
        top: 10px;
        nav{
             margin-left: 35px;
             margin-right: 35px;
             margin-top: 10px;
            max-width: 850px;
            
         }
   }

   @media (max-width: 918px){
    nav{

            h2{
                font-size: 1.625rem;
                color: #BADC58;
                align-self: flex-end;
                z-index: 10;
            }
            ul{
                display: flex;
                list-style: none;
                justify-content: flex-end;
                z-index: 10;
                li{
                    margin-left: 32px;
                    font-size: 0.875rem;
                    align-self: center;
                    font-weight: 600;
                    color: #FFFFFF;
                }
                li:hover{
                    color: rgba(255,255,255, 0.5);
                }
            }
        }
    }

    @media (max-width: 748px){

    }

    @media (max-width: 748px){
        top: 0px;
        nav{
            max-width: 672px;
            h2{
                font-size: 1.375rem;
            }
            ul{
             
                li{
                    font-size: 0.625rem;
                }
                li:hover{
                    color: rgba(255,255,255, 0.5);
                }
            }
        }
        img{
            height: 500px;
            width: 400px;
        }
        .buttonRegister{
            padding: 5px 15px;
            background: #FFFFFF;
            color: #BADC58;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    @media (max-width: 748px){
        nav{
            display: none;
        }

        
    }
`
export const ContainerMoile = styled.nav`
    display: none;
    z-index: 0;
    list-style: none;
    text-decoration: none;
    @media (max-width: 748px) {
        display: block;
        position: absolute;
        z-index: 140;
        list-style: none;
        text-decoration: none;
        button{
            position: absolute;
            display: flex;
            margin-top: -20px;
            background: none;
            border: none;
            padding: .8rem 1rem;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight: bold;
            cursor: pointer;
            top: 40px;
            z-index: 100000;
        }

        button:before{
        margin-right: 6px;
        content: '';
        display: inline-block;
        height: 3px;
        width: 25px;
        background: #B9DB58;
        box-shadow: 0 6px #B9DB58, 0 -6px #B9DB58 ;
        transition: transform .3s;
        z-index: 100000;
    }
        button.active::before{
        margin-right: 6px;
        content: '';
        display: inline-block;
        height: 3px;
        width: 25px;
        background: #FFFFFF;
        box-shadow: 0 6px #FFFFFF, 0 -6px #FFFFFF;
        transition: transform .3s;
        z-index: 100000;
    }

    ul{
        position: absolute;
        display: none;
        top: 0px;
        height: 100vh;
        padding-top: 60px;
        background: #81C861;
        width: 200px;
        animation: show-right .8s forwards;
        z-index: 2000;
        li{
            list-style: none;
            margin-left: 17px;
            margin-top: 10px;
            margin-bottom: 20px;
            color: #FFFFFF;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            a{
                list-style: none;
                text-decoration: none;
            }
            
        }
        li:hover{
            color: rgba(255,255,255, 0.5);
        }
    }
    .ListMobile.active{
        display: block;
        animation: show-right .8s forwards;
    }
    .ListMobile{
        animation: show-left .8s forwards;
    }
    
    }
    button.active::before{
        transform: rotate(90deg);
    }

    .buttonRegister{
        max-width: 70px;
        padding: 5px 10px;
        background: #FFFFFF;
        text-align: center;
        color: #BADC58;
        border-radius: 4px;
        cursor: pointer;
        z-index: 30000;
        list-style: none;
        text-decoration: none;
    }

    .buttonRegister:hover{
            background: #81C861;
            color: #FFFFFF;
            border: 2px solid #FFFFFF;
    }

    .divSecundaria.active{
        position: fixed;
        width: 100%;
        padding: 100%;
        background: rgba(0,0,0,.3);
       z-index: 1;
       animation: show-right .8s forwards;
    }
    @keyframes show-right{
        from {
            opacity: 0;
            transform: translate3d(-30px, 0, 0);
        }

        to{
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes show-left{
        from {
            opacity: 0;
            transform: translate3d(30px, 0, 0);
        }

        to{
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    

`;

