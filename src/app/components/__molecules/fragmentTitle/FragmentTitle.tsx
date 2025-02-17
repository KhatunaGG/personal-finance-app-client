import Link from "next/link";
import { ArrowRight } from "../../__atoms";
import { FragmentTitlePopsType } from "@/app/interfaces/interface";

const FragmentTitle = ({ title }: FragmentTitlePopsType) => {
  const validTitles = ["Budgets", "Pots", "Transactions"];
  const fragmentsTitle = validTitles.includes(title)
    ? title
    : "Recurring Bills";

  const href = validTitles.includes(title)
    ? `/${title.toLowerCase()}`
    : "/recurringbills";

  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="font-bold text-[20px] text-[#201F24]">{fragmentsTitle}</h2>
      <Link
        href={href}
        className="flex flex-row justify-between items-center gap-3"
      >
        <p className="text-[14px] text-[#696868] font-normal">See Details</p>
        <ArrowRight />
      </Link>
    </div>
  );
};

export default FragmentTitle;
