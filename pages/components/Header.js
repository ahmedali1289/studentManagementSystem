import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Header = () => {
  const { currentAccount, userName, setToken, token } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const logout = () => {
    setLoading(true);
    axios
      .post("/api/logout", { token: token })
      .then((res) => {
        setLoading(false);
        // showToast(res?.data?.status, "success");
        setToken(null);
        localStorage.clear();
        Router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        // showToast(error?.response?.data?.status, "error");
      });
  };
  return (
    <div className="flex shadow-sm bg-gray-40 header justify-between  ">
      <div className="flex space-x-3  ">
        <p className="text-white mb-0">Address:</p>
        <p className="text-white mb-0">{currentAccount}</p>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FontAwesomeIcon icon={faUser} /> {userName}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <button
              onClick={logout}
              className="text-gray-600 font-semibold flex space-x-4 mr-3 items-center justify-content-center w-100"
            >
              <FontAwesomeIcon
                className="mr-3"
                width="20px"
                height="20px"
                icon={faSignOut}
              />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
