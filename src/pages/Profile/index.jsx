import { Helmet } from "react-helmet";
import { Text, Heading, Img, Input, Button } from "../../components";
import ProfileSection from "./ProfileSection";
import React from "react";

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>User Profile - Manage Your Account Details | NANDHA ENGINEERING COLLEGE</title>
        <meta
          name="description"
          content="Edit and save your profile information, including first name, surname, department, and contact details. Connect your GitHub and LinkedIn profiles."
        />
      </Helmet>
      <div className="flex w-full items-center bg-gray-50 md:flex-col">
        <div className="flex flex-1 flex-col items-end px-[54px] md:self-stretch md:p-5 md:px-5">
          <div className="flex w-[92%] flex-col gap-[92px] md:w-full md:gap-[69px] sm:gap-[46px]">
            <div className="flex items-start md:flex-col">
              <div className="mt-3 flex w-full flex-col items-start self-end md:self-auto">
                <Heading size="textxl" as="h1" className="tracking-[1.44px]">
                  PROFILE
                </Heading>
                <div className="relative mt-[-2px] h-[3px] w-[24%] bg-amber-a700" />
              </div>
              <div className="relative h-[28px] w-full">
                <div className="absolute left-0 right-0 top-[0.32px] mx-[30px] my-auto flex flex-1 items-center justify-end md:mx-0">
                  <Img src="images/img_edit_3.svg" alt="Edit Image" className="h-[16px] w-[16px]" />
                  <Heading as="h2" className="!font-roboto !font-normal tracking-[0.10px]">
                    edit
                  </Heading>
                </div>
                <Button
                  size="xs"
                  shape="round"
                  className="absolute bottom-0 right-[-1.50px] top-0 my-auto min-w-[90px] !rounded-[10px] font-medium !text-blue_gray-700 !shadow-sm"
                >
                  Save
                </Button>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-[37px] md:flex-col">
                <Heading as="h3" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  First Name :
                </Heading>
                <Input
                  shape="round"
                  name="FirstName Input"
                  placeholder={`ACE`}
                  className="w-[58%] border-gray-300 tracking-[0.42px] md:w-full"
                />
              </div>
              <div className="mt-6 flex items-center gap-10 md:flex-col">
                <Heading as="h4" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Surname :
                </Heading>
                <Input
                  shape="round"
                  name="Surname Input"
                  placeholder={`GORDEN`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-6 flex items-center gap-[38px] md:flex-col">
                <Heading as="h5" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Department :
                </Heading>
                <Input
                  shape="round"
                  name="Department Input"
                  placeholder={`B.Tech Artificial Intelligence & Data Science`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-6 flex items-center gap-10 md:flex-col">
                <Heading as="h6" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Reg No :
                </Heading>
                <Input
                  shape="round"
                  name="RegNo Input"
                  placeholder={`20AI001`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-[30px] flex items-center gap-[38px] md:flex-col">
                <Heading as="p" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Email :
                </Heading>
                <Input
                  shape="round"
                  type="email"
                  name="Email Input"
                  placeholder={`acegorden55@gmail.com`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-6 flex items-center gap-[38px] md:flex-col">
                <Heading as="p" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Phone :
                </Heading>
                <Input
                  shape="round"
                  type="number"
                  name="Phone Input"
                  placeholder={`9876543210`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-[34px] flex items-center gap-10 md:flex-col">
                <Heading as="p" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Github URL :
                </Heading>
                <Input
                  shape="round"
                  name="Github Input"
                  placeholder={`https://github.com/userna|`}
                  className="w-[58%] border-black-900_33 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-[30px] flex items-center gap-10 md:flex-col">
                <Heading as="p" className="mb-1.5 self-end tracking-[1.12px] md:mb-0 md:self-auto">
                  Linkedin URL :
                </Heading>
                <Input
                  shape="round"
                  type="text"
                  name="Linkedin Input"
                  placeholder={`https://www.linkedin.com/in/username/`}
                  className="w-[58%] border-gray-300 tracking-[0.70px] md:w-full"
                />
              </div>
              <div className="mt-10 flex items-start gap-[42px] md:flex-col">
                <Heading as="p" className="mt-3 tracking-[1.12px] md:mt-0">
                  Profile Picture :
                </Heading>
                <div className="flex w-[58%] justify-center self-center rounded border-2 border-solid border-gray-300 bg-gray-50 p-3.5 md:w-full">
                  <div className="w-full rounded border border-dashed border-amber-a700_4c bg-cyan-50_0c px-1 py-2.5">
                    <div className="mt-1 flex flex-col items-center">
                      <Img src="images/img_settings.svg" alt="Settings Image" className="h-[58px] w-[18%]" />
                      <Heading size="headings" as="h6" className="mt-3 flex !font-mulish !text-blue_gray-900">
                        <span className="font-poppins font-semibold text-gray-800">Drag & drop files or</span>
                        <span className="font-poppins font-semibold text-blue_gray-900">&nbsp;</span>
                        <a href="#" className="font-poppins font-semibold underline">
                          Browse
                        </a>
                      </Heading>
                      <div className="mt-[22px] flex justify-center self-stretch p-1">
                        <Text as="p" className="!text-gray-700">
                          Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[32%] bg-amber-a700 py-[38px] md:w-full md:p-5 sm:py-5">
          {/* profile section */}
          <ProfileSection />
        </div>
      </div>
    </>
  );
}
