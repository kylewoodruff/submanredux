import React from 'react';
import styled from 'styled-components';


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

function ViewCard(props) {

  return (

    <Card className="card d-flex" data-value={props.results.id}  >

      <Input type="image" key={props.results.id} src={props.results.poster} alt={props.results.title}/>
      <div className="card-footer" key={props.results.title}>
       <Letter>{props.results.title}</Letter>
      </div>


    </Card>

  )
}

export default ViewCard;