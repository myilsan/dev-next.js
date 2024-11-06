import style from "./[id].module.css";

import { useEffect, useState } from "react";
import fetctDetail from "@/lib/fetch-book-detail";
import { useRouter } from "next/router";
import { BookData } from "@/types";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const id = context.params!.id; //const id = params!.id;
//   console.log("아이디 :" + id);
//   // const book = await fetctDetail(Number(id));
//   const book = await fetctBooks();
//   return {
//     props: { book },
//   };
// };

export default function Page() {
  const [book, setBook] = useState<BookData>();
  const router = useRouter();
  const { id } = router.query;

  //console.log(id);

  const fetchbookDetail = async () => {
    const data = await fetctDetail(Number(id));
    console.log("data", data);
    if (data) {
      setBook(data);
    }
  };

  console.log("book", book);
  useEffect(() => {
    if (id) {
      //상세
      fetchbookDetail();
    }
  }, [id]);
  if (!book) return "문제가 발생했습니다. 다시 시도해주세요";
  //  const { id, title, subTitle, author, publisher, description, coverImgUrl } =
  //    book;

  return (
    <div className={style.contaniner}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${book?.coverImgUrl}')` }}
      >
        <img src={book?.coverImgUrl} />
      </div>
      <div className={style.title}>{book?.title}</div>
      <div className={style.subTitle}>{book?.subTitle}</div>
      <div className={style.author}>
        {book?.author} | {book.publisher}
      </div>
      <div className={style.description}>{book?.description}</div>
    </div>
  );
}
