import './App.css'
import {Navbar} from "@/components/Navbar/Navbar.tsx";
import {Analyzer} from "@/components/Analyzer/Analyzer.tsx";
import {Footer} from "@/components/Footer/Footer.tsx";
import {History} from "@/components/History/History.tsx";

function App() {



    return <>
        <Navbar/>
        <History/>
        <Analyzer/>
        <Footer/>
    </>
}

export default App
