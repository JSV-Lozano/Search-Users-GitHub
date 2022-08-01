import React from "react";
import { getUsers } from "../Services/getUsers";
import { Searchet } from "../Components/Searchet";
import { Card } from "../Container/Card/Card";
import { ThemeContext } from "../Context/ThemeContex";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

export default function Home() {
  const { dataGitHub, setLoading, setValue, value, setEffect, effect } =
    getUsers();
  const { theme, toogleTheme } = React.useContext(ThemeContext);
  return (
    <div id={theme} className="Container">
      <div className="Container-Absolute_App">
        <div className="Container-Header">
          <h2>Get User</h2>
          <p onClick={toogleTheme}>
            {theme}
            {theme === "Light" ? <BsSun /> : <BsFillMoonStarsFill />}
          </p>
        </div>
        <Searchet
          value={value}
          setValue={setValue}
          setLoading={setLoading}
          setEffect={setEffect}
          effect={effect}
        />
        <Card dataGitHub={dataGitHub} />
      </div>
    </div>
  );
}
