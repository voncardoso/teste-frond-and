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
                }
                li:hover{
                    color: rgba(255,255,255, 0.5);
                }
            }
        }   

        img{
            position: relative;
        }
        .buttonRegister{
            padding: 10px 25px;
            background: #FFFFFF;
            color: #BADC58;
            border-radius: 4px;
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


