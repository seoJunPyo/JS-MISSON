import { appendChildList, makeDOMwithProperties } from "../module/common.js";

let page = 1;
let pageSize = 5;
let categoryId = "all";

const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${
  categoryId === "all" ? "" : categoryId
}&page=${page}&pageSize=${pageSize}&apiKey=9ee05aaf56634f3b8f2dbfe22b25f2f6`;

export const getNewsList = async () => {
  try {
    const response = await axios.get(API_URL);
    const newsData = response.data.articles;
  } catch (error) {
    console.error(error);
  }
};

const newsThumbnailDOM = () => {
  const thumbnailDOM = makeDOMwithProperties("div", {
    className: "thumbnail",
  });

  const newsLink = makeDOMwithProperties("a", {
    href: "/",
    target: "_blank",
    rel: "noopener noreferrer",
  });

  const newsImg = makeDOMwithProperties("img", {
    src: "/",
    alt: "thumbnail",
  });

  appendChildList(thumbnailDOM, [newsLink, newsImg]);

  return thumbnailDOM;
};

const newsContenstDOM = () => {
  const contentsDOM = makeDOMwithProperties("div", {
    className: "contents",
  });

  const newstitle = makeDOMwithProperties("h2", {});

  const newsLink = makeDOMwithProperties("a", {
    href: "/",
    target: "_blank",
    rel: "noopener noreferrer",
    innerHTML: "타이틀",
  });

  const newsDesc = makeDOMwithProperties("p", {
    innerHTML: "`${desc}`",
  });

  newstitle.appendChild(newsLink);

  appendChildList(contentsDOM, [newstitle, newsDesc]);

  return contentsDOM;
};

const newsListArticleDOM = () => {
  const newsListArticleDOM = makeDOMwithProperties("article", {
    className: "news-list",
  });

  const newsItemDOM = makeDOMwithProperties("section", {
    className: "news-item",
  });

  appendChildList(newsItemDOM, [newsThumbnailDOM(), newsContenstDOM()]);
  newsListArticleDOM.appendChild(newsItemDOM);

  return newsListArticleDOM;
};

export const newsListConDOM = () => {
  const newsListConDOM = makeDOMwithProperties("div", {
    className: "news-list-container",
  });
  newsListConDOM.appendChild(newsListArticleDOM());

  return newsListConDOM;
};
