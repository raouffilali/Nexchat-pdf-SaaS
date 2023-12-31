import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className=" sticky h-14 inset-x-0 top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all  ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 ">
            <Image
              src="/Logo-PDF-APP.svg"
              width={150}
              height={150}
              quality={100}
              alt="LOGO IMAGE"
            />
          </Link>
          {/* //TODO: ADD MOBILE NAVBAR */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
            
                  size: "sm",
                })}
              >
                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
