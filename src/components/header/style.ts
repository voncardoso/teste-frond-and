import styled  from 'styled-components';

export const Container = styled.header`
    max-width: 1270px;
    margin: 0 auto;
    min-width: 400px;
    width: 100%;
  
        nav{
            max-width: 1170px;
            min-width: 400px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
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

    @media (max-width: 1270px){
         nav{
            max-width: 1000px;
         }
   }

   @media (max-width: 1070px){
         nav{
            max-width: 900px;
         }
   }

   @media (max-width: 1000px){
         nav{
             margin-top: 10px;
            max-width: 700px;
         }
   }
`


