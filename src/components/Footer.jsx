const Footer = ({pos}) => {
  const footerStyle = pos === 'bottom' ? { position: 'absolute', bottom: '0px',width:'100%' } : {};

    return (
      <footer className="bg-[#f0f8f0] dark:bg-[#252525] py-6" style={footerStyle}>
        <div className="container mx-auto flex items-center justify-center px-4 md:px-6">
          {/* <div className="flex justify-center"> */}
          <p className="text-sm text-center text-green-700 dark:text-gray-100">
            © 2024 Geeks for Geeks RGUKT Nuzvid. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

  export default Footer;
