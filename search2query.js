/**
 * 解析 search 字符串为 query 对象
 * @param {String} search window.location.search 字符串
 */
function search2query(search) {
  const query = {};
  search
    .replace("?", "")
    .split("&")
    .forEach(item => {
      const [key, value] = item.split("=");
      query[key] = value;
    });
  return query;
}

export default search2query;
