import Link from "next/link";
import hero from "./hero.module.sass"
import Image from "next/image";
export default function Hero () {
    return (
        <div className={hero.hero}>
            <div className={hero.background}>
                <Image src="/images/dalmation.jpg" alt="Hero" fill/>
            </div>
            <div className={hero.text}>
                <h1 className="emblem">Connecting Back To Earth Elements</h1>
                
                <Link href="/shop/all">
                <button>Shop Now</button>
                </Link>
                <h4>All healing stones & crystals. If they’re not cold, they’re not real. Stones are genuine & everlasting.</h4>
            </div>
        </div>
    )
}