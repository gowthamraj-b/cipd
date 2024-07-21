import { Heading, Img, Text, Button } from "../../components";
import React from "react";

export default function ProfileSection() {
  return (
    <>
      {/* profile section */}
      <div className="mt-7 flex flex-col gap-[62px] px-[42px] md:px-5 sm:gap-[31px]">
        <div className="mx-2 flex flex-col items-center md:mx-0">
          <div className="flex items-center gap-[11px] self-stretch">
            <Img src="images/img_arrow_left.svg" alt="Left Arrow" className="h-[16px] w-[16px]" />
            <Text as="p" className="!font-medium tracking-[0.24px]">
              back{" "}
            </Text>
          </div>
          <div className="relative mt-[68px] h-[160px] w-[44%] content-center md:h-auto">
            <Img
              src="images/img_rectangle_2_160x160.png"
              alt="Profile Image"
              className="mx-auto h-[160px] w-full rounded-[80px] object-cover"
            />
            <Button color="gray_100" size="sm" className="absolute bottom-2.5 right-0.5 m-auto w-[38px] rounded-[18px]">
              <Img src="images/img_edit_2.svg" />
            </Button>
          </div>
          <Heading size="headingmd" as="h2" className="mt-6 !font-orbitron tracking-[2.40px]">
            ACE
          </Heading>
        </div>
        <div className="flex flex-col gap-[68px] sm:gap-[34px]">
          <div className="ml-[26px] mr-[22px] flex flex-col items-start gap-2.5 md:mx-0">
            <Text size="textlg" as="p" className="tracking-[1.08px] !text-blue_gray-900">
              Badges
            </Text>
            <div className="flex justify-between gap-5 self-stretch">
              <Img
                src="images/img_ellipse_4.png"
                alt="First Badge"
                className="ml-[18px] h-[86px] w-[86px] rounded-[42px] object-cover"
              />
              <Img
                src="images/img_ellipse_2.png"
                alt="Second Badge"
                className="h-[86px] w-[86px] rounded-[42px] object-cover"
              />
              <Img
                src="images/img_ellipse_3.png"
                alt="Third Badge"
                className="h-[86px] w-[86px] rounded-[42px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Img src="images/img_menu_separator.svg" alt="Separator Top" className="h-[16px] w-full" />
            <Heading size="headingxs" as="h3" className="mt-3 tracking-[0.84px] !text-blue_gray-900">
              Profile
            </Heading>
            <Img src="images/img_menu_separator.svg" alt="Separator Profile" className="mt-3 h-[16px] w-full" />
            <Heading as="h4" className="mt-3 !font-normal tracking-[0.84px] !text-blue_gray-900">
              Problems
            </Heading>
            <Img src="images/img_menu_separator.svg" alt="Separator Problems" className="mt-3 h-[16px] w-full" />
            <Heading as="h5" className="mt-3.5 !font-normal tracking-[0.84px] !text-blue_gray-900">
              All Badges
            </Heading>
            <Img src="images/img_menu_separator.svg" alt="Separator All Badges" className="mt-2.5 h-[16px] w-full" />
            <a href="#" className="mt-3.5">
              <Heading as="h6" className="!font-normal tracking-[0.84px] !text-blue_gray-900">
                Log out
              </Heading>
            </a>
            <Img src="images/img_menu_separator.svg" alt="Separator Logout" className="mt-2.5 h-[16px] w-full" />
            <Heading as="p" className="mt-[42px] !font-quantico !font-normal tracking-[0.42px] !text-blue_gray-900">
              NANDHA ENGINEERING COLLEGE
            </Heading>
          </div>
        </div>
      </div>
    </>
  );
}
