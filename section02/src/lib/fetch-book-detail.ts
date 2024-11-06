import { BookData } from "@/types";

export default async function fetctDetail(
  id: number
): Promise<BookData | null> {
  const url = `http://localhost:4003/books/${id}`;

  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}
