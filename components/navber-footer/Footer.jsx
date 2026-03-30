import React from "react";
import logo from '@/public/images/logo.svg'
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mx-auto text-sm text-slate-500 bg-white pt-10 max-w-[1800px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" >
          <Image alt="logo" width={"100%"} height={"100%"} src={logo} />
          </Link>
          <p className="text-sm/7 mt-6">
            PrebuiltUI is a free and open-source UI component library with over
            300+ beautifully crafted, customizable components built with
            Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <Link className="hover:text-slate-600 transition" href="/about">
              About us
            </Link>
            <Link  className="hover:text-slate-600 transition" href="/carrers">
              Careers
             
            </Link>
            <Link className="hover:text-slate-600 transition" href="/contact">
              Contact us
            </Link>
            <Link className="hover:text-slate-600 transition" href="/privacy">
              Privacy policy
            </Link>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
              <input
                className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-600 px-4 py-2 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center border-t mt-6 border-slate-200">
        Copyright 2025 © <a href="https://prebuiltui.com">Pixio</a> All
        Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
