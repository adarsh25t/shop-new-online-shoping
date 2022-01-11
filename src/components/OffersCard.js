import Button from '@mui/material/Button';
import "./OffersCard.css";

const OffersCard = ()=>{
    return(
        <div className="offers-wrapper">
            <div className="offer" id='offer-1'>
                <div>
                    <h4>Choose From A Range Of</h4>
                    <h5>VIVO SmartPhones</h5>
                    <Button variant="contained">SHOP NOW</Button>
                    <h1>VIVO</h1>
                </div>
                <img className='img' src="https://rukminim1.flixcart.com/image/312/312/kuipea80/mobile/b/6/e/y20t-pd2093f-ex-v2129-vivo-original-imag7mg2tq2gx2bz.jpeg?q=70" alt="" />
            </div>
            <div className="offer" id='offer-2'>
                <div>
                    <h4>Choose From A Range Of</h4>
                    <h5>VIVO SmartPhones</h5>
                    <Button variant="contained" color="secondary">SHOP NOW</Button>
                    <h1>OPPO</h1>
                </div>
                <img className='img' src="https://rukminim1.flixcart.com/image/312/312/kuipea80/mobile/b/6/e/y20t-pd2093f-ex-v2129-vivo-original-imag7mg2tq2gx2bz.jpeg?q=70" alt="" />
            </div>
            <div className="offer" id='offer-3'>
                <div>
                    <h4>Choose From A Range Of</h4>
                    <h5>VIVO SmartPhones</h5>
                    <Button variant="contained">SHOP NOW</Button>
                    <h1>SAMSUMG</h1>
                </div>
                <img className='img' src="https://rukminim1.flixcart.com/image/312/312/kuipea80/mobile/b/6/e/y20t-pd2093f-ex-v2129-vivo-original-imag7mg2tq2gx2bz.jpeg?q=70" alt="" />
            </div>
        </div>
    )
}
export default OffersCard;