import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faTimes} from "@fortawesome/free-solid-svg-icons";

const Input = ({value, onChange, setInputValue, onClear}) => {
    return (
        <form className="content__search" onSubmit={(e) => onChange(e)}>
            <input type="text"  placeholder="Введите название фильма" value={value} onChange={(e) => setInputValue(e.target.value)}/>
            <FontAwesomeIcon className="content__search-icon" icon={faSearch}/>
            {value && <FontAwesomeIcon className="content__close-icon" icon={faTimes} onClick={onClear}/>}
        </form>
    );
};

export default Input;
