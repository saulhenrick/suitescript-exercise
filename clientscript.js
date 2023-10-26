/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(["N/runtime", "N/record", "N/ui/message"], function (
  runtime,
  record,
  message
) {
  function showDetails() {
    const userObj = runtime.getCurrentUser();
    const userFields = loadUserFields(userObj.id);
    const currentRecord = context.currentRecord;
    const companyName = currentRecord.getText({ fieldId: "entity" });
    const subsidiaryName = currentRecord.getText({ fieldId: "subsidiary" });
    const messageLines = [];
    messageLines.push(`User First Name: ${userFields.firstName}`);
    messageLines.push(`User Last Name: ${userFields.lastName}`);
    messageLines.push(`User Subsidiary: ${userFields.subsidiary}`);
    messageLines.push(`Invoice Company Name: ${companyName}`);
    messageLines.push(`Invoice Subsidiary Name: ${subsidiaryName}`);
    const myMessage = message.create({
      title: "Invoice and User Details",
      message: messageLines.join("\n\n"),
      type: message.Type.INFORMATION
    });
    myMessage.show();
  }

  function loadUserFields(empId) {
    const objRecord = record.load({
      type: record.Type.EMPLOYEE,
      id: empId
    });
    const firstName = objRecord.getValue({ fieldId: "firstname" });
    const lastName = objRecord.getValue({ fieldId: "lastname" });
    const subsidiary = objRecord.getText({ fieldId: "subsidiary" });
    return {
      firstName: firstName,
      lastName: lastName,
      subsidiary: subsidiary
    };
  }

  return {
    showDetails: showDetails,
    pageInit: function() {}
  };
});
