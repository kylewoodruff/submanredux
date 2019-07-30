import React from 'react';
import styled from 'styled-components';
import API from '../utils/Api';



const Input = styled.img`
height: auto;
width: 200px;
`;

const Card = styled.div`
width: 200px;
margin: 10px;
background-color: rgba(65, 65, 65, 0.8);
`;

const Letter = styled.h5`
color: white;
`;


function WatchlistCard(props) {
  const save = (movie_id, name, poster) => {
    
    API.saveWatchlist({
      movie_id: movie_id,
      title: name,
      poster: poster,
    }).then(res => {
      console.log(res)
      
    }
    
    )

      .catch(err => console.log(err))

  }
  

  return (

    <Card className="card d-flex" data-value={props.results.id}  >

      <Input type="image" key={props.results.id} src={props.results.picture} alt={props.results.name} className="btn submit" onClick={() => {save(props.results.id, props.results.name, props.results.picture)}} />
      <div className="card-footer" key={props.results.name}>
      <Letter>{props.results.name}</Letter>
      </div>


    </Card>

  )
}

export default WatchlistCard;