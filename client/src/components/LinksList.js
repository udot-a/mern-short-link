import React, {useContext} from "react";
import {Link} from "react-router-dom";
import css from "./LinkList.module.css"
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {useMessage} from "../hooks/message.hook";

export const LinksList = ({ links, fetchLinks }) => {
    const {request} = useHttp();
    const {token} = useContext(AuthContext);
    const message = useMessage();

    if (!links.length) {
        return (
            <p className={"center"}>
                {"Ссылок пока нет!"}
            </p>
        )
    }

    const handleClick = (id) => async () => {
        try {
                await request(`/api/link/${id}`, "DELETE", null, {
                    Authorization: `Bearer ${token}`
                });

                message("Ссылка удалена!");

                await fetchLinks();

        } catch (e) {

        }
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Оригинальная</th>
                <th>Сокращенная</th>
                <th>Открыть</th>
                <th>Удалить</th>
            </tr>
            </thead>

            <tbody>
            { links.map((link, index) => {
                const {from, to, _id} = link;

                return (
                    <tr key={_id}>
                        <td>{index + 1}</td>

                        <td>{from}</td>

                        <td>{to}</td>

                        <td>
                            <Link to={`/detail/${_id}`}>Открыть</Link>
                        </td>

                        <td>
                            <i
                                className={`large material-icons ${css.del}`}
                                onClick={handleClick(_id)}
                            >
                                {"delete_forever"}
                            </i>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    );
}