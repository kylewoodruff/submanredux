import React from "react";
import styled from 'styled-components';
import SubCardBtn from "../components/SubCardBtn.js"
import subsdefault from "../assets/images/subscription.svg";

const Card = styled.div`
    background-color: rgba(65, 65, 65, 0.80); 
    margin: 10px;
`;

const Image = styled.img`
    width: 80px;
`;

const ImgWrapper = styled.div`
`;

function SubscriptionCard(props) {

    return (
        <Card className="card col-lg-6">
            <div className="card-body d-flex align-items-center">
                <ImgWrapper>
                    <Image src={props.image || subsdefault}></Image>
                </ImgWrapper>
                <div>
                    <h5 className="card-title ml-3">{props.subname || "My Test Subscription"}</h5>
                    <h6 className="card-subtitle mb-2 ml-3 text-muted">{props.duedate || "Due: 8/13/2019"}</h6>
                    <p className="card-text ml-3">{props.amount || "$17.99"}</p>
                </div>
                <SubCardBtn />
            </div>
        </Card>

    )
}
export default SubscriptionCard;