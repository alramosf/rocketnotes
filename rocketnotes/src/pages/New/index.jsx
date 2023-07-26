import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'


import { Container, Form } from './styles';

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                
                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://google.com"/>
                        <NoteItem value="" isNew placeholder="Novo link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react"/>
                            <NoteItem value="" isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}