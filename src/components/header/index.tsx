import {Container, ContainerMoile} from './style';
import {initMenuMobile} from "./script";

export function Header(){
        
    return(
        <>
        <Container>
            <nav>
                <h2>Healthy Food</h2>
                <ul>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN </li>
                    <li>
                        <a className='buttonRegister' href="">REGISTER</a>
                    </li>
                </ul>
            </nav>
        </Container>
        <ContainerMoile>
            <div className="divSecundaria"></div>   
            <button className="ButtonMobile" onClick={initMenuMobile}></button>
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