//import Drinkslider from './Drinkslider';
import MultipleItems from './Drinkslider';
 
const Home = () => {
    

    return ( 
        <div>
        
            <header className="hot-tea">
                <img className="hero-1" src="https://www.teavana.com/wp-content/uploads/2020/10/Teavana_WebsiteHeader_LemonGingerBlissHero_1502x857.jpg"></img>
                <div className="hero-txt-ctr hide-on-med-and-down">
                    <div className="hero-text right-align">
                        <h2>Cozy up with your favourite cup</h2>
                        <p>Teavana Hot Tea Sachets</p>
                        <a href="~" className="learn-more-btn">Learn More</a>
                    </div>
                </div>
                <div className="hero-txt-ctr center hide-on-large-only">
                    <div className="hero-text">
                        <h2>Cozy up with your favourite cup</h2>
                        <p>Teavana Hot Tea Sachets</p>
                        <a href="~" className="learn-more-btn">Learn More</a>
                    </div>
                </div>
            </header>
            <section className="carousel-1">
                <MultipleItems/>
            </section>

            <section className="feature-1">
                <div className="drink-title-ctr">
                    <a className="drink-call" href="#">
                        <h5>Beach Bellini</h5>
                        <i className="small material-icons">arrow_forward</i>
                    </a>
                </div>
                <div className="drink-img-ctr">
                    <img className="fruit pineapple" src="https://www.teavana.com/wp-content/uploads/2019/09/BB_feature_pineapple.png"></img>
                    <img className="drink-pic " src="https://www.teavana.com/wp-content/uploads/2019/09/BB_feature_iced_hot.gif"></img>
                    <img className="fruit mango" src="https://www.teavana.com/wp-content/uploads/2019/09/BB_feature_mangopapaya.png"></img>
                </div>
            </section>
            <section className="tea-drinker">

            </section>
            <section className="carousel-2">

            </section>
            <section className="feature-2">

            </section>
            <section className="ice-tea">

            </section>
        </div>
     );
}

export default Home;