import { VStack, Flex, Button, FormControl, Input, FormLabel,Heading, useAccordionItemState } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/useAuth"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { auth_login } = useAuth(); 

    const handleLogin = ()=> {
        auth_login(username,password)
    }
    return (
        <Flex w='100%' h='75vh' justifyContent='center' alignItems='center'>
            <VStack alignItems='start' w='95%' maxW='400px'>
                <Heading>Login</Heading>
                <FormControl>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input onChange={(e)=> setUsername(e.target.value)} bg='white' type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input onChange={(e)=> setPassword(e.target.value)} bg='white' type='password' />
                </FormControl>
                <Button onClick={handleLogin} w='100%' colorScheme="blue" fontSize='18px'>Login</Button>
            </VStack>
        </Flex>
    )
}

export default Login;