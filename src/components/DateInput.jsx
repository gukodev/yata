import { forwardRef } from 'react'
import { Box, Text, Input } from '@chakra-ui/react'
import { trailingZero } from '../util/format'

const DateInput = forwardRef((props, ref) => {
    return (
        <Box w='100%' mb={[2, 0]}>
            <Text as='label' htmlFor={props.name} display='block' mb='3px' variant='muted'>
                {props.text}
            </Text>
            <Input
                {...props}
                placeholder={trailingZero(props.placeholder)}
                name={props.name}
                ref={ref}
            />
        </Box>
    )
})

DateInput.displayName = 'DateInput'

export default DateInput
