const API_URL1 = `https://newsapi.org/v2/top-headlines?country=kr&category=${
  categoryId === "all" ? "" : categoryId
}&page=${page}&pageSize=${pageSize}&apiKey=9ee05aaf56634f3b8f2dbfe22b25f2f6`;

const API_URL2 = `https://newsapi.org/v2/top-headlines?country=kr&category=${
  categoryId === "all" ? "" : categoryId
}&page=${page}&pageSize=${pageSize}&apiKey=4f0a848474864953851823efd5fa388d`;
