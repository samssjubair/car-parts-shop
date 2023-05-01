import { useEffect, useState } from "react";
import Link from 'next/link'
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { BsWhatsapp } from "react-icons/bs";
// import Link from "next/link";
import axios from "axios";

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];
  
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [allAdminCreatedRoute, setAllAdminCreatedRoute] = useState([]);
    const [logoUrl, setLogoUrl] = useState('');

    // useEffect(() => {
    //   fetch('http://localhost:4800/api/v1/logo')
    //     .then(response => response.blob())
    //     .then(blob => {
    //       const url = URL.createObjectURL(blob);
    //       setLogoUrl(url);
    //     });
    // }, []);

    // useEffect(() => {
    //     axios.get("http://localhost:4800/api/v1/pages").then((res) => {
    //         setAllAdminCreatedRoute(res.data.data);
    //     });
    // }, []);

    const allRoutes= allAdminCreatedRoute.map((route) => {
      return route.route
    })
    // console.log(allRoutes)
  

  return (
    <div>
      {/* Navigation */}
      <header className="bg-white">
            <nav
              className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                  {/* <h1 className="text-gray-900">CarPartz</h1> */}
                  <img className="h-10" src={logoUrl} alt="Logo" />
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Home
                </Link>
              <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  About Us
                </Link>
              <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Blog
                </Link>
              <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact 
                </Link>
                {
                  allRoutes.map((route,ind) => {
                    return (
                      <Link
                        key={ind}
                        href= {`/${route}`}
                        
                        className="text-sm capitalize font-semibold leading-6 text-gray-900"
                      >
                        {route}
                      </Link>
                    )
                  })
                }
                
              </Popover.Group>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link
                  href=""
                  className="w-10 h-10 bg-lime-500 rounded-full "
                >
                  <BsWhatsapp className="w-5 h-5 navbar-icon"/>
                </Link>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-10" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <h1 className="text-gray-900">CarPartz</h1>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About Us
                      </a>
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Blog
                      </a>
                    </div>
                    <div className="py-6">
                      <Link
                        href="#"
                        className="-mx-3 block  px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-10 h-10 bg-lime-500 rounded-full"
                      >
                        <BsWhatsapp className="w-5 h-5"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </header>

          {/* Navigation */}
    </div>
  )
}

export default Navigation
