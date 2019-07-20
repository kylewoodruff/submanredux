import React from 'react';
import styled from 'styled-components'

const Picture = styled.img `
height: 200px;
width: 200px;
`;

const Card = styled.div `
width: 300px;
height: 300px;
`;



function WatchlistCard(props) {
    return (
      <Card>
      <div className="card" {...props}>
        <ul className="list-group">
        {props.result.map(results => (
        <li className="list-group-item" key={results.id}>
        <Picture src={results.picture} alt={results.name} />
          <h5>Title: {results.name}</h5>
          
        </li>

      ))}
        </ul>
        
      </div>
      </Card>
      
    );
  }
  
  export default WatchlistCard;