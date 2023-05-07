export const Navbar = ({ user }) => {
    return (
        <div className="navbar sticky top-0">

            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 h-16 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 h-6">
                    <h2 className="text-2xl font-bold tracking-tight">Acebook</h2>
                </div>
                <div className="flex items-center">
                    <p className="text-white mr-4">{user.displayName}</p>
                    <img className="w-6 h-6 rounded-full mr-4" src={user.photoURL} alt="User Profile Picture" />
                </div>
            </nav>


        </div>
    )
}