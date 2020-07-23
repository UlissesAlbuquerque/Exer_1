import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView  } from 'react-native'
import { Container } from './styles'
import { getUsers } from '../../../services/users'
import reactotron from 'reactotron-react-native'
import UserThumbnail from '../../atoms/UserThumbnail'
import UserData from '../../atoms/UserData'
import User from '../../molecules/User'


const Home = () => {
    const [usersList, setUsersList] = useState([])

    const handleGetUsers = async () => {
        let response = await getUsers(30)
        reactotron.log(response)
        setUsersList(response)
    }

    useEffect(() => {
        handleGetUsers()

    }, [])
    return (
        <Container>
            {usersList.length > 0 && <ScrollView>
                    {usersList.map((user,index)=>{
                        return <User key={index} user={user}/>
                    })}
                </ScrollView>}
        </Container>
    )
}

export default Home
