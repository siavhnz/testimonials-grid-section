
import styles from "./Item.module.css";

const Item = ({ avatar, name, role, title, description }) => {
    return <section className={styles.container}>
        <div className={styles.header}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <div className={styles.identity}>
                <span>
                    {name}
                </span>
                <span>
                    {role}
                </span>
            </div>
        </div>
        <h2 className={styles.title}>
            {title}
        </h2>
        <p className={styles.desc}>
            “ {description} ”
        </p>
    </section>
}

export default Item;