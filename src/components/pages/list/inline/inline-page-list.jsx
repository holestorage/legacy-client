import style from "./inline-page-list.module.css";

import {Fragment} from "react";
import MainTab from "../../../ui/category/tab/main/main-tab";

export default function InlinePageList({ list }) {
    return (
        <div className={style.container}>
            {
                list.map((value, key) =>
                    <Fragment key={key}>
                        <MainTab text={value.name} icon={value.icon} path={value.path} />
                    </Fragment>
                )
            }
        </div>
    )
}
