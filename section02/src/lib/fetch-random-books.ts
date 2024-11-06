import { BookData } from "@/types";

export default async function fetctBooks(): Promise<BookData[]> {
  const url = "http://localhost:4003/main/random";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
