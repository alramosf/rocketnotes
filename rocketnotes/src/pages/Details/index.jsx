import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';


export function Details(){

  return(
    <Container>
      <Header/>

      <main>
        <Content>
      <ButtonText title="Excluir nota"/>
      
      <h1>
        Intrudução ao React
      </h1>
      
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam cumque vel ipsum culpa! Possimus beatae voluptatem explicabo eius eaque, dolore ipsum perspiciatis molestiae nostrum excepturi, soluta inventore voluptatibus veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa totam beatae modi voluptatum, harum aut eum quos repudiandae est officia et? Magnam enim porro dolor illum vero modi numquam eum!
      </p>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>
      <Button title="Voltar"/>
      
          
        </Content>
      </main>
    </Container>
    
  );
}

