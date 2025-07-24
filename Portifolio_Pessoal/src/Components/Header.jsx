import LogoWhite from '/src/Assets/LogoWhite.png'
const Header = () => {
    return ( 
        <>
            <header className='flex align-items-center justify-content-center '>
                <div><img src={LogoWhite} alt="" /></div>
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </nav>
                <div>
                    <button>Temporario</button>
                </div>
            </header>
        </>
     );
}
 
export default Header;