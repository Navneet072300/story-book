import { NextUIProvider } from "@nextui-org/react";
import Header from "./_components/Header";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      {" "}
      <Header />
      {children}
    </NextUIProvider>
  );
};

export default Provider;
