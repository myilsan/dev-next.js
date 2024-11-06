/**
 * 스크립트가 상호작용이 필요한 페이지 이므로 client 하이드레이션 작용되도록 use client 적용함
 *
 * */

"use client";

import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
}
