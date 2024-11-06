import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from "./searchable-layout.module.css";
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return; //동일 검색이면 검색되지 않게
    router.push(`/search?q=${search}`);
  };


  //검색 Enter
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };


  return (
    <div>
      <div className={style.searchbar_contaniner}>
        <input
          value={search}
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
          placeholder="검색어를 넣어주세요..."
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
