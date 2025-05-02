


const Button = ({ children, onClick, type = 'button', className = '', variant = 'default' }) => {
    const baseClasses = 'px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2';
    const variants = {
        default: 'className=" rounded-md bg-Secondarycolor px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-white hover:text-Secondarycolor focus:ring-3 focus:outline-hidden sm:w-auto focus:ring-Secondarycolor',
        primary: 'className=" rounded-md border-[1px] border-white px-8 py-4 text-base font-medium  shadow-sm hover:bg-Secondarycolor hover:text-white hover:border-0 focus:ring-3 focus:outline-hidden sm:w-auto focus:ring-Secondrycolor',
        secondary: ' hidden md:block text-white  hover:shadow-lg hover:shadow-Secondarycolor  bg-gradient-to-r from-Primarycolor  via-Secondarycolor to-Primarycolor hover:text-light font-medium hover:bg-white rounded-full sm:w-auto w-100  rounded-md px-4 py-3 ',
        // Add more variants as needed
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
