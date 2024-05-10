// import React, { useState, useEffect } from "react";
// import './Salon.css';
// import axios from "axios";
// import { Button, Row, Col, Card, Container } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// function SelectedSal() {
//     const location = useLocation();
//     const [selectedSalon, setSelectedSalon] = useState(null);

//     useEffect(() => {
//         if (location.state && location.state.salon) {
//             const salon = location.state.salon;
//             fetchServices(salon.services)
//                 .then(services => {
//                     salon.servicesData = services;
//                     setSelectedSalon(salon);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching services:', error);
//                 });
//         }
//     }, [location.state]);

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

//     return (
//         <div>
//         {selectedSalon && (
//             <Container>
//                 <Card style={{ width: '100%' }}>
//                     <Card.Img variant="top" src={selectedSalon.image} />
//                     <Card.Body>
//                         <Card.Title><h1 style={{color:"purple", textAlign:"center", fontFamily:"-moz-initial"}}>{selectedSalon.name}</h1></Card.Title>
//                     </Card.Body>
//                 </Card><br/>
//                 <h3>Services provided by {selectedSalon.name}</h3>
//                 <Row>
//                     {selectedSalon.servicesData.map((service, idx) => (
//                         <Col key={idx} md={4} xs={12}>
//                             <Card style={{ width: '100%', marginTop: '20px' }}>
//                                 <Card.Img variant="top" src={service.image} />
//                                 <Card.Body>
//                                     <Card.Title ><h4 style={{color:"purple"}}>{service.name}</h4></Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         )}
//     </div>
// );
// }

// export default SelectedSal;



import React, { useState, useEffect } from "react";
import './Salon.css';
import axios from "axios";
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function SelectedSal() {
    const location = useLocation();
    const [selectedSalon, setSelectedSalon] = useState(null);

    useEffect(() => {
        if (location.state && location.state.salon) {
            const salon = location.state.salon;
            fetchServices(salon.services)
                .then(services => {
                    // Randomly select between 5 and 12 services
                    const randomServices = getRandomServices(services);
                    salon.servicesData = randomServices;
                    setSelectedSalon(salon);
                })
                .catch(error => {
                    console.error('Error fetching services:', error);
                });
        }
    }, [location.state]);

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

    const getRandomServices = (services) => {
        const minServices = 13;
        const maxServices = 21;
        const numServices = Math.floor(Math.random() * (maxServices - minServices + 1)) + minServices;
        return services.slice(0, numServices);
    };

    return (
        <div  style={{backgroundImage: "linear-gradient(to right, #d4c0d1, #8b3d80)",paddingTop:"20px",paddingBottom:"20px"}}>
            {selectedSalon && (
                <Container>
                    <Card style={{ width: '100%', height:'600px'}}>
                        <Card.Img style={{ width: '100%', height:'550px'}}  variant="top" src={selectedSalon.image}  />
                        <Card.Body>
                            <Card.Title><h1 style={{color:"purple", textAlign:"center", fontFamily:"-moz-initial"}}></h1></Card.Title>
                        </Card.Body>
                    </Card><br/>
                    <h3 style={{color:"purple",fontFamily:"-moz-initial"}} >Services provided by {selectedSalon.name}</h3>
                    <Row>
                        {selectedSalon.servicesData.map((service, idx) => (
                            <Col key={idx} md={4} xs={12}>
                                <Card style={{ width: '100%', marginTop: '20px' }}>
                                    <Card.Img variant="top" src={service.image} />
                                    <Card.Body>
                                        <Card.Title><h4 style={{color:"purple"}}>{service.name}</h4></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default SelectedSal;