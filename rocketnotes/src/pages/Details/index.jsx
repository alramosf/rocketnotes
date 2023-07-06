import { Container } from './styles';

import { Button } from '../../components/Button';


export function Details(){

  return(
    <Container>
      <h1>
        Olá Mundo
      </h1>
    <Button title="Entrar" loading/>
    <Button title="Cadastrar"/>
    <Button title="Voltar"/>
    </Container>
    
  );
}

