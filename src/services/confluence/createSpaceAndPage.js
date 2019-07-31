const request = require("request");
const Confluence = require("confluence-api");
const configEnv = require("../../config");

const config = {
  username: configEnv.username,
  password: configEnv.password,
  baseUrl: "https://rangers.atlassian.net/wiki"
  // version: 4 // Confluence major version, optional
};

const confluence = new Confluence(config);

exports.createNewSpace = async (key,name,description) => {
  // request body must contain the following
  //------------------------------------------
  //{
  //   "key": ${req.params.spacekey},
  //   "name": ${req.params.spaceName},
  //   "description": {
  //     "plain": {
  //       "value": "qwrt",
  //       "representation": "plain"
  //     }
  //   }
  // }

  const options = {
    method: "POST",
    url: "https://rangers.atlassian.net/wiki/rest/api/space",
    auth: {
      username: configEnv.username,
      password: configEnv.password
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({key,name,description})
  };
    console.log(options);

  let result = await request(options, function(error, response, body) {
    if (error) console.log("error in create new space:" ,err);

      console.log(body);

    Promise.resolve( body);
  });
    return result
};

exports.createNewPage = async (space,title,pageContent) => {
  // request body must contain the following
  //------------------------------------------

  // {
  //   "space": "NEWSPACE",
  //   "title": "Example space Testing",
  //   "pageContent": "<p>This is a new page with awesome content! Updated</p>"
  //  }

  return await confluence.postContent(space, title, pageContent, null, (err, data) => {
    console.log("error in create new page:" ,err);
  });
};
