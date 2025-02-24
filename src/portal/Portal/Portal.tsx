import { JSX, useEffect, useState } from 'react';
import ReactDOM from "react-dom";

type Props = {
    children: JSX.Element;
};

export const Portal = function ({children}:Props) {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);

        return (() => {
            document.body.removeChild(container);
        })
    }, [])

  return ReactDOM.createPortal(children, container)
}


