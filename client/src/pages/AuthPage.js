import React, {useContext, useEffect, useState} from "react";
import "../index.css"
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = (props) => {
    const {login} = useContext(AuthContext);
    const message = useMessage();

    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
       message(error);
       clearError();
    }, [error, message, clearError]);

    useEffect(() => {
        window.M.updateTextFields();
    }, []);


    const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleRegister = async () => {
        try {
            const data = await  request("/api/auth/register", "POST", {...form});

            message(data.message)        ;
        } catch (e) {}
    }

    const handleLogin = async () => {
        try {
            const {token, userId} = await  request("/api/auth/login", "POST", {...form});

            login(token, userId);
        } catch (e) {}
    }

    return (
        <div className={"row"}>
            <div className={"col s6 offset-s3"}>
                <h2> Сократи ссылку</h2>

                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>

                        <div >
                            <div className="input-field">
                                <input
                                    placeholder="Input email..."
                                    id="email"
                                    name={"email"}
                                    type="text"
                                    className={"yellow-input"}
                                    onChange={handleChange}
                                    value={form.email}
                                />

                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    placeholder="Input password..."
                                    id="password"
                                    type="password"
                                    name={"password"}
                                    className={"yellow-input"}
                                    onChange={handleChange}
                                    value={form.password}
                                />

                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>

                    <div className="card-action">
                        <button
                            className={"btn yellow darken-4"}
                            style={{margin:10}}
                            disabled={loading}
                            onClick={handleLogin}
                        >
                            {"Войти"}
                        </button>

                        <button
                            className={"btn grey lighten-1 black-text"}
                            disabled={loading}
                            onClick={handleRegister}
                        >
                            {"Регистрация"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

