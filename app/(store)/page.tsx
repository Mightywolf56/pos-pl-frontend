import { redirect } from "next/navigation";

async function getCategories() {
  const req = await fetch(`${process.env.API_URL}/categories`, {
    
  });

  if (!req.ok) {
    return [];
  }

  return req.json();
}

export default async function Home() {
  const categories = await getCategories();

  // 🧠 si no hay categorías
  if (!categories.length) {
    return <div>No hay categorías disponibles</div>;
  }

  // 🔥 tomar la primera categoría
  const firstCategory = categories[0];

  // ✅ redirect con UUID real
  redirect(`/${firstCategory.id}`);
}