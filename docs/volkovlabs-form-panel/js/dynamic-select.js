const icons = context.panel.data.series.find(
  (serie) => serie.refId === "icons"
);
const iconSelect = context.panel.elements.find(
  (element) => element.id === "icon"
);

if (icons?.fields.length) {
  const ids =
    icons.fields.find((f) => f.name === "icon_id").values.buffer ||
    icons.fields.find((f) => f.name === "icon_id").values;
  const titles =
    icons.fields.find((f) => f.name === "title").values.buffer ||
    icons.fields.find((f) => f.name === "title").values;

  iconSelect.options = titles.map((value, index) => {
    return { label: value, value: ids[index] };
  });
}

context.panel.onOptionsChange(options);
