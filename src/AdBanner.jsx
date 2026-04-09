import { useEffect } from "react";

export default function AdBanner() {
  useEffect(() => {
    try {
      if (window.adsbygoogle && typeof window.adsbygoogle.push === "function") {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.log("AdSense not loaded yet");
    }
  }, []);

  return (
    <div style={{ 
      width: "100%", 
      minHeight: "250px", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#111",
      margin: "20px 0"
    }}>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: "block",
          width: "100%",
          height: "250px"
        }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot="0000000000"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
