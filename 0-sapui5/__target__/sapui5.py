class UI:

    @property
    def my_button(self):
        return sap.m.Button({
            'text': "Say Hello",
            'press': lambda : sap.m.MessageToast.show("Hello World")
        })

    @property
    def openui5(self):
        core = sap.ui.getCore()
        return core

    def go(self):
        self.my_button.placeAt("content");


    def build(self):
        self.openui5.attachInit(self.go)


ui = UI()
