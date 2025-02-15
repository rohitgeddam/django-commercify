const ScreenLayout = ({children}) => {
    return (
        <div className="md:mx-auto md:px-4 md:py-4 min-h-screen">
            {children}
        </div>
    );
}
 
export default ScreenLayout;