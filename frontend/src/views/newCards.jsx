import {Input} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'

function AddCard({ onAdd }){
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ question, answer });
        setQuestion('');
        setAnswer('');
      }

    return(
        <>
            <VStack
             spacing={20}
             align='stretch'
             >

                <form onSubmit={handleSubmit}>
                    <h1>Add Card</h1>
                    <Input placeholder='Front of flashcard' size='lg' fontSize='2em' id="question" value={question} onChange={(e) => setQuestion(e.target.value)}></Input>
                    <Input placeholder='Back of flashcard' size='lg' fontSize='2em' id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></Input>

                    <Button colorScheme='yelow' type='submit'>Safe</Button>
                </form>
                    
            </VStack>

        </>
    )
}

export default AddCard;