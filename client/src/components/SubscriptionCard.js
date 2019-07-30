import React from "react";
import styled from 'styled-components';
//import SubCardBtn from "../components/SubCardBtn.js"
import subsdefault from "../assets/images/subscription.svg";

const Card = styled.div`
    background-color: rgba(65, 65, 65, 0.80); 
    margin: 10px;
    width: 500px;
`;

const Image = styled.img`
    width: 80px;
`;

const ImgWrapper = styled.div`
`;

const ActionButton = styled.a`
    margin-left: 15px;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-top: 1px;
    margin-bottom: 1px;
    color: white;
    font-size: 1.5em;

    :hover {
        color: #0325FB;
    }
`;

// {props.subname || "My Test Subscription"}
// {props.duedate || "Due: 8/13/2019"}
// {props.amount || "$17.99"}
// {props.image || subsdefault}

function SubscriptionCard(props) {
    return (
            <Card className="card">
                <div className="card-body d-flex align-items-center" key={props.results._id}>
                    <ImgWrapper>
                        <Image src={props.results.image || subsdefault}></Image>
                    </ImgWrapper>
                    <div>
                        <h5 className="card-title ml-3">{props.results.name}</h5>
                        <h6 className="card-subtitle mb-2 ml-3 text-muted">{props.results.dueDate}</h6>
                        <p className="card-text ml-3">{props.results.cost}</p>
                    </div>
                    <div className="ml-auto">
                        <ActionButton href="#" onClick={() => props.openNav()}>
                            <i className="fa fa-edit"></i>
                        </ActionButton>
                        <ActionButton href="#" onClick={() => props.deleteSubscription(props.id)} className="remove">
                            <i className="fa fa-trash"></i>
                        </ActionButton>
                    </div>
                </div>
            </Card>
    )
}

export default SubscriptionCard;