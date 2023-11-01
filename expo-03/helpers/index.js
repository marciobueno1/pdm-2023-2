export const flatArrayToSectionListArray = (flatArray) => {
  let sectionListArray = [];
  for (const payload of flatArray) {
    let date = new Date(payload.date.iso);
    let { result, objectId } = payload.objectId;
    const title = `${date.getFullYear()}-${date.getMonth() + 1}`;
    const index = sectionListArray.findIndex((v) => v.title === title);
    const score = {
      date: date.toString(),
      result: result,
      objectId: objectId,
    };
    if (index == -1) {
      sectionListArray.unshift({ title, data: [score] });
    } else {
      sectionListArray[index].data.unshift(score);
    }
  }
  return sectionListArray;
};
