import s from "./Header.module.scss"

export const Header = ({}) => {
    return(
        <div className = {s.wrapper}>
            <img src = "./img/icons/icon.png" className = {s.icon}/>
            <div className = {s.home}>
                Home
            </div>
            <div className = {s.about}>
                About
            </div>
        </div>
    )
}