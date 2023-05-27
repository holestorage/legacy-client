import style from "./inline-page-list.module.css";

import {Fragment} from "react";
import {Link} from "react-router-dom";

import IconButton from "../../../ui/button/icon/icon-button";

export default function InlinePageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <Link to={value.path}>
                            <IconButton icon={value.icon} />
                        </Link>
                    </Fragment>
                )
            }
        </div>
    )
}
