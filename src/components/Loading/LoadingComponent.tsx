import { Flex, Spinner } from '@chakra-ui/react';

const LoadingComponent = () => {
  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="primary"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};

export default LoadingComponent;
