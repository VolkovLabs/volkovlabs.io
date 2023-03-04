const icons = data.series.find((serie) => serie.refId === "icons");
const iconSelect = elements.find((element) => element.id === "icon");

if (icons?.fields.length) {
  const ids = icons.fields.find((f) => f.name === "icon_id").values.buffer;
  const titles = icons.fields.find((f) => f.name === "title").values.buffer;

  iconSelect.options = titles.map((value, index) => {
    return { label: value, value: ids[index] };
  });
}

onOptionsChange(options);
