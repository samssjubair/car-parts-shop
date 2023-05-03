import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import { BiSearch } from "react-icons/bi";

function settings() {
  const [logoFile, setLogoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [favicon, setFavicon] = useState(null);
  const [metaDescription, setMetaDescription] = useState("");
  // const [keywords, setKeywords] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4800/api/v1/metatag/").then((res) => {
      // console.log(res.data.tag)
      // setKeywords(res.data.tag)
      const keywords = res.data.tag.split(",");
      setTags(keywords);
    });
  }, []);

  const saveMetaTag = (tg) => {
    // console.log("tgggg", tg.join(","));
    axios
      .put("http://localhost:4800/api/v1/metatag/", {
        tag: tg.join(", "),
      })
      .then((res) => {
        console.log(res);
      });
  };

  function handleKeyDown(e) {
    // If user did not press enter key, return
    if (e.key !== " " && e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = "";
    saveMetaTag([...tags, value]);
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
    saveMetaTag([...tags.filter((el, i) => i !== index)]);
  }

  // const handleKeyDown = (event) => {
  //   if (event.keyCode === 32) { // check if spacebar is pressed
  //     event.preventDefault();
  //     const value = event.target.value.trim(); // remove leading/trailing spaces
  //     if (value.length > 0) { // check if input value is not empty
  //       setKeywords((prevKeywords) => [...prevKeywords, value]); // add keyword to list
  //       event.target.value = ""; // clear input value
  //     }
  //   }
  // };

  useEffect(() => {
    axios.get("http://localhost:4800/api/v1/metadescription/").then((res) => {
      // console.log(res.data);
      setMetaDescription(res.data.description);
    });
  }, []);

  const handleDescriptionBlur = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    axios
      .put("http://localhost:4800/api/v1/metadescription/", {
        description: e.target.value,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const handleTitleBlur = (e) => {
    // e.preventDefault();
    // console.log(e.target.value);
    axios
      .patch("http://localhost:4800/api/v1/sitename/", {
        appName: e.target.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogoUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("logo", logoFile);

    try {
      const response = await axios.post(
        "http://localhost:4800/api/v1/logo/",
        formData
      );
      // console.log(response.data);
      alert("Logo uploaded successfully");
      setLogoFile(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFaviconUpload = async (e) => {
    // console.log("mama fav")
    e.preventDefault();

    const formData = new FormData();
    formData.append("favicon", favicon);

    try {
      const response = await axios.post(
        "http://localhost:4800/api/v1/favicon/",
        formData
      );
      // console.log(response.data);
      alert("Favicon uploaded successfully");
      setFavicon(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Sidebar>
      <div className=" grid grid-cols-1">
        <div className="mx-5">
          {/* Search bar */}
          <div className="mt-6">
            <form>
              <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <BiSearch className="w-5 h-5 absolute ml-3" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  autoComplete="off"
                  aria-label="Search..."
                  className="pr-3 pl-10 w-screen py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none right-2 ring-gray-300 focus:ring-gray-500 bg-gray-100 focus:ring-2"
                />
              </div>
            </form>
          </div>
          {/* Search bar end */}
          <div className="bg-gray-100 rounded-md mt-10 px-4 py-10">
            <div className="">
              <div className="flex justify-between pb-4">
                <div>
                  <h1 className="text-2xl font-bold">Settings</h1>
                </div>
                <div>
                  <button className="leads-btn hover:bg-slate-300">Save</button>
                </div>
              </div>
              <div>
                <label className="pb-2 text-lg font-bold">Site Title</label>
                <input
                  type="text"
                  // value={title}
                  onBlur={handleTitleBlur}
                  placeholder="CarPartz"
                  className="pr-3 pl-5 w-full rounded-md text-sm py-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5">
                <div className="">
                  <div>
                    <h3 className="pb-2 text-lg font-bold ">Logo</h3>
                  </div>
                  <form onSubmit={handleLogoUpload} className="flex">
                    
                    <div>
                      <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center px-8 py-4 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v7h6V7H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-2 text-black text-base leading-normal">
                          Select a file
                        </span>
                        <input
                          type="file"
                          id="logo-upload"
                          className="hidden"
                          onChange={(e) => setLogoFile(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="border-2 rounded-md p-2 ms-3 border-gray-300 hover:bg-slate-300 focus:outline-none"
                      >
                        Upload
                      </button>
                    </div>
                  </form>
                </div>
                <div className="">
                  <div>
                    <h3 className="pb-2 text-lg font-bold">Favicon</h3>
                  </div>
                  <form onSubmit={handleFaviconUpload} className="flex">
                  <div className="">
                      <label
                        htmlFor="favicon-upload"
                        className="flex flex-col items-center px-8 py-4 bg-white border-2 border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v7h6V7H7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="mt-2 text-black text-base leading-normal">
                          Select a file
                        </span>
                        <input
                          type="file"
                          id="favicon-upload"
                          className="hidden"
                          onChange={(e) => setFavicon(e.target.files[0])}
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="border-2 rounded-md p-2 border-gray-300 ms-3 hover:bg-slate-300 focus:outline-none "
                      >
                        Upload
                      </button>
                    </div>
                    
                  </form>
                </div>
              </div>

              {/* <div className="flex flex-col gap-1">
                <label htmlFor="keywords" className="font-medium text-gray-700">
                  Keywords
                </label>
                <div className="relative flex flex-row-reverse">
                  <input
                    id="keywords"
                    type="text"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Type keywords and press space"
                    onKeyDown={handleKeyDown}
                  />
                  <div className="flex flex-wrap items-center justify-start">
                    {keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full mr-1"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}

              <div>
                <h3 className="pb-2 text-lg font-bold mt-5">SEO Keywords</h3>
              <div className="tags-input-container">
                {tags.map((tag, index) => (
                  <div className="tag-item " key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>
                      &times;
                    </span>
                  </div>
                ))}
                <input
                  onKeyDown={handleKeyDown}
                  type="text"
                  className="tags-input "
                  placeholder="Type a new Keyword"
                />
              </div>
              </div>

              <div className="mt-7">
                <label className="pb-2 text-lg font-bold">SEO Description</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  onBlur={handleDescriptionBlur}
                  type="text"
                  placeholder="Here is the text space for seo description for the site where admin can write free text"
                  className="pt-3 pl-5 h-32 w-full rounded-md text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default settings;

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
