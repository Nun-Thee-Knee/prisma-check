import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center gap-10">
      <Link href="/create">
      <Button text="Create Classrooms"/>
      </Link>
      <Link href="/view">
      <Button text="View Classrooms"/>
      </Link>
    </div>
  );
}
