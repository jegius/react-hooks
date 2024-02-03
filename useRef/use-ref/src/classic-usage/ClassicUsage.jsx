import React, { useRef, useState } from "react";
import "./ClassicUsage.css";

function ClassicUsage() {
    const inputEl = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const data = ["Кот", "Собака", "Черепаха", "Кролик", "Мышь"];

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        setSearchTerm("")
        inputEl.current.focus();
        setSearchResults([]);
    }

    const search = () => {
        if (searchTerm !== "") {
            const results = data.filter(item =>
                item.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults(data);
        }
    };

    return (
        <div className="container">
            <input
                ref={inputEl}
                type="text"
                placeholder="Поиск"
                value={searchTerm}
                onChange={handleChange}
                onKeyUp={search}
            />
            <div className="results">
                {searchResults.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <button onClick={handleClick}>Сбросить</button>
        </div>
    );
}

export default ClassicUsage;