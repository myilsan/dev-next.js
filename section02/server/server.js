/**
 * 설치
 * npm i express
 * npm i cors
 *
 * npm install oracledb
 */

const express = require("express");
const cors = require("cors");
const app = express();
const port = 4003;

app.use(cors());

app.post("/", (req, res) => {
  res.send(`express 서버가 실행되었습니다.${port}`);
});

const respJson = [
  {
    id: 1,
    title: "아마존 활명수",
    subTitle: "어서 와, 아마존은 처음이지",
    description:
      "전 양궁 국가대표 메달리스트였지만 지금은 구조조정 1순위 ‘진봉’(류승룡). \n회사에서 준 마지막 기회를 잡기 위해 아마존으로 향한다.\n \n죽을 고비를 넘기고 도착한 아마존. \n그곳에서 만난 신이 내린 활 솜씨의 아마존 전사 3인방 ‘시카’, ‘이바’, ‘왈부’! \n살 길을 찾았다고 생각한 ‘진봉’은 한국계 볼레도르인 통역사 ‘빵식’(진선규)과 함께 활의 명수 3인방을 데리고 한국으로 향하는데...\n\n이제 ‘진봉’의 부활은 아마존 3인방에 달려있다!.",
    author: "기본 정보 : 12세이상관람가, 420분 ",
    publisher: "개봉 : 2024.11.02",
    coverImgUrl:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88539/88539_1000.jpg",
  },
  {
    id: 2,
    title: "베놈: 라스트 댄스 ",
    subTitle: "죽음이 우리를 갈라놓을 때까지",
    description:
      "실무에 꼭 필요한 자바스크립트 필수 지식과 핵심 기술을 가장 쉽게 설명한 입문서!\n\n《러닝스쿨! 자바스크립트 첫걸음》은 자바스크립트의 기초부터 프런트엔드 개발의 최신 트렌드까지 웹 개발을 시작하려는 분들에게 필수적인 지식을 제공하는 책입니다. 현재 가장 인기 있는 기술인 React.js와 Next.js를 배우고 싶은 초보자부터, 이미 이 기술들을 다루고 있는 개발자 모두에게 적합합니다. \n\n실무에서 자주 사용되는 문법들을 위주로, 이해하기 쉬운 예제와 명확한 설명으로 기초적인 개념부터 심화 내용까지 단계별로 배울 수 있고, 이를 활용해 프로젝트를 개발하는 과정까지 다양한 예제와 친절한 설명으로 쉽게 이해할 수 있도록 도와주는 책입니다. 《러닝스쿨! 자바스크립트 첫걸음》을 통해 웹 개발에 첫걸음을 내딛어 보길 바랍니다.",
    author: "김효빈",
    publisher: "위키북스",
    coverImgUrl:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88526/88526_1000.jpg",
  },
  {
    id: 7,
    title: "2024 LoL 월드챔피언십 결승전",
    subTitle: "리그 오브 레전드 2024 월드 챔피언십",
    description:
      "타입스크립트는 타입 정보를 지닌 자바스크립트의 상위 집합으로, 자바스크립트의 골치 아픈 문제점들을 해결해 준다. 이 책은 《이펙티브 C++》와 《이펙티브 자바》의 형식을 차용해 타입스크립트의 동작 원리, 해야 할 것과 하지 말아야 할 것에 대한 구체적인 조언을 62가지 항목으로 나누어 담았다.\n각 항목의 조언을 실제로 적용한 예제를 통해 연습하다 보면 타입스크립트를 효율적으로 사용하는 방법을 익힐 수 있다. 타입스크립트를 기초적인 수준에서만 활용했다면 이 책을 통해 타입스크립트 전문가로 거듭나 보자.\n\n이 책에서 다루는 내용\nㆍ 타입스크립트의 타입 시스템에 대한 자세한 이해\nㆍ 안전하고 명료한 코드를 작성할 수 있는 타입 설계\nㆍ 최소한의 타입 구문으로 완전한 안전성을 얻을 수 있는 타입 추론\nㆍ any 타입의 전략적 사용\nㆍ 의존성과 타입 선언 파일이 동작하는 원리\nㆍ 자바스크립트를 타입스크립트로 마이그레이션하는 방법",
    author: "댄 밴더캄",
    publisher: "인사이트",
    coverImgUrl:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000088/88896/88896_1000.jpg",
  },
];
/**
 * 메인에서 전체 , 랜덤 가져오기
 */
app.get("/main/:id", (req, res) => {
  const p = req.params;
  console.log(p);
  const { id } = req.params;
  console.log(id);

  const j = req.query; //json 형태로 받아짐
  console.log(j);
  const { q } = req.query;

  //res.send(`나이:${j.age}`);
  //res.send(j)
  //res.json(j)

  if (id === "all") {
    res.json(respJson);
    return;
  }

  //랜덤으로 1개 가져오기
  if (id === "random") {
    //res.json([respJson[1]]);
    //return;
    const randomIndex = Math.floor(Math.random() * respJson.length);
    const randomData = respJson[randomIndex];
    console.log(randomData);
    res.json([randomData]);
    return;
  }
});

/**
 * 상세내용 가져오기
 */
app.get("/books/:id", (req, res) => {
  console.log("호출");
  //const p = req.params;
  //console.log(p);
  const { id } = req.params;
  const searchId = respJson.find((item) => item.id === Number(id));
  //console.log(id);
  console.log(searchId);
  res.json(searchId);
});

app.get("/search", (req, res) => {
  const j = req.query; //json 형태로 받아짐
  console.log(j);
  console.log("search");
  const { q } = req.query;

  const foundItem = respJson.filter((item) =>
    item.title.toLowerCase().includes(q.toLowerCase())
  );

  console.log(foundItem);
  res.json(foundItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
