import Link from "next/link";
import "./main.css"
export default function Home() {
  return (
    <div>
      <Link href={"/home"} className="nav">
        Home
      </Link>
      <Link href={"/products"} className="nav">
      Products
    </Link>
  </div>
  );
}
