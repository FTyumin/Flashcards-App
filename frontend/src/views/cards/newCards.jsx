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
            <Stack spacing={3} align='center'>
                <form onSubmit={handleSubmit}>
                    <h1>Add Card</h1>
                    <Stack spacing={3} align='stretch'>
                        <Input
                            placeholder='Front of flashcard'
                            size='lg'
                            fontSize='2em'
                            id='question'
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <Input
                            placeholder='Back of flashcard'
                            size='lg'
                            fontSize='2em'
                            id='answer'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    </Stack>
                    <Button colorScheme='yellow' type='submit'>
                        Save
                    </Button>
                </form>
            </Stack>

            

        </>
    )
}

export default AddCard;