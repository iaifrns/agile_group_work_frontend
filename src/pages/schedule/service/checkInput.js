export const checkInputData = (formData, setFromData) => {
  let isOk = false;
  switch (true) {
    case formData.title.value.trim().length == 0:
      setFromData({
        ...formData,
        title: { ...formData.title, error: "The title can't be left empty" },
        desc: { ...formData.desc, error: "" },
        date: { ...formData.date, error: "" },
        time: { ...formData.time, error: "" },
      });
      break;
    case formData.desc.value.trim().length == 0:
      setFromData({
        ...formData,
        title: { ...formData.title, error: "" },
        desc: { ...formData.desc, error: "description missing" },
        date: { ...formData.date, error: "" },
        time: { ...formData.time, error: "" },
      });
      break;
    case formData.time.value.trim().length == 0:
      setFromData({
        ...formData,
        title: { ...formData.title, error: "" },
        desc: { ...formData.desc, error: "" },
        date: { ...formData.date, error: "" },
        time: { ...formData.time, error: "Time is missing" },
      });
      break;
    default:
      isOk = true;
  }

  return isOk;
};
