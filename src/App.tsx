import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import indexTheme from "./Theme/indexTheme";
import AccountModal from "./components/AccountDetails/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraProvider theme={indexTheme}>
        <Layout>
          <ConnectWallet handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
