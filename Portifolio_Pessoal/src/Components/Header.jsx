import LogoWhite from '/src/Assets/LogoWhite.png'
import { Button } from 'primereact/button';


const Header = () => {
    return ( 
        <>
            <header className='flex align-items-center justify-content-around w-full'>
                <div><img src={LogoWhite} alt="" /></div>
                <nav>
                    <ul className='flex gap-4'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="">Home</a></li>
                    </ul>
                </nav>
                <div>
                    <Button label="Submit" />
                </div>
            </header>
        </>
     );
}
 
export default Header;