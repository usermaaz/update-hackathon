import Link from "next/link";
import Footer from "../components/Footer";

export default function Sidebar() {
    return (
        <div>
            <div>
                <ul className="flex justify-end gap-2 underline py-3 rounded-md">
                    <li className=""><Link href={"/"}>  <button>home-page</button></Link> </li>
                    <br />
                    <li className=""> <Link href={"/product-detail"}> <button>Cart</button></Link></li>
                </ul>
            </div>
            <main className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20">
                <section className="flex flex-col max-w-[200px]">
                    <h1 className="font-semibold text-sm  md:text-2xl">New(500)</h1>
                    <div className="font-medium text-[9px] lg:text-md max-w-[150px] space-y-2 mt-6 flex flex-col">
                        <Link href={""}>Shoes</Link>
                        <Link href={""}>Sports Bras</Link>
                        <Link href={""}>Tops & T-Shirts</Link>
                        <Link href={""}>Hoodies & Sweatshirts</Link>
                        <Link href={""}>Jackets</Link>
                        <Link href={""}>Trousers & Tights</Link>
                        <Link href={""}>Shorts</Link>
                        <Link href={""}>Tracksuits</Link>
                        <Link href={""}>Jumpsuits & Rompers</Link>
                        <Link href={""}>Skirts & Dresses</Link>
                        <Link href={""}>Socks</Link>
                        <Link href={""}>Accessories & Equipment</Link>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
                            Gender
                        </h1>
                        <div className="mt-2 text-[9px] lg:text-sm">
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" /> Men
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" /> Women
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" /> Unisex
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
                            Kids
                        </h1>
                        <div className="mt-2 text-[9px] lg:text-sm">
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" /> Boys
                            </label>
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" /> Girls
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
                            Sort By Price
                        </h1>
                        <div className="mt-2 text-[9px] lg:text-sm">
                            <h1 className="flex gap-2 items-center">
                                Under ₹ 2 500.00
                            </h1>
                            <h1 className="flex gap-2 items-center">
                                ₹ 2 501.00 - ₹ 7 500.00
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="max-w-[1000px] mx-auto overflow-clip">
                    <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
                        <h1 className="flex items-center gap-2 font-semibold text-sm">
                            Hide Filters
                        </h1>
                        <h2 className="flex items-center gap-2 font-semibold text-sm">
                            Sort By
                        </h2>
                    </div>
                    <div className="mb-20">
                        
                    </div>
                    <hr />
                </section>
            </main>

            <Footer />
        </div>
    )
}
