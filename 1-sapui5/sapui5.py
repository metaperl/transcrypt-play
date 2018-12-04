class UI:

    @property
    def my_button(self):
        return sap.m.Button({
            'text': "Say Hello",
            'press': lambda : sap.m.MessageToast.show("Hello World")
        })

    @property
    def my_text(self):
        return sap.m.Text({
            'text': "salt, pepper and oregano",
        })

    @property
    def my_input(self):
        return sap.m.Input({
            'sid': "input0"
        })

    @property
    def openui5(self):
        core = sap.ui.getCore()
        return core

    def go(self):
        self.my_button.placeAt("content");
        self.my_input.placeAt('greeting')


    def build(self):
        self.openui5.attachInit(self.go)


ui = UI()
