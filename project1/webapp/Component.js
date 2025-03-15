sap.ui.define([
    "sap/ui/core/UIComponent",
    "project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // Wymuszamy wczytanie JSON'a i przypisujemy go jako model główny
            // const oModel = new sap.ui.model.json.JSONModel("model/mockdata.json");
            // this.setModel(oModel);

            // enable routing
            this.getRouter().initialize();
        }
    });
});