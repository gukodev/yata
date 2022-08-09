import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'

export default function Home() {
    return (
        <Box>
            <Container maxW='container.md' py={5}>
                <Box textAlign='center' pb={5}>
                    <Heading>YATA</Heading>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    py={5}
                    borderBottom='1px solid'
                    borderTop='1px solid'
                    borderColor='gray.800'
                >
                    <Text variant='muted'>
                        Hello! You have in total 0 todos, where 0 are done and 0 are undone.
                    </Text>
                    <Button colorScheme='purple'>Create new todo</Button>
                </Box>
            </Container>
        </Box>
    )
}
