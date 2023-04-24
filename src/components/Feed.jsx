import { Post } from "./Post"

export const Feed = () => {
    return (
        <div className="w-full md:w-3/4 bg-white p-4">
            <Post />
            <Post />
        </div>
    )
}