const feedback = context.panel.data.series.find(
  (serie) => serie.refId === "Feedback"
);
const typeOptions = context.panel.data.series.find(
  (serie) => serie.refId === "Types"
);

if (feedback?.fields.length) {
  const ids =
    feedback.fields.find((f) => f.name === "id").values.buffer ||
    feedback.fields.find((f) => f.name === "id").values;
  const titles =
    feedback.fields.find((f) => f.name === "title").values.buffer ||
    feedback.fields.find((f) => f.name === "title").values;
  const types =
    feedback.fields.find((f) => f.name === "type").values.buffer ||
    feedback.fields.find((f) => f.name === "type").values;

  /**
   * Set Elements
   */
  const elements = ids.map((id, index) => {
    return { id, title: titles[index], type: types[index] };
  });

  /**
   * Find Type element
   */
  const typeSelect = elements.find((element) => element.id === "type");
  if (typeSelect && typeOptions?.fields.length) {
    const labels =
      typeOptions.fields.find((f) => f.name === "label").values.buffer ||
      typeOptions.fields.find((f) => f.name === "label").values;
    const values =
      typeOptions.fields.find((f) => f.name === "value").values.buffer ||
      typeOptions.fields.find((f) => f.name === "value").values;

    /**
     * Update Types
     */
    typeSelect.options = labels.map((label, index) => {
      return { label, value: values[index] };
    });
  }

  /**
   * Update Panel Options
   */
  context.panel.onOptionsChange({ ...context.panel.options, elements });
}
