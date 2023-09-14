import Link from "next/link";
import categories from "./categories.module.sass"
import Image from "next/image";
export default function Categories () {
    return (
        <div className={categories.categories}>
            <h1>SHOP</h1>
            <div className={categories.content}>
                <Link href="/shop/cages">
                    <div className={categories.category}>
                        <div className={categories.image}>
                            <Image src="/images/cages-photo.jpg" alt="Cages" fill />
                        </div>
                        <h2>CAGES</h2>
                        <button>SEE MORE</button>
                    </div>
                </Link>
                <Link href="/shop/sets">
                    <div className={categories.category}>
                        <div className={categories.image}>
                            <Image src="/images/sets-photo.jpg" alt="Sets" fill />
                        </div>
                        <h2>SETS</h2>
                        <button>SEE MORE</button>
                    </div>
                </Link>
                <Link href="/shop/100">
                    <div className={categories.category}>
                        <div className={categories.image}>
                            <Image src="/images/100-photo.jpg" alt="$100 - $125" fill />
                        </div>
                        <h2>$100 - $125</h2>
                        <button>SEE MORE</button>
                    </div>
                </Link>
                <Link href="/shop/65">
                    <div className={categories.category}>
                        <div className={categories.image}>
                            <Image src="/images/65-photo.jpg" alt="$65, 2 FOR $100" fill />
                        </div>
                        <h2>$65,&nbsp; 2 FOR $100</h2>
                        <button>SEE MORE</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}