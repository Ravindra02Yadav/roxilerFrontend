import React, {useEffect, useState} from 'react'
import { Box, Flex, Heading,Text } from '@chakra-ui/react'
import { getTableData, getUsereData } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const UserDetails = ({storeUserId}) => {

    const tableData = useSelector((state)=>state.table)
    const userData = useSelector((state)=>state.user)
    const dispatch = useDispatch();

    useEffect(()=>{
dispatch(getTableData)
dispatch(getUsereData)
    },[storeUserId])
const userDataFunction = () =>{
  
}
    const filterData = tableData.filter((el)=>{
            return el.id === storeUserId;
        })
        const filterUserData = userData.filter((el)=>{
          return el.id === storeUserId;
      })
// console.log(userData)
  return (
    <Box  w="45%">
 <Heading as='h6' size='xs' m="0.8rem" p="0.3rem 0" textAlign="left" >User Details</Heading>
 <Box border="1px solid gray" m="0.2rem" >

{filterData.map((item)=>{
    return(
       <Box key={item.id}>
       <Flex m="1rem" gap="5rem" textAlign="left" >
        <Text>ToDo Id</Text>
        <Text>{item.id}</Text>
        </Flex>
        <Flex m="1rem" gap="5rem" textAlign="left"  >
        <Text>ToDo Title</Text>
        <Text>{item.title}</Text>
        </Flex>
        <Flex m="1rem" gap="5rem" textAlign="left">
        <Text>User ID</Text>
        <Text>{item.userId}</Text>
        </Flex>
       </Box>

    )
})}
{filterUserData.map((item)=>{
    return(
       <Box key={item.id}>
       <Flex m="1rem" gap="5rem" textAlign="left">
        <Text>Name</Text>
        <Text>{item.username}</Text>
        </Flex>
        <Flex m="1rem" gap="5rem" textAlign="left">
        <Text>Email</Text>
        <Text>{item.email}</Text>
        </Flex>
        
       </Box>

    )
})}

 </Box>
    </Box>
  )
}

export default UserDetails