import React from 'react';
import styled from 'styled-components'

const Input = styled.img`
height: auto;
width: 200px;
`;

const Card = styled.div`
width: 200px;
margin: 10px;

`;



function WatchlistCard(props) {
  return (

    <Card className="card d-flex" data-value={props.results.id}  >

      <Input type="image" key={props.results.id} src={props.results.picture} alt={props.results.name} className="btn submit" />
      <div className="card-footer" key={props.results.name}>
        <h5 >{props.results.name}</h5>
      </div>


    </Card>

  )
}

export default WatchlistCard;