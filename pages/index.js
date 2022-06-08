import { useEffect } from "react"
import { useRouter } from "next/router"
import { useLRAuth } from "loginradius-react"
import { Text, Button, Heading, VStack, Center } from "@chakra-ui/react"

export default function Home() {
  const { isLoading, isAuthenticated, error, user } = useLRAuth()
  const router = useRouter()

  useEffect(() => {
    if (user && isAuthenticated) {
      router.push("/profile")
    }
  }, [router, user, isAuthenticated])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return (
    <Center pt={10}>
      <VStack spacing={[6, 8]}>
        <Heading as="h2">Welcome to Openreplay Authentication Platform</Heading>
        <Text fontSize="3xl"> Click Login to Continue</Text>
      </VStack>
    </Center>
  )
}