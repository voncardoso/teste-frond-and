import { IconContext } from "react-icons";
import { Container, Intro } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import IllustrationIMg from '../../assets/Illustration.svg';
export function Home(){
    return(
        <Container>
            <Intro >
                <div className="IntroText">
                    <h1>
                        Ready for Trying a new recipe?
                    </h1>
                   
                   <div>
                    <input type="text" placeholder="Search healthy recipes"/>
                    
                    <IconContext.Provider value={{className: "Search-button" }}>
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </IconContext.Provider>
                   </div>
                </div>
                <img src={IllustrationIMg} />
            </Intro >
        </Container>
    )
}