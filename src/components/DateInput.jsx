import { Box, Text, Input } from '@chakra-ui/react'
import { trailingZero } from '../util/format'

export default function DateInput(props) {
    return (
        <Box w='100%'>
            <Text as='label' htmlFor={props.name} display='block' mb='3px' variant='muted'>
                {props.text}
            </Text>
            <Input {...props} placeholder={trailingZero(props.placeholder)} name={props.name} />
        </Box>
    )
}
