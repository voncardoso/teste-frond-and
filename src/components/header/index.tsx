import {Container, ContainerMoile} from './style';


export function Header(){

    const menuButton = document.querySelector('.ButtonMobile');
    const ListMobile  = document.querySelector('.ListMobile ');
    
    function menuMobile(){
        console.log('clicou');
        menuButton?.classList.add('active');
        ListMobile?.classList.add('active');
    }

   
        
    return(
        <>
        <Container>
            <nav>
                <h2>Healthy Food</h2>
                <ul>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN </li>
                    <li className='buttonRegister'>REGISTER</li>
                </ul>
            </nav>
        </Container>
        <ContainerMoile>
            <div className="divSecundaria"></div>   
            <button className="ButtonMobile" onClick={menuMobile}>'1'</button>
                <ul className="ListMobile">
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN </li>
                    <li className='buttonRegister'>REGISTER</li>
                </ul>
        </ContainerMoile>
        </>
    )
}