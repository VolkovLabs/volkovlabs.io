const scrollWindow = () => {
  parentWindow =
    document.getElementById("dataTable").parentElement.parentElement;
  bottomOfWindow = parentWindow.scrollHeight - parentWindow.offsetHeight;

  /**
   * Scroll
   */
  if (parentWindow.scrollTop < bottomOfWindow) {
    parentWindow.scrollBy(0, 1);
    setTimeout(scrollWindow, 50);
    return;
  }

  /**
   * Scroll to the Top
   */
  setTimeout(function () {
    parentWindow.scrollTo({ top: 0, behavior: "smooth" });
  }, 1000);

  /**
   * Start scrolling again
   */
  setTimeout(scrollWindow, 1000);
};

$(() => {
  dataTable = document.getElementById("dataTable");

  /**
   * Avoid scrolling for short tables
   */
  if (
    dataTable.parentElement.scrollHeight <
    dataTable.parentElement.parentElement.offsetHeight
  ) {
    return;
  }

  /**
   * Already set to scroll
   */
  if (dataTable.parentElement.parentElement.getAttribute("listener")) {
    return;
  }

  dataTable.parentElement.parentElement.setAttribute("listener", true);
  scrollWindow();
});
