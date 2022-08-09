import { useState } from 'react'
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function handleModalClose() {
        setIsOpen(false)
    }

    return (
        <Box>
            <Modal isOpen={isOpen} onClose={handleModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Hello world!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={handleModalClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='purple'>Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Container maxW='container.md' py={5}>
                <Box textAlign='center' pb={5}>
                    <Heading>YATA</Heading>
                </Box>
                <Box
                    display={['block', 'block', 'flex']}
                    alignItems='center'
                    justifyContent='space-between'
                    py={5}
                    borderBottom='2px solid'
                    borderTop='2px solid'
                    borderColor='gray.800'
                >
                    <Text variant='muted'>
                        You have in total 0 todos, where 0 are done and 0 are undone.
                    </Text>
                    <Button
                        colorScheme='purple'
                        onClick={openModal}
                        w={['100%', '100%', 'auto']}
                        mt={[3, 3, 0]}
                    >
                        Create new todo
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
