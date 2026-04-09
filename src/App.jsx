import { useEffect, useState } from "react";
import { getAllTrends } from "./api";
import { getBuzzPerson, handleSearch, getCTA } from "./utils";
import { injectAds } from "./ads";
import AdBanner from "./AdBanner";

export default function App() {
  const [data,setData]=useState([]);
  const [index,setIndex]=useState(0);
  const [buzz,setBuzz]=useState(null);
  const [query,setQuery]=useState("");

  useEffect(()=>{
    getAllTrends().then(res=>{
      const withAds = injectAds(res);
      setData(withAds);
      setBuzz(getBuzzPerson(res));
    });
  },[]);

  const item = data[index];
  if (!item) return <div>Loading...</div>;

  if (item.type==="ad") return <AdBanner />;

  const cta = getCTA(item.category,item);

  return (
    <div className="container">
      <div className="header">BUZZLY NOW</div>

      {buzz && <div>🔥 {buzz.title}</div>}

      <iframe className="video" src={item.video} />

      <div className="overlay">
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <button className="cta" onClick={()=>window.open(cta.url)}>
          {cta.main}
        </button>
      </div>

      <input value={query} onChange={e=>setQuery(e.target.value)} />
      <button onClick={()=>{
        const r = handleSearch(query,data);
        if (r.type==="external") window.open(r.url);
      }}>検索</button>

      <footer className="footer">
        <a href="/privacy.html">プライバシー</a>
        <a href="/terms.html">規約</a>
        <a href="/contact.html">問合せ</a>
      </footer>
    </div>
  );
}
