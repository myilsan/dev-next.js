import { BookData } from "@/types";

export default async function fetctBooks(q?: string): Promise<BookData[]> {
  let url = "http://localhost:4003/main/all";

  if (q) {
    // 검색일때
    url = `http://localhost:4003/search?q=${q}`;
  }

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
