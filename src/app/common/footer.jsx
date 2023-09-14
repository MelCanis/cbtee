import footer from "./footer.module.sass"
import { MdEmail, MdSmartphone } from "react-icons/md"
export default function Footer () {
    return (
        <footer className={footer.footer}>
            <span>
                <MdEmail />
                <p>thompsonray193@gmail.com</p>
            </span>
            <span>
                <MdSmartphone />
                <p>4707471634</p>
            </span>
        </footer>
    )
}
