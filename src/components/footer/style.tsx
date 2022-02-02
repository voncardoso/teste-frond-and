import styled  from 'styled-components';

export const Container = styled.footer`
    max-width: 1250px;
    height: 100px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    letter-spacing: 0.5px;
    font-size: min(1rem, 3vw);
    padding-left: 20px;
    padding-right: 20px;
        ul{
            display: flex;
            li{
                list-style: none;
                margin-left: 20px;
                color: #9D9AAF;
                letter-spacing: 0.5px;
                cursor: pointer;
            }
        }
`;