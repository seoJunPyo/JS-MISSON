import {
  appendChildList,
  get,
  getAll,
  makeDOMwithProperties,
} from "../module/common.js";

let page = 1;
let pageSize = 5;

const $rootDOM = get("#root");

// 뉴스 컴포넌트 요소 생성

// 썸네일
const newsThumbnailDOM = (url, urlToImage) => {
  const thumbnailDOM = makeDOMwithProperties("div", {
    className: "thumbnail",
  });

  const newsLink = makeDOMwithProperties("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
  });

  const newsImg = makeDOMwithProperties("img", {
    src: urlToImage,
    alt: "thumbnail",
  });

  newsLink.appendChild(newsImg);
  thumbnailDOM.appendChild(newsLink);

  return thumbnailDOM;
};

// 컨텐츠
const newsContenstDOM = (url, title, desc) => {
  const contentsDOM = makeDOMwithProperties("div", {
    className: "contents",
  });

  const newstitle = makeDOMwithProperties("h2", {});

  const newsLink = makeDOMwithProperties("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    innerHTML: title,
  });

  const newsDesc = makeDOMwithProperties("p", {
    innerHTML: desc,
  });

  newstitle.appendChild(newsLink);

  appendChildList(contentsDOM, [newstitle, newsDesc]);

  return contentsDOM;
};

// section 태그
const newsListSectionDOM = (ArrayDOM) => {
  const newsListSectionDOM = makeDOMwithProperties("section", {
    className: "news-item",
  });

  appendChildList(newsListSectionDOM, ArrayDOM);

  return newsListSectionDOM;
};

// article 태그
const newsListArticleDOM = (item) => {
  const newsListArticleDOM = makeDOMwithProperties("article", {
    className: "news-list",
  });

  appendChildList(newsListArticleDOM, item);

  return newsListArticleDOM;
};

// container 생성
const newsListConDOM = (ArrayDOM) => {
  const newsListConDOM = makeDOMwithProperties("div", {
    className: "news-list-container",
  });
  appendChildList(newsListConDOM, ArrayDOM);
  return newsListConDOM;
};
//

// 옵저버 생성
const scrollObserver = () => {
  const scrollObserverDOM = makeDOMwithProperties("div", {
    className: "scroll-observer",
    style: "display : none",
  });
  const scrollObserverImg = makeDOMwithProperties("img", {
    src: "img/ball-triangle.svg",
    alt: "Loading...",
  });

  scrollObserverDOM.appendChild(scrollObserverImg);

  return scrollObserverDOM;
};
//

// 옵저버 이벤트
const observerEvents = (target) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    page++;
    target[target.length - 1].style.display = "block";
    getNewsListDOM();
  }
};

const observerNone = (target) => {
  target.forEach((observer) => {
    observer.style.display = "none";
  });
};
//

// 뉴스리스트 axios 통신으로 수신하고 브라우저에 표시
export const getNewsListDOM = async (categoryId = "") => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${
    categoryId === "all" ? "" : categoryId
  }&page=${page}&pageSize=${pageSize}&apiKey=4f0a848474864953851823efd5fa388d`;

  try {
    const response = await axios.get(API_URL);
    const newsData = response.data.articles;
    let newsList = [];

    // 뉴스 리스트 생성
    newsData.forEach((news) => {
      const thumbnail = newsThumbnailDOM(news.url, news.urlToImage);
      const contents = newsContenstDOM(news.url, news.title, news.description);
      const setion = newsListSectionDOM([thumbnail, contents]);
      newsList.push(setion);
    });

    const article = newsListArticleDOM(newsList);
    const newsContainer = newsListConDOM([article, scrollObserver()]);
    $rootDOM.appendChild(newsContainer);

    // 무한 스크롤 옵저버 생성 및 기능
    const observer = getAll(".scroll-observer");
    window.onscroll = () => {
      observerEvents([...observer]);
    };
  } catch (error) {
    console.error(error);
  } finally {
    // 뉴스 로드 후 모든 옵저버 숨기기
    const observer = getAll(".scroll-observer");
    observerNone([...observer]);
  }
};
//
