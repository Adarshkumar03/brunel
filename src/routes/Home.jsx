import Navbar from "../components/Navbar";
import Tagline from "../components/Tagline";
import Feature from "../components/Feature";
import Questions from "../components/Questions";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="p-5 poppins-regular">
      <Navbar />
      <Tagline />
      <Feature />
      <Questions />
      <Footer />
    </main>
  );
}

export default Home;
