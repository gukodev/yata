import { useEffect, useRef, useState } from 'react'
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
    useToast,
} from '@chakra-ui/react'
import { randomId, randomTodo } from '../util/random'
import DateInput from '../components/DateInput'
import {
    datePassed,
    isEmpty,
    parseNumber,
    validate60,
    validateDay,
    validateHour,
    validateMonth,
} from '../util/validate'

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [useDueDate, setUseDueDate] = useState(false)
    const [randTodo, setRandTodo] = useState(randomTodo())
    const toast = useToast()

    const monthRef = useRef(null)
    const dayRef = useRef(null)
    const yearRef = useRef(null)
    const hoursRef = useRef(null)
    const minutesRef = useRef(null)
    const secondsRef = useRef(null)
    const todoRef = useRef(null)

    function openModal() {
        setIsOpen(true)
    }

    function handleModalClose() {
        setIsOpen(false)
        setUseDueDate(false)
        setRandTodo(randomTodo())
    }

    function errorToast(msg) {
        toast({
            title: 'Oops!',
            description: msg,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        })
    }

    function handleTodoCreate() {
        if (!todoRef.current) return
        const todo = todoRef.current.value
        if (isEmpty(todo)) {
            errorToast('Please enter the todo description.')
            return
        }

        let dueDate
        if (useDueDate) {
            const month = monthRef.current?.value
            const day = dayRef.current?.value
            const year = yearRef.current?.value
            const hours = hoursRef.current?.value
            const minutes = minutesRef.current?.value
            const seconds = secondsRef.current?.value

            let monthVal, dayVal, yearVal, hoursVal, minutesVal, secondsVal

            monthVal = !isEmpty(month)
                ? parseNumber(month) - 1
                : parseNumber(monthRef.current.placeholder) - 1
            dayVal = !isEmpty(day) ? parseNumber(day) : parseNumber(dayRef.current.placeholder)
            yearVal = !isEmpty(year) ? parseNumber(year) : parseNumber(yearRef.current.placeholder)
            hoursVal = !isEmpty(hours)
                ? parseNumber(hours)
                : parseNumber(hoursRef.current.placeholder)
            minutesVal = !isEmpty(minutes)
                ? parseNumber(minutes)
                : parseNumber(minutesRef.current.placeholder)
            secondsVal = !isEmpty(seconds)
                ? parseNumber(seconds)
                : parseNumber(secondsRef.current.placeholder)

            if (!validateMonth(monthVal + 1)) {
                errorToast('Please enter a valid month')
                return
            }

            if (!validateDay(dayVal)) {
                errorToast('Please enter a valid day')
                return
            }

            if (!validateHour(hoursVal)) {
                errorToast('Please enter a valid hour')
                return
            }

            if (!validate60(minutesVal)) {
                errorToast('Please enter a valid minute')
                return
            }

            if (!validate60(secondsVal)) {
                errorToast('Please enter a valid second')
                return
            }

            const date = new Date(yearVal, monthVal, dayVal, hoursVal, minutesVal, secondsVal)

            if (datePassed(date)) {
                errorToast('This date has already passed!')
                return
            }

            dueDate = date
        }

        const data = {
            id: randomId(),
            description: todo,
            complete: false,
            dueDate: dueDate.toISOString(),
            createdAt: new Date().toISOString(),
        }

        console.log(data)
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
                            <Text as='label' htmlFor='todo' display='block' mb='6px'>
                                Description
                            </Text>
                            <Input placeholder={randTodo} name='todo' ref={todoRef} />
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='center' gap='10px' mb={3}>
                                <Text>Due date</Text>
                                <Checkbox
                                    colorScheme='purple'
                                    size='lg'
                                    onChange={() => setUseDueDate(!useDueDate)}
                                />
                            </Box>
                            {useDueDate && (
                                <Box>
                                    <Box
                                        display={['block', 'flex']}
                                        alignItems='center'
                                        justifyContent='space-between'
                                        gap='8px'
                                    >
                                        <DateInput
                                            text='Month'
                                            name='month'
                                            ref={monthRef}
                                            placeholder={new Date().getMonth() + 1}
                                        />
                                        <DateInput
                                            text='Day'
                                            name='day'
                                            ref={dayRef}
                                            placeholder={new Date().getDate()}
                                        />
                                        <DateInput
                                            text='Year'
                                            name='year'
                                            ref={yearRef}
                                            placeholder={new Date().getFullYear()}
                                        />
                                    </Box>
                                    <Box
                                        mt={3}
                                        display={['block', 'flex']}
                                        alignItems='center'
                                        justifyContent='space-between'
                                        gap='8px'
                                    >
                                        <DateInput
                                            text='Hours'
                                            name='hours'
                                            ref={hoursRef}
                                            placeholder={new Date().getHours()}
                                        />
                                        <DateInput
                                            text='Minutes'
                                            name='minutes'
                                            ref={minutesRef}
                                            placeholder={new Date().getMinutes()}
                                        />
                                        <DateInput
                                            text='Seconds'
                                            name='seconds'
                                            ref={secondsRef}
                                            placeholder={0}
                                        />
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='ghost' mr={3} onClick={handleModalClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='purple' onClick={handleTodoCreate}>
                            Create
                        </Button>
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
