import AppFrame from "../AppFrame";
import { Link } from "react-router-dom";
import Button from "../Button";
import GooglePlayIcon from "../../assets/svgs/GooglePlayIcon";
import AppleLogoIcon from "../../assets/svgs/AppleLogoIcon";
import FacebookIcon from "../../assets/svgs/FacebookIcon";
import WhatsappIcon from "../../assets/svgs/WhatsappIcon";
import InstagramIcon from "../../assets/svgs/InstagramIcon";
import TwitterIcon from "../../assets/svgs/TwitterIcon";
import TelegramIcon from "../../assets/svgs/TelegramIcon";
import FooterBlock from "./FooterBlock";
// import {ReactComponent}

const facebookLink = "https://www.facebook.com/";
const instagramLink = "https://www.instagram.com/";
const telegramLink = "https://web.telegram.org/";
const twitterLink = "https://x.com/";
const whatsappLink = "https://web.whatsapp.com/";
const appleLink = "https://www.apple.com/store";
const googleLink = "https://play.google.com/store/apps";

export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-white mt-20">
      <AppFrame>
        <div className="grid sm:grid-cols-3 xl:grid-cols-5 py-12">
          <FooterBlock />

          <div className="sm:col-span-3 xl:col-span-2  p-4 ">
            <h5 className="p-4 border-b  border-white">Work with us</h5>
            <div className="flex h-fit gap-2 sm:gap-4 mt-3 flex-wrap">
              <Button to={googleLink} type="main" addedClass="px-10">
                <GooglePlayIcon />
                Google Play
              </Button>
              <Button to={appleLink} type="secondary" addedClass="px-10">
                <AppleLogoIcon />
                App Store
              </Button>
            </div>
            <h5 className="p-4 border-b mt-4 border-white">
              Follow us in Social Media
            </h5>
            <div className="flex flex-wrap h-fit gap-2 mt-3">
              <Button to={facebookLink} type="secondary" addedClass="px-4">
                <FacebookIcon />
              </Button>
              <Button to={whatsappLink} type="secondary" addedClass="px-4">
                <WhatsappIcon />
              </Button>
              <Button to={instagramLink} type="secondary" addedClass="px-4">
                <InstagramIcon />
              </Button>
              <Button to={twitterLink} type="secondary" addedClass="px-4">
                <TwitterIcon />
              </Button>
              <Button to={telegramLink} type="secondary" addedClass="px-4">
                <TelegramIcon />
              </Button>
            </div>
            <h5 className="p-4 border-b mt-4 border-white">
              Our Contact information
            </h5>
            <div className="flex flex-col h-fit gap-1 mt-3">
              <a href="tel:+4733378901">+ 470 333 78 901</a>
              <a href="tel:+4733378901">+ 380 333 38 288</a>
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="flex mt-4 py-4 gap-3 px-4 flex-wrap sm:gap-10">
          <p>© 2012-2024 Preply Inc.</p>
          <span className="underline font-thin font-small">
            <Link to={"./aboutus"}>Legal Center</Link>
            <span className="mx-2"></span>
            <Link to={"./aboutus"}>Privacy Policy</Link>
            <span className="mx-2"></span>
            <Link to={"./aboutus"}>Cookie Policy</Link>
          </span>
        </div>
      </AppFrame>
    </footer>
  );
}
