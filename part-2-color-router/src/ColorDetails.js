import { useParams, Switch, Route } from "react-router";

const ColorDetails = () => {
    const {color} = useParams();
    return (
        <h1>{color}</h1>
    );
}

export default ColorDetails