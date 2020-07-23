import React from 'react'
import { View, Text } from 'react-native'
import { Container, Name, Email } from './styles'


/**
 * UserData - Show user information
 * @param {object} props
 * @param {string} props.fullName - User full name
 * @param {string} props.email - User E-mail
 */
const UserData = ({
    fullName,
    email
}) => {
    return (
        <Container>
            <Name>{fullName}</Name>
            <Email>{email}</Email>
        </Container>
    )
}

export default UserData
