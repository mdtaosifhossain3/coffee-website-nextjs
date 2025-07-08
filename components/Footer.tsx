import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-400 ">
      <div className="max-w-[1189px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <Image
            alt="Coffee shop logo in footer"
            className=" mb-2 "
            height={128}
            src="/logo.png"
            width={128}
          />

          <p className="text-sm">
            Brewing happiness one cup at a time. Visit us for the finest coffee.
          </p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a aria-label="Facebook" className="hover:text-green-500" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a aria-label="Twitter" className="hover:text-green-500" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a aria-label="Instagram" className="hover:text-green-500" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a aria-label="LinkedIn" className="hover:text-green-500" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-green-500" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-green-500" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Shipping
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Contact Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">123 Coffee St, Brew City, CA 90210</p>
          <p className="text-sm mt-2">Email: support@coffee.com</p>
          <p className="text-sm mt-1">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © 2024 Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
