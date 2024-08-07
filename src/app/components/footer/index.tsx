const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Academy. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Follow us on 
            <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Facebook</a>, 
            <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Twitter</a>, and 
            <a href="#" className="text-blue-400 hover:text-blue-500 mx-1">Instagram</a>.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  