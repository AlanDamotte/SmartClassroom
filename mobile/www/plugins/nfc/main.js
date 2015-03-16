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


        nfc.addNdefListener (
        function (nfcEvent) {
            var tag = nfcEvent.tag,
                ndefMessage = tag.ndefMessage;

            // dump the raw json of the message
            // note: real code will need to decode
            // the payload from each record
            // alert(JSON.stringify(ndefMessage));
            // assuming the first record in the message has 
            // a payload that can be converted to a string.
            username1 = nfc.bytesToString(ndefMessage[0].payload);
	    password1 = nfc.bytesToString(ndefMessage[1].payload);
	    siteurl1 = MM.util.formatURL('http://192.168.42.235/moodle');
           
	MM.saveSite(username1, password1, siteurl1);
        } 
  	);
    }

    MM.registerPlugin(plugin);
});
