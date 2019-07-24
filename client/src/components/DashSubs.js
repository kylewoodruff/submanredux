import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(50, 50, 50, 0.50);
`;

const CardText = styled.p`
    font-size: 16px;
    color: white;
    text-align: center;
`;

const SubImg = styled.img`
    width: 65px;
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