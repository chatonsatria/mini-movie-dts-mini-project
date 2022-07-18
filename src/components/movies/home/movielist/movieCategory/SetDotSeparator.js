import { setCategory } from "./MovieCategory";

export function setDotInterval(dataIds) {
  let dataIdsArray = [];
  dataIds.forEach((data) => dataIdsArray.push(setCategory(data)));
  return dataIdsArray.join(" • ");
}
