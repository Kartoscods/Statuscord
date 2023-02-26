const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE_NAME = "The name of the image",
  LARGE_TEXT = "jai",
  SMALL_TEXT = "Small text on the status",
  LINK = "https://twitch.tv/SealedSaucer";
 
module.exports = (client, CLIENT_ID) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
  .then(image => client.user.setPresence(
    new rpcGenerator.Rpc()
      .setName("jai")
      .setUrl(https://www.twitch.tv/kartoszzz)
      .setType("STREAMING")
      .setApplicationId(1078925277930983434)
      .setAssetsLargeImage(https://images.app.goo.gl/PwxmDAdL34UVwDfC7)
      .setAssetsLargeText(SMALL_TEXT)
      .setDetails(LARGE_TEXT)
      .toDiscord()
  ));
