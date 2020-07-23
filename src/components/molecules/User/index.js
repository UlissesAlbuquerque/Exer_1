import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import UserThumbnail from '../../atoms/UserThumbnail'
import UserData from '../../atoms/UserData'
import reactotron from 'reactotron-react-native'
import { useNavigation } from '@react-navigation/native';

const User = ({user}) => {
    const navigation = useNavigation();

    
    const handlePress = () =>{
        navigation.navigate('Details',{user})
    }

    return (
        <TouchableOpacity 
        onPress={handlePress}
        style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <UserThumbnail picture={user.picture.thumbnail} />
            <UserData fullName={user.name.first + ' ' + user.name.last} email={user.email} />
        </TouchableOpacity>
    )
}

export default User
