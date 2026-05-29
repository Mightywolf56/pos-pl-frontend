import { Category } from "@/app/src/schemas";

export default async function CategoryForm({category}: {category?: Category}) {

  return (
    <>
      <div className="space-y-2 ">
        <label htmlFor="name" className="block">
          Nombre de la Categoria
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre de la Categoria"
          className="border border-gray-300 w-full p-2"
          name="name"
          defaultValue={category?.name}
        />
      </div>
    </>
  );
}
