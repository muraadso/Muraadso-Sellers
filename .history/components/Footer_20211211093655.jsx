import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const [mode, setMode] = useState("auto");
    return (
        <div className="pt-12">
            <footer id="footer" className="relative z-50 pt-24 dark:bg-gray-900">
                <div className="py-16 border-t border-b border-gray-200 dark:border-gray-700">
                    <div className="container px-4 mx-auto xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="flex w-full mb-16 lg:w-1/2 lg:mb-0">
                                <div className="w-full px-6 lg:w-1/2">
                                    <ul>
                                        <li>
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Components</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Templates</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Pricing</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">FAQ</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <a href="javascript:void(0)" className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">
                                                Documentation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full px-6 lg:w-1/2">
                                    <ul>
                                        <li>
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Free components</a>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Blog</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Changelog</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex w-full lg:w-1/2">
                                <div className="w-full px-6 lg:w-1/2">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)" className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">
                                                Privacy policy
                                            </a>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="javascript:void(0)">
                                                <a className="text-xs leading-none text-gray-800 lg:text-sm hover:text-brand dark:hover:text-brand dark:text-gray-50">Terms of service</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-between w-full px-6 lg:w-1/2">
                                    <div className="flex items-center mb-6">
                                        <a href="javascript:void(0)">
                                            <div className="text-gray-800 cursor-pointer dark:text-gray-50 hover:text-brand dark:hover:text-brand ">
                                                <svg className="footer-icon feather feather-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)">
                                            <div className="pl-4">
                                                <svg className="text-gray-800 cursor-pointer footer-icon feather feather-twitter dark:text-gray-50 hover:text-brand dark:hover:text-brand " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="relative w-36">
                                        {mode == "auto" && (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 m-auto ml-3 text-gray-700 dark:text-gray-50 icon icon-tabler icon-tabler-device-laptop" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1={3} y1={19} x2={21} y2={19} />
                                                <rect x={5} y={6} width={14} height={10} rx={1} />
                                            </svg>
                                        )}
                                       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-16">
                    <Link href="javascript:void(0)">
                        <a>
                        </a>
                    </Link>
                    <p className="mt-6 text-xs leading-none text-gray-900 lg:text-sm dark:text-gray-50">2021 Tailwind UI Kit. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
