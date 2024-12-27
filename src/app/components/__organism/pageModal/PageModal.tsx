// "use client";
// import { ArrowDown, CloseIcon } from "../../__atoms";

// const PageModal = () => {
//   return (
//     <section className="w-full h-screen flex items-center justify-center">
//       <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg p-8 flex flex-col gap-[20px]">
//         <div className="TITLE w-full flex items-center justify-between">
//           <h1 className="text-[#201F24] text-[32px] font-bold">
//             Add New Budget
//           </h1>
//           <CloseIcon />
//         </div>

//         <div className="TEXT  ">
//           <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
//             Choose a category to set a spending budget. These categories can
//             help you monitor spending.
//           </p>
//         </div>

//         <form className="FORM w-full">
//           <div className="w-full flex flex-col gap-1">
//             <label
//               htmlFor="category"
//               className="w-full text-xs text-[#696868] font-bold"
//             >
//               {" "}
//               Budget Category
//             </label>

//             <div className="border border-[#98908B] px-[20px] py-3 flex items-center justify-between gap-4 rounded-lg">
//               <input
//                 type="text"
//                 className="w-full text-#201F24 text-2xl md:text-[14px] leading-[21px] font-normal"
//                 name="category"
//                 placeholder="Category"
//               />
//               <button className="w-[16px] h-[16px] flex items-center justify-center">
//                 <ArrowDown />
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default PageModal;

//******************************************************************************* */

// "use client";
// import { ArrowDown, CloseIcon } from "../../__atoms";

// const PageModal = () => {
//   return (
//     <section className="w-full h-screen flex items-center justify-center">
//       <div className=" w-[89.33%] md:max-w-[560px] md:w-[72.91%] lg:w-[38.88%] bg-white rounded-lg flex flex-col gap-[20px] py-6 px-[20px] md:p-8 ">
//         <div className="TITLE w-full flex items-center justify-between">
//           <h1 className="text-[#201F24] text-[32px] font-bold">
//             Add New Budget
//           </h1>
//           <CloseIcon />
//         </div>

//         <div className="TEXT  ">
//           <p className="text-[#696868] text-2xl md:text-[14px] leading-[21px] font-normal">
//             Choose a category to set a spending budget. These categories can
//             help you monitor spending.
//           </p>
//         </div>

//         <form className="FORM w-full">
//           <div className="w-full flex flex-col gap-1">
//             <label
//               htmlFor="category"
//               className="w-full text-xs text-[#696868] font-bold"
//             >
//               Budget Category
//             </label>
//             <div className="relative">
//               <select
//                 name="category"
//                 className="w-full text-[#201F24] text-sm leading-[21px] font-normal flex flex-col py-[20px] pl-[20px] pr-[20px] outline-none bg-transparent border border-[#98908B] rounded-lg overflow-hidden appearance-none"
//                 defaultValue="All Categories"
//               >
//                 <option
//                   value="All Categories"
//                   className="bg-yellow-100 px-[20px] py-3 text-[#201F24] text-sm leading-[21px] font-normal"
//                 >
//                   All Categories
//                 </option>
//                 <option
//                   value="Entertainment"
//                   className="bg-yellow-100 px-[20px] py-3 text-[#201F24] text-sm leading-[21px] font-normal"
//                 >
//                   Entertainment
//                 </option>

//                 <option value="Bills w-full px-[20px] py-3 text-[#201F24] text-sm leading-[21px] font-normal">
//                   Bills
//                 </option>

//                 <option value="Groceries">Groceries</option>
//                 <option value="Dining Out">Dining Out</option>
//                 <option value="Transportation">Transportation</option>
//                 <option value="Personal Care">Personal Care</option>
//                 <option value="Education">Education</option>
//                 <option value="Lifestyle">Lifestyle</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="ShoppingGeneral">ShoppingGeneral</option>
//               </select>

//               <div className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none">
//                 <ArrowDown />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default PageModal;

//********************************************************************************** */

"use client";
import { ArrowDown, CloseIcon } from "../../__atoms";

const PageModal = () => {
  return (
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
                <button className="w-[16px] h-[16px] flex items-center justify-center">
                  <ArrowDown />
                </button>

                <div className="CATEGORYOPTIONS hidden w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
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
                </div>
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
                <button className="w-[16px] h-[16px] flex items-center justify-center">
                  <ArrowDown />
                </button>

                <div className="COLOROPTIONS hidden w-full absolute left-0 right-0 -bottom-[109px] rounded-lg z-20 shadow-[0_-4px_10px_rgba(0,0,0,0.3)] px-[20px] bg-white flex flex-col">
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
                </div>
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
                <button className="w-[16px] h-[16px] flex items-center justify-center">
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
  );
};

export default PageModal;
