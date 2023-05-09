import { Navbar } from "./Navbar";
import { LeftSideBar } from "./LeftSideBar";
import { Feed } from "./Feed";


export const Home = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            <div className="flex flex-col md:flex-row">
                <LeftSideBar user={user} />
                <Feed />
            </div>
        </>
    )
}