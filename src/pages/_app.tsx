import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <NextSeo
          title=""
          description=""
          openGraph={{
            title: "",
            description: "",
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
