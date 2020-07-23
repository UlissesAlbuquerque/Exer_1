import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image, Text, ScrollView } from 'react-native'
import { Container } from './styles.js'
import { getUsers } from '../../../services/users'
import reactotron from 'reactotron-react-native'
import UserThumbnail from '../../atoms/UserThumbnail'
import UserData from '../../atoms/UserData'
import User from '../../molecules/User'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/FontAwesome';

const Details = ({ route }) => {
    const [user, setUser] = useState(route.params.user)
    const navigation = useNavigation();

    const handleBackPress = () =>{
        navigation.goBack()
    }

    return (
        <Container>
            <UserThumbnail picture={user.picture.thumbnail} />
            <UserData fullName={user.name.first + ' ' + user.name.last} email={user.email} />
            <Button color='green' icon="account" mode="outlined" onPress={handleBackPress}>
                Voltar
            </Button>
        </Container >

    )
}

export default Details
