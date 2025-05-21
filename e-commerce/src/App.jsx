import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Cards from "./component/Card";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Cards searchQuery={searchQuery} />
        </div>
    );
}

export default App;
