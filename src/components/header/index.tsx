import {Container} from './style';


export function Header(){
    return(
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
    )
}