import { Container, Intro } from "./style";
import IllustrationIMg from '../../assets/Illustration.svg'
export function Home(){
    return(
        <Container>
            
            <Intro >
                <h1>
                    Ready for Trying a new recipe?
                </h1>
                <img src={IllustrationIMg} alt="" />
            </Intro >
        </Container>
    )
}