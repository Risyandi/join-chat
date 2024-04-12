/**
 * middleware send email
 * created by : Risyandi
 * 2021
 */
 const nodemailer = require('nodemailer');
 const fetch = require("node-fetch");
 const {configSenderEmail, configEndpointGeneral} = require("../config/config");
 const {
     HOSTEMAIL,
     PASSWORDEMAIL,
     USEREMAIL,
     PORTEMAIL
 } = configSenderEmail.senderEmail;
 
 const {
     ENDPOINT
 } = configEndpointGeneral.endpointUrl;
 
 const removeLeadingZero = (num) => {
     let numLeadingZero = num;
     while (numLeadingZero.charAt(0) === '0') {
         numLeadingZero = numLeadingZero.substring(1);
     }
     return numLeadingZero;
 }
 
 const SendMail = function () {
     return this;
 };
 
 SendMail.sendingMail = (req, result) => {
     let url = ENDPOINT + '/email';
     let methodApi = {
         method: 'GET',
         body: JSON.stringify(),
         headers: {
             'Accept': 'application/json',
             'Access-Control-Allow-Origin': '*',
             'Content-Type': 'application/json'
         },
     }
 
     fetch(url, methodApi)
         .then(responseFetch => responseFetch.json())
         .then(data => {
 
             let toEmail = [];
             data.data.map((row) => {
                 toEmail.push(row.email);
             });
 
             // Create a SMTP transporter object
             let transporter = nodemailer.createTransport({
                 host: HOSTEMAIL,
                 port: PORTEMAIL,
                 auth: {
                     user: USEREMAIL,
                     pass: PASSWORDEMAIL
                 }
             });
 
             // Message object
             let message = {
                 from: 'OEM Management System <dev-test@nabatisnack.co.id>',
                 to: toEmail,
                 subject: 'Notification - Memo Return Vendor OEM',
                 html: 
                 `<!DOCTYPE html>
                 <html lang="en">
                     <head>
                         <meta charset="UTF-8">
                         <meta http-equiv="X-UA-Compatible" content="IE=edge">
                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
                         <title>Notification Memo Return Vendor OEM</title>
                         <link rel="preconnect" href="https://fonts.googleapis.com">
                         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
                         <style type="text/css">
                             /* container */
                             .container {
                                 margin-right: auto;
                                 margin-left: auto;
                                 padding-right: 15px;
                                 padding-left: 15px;
                                 width: 100%;
                                 font-family: 'Roboto', sans-serif;
                             }
                             table, th, td {
                                 border: 1px solid black;
                               }
                         
                             th, td {
                             padding: 8px;
                             }
                         </style>
                     </head>
 
                     <body>
                         <div class="container">
                             <div class="content">
                                 <p>Dear ${req.company_name}</p><br>
                                 <p>Vendor: ${removeLeadingZero(req.vendor_id)} - ${req.vendor_name}</p><br>
                                 <p>Submitted Memo Return</p>
                                 <p>Memo Return Number : ${req.memo_return_id}</p>
                                 <p>Destination Vendor : ${req.vendor_name}</p>
                             </div>
                             <div>
                                 <p>Memo Return Item :</p>
                                 <table>
                                 <thead style="background-color:#d3d3d3">
                                     <tr>
                                         <th>Material No</th> 
                                         <th>Material Desc</th> 
                                         <th>Qty</th> 
                                         <th>Uom</th> 
                                         <th>GR Ref</th> 
                                         <th>Note</th> 
                                     </tr>
                                 </thead>
                                 <tbody>
                                 ${
                                     req.items.map((row, index) => {
                                     return (
                                     `<tr key=${index}>
                                         <td>${removeLeadingZero(row.material_id)}</td>
                                         <td>${row.material_desc}</td>
                                         <td>${row.qty_memo}</td>
                                         <td>${row.uom}</td>
                                         <td>${row.ref_gr}</td>
                                         <td>${row.note}</td>
                                     </tr>`
                                     )
                                     }).join('')
                                 }
                                 </tbody>
                                 </table>
                             </div>
                         </div>
                     </body>
                 </html>`
             };
 
             // send mail with defined transport object
             transporter.sendMail(message, (err, info) => {
                 if (err) {
                     return result(null, err);
                 } else {
                     return result(null, info.messageId)
                 }
             });
 
         })
         .catch(err => {
             return result(null, err);
         });
 }
 
 module.exports = SendMail;