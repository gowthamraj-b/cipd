import { Helmet } from "react-helmet";
import { Heading, Button, Input, Img, Text } from "../../components";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>User Login - Access Your Account | NANDHA ENGINEERING COLLEGE</title>
        <meta
          name="description"
          content="Sign in to your account with your email and password to access exclusive content. Secure and easy login process at NANDHA ENGINEERING COLLEGE."
        />
      </Helmet>
      <div className="flex w-full items-center gap-2.5 bg-gray-50 md:flex-col">
        <div className="w-[32%] md:w-full md:p-5">
          <div className="flex flex-col items-center justify-end bg-amber-a700 px-14 py-[124px] md:p-5">
            <Img
              src="images/img_rectangle_2.png"
              alt="Image"
              className="mt-16 h-[160px] w-[160px] rounded-[14px] object-cover"
            />
            <Heading size="headingmd" as="h1" className="mt-14 !font-orbitron tracking-[2.40px] !text-black-900">
              C.I.P.D
            </Heading>
            <Text as="p" className="mt-[246px] w-[90%] text-justify leading-5 tracking-[0.36px] md:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute iruare dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start px-2.5 md:self-stretch md:p-5">
          <div className="flex w-[90%] flex-col items-center rounded-bl-[5px] rounded-br-[24px] rounded-tl-[5px] rounded-tr-[24px] border border-solid border-gray-100 bg-gray-50 p-8 md:w-full sm:p-5">
            <div className="mt-[114px] flex w-[76%] flex-col items-start md:w-full">
              <a href="#">
                <Heading size="textxl" as="h2" className="tracking-[0.48px]">
                  Sign In
                </Heading>
              </a>
              <div className="h-[3px] w-[14%] bg-amber-a700" />
            </div>
            <div className="mr-4 mt-14 flex w-[76%] flex-col items-end gap-[88px] md:mr-0 md:w-full md:gap-[66px] sm:gap-11">
              <div className="flex flex-col items-start self-stretch">
                <Heading size="textmd" as="h3" className="tracking-[0.32px] !text-black-900">
                  Email
                </Heading>
                <Input size="sm" shape="round" name="Email Input" className="mt-5 w-[74%] border-gray-300" />
                <Heading size="textmd" as="h4" className="mt-[34px] tracking-[0.32px] !text-black-900">
                  Password
                </Heading>
                <Input
                  size="sm"
                  shape="round"
                  name="Password Input"
                  suffix={<Img src="images/img_eye_off.svg" alt="Eye Off" className="h-[16px] w-[16px]" />}
                  className="mt-4 w-[74%] gap-4 border-gray-300"
                />
                <Heading as="h5" className="ml-2 mt-[22px] !font-normal tracking-[0.28px] !text-indigo-900 md:ml-0">
                  forgot Password ?
                </Heading>
              </div>
              <Button shape="round" className="min-w-[180px] font-semibold">
                Sign In
              </Button>
            </div>
            <Heading as="h6" className="mt-[156px] !font-quantico !font-normal tracking-[0.42px] !text-blue_gray-900">
              NANDHA ENGINEERING COLLEGE
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
