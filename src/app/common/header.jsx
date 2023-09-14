import Link from "next/link"
import { BsCart } from "react-icons/bs"
import header from "./header.module.sass"

export default function Header () {
    return (
        <header className={header.header}>
            <Link href="/" className={header.left}>
                <h2>Connecting Back To Earth Elements</h2>
            </Link>
            <span className={header.right} >
                <span>
                    <BsCart onClick={null}/>
                    {/* {cart.length > 0 && <div className="cart-count">{cart.length}</div>} */}
                </span>
                <Link href="/shop/all">
                    <h6>Shop</h6>
                </Link>
                <Link href="/about">
                    <h6>About</h6>
                </Link>
            </span>
        </header>
    )
}