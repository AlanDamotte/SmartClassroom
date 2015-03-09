define(function () {
    var plugin = {
        settings: {
            name: "nfc",
            type: "user",
            menuURL: "#contact",
            lang: {
                component: "core"
            }
        },


        addContact: function(courseId, userId) {

            MM.log("Hello world");
        }
    }

    MM.registerPlugin(plugin);
});
