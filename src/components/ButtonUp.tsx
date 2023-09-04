import { Link } from "react-scroll"

export const ButtonUp = () => {

    return (
        <div className="w-full ">
        <div
            className=" w-20 right-10 bottom-10 fixed btn btn-ghost">
          <Link to="Home" smooth={true} > <img className="h-6" src="./assets/Up.png" alt="" /></Link>
        </div>
        </div>
    )
}