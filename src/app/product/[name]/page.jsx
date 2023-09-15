"use client"
import products from "@/app/products"
import "./product.sass"
import BuyNow from "../buynow";
import Image from "next/image";

const getProduct = async name => products.find(i => i.name == name.replace(/X/g, "#").split("-").join(" "));


const checkout = async _ => {
    const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: [{name: "named", price: 100}] })
    })
    console.log({res})
    const json = await res.json();
    console.log({json})
    // window.location = json.url;
}

export default function Product ({ params: { name } }) {
    const product = products.find(i => i.name == name.replace(/X/g, "#").split("-").join(" "))
    
    return (
        <div className="Product page">
            <div className="image">
                <Image src={`/products/${product.name.replace(/#/g, "-")}.jpg`} alt={name} width="300" height="400"/>
            </div>
            <div className="info">
                <h2 className="name">{product.name}</h2>
                <hr />
                <h3 className="price">{"$" + product.price}</h3>
                <p className="description">All necklaces include Ms. Thompson Ray's Dalmation Signature which helps balance your energies with the other stones.</p>
                <span className="buttons">
                    <button>Add to Cart</button>
                    <BuyNow callback={checkout} />
                </span>
            </div>
        </div>
    )
}