import React from "react";
import styled from 'styled-components';
import subsdefault from "../assets/images/subscription.svg";
import Moment from 'react-moment';

// @media (min-width: 576px) { ... }
// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }

const Card = styled.div`
    background-color: rgba(65, 65, 65, 0.80); 
    margin: 10px;
    width: 100%;
`;

const Image = styled.img`
    width: 80px;
`;

const ImgWrapper = styled.div`
`;

function SubscriptionCard(props) {
    return (
            <Card className="card d-flex">
                <div className="card-body d-flex align-items-center" key={props.results._id}>
                    <ImgWrapper>
                        <Image src={props.results.image || subsdefault}></Image>
                    </ImgWrapper>
                    <div>
                        <h5 className="card-title ml-3">{props.results.name}</h5>
                        <h6 className="card-subtitle mb-2 ml-3 text-muted"><Moment format="MM/DD/YYYY">{props.results.dueDate}</Moment></h6>
                        <p className="card-text ml-3">{props.results.cost}</p>
                    </div>
                    <div className="ml-auto">
                        {props.children}
                    </div>
                </div>
            </Card>
    )
}

export default SubscriptionCard;