import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import feqImg from "../assets/images/faq-img.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import featureImg from "../assets/images/feature-img.png";

import videoIcon from "../assets/images/video-icon.png";
import About from "../components/About/About";

import ServiceList from "../components/Service/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FeqList from "../components/Feq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

function Home() {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] item-center justify-between">
            {/* =================hero_section+++==================================== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[30px] leading-[40px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  facilis debitis asperiores, non odio fuga laboriosam assumenda
                </p>

                <button className="btn p-4"> Request an Appointment</button>
              </div>

              <div className="mt-[300px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>

                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para"> Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>

                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para"> Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>

                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para"> Patiente Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =================hero_Contant+++==================================== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mt-[30px] " src={heroImg02} alt="" />
                <img className="w-full  " src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =================hero_section _end+++==================================== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text bg-center">
              Providing a best medical services{" "}
            </h2>
            <p className="text_para text-center">
              World class care for everyone.Our helth system offers unmarked,
              expert helth care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[]16px leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone, Our helth System offers
                  unmatchad, expert helth care. Form the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[30px] mx-auto flex
               items-center justify-center group hover:bg-primaryColor hover:border-n "
                >
                  <BsArrowRight className="group-hover: text-black w-6 h-5 " />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[]16px leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone, Our helth System offers
                  unmatchad, expert helth care. Form the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[30px] mx-auto flex
               items-center justify-center group hover:bg-primaryColor hover:border-n "
                >
                  <BsArrowRight className="group-hover: text-black w-6 h-5 " />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[]16px leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone, Our helth System offers
                  unmatchad, expert helth care. Form the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full  border border-solid border-[#181A1E] mt-[30px] mx-auto flex
               items-center justify-center group hover:bg-primaryColor hover:border-n "
                >
                  <BsArrowRight className="group-hover: text-black w-6 h-5 " />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div></div>
      <About />

      {/* =================service section satrt=============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <p className="text_para text-center">
              <h2 className="heading text-center"> Our medical service </h2>
              World-Class care for everyone. Our health system offers unmatchad,
              expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* =================service section end=============== */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                {" "}
                Get Virtual treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1.Schedule the appointement directly.
                </li>
                <li className="text_para">
                  2.Search for your physican hear, and contact thire office.
                </li>
                <li className="text-para">
                  3. View our physicans who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn p-5">Learn More</button>
              </Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute  bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                <div className="flex items-baseline justify-evenly gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    10:00 AM
                  </p>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px ]  text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  {" "}
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">
                    Dr.p.Chkrwarti
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section end */}
      {/* our great doctor start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our Great Doctors </h2>
            <p className="text_para text-center">
              World-Class care for everyone. Our health system offers unmatchad,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* our great doctor end */}
      {/* feq section start */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={feqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most question by our beloved patients</h2>
              <FeqList />
            </div>
          </div>
        </div>
      </section>
      {/* feq section end */}
      {/* testimonial start */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center"> Our Patient Say </h2>
            <p className="text_para text-center">
              World-Class care for everyone. Our health system offers unmatchad,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/* testimonial end */}
    </>
  );
}

export default Home;
