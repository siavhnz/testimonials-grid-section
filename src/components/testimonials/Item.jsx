
const Item = ({ avatar, name, role, title, description }) => {
    return <section>
        <div>
            <img src={avatar} alt={name} />
            <div>
                <span>
                    {name}
                </span>
                <span>
                    {role}
                </span>
            </div>
        </div>
        <h2>
            {title}
        </h2>
        <p>
            {description}
        </p>
    </section>
}

export default Item;