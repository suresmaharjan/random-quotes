import { Featured } from "../components/Featured";
import Slider from "../components/Slider";
import { Col } from "react-bootstrap";
import { ModalBox } from "../components/SliderItem";

const Home = () => {
    return (
        <>
            <Featured />
            <Slider />
        </>
    )
}

export default Home;