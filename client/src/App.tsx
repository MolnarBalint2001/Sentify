import './App.css'
import {Navbar} from "@/components/Navbar/Navbar.tsx";
import {Footer} from "@/components/Footer/Footer.tsx";
import {Sidebar} from "@/components/Sidebar/Sidebar.tsx";
import {Provider} from "react-redux";
import {store} from "@/store/store.ts";
import {AnalyzerWrapper} from "@/components/AnalyzerWrapper/AnalyzerWrapper.tsx";

function App() {

    return <Provider store={store}>
        <>
            <Navbar/>
            <Sidebar/>
            <AnalyzerWrapper/>
            <Footer/>
        </>
    </Provider>
}

export default App
