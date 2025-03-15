sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("project1.controller.Detail", {

        onInit: function () {
            let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);

            let oEditModel = new JSONModel({
                editMode: false
            });
            this.getView().setModel(oEditModel, "editModel");
        },

        _onObjectMatched: function (oEvent) {
            let sEmployeeID = oEvent.getParameter("arguments").employeeID,
                oModel = this.getView().getModel("Employees"),
                aEmployees = oModel.getProperty("/Employees"),
                oEmployee = aEmployees.find(emp => emp.ID === sEmployeeID),
                oEmployeeModel = new sap.ui.model.json.JSONModel(oEmployee);

            this.getView().setModel(oEmployeeModel, "employeeModel");
        },

        onBackPress: function () {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteView1");
        },

        onEditPress: function () {
            this.getView().getModel("editModel").setProperty("/editMode", true);
        },

        onSavePress: function () {
            let oEmployeeModel = this.getView().getModel("employeeModel"),
                oEmployeeData = oEmployeeModel.getData();

            // Zaktualizowanie danych w modelu "Employees"
            let oEmployeesModel = this.getView().getModel("Employees"),
                aEmployees = oEmployeesModel.getProperty("/Employees");

            let iIndex = aEmployees.findIndex(emp => emp.ID === oEmployeeData.ID);
            if (iIndex !== -1) {
                aEmployees[iIndex] = oEmployeeData; // Aktualizacja danych
            }

            oEmployeesModel.setProperty("/Employees", aEmployees);

            this.getView().getModel("editModel").setProperty("/editMode", false);

            MessageToast.show("Employee details saved successfully.");
        },

        // Funkcja anulująca edycję
        onCancelPress: function () {
            // Przywrócenie początkowych danych użytkownika
            let oEmployeeModel = this.getView().getModel("employeeModel"),
                oEmployeeData = oEmployeeModel.getData();

            // Ponownie ustawiamy dane w modelu, aby anulować zmiany
            let oModel = this.getView().getModel("Employees"),
                aEmployees = oModel.getProperty("/Employees"),
                oOriginalEmployee = aEmployees.find(emp => emp.ID === oEmployeeData.ID);
            oEmployeeModel.setData(oOriginalEmployee);

            this.getView().getModel("editModel").setProperty("/editMode", false);

            MessageToast.show("Changes canceled.");
        },

    });
});
