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
    Checkbox,
    Input,
} from '@chakra-ui/react'
import { randomTodo } from '../util/random'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [useDueDate, setUseDueDate] = useState(false)
    const [randTodo, setRandTodo] = useState(randomTodo())

    function openModal() {
        setIsOpen(true)
    }

    function handleModalClose() {
        setIsOpen(false)
        setRandTodo(randomTodo())
    }

    return (
        <Box>
            <Modal isOpen={isOpen} onClose={handleModalClose}>
                <ModalOverlay />
                <ModalContent bg='gray.800'>
                    <ModalHeader>Create todo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box mb={5}>
                            <Text as='label' for='description' display='block' mb='6px'>
                                Description
                            </Text>
                            <Input placeholder={randTodo} name='description' />
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='center' gap='10px'>
                                <Text>Due date</Text>
                                <Checkbox
                                    colorScheme='purple'
                                    size='lg'
                                    onChange={(e) => setUseDueDate(e.target.checked)}
                                />
                            </Box>
                            {useDueDate && (
                                <Box>
                                    <Text>todo lol</Text>
                                </Box>
                            )}
                        </Box>
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
                        📝 You have in total 0 todos, where 0 are done and 0 are undone.
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
