import React from "react";
import logoImage from "../assets/logo-wv.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linedin.png";
import twt from "../assets/twitter.png";
import insta from "../assets/insta.png";
import Rectt from "../assets/Rectangle1.svg";



export default function Footer() {
  return (
    <footer className="bg-[#242431]">
      <div className="mx-auto  w-full max-w-screen-xl px-5 py-6 flex flex-col gap-3 ">
        <div className=" flex flex-row text-white justify-around relative">
          <div className="w-[25%] ml-5">
            <a href="home" className="">
              <img src={logoImage} alt="Logo" className="h-[23%] mb-4" />
            </a>
            <div className="mb-11 pr-[20%]">
              "le souffle vert de la prospérité agricole. "le souffle vert de la
              prospérité souffle vert de la prospérité agricole."
            </div>
            <div className="flex flex-row gap-3 items-center">
              <a href="/">
                <img src={fb} alt="Logo" className="h-7" />
              </a>
              <a href="/" className="">
                <img src={insta} alt="Logo" className="h-7" />
              </a>
              <a href="/" className="">
                <img src={twt} alt="Logo" className="h-7" />
              </a>
              <a href="/" className="">
                <img src={linkedin} alt="Logo" className="h-7" />
              </a>
            </div>
          </div>
          <div className="w-[45%] flex flex-row justify-evenly mt-7">
            <div>
              <p className="mb-9">Entreprise</p>

              <ul className="text-[#A9A9A9]">
                <a href="/">
                  <li className="mb-2">Qui sommes-nous?</li>
                </a>
                <a href="/">
                  <li className="mb-2">Nos sièges</li>
                </a>
                <a href="/">
                  <li className="mb-2">Agences commerciales</li>
                </a>
                <a href="/">
                  <li className="mb-2">Contactez nous</li>
                </a>
              </ul>
            </div>

            <div>
              <p className="mb-9">Entreprise</p>
              <ul className="text-[#A9A9A9] ">
                <a href="/">
                  <li className="mb-2">Qui sommes-nous?</li>
                </a>
                <a href="/">
                  <li className="mb-2">Nos sièges</li>
                </a>
                <a href="/">
                  <li className="mb-2">Agences commerciales</li>
                </a>
                <a href="/">
                  <li className="mb-2">Contactez nous</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="w-[30%] justify-center items-center pl-11 pr-1 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13293.564547482245!2d-5.522622160894374!3d33.905878674694246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda3f768c943ab9d%3A0xd96f925e5a238a1f!2sZONE%20AGROPOLIS%20DE%20MEKNES%20ii1%20Lot%20N%C2%B0%209%2C%20Mekn%C3%A8s!5e0!3m2!1sen!2sus!4v1643883181716!5m2!1sen!2sus"
              width="90%"
              height="270"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
          <svg
            className="absolute bottom-4 left-0 opacity-40 "
           
            viewBox="0 0 1350 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="1350"
              height="4"
              transform="matrix(1 0 0 -1 0 5)"
              fill="#D9D9D9"
            />
          </svg>
        </div>
        <div className="h-[15%] text-white items text-center text-xs">
          © SCOMAI 2023 - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
