/**
 * Get data field for "Value"
 *
 */
const dataValueField = context.dataFrame.fields.find(
  (field) => field.name === "Value"
);

context.handlebars.registerHelper("Value", (context) => {
  /**
   * Use 'display' method from field for "Value"
   * display transform value based on Override value
   * ex: 1048576 --> 1.05 MB
   */
  const transformedValue = dataValueField.display?.(context.data.root["Value"]);
  console.log("console >>> handlebars transformedValue", transformedValue);

  /**
   * Return transformed value
   *
   */
  return `${transformedValue.prefix || ""}${transformedValue.text}${
    transformedValue.suffix
  }`;
});
