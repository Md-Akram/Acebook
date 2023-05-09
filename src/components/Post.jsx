export const Post = ({ post, key }) => {
    console.log(post);
    return (
        <div className="flex mb-4">
            <img className="w-12 h-12 rounded-full mr-4" src={post.photoURL} alt="User Profile Picture" />
            <div className="flex-1">
                <div className="flex items-center mb-2">
                    <h2 className="text-lg font-bold text-gray-900">{post.displayName}</h2>
                    <span className="text-gray-600 ml-2">3h ago</span>
                </div>
                <p className="text-gray-800">{post.postContent}</p>
                <div className="flex justify-between mt-4">
                    <button className="text-gray-800 bg-gray-300 px-4 py-2 rounded hover:text-blue-500"><i className="far fa-thumbs-up mr-2"></i>Like</button>
                    <button className="text-gray-800 bg-gray-300 px-4 py-2 rounded hover:text-blue-500 "><i className="far fa-comment mr-2"></i>Comment</button>
                </div>
            </div>
        </div>
    )
}