import "./NavBar.css"
export const NavBar = () => {
    return (
        <>
            <div id="main">
                <img src="https://www.logo-designer.co/wp-content/uploads/2018/05/2018-bestbuy-new-logo-design.png" alt="logo" />
                <img className="other" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cmVjdCB3aWR0aD0iNzUyIiBoZWlnaHQ9Ijc1MiIgZmlsbD0iIzAwNDViZSIvPgogIDxwYXRoIGQ9Im0xNjIuODkgMTcyLjM2aDQyNi4yMnY3MS4wMzloLTQyNi4yMnoiIGZpbGw9IiNmZmYiLz4KICA8cGF0aCBkPSJtMTYyLjg5IDM0Mi44NWg0MjYuMjJ2NzEuMDM5aC00MjYuMjJ6IiBmaWxsPSIjZmZmIi8+CiAgPHBhdGggZD0ibTE2Mi44OSA1MTMuMzRoNDI2LjIydjcxLjAzOWgtNDI2LjIyeiIgZmlsbD0iI2ZmZiIvPgogPC9nPgo8L3N2Zz4K" alt=""/>
                    <div className="dropdown">
                        <button className="dropbtn">Menu</button>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="topDeals.html">Top Deals</a>
                            <a href="dealsOfTheDay.html">Deals of the Day</a>
                            <a href="appliances.html">All Appliances</a>
                            <a href="mobiles.html">Mobiles</a>
                            <a href="laptop.html">Laptops</a>
                            <a href="/">Best Buy Outlet</a>
                            <a href="/">Toys, Games & Collectibles</a>
                        </div>
                    </div>
                    <input id="search-nav" type="text" placeholder="Search Best Buy"/>
                        <div >
                            <img src="https://cdn-icons-png.flaticon.com/128/7644/7644705.png" alt=""/>
                        </div>

                        <img className="other" src="" alt="" />
                        <p className="other" >Aiea</p>
                        <img src="" alt=""/>
                            <p>Cart</p>
                        </div>
                        <div id="buttons">
                            <div>
                                <p id="top">Top Deals</p>
                                <p id="deal">
                                    Deal of the Day</p>
                                <p className="other">
                                    Totaltech Membership</p>
                                <p className="other other1">
                                    Credit Cards</p>
                                <p className="other other1">
                                    Gift Cards</p>
                                <p className="other other1">
                                    Gift Ideas</p>
                                <select name="" id="">
                                    <option value="">More</option>
                                </select>
                            </div>
                            <div>
                                <div className="dropdown1">
                                    <button onclick="myFunction1()" className="dropbtn1">Account</button>
                                    <div id="myDropdown1" className="dropdown-content1">
                                        <a href="login.html">Sign In</a>
                                        <a href="signup.html">Create Account</a>
                                        <a href="userAccount.html">Your Account</a>
                                    </div>
                                </div>
                                <select className="other" name="" id="">
                                    <option value="">Recently Viewed</option>
                                </select>
                                <select className="other" name="" id="">
                                    <option value="">Order Status</option>
                                </select>
                                <select className="other" name="" id="">
                                    <option value="">Saved Items</option>
                                </select>
                            </div>
                        </div>
                    </>
                    )
}