import React from "react";
import {
  BsFillChatRightTextFill,
  BsBuilding,
  BsNewspaper,
  BsFillGeoAltFill,
  BsTwitter,
  BsFillChatRightDotsFill,
} from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { ThemeContext } from "../../Context/ThemeContex";

function Data({ dataGitHub }) {
  const { theme } = React.useContext(ThemeContext);
  return (
    <>
      <div className="Container_Data-Center">
        <div className={`Container-Dara-important ${theme}`}>
          {dataGitHub.followers === null ? null : (
            <div className="Container-follows">
              <h2>Followers</h2>
              <p>{dataGitHub.followers}</p>
            </div>
          )}
          {dataGitHub.following === null ? null : (
            <div className="Container-follows">
              <h2>Following</h2>
              <p>{dataGitHub.following}</p>
            </div>
          )}
          {dataGitHub.public_repos === null ? null : (
            <div className="Container-follows">
              <h2>Repositories</h2>
              <p>{dataGitHub.public_repos}</p>
            </div>
          )}
        </div>
        <div className="Container-Data">
          {dataGitHub.email === null ? null : (
            <p>
              <BsFillChatRightDotsFill />
              {dataGitHub.email}
            </p>
          )}
          {dataGitHub.bio === null ? null : (
            <p>
              <BsFillChatRightTextFill />
              {dataGitHub.bio}
            </p>
          )}
          {dataGitHub.company === null ? null : (
            <p>
              <BsBuilding />
              {dataGitHub.company}
            </p>
          )}
          {dataGitHub.blog === null || [] ? null : (
            <p>
              <BsNewspaper />
              {dataGitHub.blog}
            </p>
          )}

          {dataGitHub.location === null ? null : (
            <p>
              <BsFillGeoAltFill />
              {dataGitHub.location}
            </p>
          )}
          {dataGitHub.followers === null ? null : (
            <div className="Container-follows-respon">
              <VscAccount />
              <h2>Following:</h2>
              <p>{dataGitHub.followers}</p>
            </div>
          )}
          {dataGitHub.following === null ? null : (
            <div className="Container-follows-respon">
              <VscAccount />
              <h2>Following:</h2>
              <p>{dataGitHub.following}</p>
            </div>
          )}
          {dataGitHub.twitter_username === null ? null : (
            <p>
              <BsTwitter />
              {dataGitHub.twitter_username}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export { Data };
