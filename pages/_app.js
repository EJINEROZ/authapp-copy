import Head from "next/head"
import { LRAuthProvider } from "loginradius-react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../layout/layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Loginradius Next</title>
      </Head>

      <LRAuthProvider
        appName="nextapp"
        apiKey="5b1af524-5f3b-4740-9509-2700796e7fb3"
        redirectUri={"http://localhost:3000/"}
      >
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </LRAuthProvider>
    </>
  )
}

export default MyApp