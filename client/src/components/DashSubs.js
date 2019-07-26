import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(50, 50, 50, 0.50);
    border-radius: 15px;
    padding: 5px 0px 5px 0px;
    margin: 10px 10px 0px -15px;
`;

const CardText = styled.p`
    font-size: 16px;
    color: white;
    text-align: center;
`;

const SubImg = styled.img`
    width: 60px;
    height: 80px;
`;

function DashSubs(props) {
        return (
            <Card className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <SubImg src={props.image} alt={props.name} />
                        </div>
                        <div className="col">
                            <CardText>{"Sub Name" || props.name}</CardText>
                        </div>
                        <div className="col">
                            <CardText>{"Monthly Cost" || "$" + props.cost}</CardText>
                        </div>
                        <div className="col">
                            <CardText>{"Due Date" || "Due day: " + props.dueDate}</CardText>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }

export default DashSubs;