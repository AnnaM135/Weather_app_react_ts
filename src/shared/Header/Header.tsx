import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

export const Header = () => {
  const themeContext = useTheme();

  const options = [
    { value: "yerevan", label: "Yerevan" },
    { value: "paris", label: "Paris" },
    { value: "london", label: "London" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        themeContext.theme === Theme.DARK
          ? "#4F4F4F"
          : "rgba(71, 147, 255, 0.2);",
      width: "194px",
      height: "37px",
      fontSize: "16px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: themeContext.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menu: (styles: any) => ({
      ...styles,
      fontSize: "16px",
    }),
  };

  const changeTheme = () => {
    themeContext.changeTheme(
      themeContext.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          options={options}
          defaultValue={options[0]}
          styles={colorStyles}
        />
      </div>
    </header>
  );
};
