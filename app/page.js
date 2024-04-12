import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <nav>
        <li className="list-style-none">Create User</li>
        <li>Update User</li>
        <li>Delete User</li>
        <li>Search User</li>
        <li>Display all User</li>
       </nav>
    </main>
  );
}
