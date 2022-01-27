import Category from "../components/Category";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import SliderItem from "../components/SlideItem"

const Offers = ()=>{
    return(
        <div>
            <Navbar/>
            <Category/>
            <SliderItem title={"Deals of the Day"}/>
            <SliderItem title={"Fashion Top Deals"}/>
            <SliderItem title={"Top Offers"}/>
            <SliderItem title={"Big Steals of the Week"}/>
            <Footer/>
        </div>
    )
}
export default Offers;