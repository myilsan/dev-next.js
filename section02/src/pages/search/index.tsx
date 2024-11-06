import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
//import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

import fetctBooks from "@/lib/fetch-books";
//import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { BookData } from "@/types";
// /**ssr 서비사이드  */
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const q = context.query.q;
//   console.log(q);

//   const books = await fetctBooks(q as string);

//   return {
//     props: { books },
//   };
// };

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetctBooks(q as string);
    setBooks(data);
  };
  useEffect(() => {
    if (q) {
      //검색결과 불러오는 부분
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {books
        ? books.map((book) => <BookItem key={book.id} {...book} />)
        : "데이타가 없습니다."}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
