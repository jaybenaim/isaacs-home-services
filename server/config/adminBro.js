// Pass all configuration settings to AdminBro
const AdminBro = require("admin-bro");
const axios = require("axios");
const bcrypt = require("bcrypt");
const { query } = require("express");
const { database } = require("firebase");

const User = require("../models/User");
const Service = require("../models/Service");
const HomeImage = require("../models/HomeImage");
const Event = require("../models/Event");

AdminBro.registerAdapter(require("admin-bro-mongoose"));

const adminBro = new AdminBro({
  //   Custom dashboard
  dashboard: {
    handler: () => {},
    component: AdminBro.require("../components/Dashboard/index.jsx"),
  },
  branding: {
    companyName: "Network King",
    companyName: "Network King",
    softwareBrothers: false,
  },
  resources: [
    {
      resource: HomeImage,
      options: {
        properties: {
          src: {
            isVisible: {
              list: false,
              show: true,
              edit: true,
            },
          },
          alt: {
            isVisible: {
              list: false,
              show: true,
              edit: true,
            },
          },
          _id: {
            isVisible: {
              list: false,
              show: false,
              edit: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              let data = request.payload;
              // create service in firebase db
              await axios
                .post(
                  "https://network-king-5740f.firebaseio.com/heroes.json",
                  data
                )
                .then((res) => {
                  // set firebase id in service schema
                  data.firebaseId = res.data.name;
                  return request;
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          edit: {
            after: async (request) => {
              await refreshData()
                .then((res) => {
                  console.log(res.data, "items refreshed");
                })
                // catch firebase error
                .catch((err) => console.log(err));

              return request;
            },
          },
          delete: {
            after: async (request) => {
              await refreshData()
                .then((res) => {
                  console.log(res.data, "items refreshed");
                })
                // catch firebase error
                .catch((err) => console.log(err));
              return request;
            },
          },
          bulkDelete: {
            after: async (request) => {
              await refreshData()
                .then((res) => {
                  console.log(res.data, "items refreshed");
                })
                // catch firebase error
                .catch((err) => console.log(err));

              return request;
            },
          },
        },
      },
    },
    {
      resource: Event,
      options: {
        properties: {
          start: {
            isVisible: {
              list: true,
              edit: true,
              show: true,
            },
          },
          end: {
            isVisible: {
              list: false,
              edit: true,
              show: true,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              let data = request.payload;
              // create service in firebase db
              data.start = new Date(data.start);
              data.end = new Date(!data.end ? data.start : data.end);
              await axios
                .post(
                  "https://network-king-5740f.firebaseio.com/events.json",
                  data
                )
                .then((res) => {
                  // set firebase id in service schema
                  data.firebaseId = res.data.name;
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          edit: {
            after: async (request) => {
              await refreshEvents()
                .then((res) => {})
                .catch((err) => console.log(err));
              return request;
            },
          },
          delete: {
            after: async (request) => {
              await refreshEvents()
                .then((res) => {
                  console.log(res.data, "Events refreshed");
                })
                // catch firebase error
                .catch((err) => console.log(err));
              return request;
            },
          },
          bulkDelete: {
            after: async (request) => {
              await refreshEvents()
                .then((res) => {
                  console.log(res.data, "Events refreshed");
                })
                // catch firebase error
                .catch((err) => console.log(err));

              return request;
            },
          },
        },
      },
    },
    {
      resource: Service,
      options: {
        properties: {
          firebaseID: {
            isVisible: false,
          },
          beforeImage: {
            components: {
              edit: AdminBro.bundle("../components/UploadImage/index.jsx"),
              new: AdminBro.bundle("../components/UploadImage/index.jsx"),
              show: AdminBro.bundle("../components/ShowImage/index.jsx"),
            },
            isVisible: {
              list: false,
              edit: true,
              show: true,
            },
          },
          afterImage: {
            components: {
              edit: AdminBro.bundle("../components/UploadImage/index.jsx"),
              new: AdminBro.bundle("../components/UploadImage/index.jsx"),
              show: AdminBro.bundle("../components/ShowImage/index.jsx"),
            },
            isVisible: {
              list: false,
              edit: true,
              show: true,
            },
          },

          ["image.data"]: {
            isVisible: {
              list: false,
              edit: false,
              show: false,
            },
          },
          ["image.contentType"]: {
            isVisible: {
              list: false,
              edit: false,
              show: false,
            },
          },
          ["details.description"]: {
            isVisible: {
              list: false,
              edit: true,
              show: true,
            },
          },
          ["details.mainImage"]: {
            components: {
              edit: AdminBro.bundle(
                "../components/UploadImage/UploadMainImage.jsx"
              ),
              new: AdminBro.bundle(
                "../components/UploadImage/UploadMainImage.jsx"
              ),
              show: AdminBro.bundle(
                "../components/ShowImage/ShowMainImage.jsx"
              ),
            },
            isVisible: {
              list: false,
              edit: true,
              show: true,
            },
          },
          _id: {
            isVisible: {
              list: false,
              edit: false,
              show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              let data = request.payload;
              // create service in firebase db
              let serviceData = convertData(data);
              await axios
                .post(
                  "https://network-king-5740f.firebaseio.com/services.json",
                  serviceData
                )
                .then((res) => {
                  // set firebase id in service schema
                  data.firebaseID = res.data.name;
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          edit: {
            after: async (request) => {
              let data = request.record.params;
              let { firebaseID } = data;
              let serviceData = convertData(data);
              data = serviceData;
              // update firebase
              await axios
                .patch(
                  `https://network-king-5740f.firebaseio.com/services/${firebaseID}.json`,
                  serviceData
                )
                .then((res) => {
                  console.log("Service edited");
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          delete: {
            before: async (request) => {
              let recordId = request.params.recordId;
              let firebaseId = "";

              // find Service by id
              Service.findById(recordId)
                .then((res) => {
                  let { firebaseID } = res;
                  firebaseId = firebaseID;
                })
                .catch((err) => console.log(err));
              // Delete service from firebase
              await axios
                .delete(
                  `https://network-king-5740f.firebaseio.com/services/${firebaseId}.json`
                )
                .then((res) => {
                  console.log(res.data, "Item Deleted");
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          bulkDelete: {
            before: async (request) => {
              let recordIds = request.query.recordIds.split(",");
              // Get firebase ids from record Ids
              recordIds.length >= 1 &&
                (await recordIds.forEach((id) => {
                  Service.findById(id)
                    .then((data) => {
                      axios
                        .delete(
                          `https://network-king-5740f.firebaseio.com/services/${data.firebaseID}.json`,
                          request.payload
                        )
                        .then((res) => {
                          console.log(res.data, "items deleted");
                        })
                        // catch firebase error
                        .catch((err) => console.log(err));
                    })
                    // catch find error
                    .catch((err) => console.log(err));
                }));

              return request;
            },
          },
        },
      },
    },
    // Show users on sidebar
    // {
    //   resource: User,
    //   options: {
    //     properties: {
    //       password: {
    //         type: "string",
    //         isVisible: {
    //           list: false,
    //           edit: true,
    //           filter: false,
    //           show: false,
    //         },
    //       },
    //     },
    //     actions: {
    //       new: {
    //         before: async (request) => {
    //           if (request.payload.password) {
    //             request.payload = {
    //               ...request.payload,
    //               encryptedPassword: await bcrypt.hash(
    //                 request.payload.password,
    //                 10
    //               ),
    //               password: undefined,
    //             };
    //           }
    //           return request;
    //         },
    //       },
    //     },
    //   },
    // },
  ],

  rootPath: "/admin",
});

const convertData = (data) => {
  let serviceDetails = {
    heading: data["details.heading"],
    description: data["details.description"],
    mainImage: data["details.mainImage"],
  };
  // Upload image to firebase storage
  console.log(data && data);
  return {
    title: data.title,
    subTitle: data.subTitle,
    beforeImage: data.beforeImage,
    afterImage: data.afterImage,
    shortDescription: data.shortDescription,
    details: serviceDetails,
  };
};
const refreshData = async () => {
  return await axios
    .get(`https://isaacs-home-services.herokuapp.com/api/heroes?refresh=true`)
    .catch((err) => console.log(err));
};
const refreshEvents = async () => {
  return await axios
    .get("htts://isaacs-home-services.herokuapp.com/api/events?refresh=true")
    .catch((err) => console.log(err));
};
module.exports = adminBro;
