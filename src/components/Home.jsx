import React, { useState} from 'react'
import { Flex, Spacer,Box } from '@chakra-ui/react'
import TodoListTable from './TodoListTable'
import UserDetails from './UserDetails'

const Home = () => {
    const [storeUserId, setStoreUserId] = useState();
  return (
<Flex padding="5% 2%">
  <TodoListTable setStoreUserId = {setStoreUserId}/>
  <Spacer />
  <UserDetails storeUserId = {storeUserId} />
</Flex>
  )
}

export default Home