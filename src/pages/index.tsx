//next js css 겹치는 부분방지 하기위해 css에 .module 붙어서 사용한다.
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <h1 className={style.h1}>메인 인덱스233</h1>
      <h1 className={style.h2}>H2</h1>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

Home.getLayout2 = () => {
  return <div>getLayout2</div>;
};
