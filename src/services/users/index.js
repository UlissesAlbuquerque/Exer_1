import { usersApi } from './config'
import reactotron from 'reactotron-react-native'

/**
 * Get a list of users from randomusers.me API
 * @param {number} results - Number of users to retrieve
 */
export const getUsers = async (results) => {
    try {
        let response = await usersApi.get('/api/?results=' + results)
        return response.data.results
    } catch (error) {
        reactotron.log(error)
    }
}

