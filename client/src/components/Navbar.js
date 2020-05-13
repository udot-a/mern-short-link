import React, {useContext, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import css from "./Navbar.module.css";

export const Navbar = () => {
    const {logout} = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = (e) => {
        e.preventDefault();

        logout();

        history.push("/");
    }

    useEffect(() => {
        window.M.AutoInit();
    }, []);

    return (
        <>
            <nav>
                <div
                    className="nav-wrapper blue darken-1"
                    style={{padding: "0 2rem"}}
                >
                    <span className="brand-logo">{"Сокращение ссылок"}</span>

                    <a
                        href={"#!"}
                        data-target="mobile-demo"
                        className={`sidenav-trigger ${css.burger}`}
                    >
                        <i className="material-icons">menu</i>
                    </a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink to={"/create"}>{"Создать"}</NavLink>
                        </li>

                        <li>
                            <NavLink to={"/links"}>{"Ссылки"}</NavLink>
                        </li>

                        <li>
                            <a
                                href="/"
                                onClick={handleLogout}
                            >
                                {"Выйти"}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul
                className={"sidenav blue lighten-2"}
                id={"mobile-demo"}
            >
                <li>
                    <NavLink
                        className={"sidenav-close"}
                        to={"/create"}>{"Создать"}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={"sidenav-close"}
                        to={"/links"}>{"Ссылки"}</NavLink>
                </li>

                <li>
                    <a
                        className={"sidenav-close"}
                        href="/"
                        onClick={handleLogout}
                    >
                        {"Выйти"}
                    </a>
                </li>
            </ul>
        </>

    );
}