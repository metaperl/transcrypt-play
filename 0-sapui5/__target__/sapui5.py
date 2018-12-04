
class UI:

    @property
    def my_button(self):
        return sap.m.Button({
            'text': "Say Hello",
            'press': lambda : sap.m.MessageToast.show("Hello World")
        })

    def build(self):
        core = sap.ui.getCore()
        def go():
            self.my_button.placeAt("content");
        core.attachInit(go)

ui = UI()
