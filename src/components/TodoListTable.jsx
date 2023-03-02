import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Input, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTableData } from "../redux/action";

const TodoListTable = ({ setStoreUserId }) => {
  const [inputData, setInputData] = useState("");
  const tableData = useSelector((state) => state.table);
  const [sortBy, setSortBy] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [isTrue, setIsTrue] = useState(false); 
  const dispatch = useDispatch();

  const handleChange = (e) => {
    
    const text = e.target.value;
    if(text == ""){
      setIsTrue(false)
    }
    else{
      setIsTrue(true);
    }
    setInputData(text);
    const searchData = tableData.filter((el) => {
      return el.title.toLowerCase().indexOf(text) != -1 ? true : false;
    });  
    // console.log(searchData);
  setFilterData(searchData)
  };


  
  useEffect(() => {  
    if(sortBy === true){
      dispatch(getTableData("asc"));
    }
    else
    {
      dispatch(getTableData("desc"));
    }
     
     
  }, [filterData,sortBy]);
  
 
  
console.log(filterData)

  return (
    <Box w="50%" m="0.2rem">
      {/*  heading  */}
      <Flex justifyContent="space-between">
        <Heading as="h6" size="xs" mt="0.8rem">
          Todos
        </Heading>
        <Box border="1px solid black" borderRadius="2rem" padding="0 1rem">
          <Flex>
            <Search2Icon margin="auto" />
            <Input
              type="text"
              value={inputData}
              onChange={handleChange}
              placeholder="Search..."
              outline="none"
            />
             <Button colorScheme='black' variant='outline' onClick={()=>setSortBy(!sortBy)}>
              {sortBy === true ? "Asc" : "Desc"}
               </Button>
          </Flex>
        </Box>
      </Flex>

      {/*  table  */}
      <TableContainer m="0.2rem" h="430px" border="1px solid gray">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr >
              <Th>ToDo Id</Th>
              <Th>Title</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
    {isTrue ?       <Tbody>
            {filterData.map((item) => {
              return (
                <Tr key={item.id} >
                  <Td>{item.id}</Td>
                  <Td >{item.title}</Td>
                  <Td>
                    {item.completed === true ? "completed" : "Incompleted"}
                  </Td>
                  <Td>
                    {" "}
                    <Button
                      colorScheme="black"
                      variant="outline"
                      onClick={() => setStoreUserId(item.id)}
                    >
                      View User
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          : 
          <Tbody>
          {tableData.map((item) => {
            return (
              <Tr key={item.id} m="0px">
                <Td>{item.id}</Td>
                <Td>{item.title}</Td>
                <Td>
                  {item.completed === true ? "completed" : "Incompleted"}
                </Td>
                <Td>
                  {" "}
                  <Button
                    colorScheme="black"
                    variant="outline"
                    onClick={() => setStoreUserId(item.id)}
                  >
                    View User
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TodoListTable;
