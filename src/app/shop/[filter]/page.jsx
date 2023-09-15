import { IoFilterSharp } from 'react-icons/io5'
import Link from 'next/link'
import "../shop.sass"
import shop from "../shop.module.sass"
import products from '../../products'
import Product from '../product'


const filters = {
    all: x => x,
    "65": x => x.price == 65,
    "75": x => x.price == 75,
    "100": x => x.price == 100,
    sets: x => x.category == "set",
    cages: x => x.category == "cage",
}

const getList = async filter => products.filter(filters[filter]).sort((a, b) => a.name.localeCompare(b.name));







export default async function Shop ({params: { filter }}) {
    const list = await getList(filter);
    return (
        <div className="Shop page">
            <div className={shop.filters} >
                <IoFilterSharp className={shop.svg} />
                <Link href="/shop/all" className={shop.filter + (filter == "all" ? " " + shop.filterActive : "")} >ALL</Link>
                <Link href="/shop/65" className={shop.filter + (filter == "65" ? " " + shop.filterActive : "")}>$65,&nbsp;&nbsp;2 FOR $100</Link>
                <Link href="/shop/75" className={shop.filter + (filter == "75" ? " " + shop.filterActive : "")}>$75</Link>
                <Link href="/shop/100" className={shop.filter + (filter == "100" ? " " + shop.filterActive : "")}>$100 - $125</Link>
                <Link href="/shop/sets" className={shop.filter + (filter == "sets" ? " " + shop.filterActive : "")}>SETS</Link>
                <Link href="/shop/cages" className={shop.filter + (filter == "cages" ? " " + shop.filterActive : "")}>CAGES</Link>
            </div>
            <div className={shop.products}>
                {list.map((i, n) => <Product key={n} n={n} {...i}/>)}
            </div>
        </div>
    )
}