export function formatNumber(num) {
  if (num < 1000) {
    return num.toString();
  }

  if (num >= 1000 && num < 1_000_000)
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
}
