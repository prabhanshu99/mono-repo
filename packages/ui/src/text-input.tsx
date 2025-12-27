interface PropType {
    placeholder: string;
    
}

export function TextInput({
    placeholder,
    
} :PropType ){
    return <input placeholder={placeholder} style={{
        padding:"20",
        margin:"20",
        borderColor:"black",
        borderWidth:1
    }}></input>
}