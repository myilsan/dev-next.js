// export default function page(props) {
//   console.log(props);
//   return <div>Search페이지</div>;
// }

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  console.log(searchParams);
  const { q } = await searchParams;

  return <div>Search페이지 :{q}</div>;
}
