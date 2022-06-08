import { Box, Button, Center, Flex, Stack } from "@chakra-ui/react"
import { useLRAuth } from "loginradius-react"

export default function Nav() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useLRAuth()
  return (
   
    <Box>
       <Center mt={10}>
        {!user && (
          <Button onClick={() => loginWithRedirect()}>Login to continue</Button>
        )}

        {isAuthenticated && user && (
          <Button onClick={() => logout()}>Log out</Button>
        )}

      </Center>
    </Box>
  )
}
