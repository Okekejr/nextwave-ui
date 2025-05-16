import { Box, Heading } from "@chakra-ui/react";
import { CustomText } from "../ui/customText";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  return { message: "Hello World!" };
};

const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["hello"],
    queryFn: fetchData,
  });
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(boxRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, []);

  return (
    <Box p={8} ref={boxRef}>
      <Heading>🚀 Welcome to nextwave-ui</Heading>
      <CustomText>{isLoading ? "Loading..." : data?.message}</CustomText>
    </Box>
  );
};

export default HomePage;
