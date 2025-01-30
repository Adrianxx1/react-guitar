import { useState } from "react"

export default function Button(){

    const [count, setCount] = useState(1)

    return(
        <button
            onClick={() => setCount(count + 1)}
        >{'🐱'.repeat(count)}</button>
    )
}