import styled from 'styled-components';


export const Container = styled.section`
    max-width: 1520px;
    width: 100%;
    margin: 0 auto;
`;

export const Intro = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: min(-80px,5vw);
    z-index: 1;
    .IntroText{
        align-self: center;  
        max-width: 525px;
        min-width: 100px;
        width: 100%;
        margin-left: 45px;
        h1{
            font-size: min(3.875rem, 20vw);
            height: auto;
            max-width: 350px;
            min-width: 100px;
        }


        div{
            height: 42px;
            input{
                margin-top: 20px;
                width: 340px;
                height: 40px;
                border-radius: 5px;
                padding-left: 10px;
                font-size: 1rem;
                color: rgb(188,188,188);
                font-weight: normal;
            }

            button{
                align-self: flex-end;
                
                border-radius: 5px;
                border: none;
                background: none;
                
                align-self: center;
            }
        
        }
    }

    img{
        max-width: 800px;
        max-height: 800px;
        min-width: 300px;
        min-height: 300px;
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
`;