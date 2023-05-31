import style from "./full-container.module.css";

export default function FullContainer({ title, icon }) {
    return (
        <div className={style.container}>
            <i className={icon} />
            <h3>{title}</h3>
        </div>
    )
}
