import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weightpg.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import img6 from '../Images/weight.jpg'

function Weightpg() {
    let blog = useNavigate();

    const click = () =>{
        blog('/Blog1')
    }
  return (
    <div className='bg'>
        <Container fluid>
        <Row>
            <Col xs={12} md={2}>&nbsp;<div ><FaArrowLeft onClick={click} style={{fontSize:"30px", cursor:"pointer"}}></FaArrowLeft></div></Col>
            <Col xs={12} md={8}>
                &nbsp;
                <h2 style={{textAlign:"center", color:"#8b3d80", fontFamily:"-moz-initial"}}><b><u>Exercise controls weight</u></b></h2>
                <img className='img6' src= {img6} />
                <p>Exercise can build and strengthen muscle tissue, which increases your metabolism rate. 
                    This means your body becomes more efficient at converting the food you eat into energy, so you burn more calories – making it easier to lose weight.</p>
                <h2><u><b>Tips for successful weight loss</b></u></h2><br/>
                <h3>Eat varied, colorful, nutritionally dense foods</h3>
                <p>Healthful meals and snacks should form the foundation of the human diet. A simple way to create a meal plan is to make sure that each meal consists of 50 percent fruit and vegetables, 25 percent whole grains, and 25 percent protein. Total fiber intake should be 25–30 gramsTrusted Source (g) daily. 
                Eliminate trans fats from the diet, and minimize the intake of saturated fats, which has a strong link with the incidence of coronary heart disease. Eliminate trans fats from the diet, and minimize the intake of saturated fats, which has a strong link with the incidence of coronary heart disease.</p>
                
                <p>The following foods are healthful and often rich in nutrients:</p>
                <ul>
                    <li>fresh fruits and vegetables</li>
                    <li>fish</li>
                    <li>legumes</li>
                    <li>nuts</li>
                    <li>seeds</li>
                    <li>whole grains, such as brown rice and oatmeal</li>
                </ul>
                <p>Foods to avoid eating include:</p>
                <ul>
                    <li>fatty red or processed meats</li>
                    <li>baked goods</li>
                    <li>bagels</li>
                    <li>processed foods</li>
                    <li>fatty red or processed meats</li>
                    <li>foods with added oils, butter, and sugar</li>
                    </ul>
                    <p>In some cases, removing certain foods from the diet might cause a person to become deficient in some necessary vitamins and minerals. A nutritionist, dietitian, or 
                        another healthcare professional can advise a person how to get enough nutrients while they are following a weight loss program.</p>

                    <h3>Keep a food and weight diary</h3>
                    <p>Self-monitoring is a critical factor in successfully losing weight. People can use a paper diary, mobile app, or dedicated website to record every item of food that they consume each day. 
                        They can also measure their progress by recording their weight on a weekly basis.</p>
                    <h3>Engage in regular physical activity and exercise</h3>
                    <p>Regular exercise is vital for both physical and mental health. Increasing the frequency of physical activity in a disciplined and purposeful way is often crucial for successful weight loss. One hour of moderate-intensity activity per day, such as brisk walking, is ideal. If one hour per day is not possible, the Mayo Clinic suggests that a person should aim for a minimum of 150 minutes every week. 
                    People who are not usually physically active should slowly increase the amount of exercise that they do and gradually increase its intensity. This approach is the most sustainable way to ensure that regular exercise becomes a part of their lifestyle.</p>
                    <h3>Eliminate liquid calories</h3> 
                    <p>It is possible to consume hundreds of calories a day by drinking sugar-sweetened soda, tea, juice, or alcohol. 
                        These are known as “empty calories” because they provide extra energy content without offering any nutritional benefits.</p>
                    <h3>Measure servings and control portions</h3>
                    <p>Measure servings and control portions. Therefore, people should avoid estimating a serving size or eating food directly from the packet. It is better to use measuring cups and serving size guides. Guessing leads to overestimating and the likelihood of eating a larger-than-necessary portion.</p>
                    <p>The following size comparisons can be useful for monitoring food intake when dining out:</p>
                    <ul>
                        <li>1 cup is a baseball</li>
                        <li>quarter of a cup is a golf ball</li>
                        <li>1 ounce (oz) of nuts is a loose handful</li>
                        <li>1 teaspoon is 1 playing die</li>
                        <li>3 oz of meat is a deck of cards</li>
                        <li>1 slice is a DVD</li>
                        <li>one-half of a cup is a tennis ball</li>
                    </ul>
                    <p>These sizes are not exact, but they can help a person moderate their food intake when the correct tools are not available.</p>&nbsp;
                
            </Col>
            <Col xs={12} md={2}></Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Weightpg
