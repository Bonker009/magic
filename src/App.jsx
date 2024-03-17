import CallMessage from "./components/CallMessage";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {useState} from "react";

function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModalHandler() {
        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <div className="w-[80rem] h-[40rem] bg-white rounded-3xl overflow-hidden">
            <Header/>
            <div className="flex w-full">
                <Sidebar/>
                <Content onCreateCard={showModalHandler} isShowing={modalIsVisible} onStopShowing={hideModalHandler}/>
                <CallMessage/>
            </div>
        </div>
    );
}

export default App;
