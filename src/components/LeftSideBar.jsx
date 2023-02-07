import { useState } from "react"

export const LeftSideBar = ({ setPost }) => {
    const [text, setText] = useState()
    const handlePost = () => {
        if (text) {
            setPost(text)
        }
    }
    return (
        <div className="left-side-bar">
            <form>
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={handlePost}>post</button>
            </form>
        </div>
    )
}