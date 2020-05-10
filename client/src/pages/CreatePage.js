import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";

export const CreatePage = (props) => {
    const history = useHistory();
    const {token} = useContext(AuthContext);
    const {request} = useHttp();
    const [link, setLink] = useState("");

    const handleChange = ({ target:{ value } }) => setLink(value);

    const handleKeyPress = async ({key}) => {
        if (key === "Enter") {
            try {
                const data = await request("api/link/generate", "POST", {from: link}, {
                    Authorization: `Bearer ${token}`
                });
                history.push(`/detail/${data.link._id}`);
            } catch (e) {

            }
        }
    }

    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    return (
        <div className={"row"}>
            <div
                className={"col s8 offset-s2"}
                style={{paddingTop: "2rem"}}
            >
                <div className="input-field">
                    <input
                        placeholder="Вставьте ссылку..."
                        id="link"
                        name={"link"}
                        type="text"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        value={link}
                    />

                    <label htmlFor="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}