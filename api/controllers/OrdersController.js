/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var Razorpay=require('razorpay');
module.exports = {
        orderid:function(req,res){
    
           var instance =new Razorpay({
               key_id:'rzp_test_wwfPnacJ10szIa',
               key_secret:'nyvxZTgoCDnn41SpsEJpKew6'
           })
           
           var options = {
            amount: (req.body.totalamount)*100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11",
            discount:"1",
            offers:[
              "offer_EbsVrqT2gaFrSY",
            ],
            payment_capture: '1'
          };
          instance.orders.create(options, function(err, order) {
            res.json({message:"Success",id:order.id})
          });
        },

        add:function(req,res){
            if (req.body.length == 0) {
                return res.badRequest();
               } 
               var request = require('request');
               request('https://rzp_test_wwfPnacJ10szIa:nyvxZTgoCDnn41SpsEJpKew6@api.razorpay.com/v1/payments/'+req.body.orderid, function (error, response, body) {
                const values=JSON.parse(body)
                
               Orders.create({userid:req.body.userid,orderid:req.body.orderid,date:req.body.date,time:req.body.time,paymentid:req.body.paymentid,method:values.method,bank:values.bank,wallet:values.wallet,email:values.email,phone:values.contact,signature:req.body.signature,totalamount:values.amount,items:req.body.items}).fetch().exec((err,data)=>{
                  if(err){
                          res.json("Error Retry")
                      }
                      else{
                          res.json({message:"Success",data:data})
                      }
                  })
               
               });      
              
               
        }

};

