export function calcScore(item) {
  return item.views + item.sns;
}

export function getBuzzPerson(data) {
  return [...data].sort((a,b)=>b.score-a.score)[0];
}

export function handleSearch(query, data) {
  const found = data.find(d =>
    d.title.toLowerCase().includes(query.toLowerCase())
  );
  return found
    ? { type: "internal", data: found }
    : { type: "external", url: `https://www.google.com/search?q=${query}` };
}

export function getCTA(cat, item) {
  if (cat === "music") return { main:"再生", url:item.video };
  if (cat === "book") return { main:"購入", url:item.link };
  return { main:"見る", url:item.video };
}
