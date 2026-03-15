import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Home() {
    return(
    <main className="flex min-h-screen flex-col">
        <Navbar/>
        <Hero />
        <About />
        <Services />
        <Projects />
    </main>    
    );
}