import React,{useEffect, useRef, useState} from "react";

interface Props{
    name: string;
    age: number;
}

export const TextField:React.FC<Props> = ({name,age}) => {
    const [count, setCount] = useState<number | null>(1);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{
        console.log(inputRef.current?.value);
    });
    return (
        <div>
            <h2>Hello {name}, and I know that you are {age} years old</h2>
            <input ref={inputRef}/>
            <h3>{inputRef.current?.value}</h3>
        </div>
    );
}