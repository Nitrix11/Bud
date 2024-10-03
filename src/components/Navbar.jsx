import logo from"../assets/Bud-logo.png"
function Navbar(){
    return(
        < div id="nav" className="flex items-center justify-center  ">
        <nav className=" flex items-center justify-center gap-[200px]">
            <div className="logo w-[12%] mr-[100px]">
                <img src={logo} alt="" />
            </div>
            <ul className="gap-[60px] flex text-[#fff] text-[20px]">
                <li>
                    Home
                </li>
                <li>
                    About Us
                </li>
                <li>
                    Products
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar