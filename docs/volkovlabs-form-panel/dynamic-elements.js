const feedback = data.series.find((serie) => serie.refId === "Feedback");
const typeOptions = data.series.find((serie) => serie.refId === "Types");

if (feedback?.fields.length) {
  const ids = feedback.fields.find((f) => f.name === "id").values.buffer;
  const titles = feedback.fields.find((f) => f.name === "title").values.buffer;
  const types = feedback.fields.find((f) => f.name === "type").values.buffer;

  /**
   * Set Elements
   */
  elements = ids.map((id, index) => {
    return { id, title: titles[index], type: types[index] };
  });

  /**
   * Find Type element
   */
  const typeSelect = elements.find((element) => element.id === "type");
  if (typeSelect && typeOptions?.fields.length) {
    const labels = typeOptions.fields.find((f) => f.name === "label").values
      .buffer;
    const values = typeOptions.fields.find((f) => f.name === "value").values
      .buffer;

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
  onOptionsChange({ ...options, elements });
}
