import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
// import Sphere from "./components/hero/sphere";
import Navbar from "./components/navbar/Navbar";






function App() {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero/>
      {/* <Sphere/> */}
      
    
      
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
    {/* <Test/> */}

  </div>;
}

export default App;
