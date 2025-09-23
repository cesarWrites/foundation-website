import "./globals.css";
import "./styles/programImpact.css"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata = {
  title: "GK Foundation",
  description: "GK Foundation empowers communities through education, healthcare, and social programs that raise lives. ",
  keywords: [
    "George Kithi Foundation",
    "gk foundation",
    "gkfoundation",
    "bursary program Kenya",
    "Kilifi County",
    "Ganze",
    "student support",
    "HISA ZIPO CBO",
  ],
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />   
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
