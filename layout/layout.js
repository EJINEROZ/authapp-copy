import { Box } from "@chakra-ui/react"
import Nav from "./Nav"

export default function Layout({ children }) {
  return (
    <Box h="100vh" bg="blue.100">
      <Box>{children}</Box>
      <Nav />
    </Box>
  )
}