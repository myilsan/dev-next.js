//next js css 겹치는 부분방지 하기위해 css에 .module 붙어서 사용한다.
import SearchableLayout from "@/components/searchable-layout"; //내장 타입반화값을 자동으로 추론으로 해줌
import style from "./index.module.css";
import { ReactNode, useEffect } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

/** [getServerSideProps]
 * 서버사이트 props 는 porps 를 리턴해줘야 한다. next js 규칙이다.
 * 컴포넌트 보다 먼저 실행되어서 , 컴포넌트 에 필요한 데이타 불러오는 함수,
 */
export const getServerSideProps = async () => {
  // const data = "hello";
  // console.log("서버사이트 노출이예요");

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
  };
};

//  InferGetServerSidePropsType : 내장 타입반화값을 자동으로 추론으로 해줌
export default function Home({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  useEffect(() => {
    //브라워져에서만 실행해라.
    //console.log(window);
    //window.location.href = "https://www.cgv.co.kr";
  }, []);
  //window.location.href = "https://www.cgv.co.kr"; //error
  console.log("recoBooks" + recoBooks);
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.length > 0
          ? recoBooks.map((book) => <BookItem key={book.id} {...book} />)
          : "데아타 없음"}
      </section>

      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.length > 0
          ? allBooks.map((book) => <BookItem key={book.id} {...book} />)
          : "데아타 없음"}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

Home.getLayout2 = () => {
  return <div>getLayout2</div>;
};
