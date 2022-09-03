import React from 'react';

//interfacing the props
interface props {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    addHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

//the functional component

const InputField: React.FC<props> = ({
    inputText,
    setInputText,
    addHandler,
}) => {
    // the text change handler function
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputText(e.target.value);
    };

    return (
        <div className="container">
            <form className="formBatch" onSubmit={addHandler}>
                <input
                    value={inputText}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Lets Taskify"
                    className="input"
                />
                <button className="addBtn">Add</button>
            </form>
        </div>
    );
};

export default InputField;
