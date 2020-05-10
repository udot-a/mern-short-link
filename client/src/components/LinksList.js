import React from "react";
import {Link} from "react-router-dom";

export const LinksList = ({ links }) => {
    if (!links.length) {
        return (
            <p className={"center"}>
                {"Ссылок пока нет!"}
            </p>
        )
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Оригинальная</th>
                <th>Сокращенная</th>
                <th>Открыть</th>
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
                    </tr>
                )
            })}
            </tbody>
        </table>

    );
}