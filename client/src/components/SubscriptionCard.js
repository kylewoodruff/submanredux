import React from "react";
import styled from 'styled-components';
import hulu from "../assets/images/subscription.svg";

const Card = styled.div`
    background-color: rgba(65, 65, 65, 0.80); 
    margin: 10px;
`;

const Image = styled.img`
    width: 80px;
`;
const ActionButton = styled.a`
    margin-left: 15px;
    color: white;
    font-size: 1.5em;
`;

function SubscriptionCard(props) {
    return (
        <Card className="card col-lg-6">
            <div className="card-body d-flex align-items-center">
                <div>
                    <Image src={props.image || hulu}></Image>
                </div>
                <div>
                    <h5 className="card-title ml-3">{props.subname || "Subscription Name"}</h5>
                    <h6 className="card-subtitle mb-2 ml-3 text-muted">{props.duedate || "Due: 8/13/2019"}</h6>
                    <p className="card-text ml-3">{props.amount || "$17.99"}</p>
                </div>
                <div className="ml-auto">
                    <ActionButton href="#">
                        <i className="fa fa-edit"></i>
                    </ActionButton>
                    <ActionButton href="#">
                        <i className="fa fa-trash"></i>
                    </ActionButton>
                </div>
            </div>
        </Card>

    )
}
export default SubscriptionCard;