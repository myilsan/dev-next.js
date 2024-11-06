import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  // & 연산자는 두 개 이상의 타입의 공통된 부분을 합쳐 새로운 타입을 만드는 것(교집합)
  getLayout?: (page: ReactNode) => ReactNode; //반환값을 ReactNode 로 반환한다.
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  // 교집합으로 Componet 포함시킴
  //console.log(Component.getLayout);

  // ?? 연산자는 nullish coalescing operator라고 불리며, 왼쪽 값이 null 또는 undefined일 때 오른쪽 값을 반환합니다.
  //nullish coalescing operator: ?? 연산자에 대한 더 자세한 설명이 필요하시면, JavaScript 문법 관련 자료를 참고해보세요.
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
