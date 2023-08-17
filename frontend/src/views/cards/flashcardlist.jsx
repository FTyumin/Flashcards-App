import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const FlashcardList = ({ flashcards }) => {
  return (
    

    <TableContainer>
      <Table variant="simple">
      <TableCaption>Flashcarads</TableCaption>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Answer</Th>
          </Tr>
        </Thead>
        <Tbody>
            {flashcards.map((flashcard) => (
              <Tr key={flashcard.id}>
                <Td>{flashcard.question}</Td>
                <Td>{flashcard.answer}</Td>
              </Tr>
            ))}
          </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FlashcardList;

  
  
  
  
  
  