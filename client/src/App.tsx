import './App.css'
import {Navbar} from "@/components/Navbar/Navbar.tsx";
import {Analyzer} from "@/components/Analyzer/Analyzer.tsx";
import {Footer} from "@/components/Footer/Footer.tsx";
import {History} from "@/components/History/History.tsx";
import {Sidebar} from "@/components/Sidebar/Sidebar.tsx";

function App() {



    return <>
        <Navbar/>
        <Sidebar/>

        <Analyzer/>
        <Footer/>
    </>
}

export default App
