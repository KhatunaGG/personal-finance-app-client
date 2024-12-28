"use client";
import { useState } from "react";
import { ArrowDown, CloseIcon } from "../../__atoms";

const Modal = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [category, setCategory] = useState("")

  const handleSelect = () => {
    setIsDropDown(!false);
  };

  console.log(category, "category");

  return (
    <section className="absolute inset-0 bg-black/50 w-full h-full z-20 ">
      <section className="w-full h-screen flex items-center justify-center">
        <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]">
          <div className="TITLE w-full flex items-center justify-between">
            <h1 className="text-[#201F24] text-[32px] font-bold">
              Add New Budget
            </h1>
            <CloseIcon />
          </div>

          <div className="TEXT  ">
            <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
              Choose a category to set a spending budget. These categories can
              help you monitor spending.
            </p>
          </div>

          <form className="FORM w-full flex flex-col gap-y-4">
            <div className="w-full relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="category"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Budget Category
                </label>

                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none"
                    name="category"
                    placeholder="Category"
                  />
                  <button
                    type="button"
                    onClick={() => handleSelect()}
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>

                  {isDropDown && (
                    <div className="CATEGORYOPTIONS  w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
                      <div
                      onClick={() => {
                        setCategory("Entertainment")
                        setIsDropDown(false)
                      }}
                      
                      className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                          <p className="text-[#201F24] text-sm font-normal">
                            Entertainment
                          </p>
                        </div>
                        <p className="text-[#696868] text-xs font-normal  hidden">
                          Already used
                        </p>
                      </div>
                      <div className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                          <p className="text-[#201F24] text-sm font-normal">
                            Bills
                          </p>
                        </div>
                        <p className="text-[#696868] text-xs font-normal  hidden">
                          Already used
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="SPENDING w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="spending"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Maximum Spending
                </label>
                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none "
                    name="spending"
                    placeholder="Spending"
                  />
                  {/* <button
                    type="button"
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button> */}

                  {/* <div className="COLOROPTIONS hidden w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
                    <div className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                        <p className="text-[#201F24] text-sm font-normal">
                          Entertainment
                        </p>
                      </div>
                      <p className="text-[#696868] text-xs font-normal  hidden">
                        Already used
                      </p>
                    </div>
                    <div className="OPTION  w-full  border-b-[1px] border-b- py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#277C78]  hidden"></div>
                        <p className="text-[#201F24] text-sm font-normal">
                          Bills
                        </p>
                      </div>
                      <p className="text-[#696868] text-xs font-normal  hidden">
                        Already used
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="COLOR w-fill relative">
              <div className="w-full flex flex-col gap-1">
                <label
                  htmlFor="color"
                  className="w-full text-xs text-[#696868] font-bold"
                >
                  {" "}
                  Color Tag
                </label>
                <div className="CATEGORY border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
                  <input
                    type="text"
                    className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal outline-none border-none"
                    name="color"
                    placeholder="Color"
                  />
                  <button
                    type="button"
                    className="w-[16px] h-[16px] flex items-center justify-center"
                  >
                    <ArrowDown />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#201F24] rounded-lg text-white font-bold text-sm py-4"
            >
              Add Budget
            </button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Modal;
