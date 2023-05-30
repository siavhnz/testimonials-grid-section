import Item from "./Item";
import { testimonails } from "../../store/testimonails";

const Testimonials = () => {
    return <div>
        {
            testimonails.map((item, index) => {
                return <div key={index}>
                    <Item avatar={item.avatar}
                        name={item.name}
                        role={item.role}
                        title={item.title}
                        description={item.description} />
                </div>

            })
        }
    </div>
}

export default Testimonials;