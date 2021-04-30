import Link from 'next/link'
import { useState } from "react";
import { Counter } from "../components/Counter";

export default function Home()
{
    const [isVisible, setVisible] = useState(true);
    return (
        <>
            <h1>Home!</h1>
            {isVisible && <Counter initialValue={0} />}
            <hr />
            <button onClick={() => setVisible(v => !v)}>Toggle</button>
            <Link href="/about">
                <a>
                    Go to about 😉
                </a>
            </Link>
        </>
    );
}