import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Static Site",
  description: "Next.js static website with custom NavBar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />   {/* ✅ NavBar will show on every page */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
