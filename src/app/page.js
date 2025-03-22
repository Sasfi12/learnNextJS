import Link from "next/link";
import "./main.css"
export default function Home() {
  return (
    <Link href={"/home"} className="nav">
      Home
    </Link>
  );
}
