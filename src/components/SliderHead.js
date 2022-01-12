import Buttons from '@mui/material/Button';
import "./SliderHead.css";

const SliderHead = ({title})=>{
    return(
        <div className="slide-head">
            <h3>{title}</h3>
            <Buttons variant="contained">View All</Buttons>
        </div>
    )
}
export default SliderHead;