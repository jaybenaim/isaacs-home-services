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
        actions: {
          new: {
            before: async (request) => {
              let data = request.payload;
              // create service in firebase db
              await axios
                .post(
                  "https://network-king-5740f.firebaseio.com/services.json",
                  data
                )
                .then((res) => {
                  data.firebaseID = res.data.name;
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          edit: {
            before: async (request) => {
              let { firebaseID } = request.payload;
              // update firebase
              await axios
                .patch(
                  `https://network-king-5740f.firebaseio.com/services/${firebaseID}.json`,
                  request.payload
                )
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => console.log(err));
              return request;
            },
          },
          delete: {
            before: async (request) => {
              let recordId = request.params.recordId;
              console.log(recordId);
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
          // bulkDelete: {
          //   before: async (request) => {
          //     let { firebaseID } = request.payload;
          // for each item send new delete request
          //     await axios
          //       .patch(
          //         `https://network-king-5740f.firebaseio.com/services/${firebaseID}.json`,
          //         request.payload
          //       )
          //       .then((res) => {
          //         console.log(res.data);
          //       })
          //       .catch((err) => console.log(err));
          //     return request;
          //   },
          // },
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
