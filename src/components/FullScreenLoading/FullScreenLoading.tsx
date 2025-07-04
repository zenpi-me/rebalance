import { Box, Spinner } from "@chakra-ui/react";

const FullScreenLoading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner />
    </Box>
  );
};

export default FullScreenLoading;
