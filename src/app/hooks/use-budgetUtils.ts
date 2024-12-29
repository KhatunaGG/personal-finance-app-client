import { CategoryEnum, ColorEnum } from "@/app/schema/schema";
import { categoryLogos } from "@/app/commons/data";

const useBudgetUtils = () => {
  const getColorHex = (color: ColorEnum | null): string => {
    if (color === null) return "transparent";
    switch (color) {
      case ColorEnum.GREEN:
        return "#277C78";
      case ColorEnum.YELLOW:
        return "#F2CDAC";
      case ColorEnum.CYAN:
        return "#82C9D7";
      case ColorEnum.NAVY:
        return "#626070";
      case ColorEnum.RED:
        return "#C94736";
      case ColorEnum.PURPLE:
        return "#826CB0";
      case ColorEnum.TURQUOISE:
        return "#597C7C";
      case ColorEnum.BROWN:
        return "#93674F";
      case ColorEnum.MAGENTA:
        return "#934F6F";
      case ColorEnum.BLUE:
        return "#3F82B2";
      case ColorEnum.GREY:
        return "#696868";
      case ColorEnum.ARMY:
        return "#7F9161";
      case ColorEnum.PINK:
        return "#AF81BA";
      case ColorEnum.YELLOWGREEN:
        return "#CAB361";
      case ColorEnum.ORANGE:
        return "#BE6C49";
      default:
        return "transparent";
    }
  };

  const getLogo = (category: CategoryEnum) => {
    const logo = categoryLogos.find((item) => item[category]);
    return logo ? logo[category] : null;
  };

  return { getColorHex, getLogo };
};

export default useBudgetUtils;
