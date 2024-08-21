import {Box} from "@chakra-ui/react";

// this will render fine without --turbo, but will emit the error below with --turbo
// Error: createContext only works in Client Components. Add the "use client" directive at the top of the file to use it.
// Read more: https://nextjs.org/docs/messages/context-in-server-component
export default function Home() {
  return <Box>Hello world</Box>;
}
