import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import ClientComponent from "./client-component";
import ServerComponent from "./server-component";



export default function Home() {

  
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      
      <ClientComponent >
        <ServerComponent /> {/*client compotent 로 변환되지 않게  children 로 전달 */}
      </ClientComponent >
    </div>
  );
}
