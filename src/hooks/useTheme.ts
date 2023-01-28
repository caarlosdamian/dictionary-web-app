import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export const useTheme = () => {
  const { dark, value } = useAppSelector((state: RootState) => state.theme);

  return {
    dark,
    value,
  };
};
