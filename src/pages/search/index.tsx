import { useRouter } from "next/router";

export default function Page(){
    const router = useRouter();
    console.log(router);

    const {tt,param} = router.query;

    return <h1>search{tt} {param}</h1>;

};