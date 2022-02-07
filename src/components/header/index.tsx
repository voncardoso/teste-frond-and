import {Container, ContainerMoile} from './style';
import {initMenuMobile} from "./script";

export function Header(){
        
    return(
        <>
        <Container>
            <nav>
                <h2>Healthy Food</h2>
                <ul className='List'>
                    <li>
                        <a href="#recipes">HEALTHY RECIPES</a>
                    </li>
                    <li>
                        <a href="#blog">
                            BLOG
                        </a>
                    </li>
                    <li>
                        <a href="#join">
                            JOIN 
                        </a>
                    </li>
                    <li>
                        <a className='buttonRegister' href="/Register">REGISTER</a>
                    </li>
                </ul>
            </nav>
        </Container>
        <ContainerMoile>
            <div className="divSecundaria"></div>   
            <button className="ButtonMobile" onClick={initMenuMobile}></button>
                <ul className="ListMobile">
                    <li>
                        <a href="#recipes">HEALTHY RECIPES</a>
                    </li>
                    <li>
                        <a href="#blog">BLOG</a>
                    </li>
                    <li>
                        <a href="#join">Join</a> 
                    </li>
                    <li className='buttonRegister'>
                        <a className='buttonRegisterLink' href="/Register">REGISTER</a>
                    </li>
                </ul>
        </ContainerMoile>
        </>
    )
}