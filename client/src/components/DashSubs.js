import React, { Component } from "react";
import styled from 'styled-components';

const Card = styled.div`
    background: rgba(45, 45, 45, 0.50);
`;

const CardText = styled.p`
    font-size: 14px;
    color: white;
    text-align: center;
`;

class DashSubs extends Component {
    render(props) {
        return (
            <Card className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <CardText>Img</CardText>
                        </div>
                        <div className="col">
                            <CardText>Name</CardText>
                        </div>
                        <div className="col">
                            <CardText>Cost Per Month</CardText>
                        </div>
                        <div className="col">
                            <CardText>Due Date</CardText>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default DashSubs;