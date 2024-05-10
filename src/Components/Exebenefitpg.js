import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exebenefitpg.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import img5 from '../Images/img6.jpg'

function Exebenefitpg() {
    let blog = useNavigate();

    const click = () =>{
        blog('/Blog1')
    }
  return (
    <div>
        <Container fluid>
        <Row>
            <Col xs={12} md={2}>&nbsp;<div ><FaArrowLeft onClick={click} style={{fontSize:"30px", cursor:"pointer"}}></FaArrowLeft></div></Col>
            <Col xs={12} md={8}>
                &nbsp;
                <h2 style={{textAlign:"center", color:"#8b3d80", fontFamily:"-moz-initial"}}><b><u>Exercise combats health conditions and diseases</u></b></h2>
                <img className='img5' src= {img5} />
                <p>Regular exercise is an effective tool that not only promotes physical fitness but also significantly lowers the risk of developing a variety of health issues. In fact, staying active has been shown to have many health benefits, both physically and mentally. What’s more? Those who exercise regularly may even live longer. All in all, 
                the benefits of exercise are countless. Here we will explore the health problems that can be prevented by engaging in regular exercise.</p>
                <h2><u><b>Health conditions you can prevent with exercise</b></u></h2><br/>
                <h3>Cardiovascular diseases</h3>
                <p>Regular exercise is a key factor in strengthening the heart and improving circulation, which significantly reduces the risk of cardiovascular diseases. 
                Aerobic activities such as running, swimming, and cycling help lower blood pressure, improve cholesterol levels, and promote overall heart health.</p>
                <h3>Obesity</h3>
                <p>Physical activity is crucial in managing and preventing obesity. Regular exercise aids in burning calories, boosting metabolism and promoting healthy weight loss. 
                Combining aerobic exercises with strength training can enhance muscle tone and increase the body’s ability to burn fat.</p>
                <h3>Type 2 diabetes</h3>
                <p>Regular exercise improves insulin sensitivity and helps regulate blood sugar levels, thus reducing the risk of type 2 diabetes. 
                    Physical activity also aids in weight management, a critical aspect of diabetes prevention and management.</p>
                <h3>Osteoporosis</h3>
                <p>Weight-bearing exercises such as walking, dancing, and weightlifting can strengthen bones and reduce the risk of osteoporosis. 
                    Regular physical activity helps increase bone density and slows down bone loss, particularly in postmenopausal women.</p>
                <h3>Mental health disorder</h3>
                <p>Regular exercise has a profound impact on mental health by alleviating symptoms of depression, anxiety, and stress. 
                     Engaging in physical activity stimulates the release of endorphins, enhances mood, boosts self-esteem, and can even prevent cognitive decline associated with aging.</p>
                <h3>Cancer</h3>
                <p>While exercise cannot guarantee the prevention of cancer, research suggests that regular physical activity can reduce the risk of certain types, including breast, colon, and lung cancer.  
                    Exercise aids in weight management and improves immune system function.</p>
                    <h3>Chronic respiratory diseases</h3>
                    <p>Regular exercise can improve lung capacity and respiratory function, making it beneficial for individuals with conditions like asthma and chronic obstructive pulmonary disease (COPD).  
                         Aerobic exercises, combined with proper breathing techniques, can enhance lung efficiency and overall respiratory health.</p>
            </Col>
            <Col xs={12} md={2}></Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Exebenefitpg

