import { Button as MaterialButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
 text-align: center;
`;

const Button = ({ onClick }) => (
  <Container>
            <div>
    <MaterialButton
        style={{marginTop: '1em',  width: 'auto' }}
        onClick={onClick}
        variant="outlined"
        color="primary">
        Допушкинизировать
  </MaterialButton>
  </div>
  </Container>
)

export default Button;