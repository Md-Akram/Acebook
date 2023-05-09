import { Post } from "./Post"
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

export const Feed = () => {

    const [feedData, setFeedData] = useState([])

    useEffect(() => {
        const db = getDatabase();
        const starCountRef = ref(db, 'posts');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setFeedData(data)
            console.log(data)
        });
    }, [])
    return (
        <div className="w-full md:w-3/4 bg-white p-4">
            {feedData && Object.keys(feedData).map((key) => {
                return <Post key={key} post={feedData[key]} />
            })
            }
        </div>
    )
}