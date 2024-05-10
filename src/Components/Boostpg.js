import React from 'react'
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Boostpg.css';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router';
import img3 from '../Images/fitness.jpg';

function Bootspg() {
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
                <h2 style={{textAlign:"center", color:"#8b3d80", fontFamily:"-moz-initial"}}><b><u>Exercise boosts energy</u></b></h2>
                <img className='imgedit' src={img3}/>
                <p>What do we do when the daily hustle and bustle of life has zapped out the last ounce of energy? Our bodies would tell us to sleep the tiredness away and wake up to a new day with a brimming energy tank. However, exercising is a fantastic way to refill our energy tanks. The stronger lethargy pulls you, the more you should get your body moving, 
                because exercising replenishes energy, lowers stress, and makes us stronger.</p><br/>
                <h2><u><b>Exercise to regain your energy</b></u></h2><br/>
                <h3>Stretching</h3>
                <p>Stress can have adverse effects on your body. The Canadian Centre for Occupational Health and safety points out that work-related stress can induce numerous health concerns, including joint and back pain, 
                headaches, chest pain, fatigue, digestive issues, and muscle tension.</p>
                <h3>Crescent Stretch</h3>
                <p>This stretch eases tension from the upper back, neck, shoulders, and torso. Sit or stand then raise your hands over your head. Lock your fingers together. Exhale gradually then move your arms and hands to the right while keeping your shoulders back. 
                Hold the stretch for about 20 seconds. Take several deep breaths from your diaphragm. Move towards the left and repeat the exercise.</p>
                <h3>Doorway Stretch</h3>
                <p>This stretch will relieve tension in the front of your shoulders and chest. Stand in a doorway and plant your feet in line with your hips, with your shoulders back and chin up. Spread your arms so that your upper arms cross either side of the doorway across your biceps. Inhale deeply; then, as you exhale, lean forward. 
                You should feel the stretch across the front of your chest. Hold for 15 to 20 seconds. Take a deep breath in as you return to your starting position.</p>
                <h3>Jogging</h3>
                <p>Jogging is a simple exercise that provides substantial physical and mental benefits. It can lower fatigue and boost concentration and alertness, revitalizing cognitive functions after exhausting mental activity. 
                    It can give you an opportunity for deep thought or meditation, or allow you to clear your mind completely of your workday</p>
                <h3>Yoga</h3>
                <p>If you fancy doing an exercise that doesn’t deplete your energy and at the same helps you stay fit, then yoga is for you. Yoga is popular for its soothing and energy-boosting benefits attained through slow movement and rhythmic breathing. Gentle bending movements like Upward Dog, Bridge, and Extended Mountain help open your spine and loosen tightened chest muscles. 
                    This, in turn, encourages deep breathing and open postures, which improve your physical energy and mental alertness.</p>
                <h3>Swimming</h3>
                <p>If you’re feeling drained and uninspired, swimming laps or performing water aerobics can replenish your energy. Besides improving your strength, flexibility, and endurance, swimming is also a relaxing, low-impact exercise that cools and refreshes the body. 
                If you have health concerns with your joints, back, or conditions like asthma, swimming may be an optimal aerobic exercise for you.</p>
                <h3>Walking</h3>
                <p>Walking can be a very efficient addition to your schedule. Ten minutes of climbing stairs or walking around the floor of your office is a more effective way to crank up your energy than drinking coffee. As a low-intensity physical activity, walking also improves your fitness level, enhance your mental well-being, and help you sleep soundly at night. Park a couple blocks further from the office; 
                    take the stairs instead of the elevator. Ten minutes at either end of your day can do wonders physically and mentally.</p>&nbsp;
                

                

            </Col>
            <Col xs={12} md={2}></Col>
        </Row>
    </Container>

      
    </div>
  )
}

export default Bootspg
