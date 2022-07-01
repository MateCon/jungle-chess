import { useQuery } from 'react-query'
import { getAllUsers } from '../axios/axiosClient'

export default function Test() {
    const { isLoading, error, data } = useQuery<any, any>('getAllUsers', getAllUsers);

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    console.log(data)

    return (
        <div>
            
        </div>
    )
}