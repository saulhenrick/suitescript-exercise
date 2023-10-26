/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 */
define(["N/record"], function (record) {
  function beforeLoad(context) {
    if (context.type === context.UserEventType.VIEW) {
      const objForm = context.form;
      objForm.addButton({
        id: "custpage_showdetailsbutton",
        label: "Show Details",
        functionName: "showDetails"
      });
    }
  }
  return {
    beforeLoad: beforeLoad
  };
});
