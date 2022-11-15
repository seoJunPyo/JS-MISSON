import {
  appendChildList,
  getAll,
  makeDOMwithProperties,
} from "../module/common.js";

import { $rootDOM } from "../App.js";

let page = 1;
let pageSize = 5;

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
const observerEvents = new IntersectionObserver((entries, observer) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      page++;
      observer.unobserve(entries.target);
      getNewsListDOM();
    }
  });
});

const observerNone = (target) => {
  let max = target.length - 1;
  target.forEach((observer, i) => {
    if (max == i) {
      return;
    }
    observer.style.display = "none";
  });
};
//

// 뉴스리스트 axios 통신으로 수신하고 브라우저에 표시
export const getNewsListDOM = async (categoryId = "") => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${
    categoryId === "all" ? "" : categoryId
  }&page=${page}&pageSize=${pageSize}&apiKey=9ee05aaf56634f3b8f2dbfe22b25f2f6`;

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

    observer.forEach((entries) => {
      observerEvents.observe(entries);
    });
    //
  } catch (error) {
    console.error(error);
  } finally {
    // 옵저버 이벤트 무한 루프 방지 -
    // 마지막 옵저버를 제외한 나머지 옵저버 display : none
    const observer = getAll(".scroll-observer");
    observerNone([...observer]);
  }
};
//
