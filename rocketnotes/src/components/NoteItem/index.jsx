import { FiPlus, FiX } from "react-icons/fi";

import { Container } from './styles'

export function NoteItem ({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
                type="text"
                //value={value} não está deixando digitar, por isso está comentado
                readOnly={!isNew}
                {...rest}
            />
            <button
                type="button"
                onClick={onClick}
                className={isNew? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}