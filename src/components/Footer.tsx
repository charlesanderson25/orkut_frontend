import { FaRegCopyright } from 'react-icons/fa';

const textFooter = {
    h2: "Charles Anderson",
}

const Footer = () => {
    return (
        <div 
            style={{ fontFamily: "Josefin Sans, sans-serif" }} 
            className="flex justify-center bg-darkTheme text-defaultRed"
        >
            <div className="flex items-center m-5">
                <div className="mr-2">
                    <CopyrightIcon />
                </div>
                <h2 className="tracking-wide"> {textFooter.h2} </h2>
            </div>
        </div>
    );
}

const CopyrightIcon = () => {
    return <FaRegCopyright />;
}

export default Footer;