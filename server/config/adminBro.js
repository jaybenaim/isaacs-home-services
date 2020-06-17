// Pass all configuration settings to AdminBro
const AdminBro = require("admin-bro");
const User = require("../models/User");
const Service = require("../models/Service");
const axios = require("axios");
const { query } = require("express");

AdminBro.registerAdapter(require("admin-bro-mongoose"));

const adminBro = new AdminBro({
  //   Custom dashboard
  dashboard: {
    handler: async () => {},
    component: AdminBro.bundle("../Dashboard/index"),
  },
  branding: {
    companyName: "Network King",
  },
  resources: [
    {
      resource: Service,
      options: {
        properties: {
          firebaseID: {
            isVisible: true,
          },
          image: {
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
              let serviceDetails = {
                heading: data["details.heading"],
                description: data["details.description"],
                mainImage: data["details.mainImage"],
              };
              let serviceData = {
                title: data.title,
                subTitle: data.subTitle,
                image: data.image,
                shortDescription: data.shortDescription,
                details: serviceDetails,
              };

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
            before: async (request) => {
              let data = request.payload;
              let { firebaseID } = data;

              let serviceDetails = {
                heading: data["details.heading"],
                description: data["details.description"],
                mainImage: data["details.mainImage"],
              };
              let serviceData = {
                title: data.title,
                subTitle: data.subTitle,
                image: data.image,
                shortDescription: data.shortDescription,
                details: serviceDetails,
              };

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
    //         isVisible: false,
    //       },
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
    //           if (request.payload.record.password) {
    //             request.payload.record = {
    //               ...request.payload.record,
    //               encryptedPassword: await bcrypt.hash(
    //                 request.payload.record.password,
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
module.exports = adminBro;
