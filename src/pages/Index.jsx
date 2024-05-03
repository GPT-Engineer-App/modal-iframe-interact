import React, { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Box, Text } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [iframeContent, setIframeContent] = useState("");

  const handleButtonClick = (script) => {
    // Placeholder for invoking custom JavaScript
    // Example: const response = customScript();
    // You would replace the next line with actual script invocation
    const response = `<h1>Response from ${script}</h1>`;

    setIframeContent(response);
    onOpen();
  };

  return (
    <Box p={5}>
      <Text fontSize="xl" mb={4}>
        Welcome to the Interactive Button Site
      </Text>
      <Button colorScheme="blue" m={2} onClick={() => handleButtonClick("Script1")}>
        Invoke Script 1
      </Button>
      <Button colorScheme="green" m={2} onClick={() => handleButtonClick("Script2")}>
        Invoke Script 2
      </Button>
      <Button colorScheme="red" m={2} onClick={() => handleButtonClick("Script3")}>
        Invoke Script 3
      </Button>
      <Button colorScheme="purple" m={2} onClick={() => handleButtonClick("Script4")}>
        Invoke Script 4
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Script Response</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe title="script-response" srcDoc={iframeContent} width="100%" height="200px" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
