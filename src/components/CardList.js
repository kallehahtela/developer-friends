import React from "react";
import Card from "./Card";
import { render } from "@testing-library/react";

const CardList = ({ Developers }) => {
    if (true) {
        throw new Error('NOOOOO!');
    }
    return (
        <div>
            {
                Developers.map((user, i)=> {
                    return (<Card
                     key= {i}
                     id={Developers[i].id}
                     name={Developers[i].name} 
                     email={Developers[i].email}
                     />
                    );
                })
            }
        </div>
    );
}

export default CardList;