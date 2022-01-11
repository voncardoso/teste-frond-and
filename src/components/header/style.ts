import styled, {createGlobalStyle} from 'styled-components';

export const Container = styled.header`
    display: flex;
    margin-top: 40px;
    justify-content: space-around;
    h3{
        height: 40px;
        font-size: 2rem;
        font-weight: bold;
        color: #BADC58;
    }

    nav{
        ul{
            height: 40px;
            list-style: none;
            display: flex;
                li{
                    align-self: center;
                    margin-left: 20px;
                    font-size: 20px;
                    font-weight: 600;
                }
           
        }
    }
`


