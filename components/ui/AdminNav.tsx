import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function AdminNav() {
  return (
    <header className="px-10 py-5 bg-zinc-800 flex justify-between">
      <div className="flex justify-center gap-5 text-white">
        <Logo />
      </div>

      <div className="flex gap-2 items-center">
        <Link
          href={"/admin/categories"}
          className="rounded text-white font-bold p-2 text-xl hover:text-pink-500"
        >
          Cupones
        </Link>
        <Link
          href={"/admin/categories"}
          className="rounded text-white font-bold p-2 text-xl hover:text-pink-500"
        >
          Categorias
        </Link>
        <Link
          href={"/admin/products"}
          className="rounded text-white font-bold p-2 text-xl hover:text-pink-500"
        >
          Productos
        </Link>

        <Link
          href={"/admin/sales"}
          className="rounded text-white font-bold p-2 text-xl hover:text-pink-500"
        >
          Ventas
        </Link>

        <Link href={"/"} className="rounded bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-15 text-xl">
          Tienda
        </Link>
      </div>
    </header>
  );
}
