// import React, { useState, useEffect } from "react";
// import { Row, Col,Card,Container } from "react-bootstrap";
// import './Salon.css'

// import axios from "axios";

// function Salon() {
//     const [items, setItems] = useState([]);
  
  
//     useEffect(() => {
//       const fetchItems = async () => {
//         try {
//           const response = await axios.get(
//             "http://nodejs.senidraids.site/api/getallSalon"
//           );
//           setItems(response.data);
//           console.log(response.data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
  
//       fetchItems();
//     }, []);



  
  
//     return (
//       // <div className="backg">
//       //   <Container >
//       //   <h1 className='ti'><span className='fi'>S</span>alons</h1>
//       //   <Row className="mb-5">
//       //     {items.map((item) => (
//       //       <Col key={item.category_id} md={4} xs={12} className="mb-5">
                
//       //         <Card className="saloncard">
//       //         <Card.Img className="images"
//       //             variant="top"
//       //             src={item.image}
//       //             alt={item.name}
//       //            />
//       //           <Card.Body className="Text">
//       //             <Card.Title style={{fontFamily:"-moz-initial", fontSize:"30px"}}><b><a>{item.name}</a></b></Card.Title>&nbsp;
//       //             <Card.Text style={{width:"100%"}}>
//       //               Street: {item.address.street} <br />
//       //               City: {item.address.city} <br />
//       //               State: {item.address.state} <br />
//       //               Phone: {item.contact.phone}
//       //           </Card.Text>
//       //           </Card.Body>
//       //         </Card><br/>
//       //       </Col>
//       //     ))}
//       //   </Row>
        
//       //   </Container>
      

//       // </div>

//   //     <div className="backg">
//   //     <Container>
//   //         <h1 className='ti'><span className='fi'>S</span>alons</h1>
//   //         <Row className="mb-5">
//   //             {items.map((item, index) => (
//   //                 <Col key={item.category_id} md={4} xs={12} className="mb-5">
//   //                     <Card className="saloncard">
//   //                         <Card.Img className="images"
//   //                             variant="top"
//   //                             src={item.image}
//   //                             alt={item.name}
//   //                         />
//   //                         <Card.Body className="Text">
//   //                             <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
//   //                                 <b>
//   //                                 <a href={index === 0 ? '../components/Service' 
//   //                                          : index === 1 ? 'https://example.com/link2' 
//   //                                          : index === 2 ? 'https://example.com/link3'
//   //                                          : index === 3 ? 'https://example.com/link4'
//   //                                          : index === 4 ? 'https://example.com/link5'
//   //                                          : index === 5 ? 'https://example.com/link6'
//   //                                          : index === 6 ? 'https://example.com/link7'
//   //                                          : index === 7 ? 'https://example.com/link8'
//   //                                          : index === 8 ? 'https://example.com/link9'
//   //                                          : index === 9 ? 'https://example.com/link10'
//   //                                          : index === 10 ? 'https://example.com/link11'
//   //                                          : index === 11 ? 'https://example.com/link12'
//   //                                          : index === 12 ? 'https://example.com/link13'
//   //                                          : 'https://example.com/link13'}>{item.name}</a>
//   //                                 </b>
//   //                             </Card.Title>
//   //                             <Card.Text style={{ width: "100%" }}>
//   //                                 Street: {item.address.street} <br />
//   //                                 City: {item.address.city} <br />
//   //                                 State: {item.address.state} <br />
//   //                                 Phone: {item.contact.phone}
//   //                             </Card.Text>
//   //                         </Card.Body>
//   //                     </Card><br />
//   //                 </Col>
//   //             ))}
//   //         </Row>
//   //     </Container>
//   // </div>
  




//     );
//   }
  
//   export default Salon;
  
// import React, { useState, useEffect } from "react";
// import './Salon.css';
// import axios from "axios";
// import { Button,Row,Col,Card,Container } from 'react-bootstrap';
// import { useNavigate,useParams } from 'react-router';
// import SelectedSal from "./SelectedSal";
// function Salon() {
//     const [salons, setSalons] = useState([]);
//     const [selectedSalon, setSelectedSalon] = useState(null);

