import React from "react";
import styled from 'styled-components';

const Card = styled.div`
    width: 18rem;
    background-color: rgba(65, 65, 65, 0.80); 
`;

function SubscriptionCard() {
    return (
        <Card class="card">
            <div class="card-body d-flex justify-content-around">
                <h5 class="card-title">Subscription Name</h5>
                <h6 class="card-subtitle mb-2 text-muted">Due: 8/13/2019</h6>
                <p class="card-text">$17.99</p>
            </div>
        </Card> 

    )
}
export default SubscriptionCard;