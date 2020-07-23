import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Container, Picture } from './styles'
import reactotron from 'reactotron-react-native'

const UserThumbnail = ({ picture }) => {
    useEffect(() => {
        reactotron.log(picture)
    }, [])

    return (
        <Container>
            <Picture source={{
                uri: picture,
            }}
            />
        </Container>
    )
}

export default UserThumbnail
