import styled  from 'styled-components';

export const Container = styled.header`
    max-width: 1470px;
    width: 100%;
    z-index: 2;
        nav{
            max-width: 1260px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin: 30px auto 0px auto;

            h2{
                font-size: 1.875rem;
                color: #BADC58;
                align-self: flex-end;
            }

            ul{
                display: flex;
                list-style: none;
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
        .buttonRegister{
            padding: 10px 25px;
            background: #FFFFFF;
            color: #BADC58;
            border-radius: 4px;
            cursor: pointer;
        }

        .buttonRegister:hover{
            background: rgba(255,255,255, 0.5);
            color: #FFFFFF;
        }
`


