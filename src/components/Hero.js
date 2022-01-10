import "./Hero.css";

const Hero = ()=>{
    return(
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src=""/>
      <div className="description">
          <img src="https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/k/o/m/c21y-rmx3261-realme-original-imag65kcytrk8dtr.jpeg?q=70" alt="" />
          <div className="content">
                <h4 className="text-title">realme C21Y (64 GB)</h4>
                <h5 className="offeres">Triple Cam | 5000mAh</h5>
                <h5 className="prices">₹19999 From ₹7999</h5>
        </div>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="" />
      <div className="description">
          <img src="https://rukminim1.flixcart.com/image/416/416/ky0g58w0/mobile/l/t/p/-original-imagabvqsbvzzzfy.jpeg?q=70" alt="" />
          <div className="content">
                <h4 className="text-title">MOTOROLA G71</h4>
                <h5 className="offeres">Sales Is On</h5>
                <h5 className="prices">₹19999 From ₹7999</h5>

          </div>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src=""/>
      <div className="description">
          <img src="https://rukminim1.flixcart.com/image/800/960/k5bcscw0pkrrdj/jacket/d/g/z/free-black-kjk01-s-banjara-india-original-imafeswne5csx2th.jpeg?q=50" alt="" />
          <div className="content">
                <h4 className="text-title">Women Sleeveless</h4>
                <h5 className="offeres">Special price</h5>
                <h5 className="prices">₹289</h5>
          </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
    )
}
export default Hero;