import { useState, useEffect } from 'react';

export const Timer =  ({st, sp}) => {

    const [timer, setTimer] = useState(st);

    const[stop] = useState(sp);

    useEffect(() => {

        const id = setInterval(() => {
            console.log("Interval");

            setTimer((prev) => {
                if(prev === stop)
                {
                    clearInterval(id);
                    return timer;
                }
                return prev + 1;
            });
        },100);
    },[]);

        return (
            <div>
                Timer: { timer }
            </div>
        );
}