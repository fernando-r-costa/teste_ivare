import type { Metadata } from "next";
import "./globals.css";
import Banner from "./components/banner/page";
import Footer from "./components/footer/page";

export const metadata: Metadata = {
  title: "Controle de pedidos",
  description: "Painel para controle de pedidos",
  icons: {
    icon: "/frc.gif",
  },
};

// Componente de layout principal da aplicação, define a estrutura básica da página com banner, conteúdo principal e rodapé.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col h-dvh font-primaryFont text-[14px] bg-secondary-color text-dark-color">
        <Banner />
        <main className="flex-grow overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
