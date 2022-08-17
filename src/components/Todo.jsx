import { Box, Button, Checkbox, IconButton, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useStorageAPI } from '../hooks/Storage'
import moment from 'moment'

export default function Todo({ data }) {
    const StorageAPI = useStorageAPI()
    const [isChecked, setIsChecked] = useState(data.complete)

    const [dueDateFromNow, setDueDateFromNow] = useState(
        data.dueDate ? moment(data.dueDate).fromNow() : null
    )
    const [expired, setExpired] = useState(
        data.dueDate ? moment(data.dueDate).isBefore(moment()) : false
    )

    function updateTime() {
        setDueDateFromNow(data.dueDate ? moment(data.dueDate).fromNow() : null)
        setExpired(data.dueDate ? moment(data.dueDate).isBefore(moment()) : false)
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    useEffect(() => {
        setInterval(updateTime, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleCheckbox(e) {
        if (!isChecked) {
            StorageAPI.setTodoComplete(data.id, true)
            setIsChecked(true)
        } else {
            StorageAPI.setTodoComplete(data.id, false)
            setIsChecked(false)
        }
    }

    return (
        <Box
            mb={3}
            padding={4}
            border='2px solid'
            borderColor='gray.800'
            borderRadius='xl'
            display='flex'
            alignItems='center'
        >
            <Box pr={3}>
                <Checkbox
                    size='lg'
                    colorScheme='purple'
                    isChecked={isChecked}
                    onChange={handleCheckbox}
                />
            </Box>
            <Box display='flex' alignItems='center' gap={3}>
                <Text variant='muted'>{data.description}</Text>
                {data.dueDate && (
                    <>
                        <Box
                            display='inline-block'
                            width='20px'
                            height='2px'
                            borderRadius='full'
                            background='gray.600'
                        />
                        <Text color={expired ? 'red.400' : 'gray.600'} opacity={expired ? 0.9 : 1}>
                            {expired ? 'Expired' : 'Expires'} {dueDateFromNow}
                        </Text>
                    </>
                )}
            </Box>
            <Box ml='auto'>
                <IconButton
                    icon={<>🗑️</>}
                    label='Delete'
                    onClick={() => StorageAPI.removeTodo(data.id)}
                    borderRadius='xl'
                />
            </Box>
        </Box>
    )
}
