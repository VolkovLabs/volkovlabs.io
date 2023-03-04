echartsInstance.off("datarangeselected");
echartsInstance.on("datarangeselected", (params) => {
  const startValue = params.selected[0];
  const endValue = params.selected[1];
  locationService.partial(
    { "var-datarangeStart": startValue, "var-datarangeEnd": endValue },
    true
  );
});
