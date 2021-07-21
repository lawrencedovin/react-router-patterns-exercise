import React from 'react';
import { Link } from 'react-router-dom';

const defaultColors = ['red', 'blue', 'green'];

const ColorList = ({ colors=defaultColors }) => {
    return (
        <ul>
            {colors.map(color => (
                <li key={color}>
                    <Link to={`/colors/${color}`}>
                        {color}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ColorList;