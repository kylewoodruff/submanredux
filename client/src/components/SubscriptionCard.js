import React from "react";
import styled from 'styled-components';
import subsdefault from "../assets/images/subscription.svg";

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

const ImgWrapper = styled.div`
`;

function SubscriptionCard(props) {
    // openNav() {
    //     document.getElementById("mySidenav").style.width = "500px";
    //     // this.setState({
    //     //     hideAddBtn: true
    //     // })
    // }

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