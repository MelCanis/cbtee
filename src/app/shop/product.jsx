import Image from 'next/image'
import Link from 'next/link'
import product from "./product.module.sass"

export default function Product ({n, name, price}) {
    return (
        <Link className={product.product} href={`/product/${name.replace(/#/g, "X").split(" ").join("-")}`}>
            <div className={product.image}>
                <Image
                className={product.img}
                src={`/products/${name.replace(/_/g, " ").replace(/#/g, "-")}.jpg`}
                width={200}
                height={300}
                alt={name}
                priority={n == 0 ? true : false}
                />
            </div>
                <div className={product.span}>
                    <h3>{name}</h3>
                    <h5>{"$" + price}</h5>
                </div>
        </Link>
    )
}