import { SearchIcon } from "../../__atoms";

export type SearchPropsType = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRecurringBills?: boolean;
};

const Search = ({ handleSearchChange, isRecurringBills }: SearchPropsType) => {
  return (
    <div
      className={`${
        isRecurringBills ? "min-w-[259px] md:min-w-[320px]" : "w-[70.95%]"
      } relative border border-[#98908B] text-[#98908B] pl-[20px] md:pl-[10px] lg:pl-[20px] py-3 md:w-[22.75%] lg:w-[30.12%] overflow-hidden rounded-md`}
    >
      <input
        type="text"
        className="w-full bg-transparent border-none focus:outline-none md:truncate md:max-w-[90px] lg:max-w-full"
        placeholder="Search transaction"
        onChange={handleSearchChange}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
