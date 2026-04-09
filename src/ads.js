export function injectAds(data) {
  const result = [];
  data.forEach((d,i)=>{
    result.push(d);
    if ((i+1)%3===0) result.push({type:"ad"});
  });
  return result;
}
