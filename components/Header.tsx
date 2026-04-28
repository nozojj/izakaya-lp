import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b p-4 flex justify-between z-50">
      <h1 className="text-xl font-bold">酒場　こもれび</h1>
      <Button asChild>
        <Link href="/reservation">予約する</Link>
      </Button>
    </header>
  );
}
