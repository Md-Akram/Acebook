import React, { useState } from "react";

function PostForm() {
    const [postContent, setPostContent] = useState("");

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the post content, such as submitting it to Firebase
        console.log(postContent);
        setPostContent("");
    };

    return (
        <div className="w-full md:w-1/4 bg-gray-100 py-4 px-4 h-full">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="post-content"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Create Post
                    </label>
                    <textarea
                        id="post-content"
                        name="post-content"
                        rows="3"
                        placeholder="What's on your mind?"
                        className="w-full border rounded py-2 px-3"
                        value={postContent}
                        onChange={handlePostContentChange}
                    ></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create
                </button>
            </form>
        </div>
    );
}

export default PostForm;
