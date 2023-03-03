import Footer from "./components/footer/page";
import Header from "./components/header/page";
import "./globals.scss";

import { Exo } from "next/font/google";
const exo = Exo({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
