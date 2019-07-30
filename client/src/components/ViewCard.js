import React from 'react';
import styled from 'styled-components';


const Input = styled.img`
height: auto;
width: 200px;
`;

const Card = styled.div`
width: 200px;
margin: 10px;
`;

const Letter = styled.h5`
color: black;
`;

function ViewCard(props) {

  return (

    <Card className="card d-flex" data-value={props.results.id}  >

      <Input type="image" key={props.results.id} src={props.results.poster} alt={props.results.title}/>
      <div className="card-footer" key={props.results.title}>
       <Letter> <h5 >{props.results.title}</h5> </Letter>
      </div>


    </Card>

  )
}

export default ViewCard;