import "../css/buttons.css";
export  default function Button(props){

    return <button className={"btn "+props.className}>{props.children}</button>;
}