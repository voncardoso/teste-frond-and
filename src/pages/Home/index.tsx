import { IconContext } from "react-icons";
import { Container, Intro, BestRecipes, BestServices, OurBlog, Membership, CookiesContainer  } from "./style";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import {initMenuMobile} from "./script";
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import IllustrationIMg from '../../assets/Illustration.png';
import ComigaImg1 from '../../assets/comida_1.svg';
import ComigaImg2 from '../../assets/comida_2.svg';
import ComigaImg3 from '../../assets/comida_3.svg';
import ComigaImg4 from '../../assets/comida_4.svg';
import Services from '../../assets/bloco_services.png';
import BlocoImg1 from '../../assets/blog_image_1.svg';
import BlocoImg2 from '../../assets/bloco_image_2.svg';
import BlocoImg3 from '../../assets/bloco_image_3.svg';
import BlocoImg4 from '../../assets/bloco_image_4.svg';
import Bloco_final from '../../assets/bloco_final_image.svg';

export function Home(){
    const SearchSeta = document.querySelector('.Search-Seta');
    const ulOverflow = document.querySelector('.ulOverflow');
  SearchSeta?.addEventListener('click', ()=>{
    SearchSeta?.classList.toggle('active');
    ulOverflow?.classList.add('active');
    
  })
    return(
        <Container>
             <Header />
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
                <img src={IllustrationIMg} alt="" />
            </Intro >

            <BestRecipes>
                <h2 className="H2Text">Our Best Recipes</h2>
                <p>Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                    <li>
                        <img src={ComigaImg1} alt="Broccoli" />
                        <div>
                            <div className="divInterna">
                                <h3>Broccoli Salad with Bacon</h3>
                                <button>See Recipe</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <img src={ComigaImg2} alt="Burgrs" />
                        <div>
                            <div className="divInterna">
                                <h3>Classic Beef Burgers</h3>
                                <button>See Recipe</button>
                            </div>

                        </div>
                    </li>
                    <li className="imgBeste-3">
                        <img src={ComigaImg3} alt="Salad" />
                        <div>
                            <div className="divInterna">
                                <h3>Classic Potato Salad</h3>
                                <button>See Recipe</button>
                            </div>
                        </div>
                    </li>
                    <li className="imgBeste-3">
                        <img src={ComigaImg4} alt="Cherry Cobbler" />
                        <div>
                            <div className="divInterna">
                                <h3>Cherry Cobbler on the Grill</h3>
                                <button>See Recipe</button>
                            </div>

                        </div>
                    </li>
                </ul>
            </BestRecipes>
            <BestServices>
                <img src={Services} alt="" />
                <div>
                    <h2 className="H2Text">The best services ready To serve you</h2>
                    <p>
                        Far far away, behind the word mountains, far from
                        the countries Vokalia and Consonantia, there live the
                        blind texts.
                    </p>
                    <p>
                        Separated they live in Bookmarksgrove right at the
                        coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                    </p>
                    <a href="">Know More</a>
                </div>
            </BestServices>

            <OurBlog>
            <h2 className="H2Text">Red Our Blog</h2>
            <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
            </p>
                    
            <ul className="ulOverflow">
                <li>
                    <img src={BlocoImg1} alt="" />
                    <div className="divContainer">
                        <h5>Quick-start guide to nuts and seeds</h5>
                        <div>
                            <img src={ComigaImg1}  alt="" />
                            <strong>Kevin Ibrahim</strong>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={BlocoImg2} alt="" />
                    <div className="divContainer">
                        <h5>Quick-start guide to nuts and seeds</h5>
                        <div>
                            <img src={ComigaImg1}  alt="" />
                            <strong>Kevin Ibrahim</strong>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={BlocoImg3} alt="" />
                    <div className="divContainer">
                        <h5>Quick-start guide to nuts and seeds</h5>
                        <div>
                            <img src={ComigaImg1} alt="" />
                            <strong>Kevin Ibrahim</strong>
                        </div>
                    </div>
                </li>
                <li>
                    <img src={BlocoImg4} alt="" />
                    <div className="divContainer">
                        <h5>Quick-start guide to nuts and seeds</h5>
                        <div>
                            <img src={ComigaImg1} alt="" />
                            <strong>Kevin Ibrahim</strong>
                        </div>
                    </div>
                </li>

            </ul>


            <IconContext.Provider value={{className: "Search-Seta" }}>
                <AiOutlineArrowRight/>
            </IconContext.Provider>
            </OurBlog>
            <Membership>
                <div className="divInputs">
                    <h2>Join our membership to get special offer</h2>
                    <div >
                        <input type="text"
                         name="" 
                         id=""
                         placeholder="Enter your email address" 
                         />
                        <button>join</button>
                    </div>
                </div>
                <img src={Bloco_final}/>
            </ Membership>
            <Footer />

            <CookiesContainer className="cookiesContainer">
                <div className="cookies-content">
                    <p>Cookies: We use cookies to personalize ads and improve your experience on the site. By continuing to browse, you agree to our Privacy Policy</p>
                    <button className="cookies-save" onClick={initMenuMobile}>Salvar e continuar</button>
                </div>
            </CookiesContainer>
        </Container>
    )
}