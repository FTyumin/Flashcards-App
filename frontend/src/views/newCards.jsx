import {Input} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'

function AddCard(){
    return(
        <>
            <VStack
             spacing={20}
             align='stretch'
             >

            
                <h1>Add Card</h1>
                <Input placeholder='Front of flashcard' size='lg' fontSize='2em'></Input>
                <Input placeholder='Back of flashcard' size='lg' fontSize='2em'></Input>

                <Button colorScheme='yelow'>Safe</Button>
            </VStack>

        </>
    )
}

export default AddCard;