//     let navigate = useNavigate()
//     let { serviceIds } = useParams();
//     useEffect(() => {
//         const fetchSalons = async () => {
//             try {
//                 const response = await axios.get("http://nodejs.senidraids.site/api/getallSalon");
//                 setSalons(response.data);
//                 console.log(response.data)
//                 // let serviceIds = response.data.services._id
//                 // console.log(serviceIds)
//             } catch (error) {
//                 console.error("Error fetching salons:", error);
//             }
//         };

//         fetchSalons();
//     }, []);

//     const fetchServices = async (serviceIds) => {
//         try {
//             const response = await axios.get('http://nodejs.senidraids.site/api/getallService', {
//                 params: { ids: serviceIds.join(',') }
//             });
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching services:', error);
//             return [];
//         }
//     };

//     const handleCardClick = async (salon) => {
//         const services = await fetchServices(salon.services);
//         salon.servicesData = services;
//         setSelectedSalon(salon);
//         navigate("\SelectedSal",{ state: { salon: salon } })
        
//     };

//     return (
//         <div className="backg">
//             <Container>
//                 <h1 className='ti'><span className='fi'>S</span>alons</h1>
//                 <Row >{salons.map((salon, index) => (
//                     <Col key={salon.category_id} md={4} xs={12}>
//                             <Card className="saloncard" onClick={() => handleCardClick(salon)}>
//                                 <Card.Img className="images"
//                                     variant="top"
//                                     src={salon.image}
//                                     alt={salon.name}
//                                 />
//                                 <Card.Body className="Text">
//                                     <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
//                                         {salon.name}
//                                     </Card.Title>
//                                     <Card.Text style={{ width: "100%" }}>
//                                         Street: {salon.address.street} <br />
//                                         City: {salon.address.city} <br />
//                                         State: {salon.address.state} <br />
//                                         Phone: {salon.contact.phone} <br />
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card><br />
//                         </Col>
//                     ))}

//                     {/* <Col md={4} xs={12}>
//                     {selectedSalon && (
//                     <div>
//                         <h2>Selected Salon: {selectedSalon.name}</h2>
//                         <h3>Services:</h3>
//                         <ul>
//                             {selectedSalon.servicesData.map((service, idx) => (
//                                 <li key={idx}>{service.name}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                     </Col> */}
//                 </Row>
                
//             </Container>
//         </div>
//     );
// }
// export default Salon



import React, { useState, useEffect } from "react";
import './Salon.css';
import axios from "axios";
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

function Salon() {
    const [salons, setSalons] = useState([]);
    const [selectedSalon, setSelectedSalon] = useState(null);

    let navigate = useNavigate();
    const { serviceIds } = useParams();

    useEffect(() => {
        const fetchSalons = async () => {
            try {
                const response = await axios.get("http://nodejs.senidraids.site/api/getallSalon");
                setSalons(response.data);
                
                // Extract serviceIds from salons' data
                const serviceIds = response.data.map(salon => salon.services.map(service => service._id));
                console.log(serviceIds);

            } catch (error) {
                console.error("Error fetching salons:", error);
            }
        };

        fetchSalons();
    }, []);

    const fetchServices = async (serviceIds) => {
        try {
            const response = await axios.get('http://nodejs.senidraids.site/api/getallService', {
                params: { ids: serviceIds.join(',') }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching services:', error);
            return [];
        }
    };

    const handleCardClick = async (salon) => {
        const services = await fetchServices(salon.services);
        salon.servicesData = services;
        setSelectedSalon(salon);
        navigate("/SelectedSal", { state: { salon: salon } });
    };

    return (
      <div className="backg">
    <Container>
        <h1 className='ti'><span className='fi'>S</span>alons</h1>
        <Row xs={1} md={3} className="g-4">
            {salons.map((salon, index) => (
                <Col key={salon.category_id}>
                    <Card className="saloncard" onClick={() => handleCardClick(salon)}>
                        <Card.Img className="images"
                            variant="top"
                            src={salon.image}
                            alt={salon.name}
                        />
                        <Card.Body className="Text">
                            <Card.Title style={{ fontFamily: "-moz-initial", fontSize: "30px" }}>
                                {salon.name}
                            </Card.Title>
                            <Card.Text style={{ width: "100%" }}>
                                Street: {salon.address.street} <br />
                                City: {salon.address.city} <br />
                                State: {salon.address.state} <br />
                                Phone: {salon.contact.phone} 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
</div>

    )}
export default Salon;
