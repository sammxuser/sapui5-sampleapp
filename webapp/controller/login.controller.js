sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("sampleProject.zSampleProject.controller.login", {
		onInit: function () {

		},
		handleLogin: function () {
			var username = this.byId("inpUsername");
			var password = this.byId("inpPassword");

			if (username.getValue() === "" || password.getValue() === "") {
				username.setValueState("Error");
				password.setValueState("Error");

				MessageBox.show(" Fields marked with a * are mandatory ", {
					title: " Warming Message ",
					icon: MessageBox.Icon.ERROR
				});

			}
		}
	});
});