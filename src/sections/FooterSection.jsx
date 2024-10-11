import Button from "../components/CommonBtn";

const FooterSection = () => {
  return (
    <footer className="bg-[#131313] mt-8 p-6 md:p-14">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between flex-wrap gap-5">
          <div className="flex flex-col gap-2 text-gray-500 font-semibold">
            <div className="flex items-center gap-2">
              <img className="w-8" src="./images/logo.webp" alt="logo" />
              <h2 className="text-xl md:text-3xl font-bold text-gray-300">
                Peddy
              </h2>
            </div>
            <p>Location: av. Washington 165, NY CA 54003</p>
            <p>Phone: +31 85 964 47 25</p>
            <p>Email: kmmithu2015@gmail.com</p>
            <p>Openings hours: 9.00 AM - 5.00 PM</p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#">
                <img
                  className="w-12"
                  src="./icons/Facebook.png"
                  alt="facebook"
                />
              </a>
              <a href="#">
                <img className="w-12" src="./icons/Twitter.png" alt="twitter" />
              </a>
              <a href="#">
                <img
                  className="w-12"
                  src="./icons/Instagram.png"
                  alt="instagram"
                />
              </a>
              <a href="#">
                <img
                  className="w-12"
                  src="./icons/Linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-400">Useful Links</h2>
            <ul className="flex flex-col mt-5 gap-2 text-gray-500 font-semibold">
              <li className="hover:translate-x-1 hover:translate-y-1 transition-all">
                Home
              </li>
              <li className="hover:translate-x-1 hover:translate-y-1 transition-all">
                About Us
              </li>
              <li className="hover:translate-x-1 hover:translate-y-1 transition-all">
                Animals
              </li>
              <li className="hover:translate-x-1 hover:translate-y-1 transition-all">
                Foundation
              </li>
              <li className="hover:translate-x-1 hover:translate-y-1 transition-all">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-300">Drop a Message</h2>
            <input
              type="text"
              placeholder="Enter Your Email..."
              className="w-full bg-gray-500 outline-none text-white rounded-lg px-2 py-2 mt-5"
            />
            <Button full={"w-full"} text={"Subscribe"} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
