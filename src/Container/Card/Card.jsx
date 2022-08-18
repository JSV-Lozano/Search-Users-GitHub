import React from "react";
import { Data } from "../InfoData/Data";
import styles from "../../Styles/Card.css";

function Card({ dataGitHub }) {
  console.log(dataGitHub.login);
  return (
    <>
      <div className="Container-Card">
        <div className="Container_Card-Info">
          <img src={dataGitHub.avatar_url} alt="" />
          <div className="Container_Card-InfoData">
            <h2>{dataGitHub.name}</h2>
            <a href={`https://github.com/${dataGitHub.login}`} target="_blank">
              @{dataGitHub.login}
            </a>
            <p>{dataGitHub.created_at}</p>
          </div>
        </div>
        <div>
          <Data dataGitHub={dataGitHub} />
        </div>
      </div>
    </>
  );
}

export { Card };
