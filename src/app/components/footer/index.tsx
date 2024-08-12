const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Academy. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Подпишитесь на нас в 
          <a href="https://kg.linkedin.com/company/ai-academy-kg" className="text-blue-400 hover:text-blue-500 mx-1">LinkedIn</a>, 
          <a href="https://www.facebook.com/itacademy.kg/?locale=ru_RU" className="text-blue-400 hover:text-blue-500 mx-1">Facebook</a>, и 
          <a href="https://www.instagram.com/aiacademykg/" className="text-blue-400 hover:text-blue-500 mx-1">Instagram</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
