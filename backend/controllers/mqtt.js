//test
module.exports = (req, res) => {

  var mqtt=require('mqtt');

  var client = mqtt.connect("mqtt://m20.cloudmqtt.com:16027",{
    clientId:"backend01",
    username:"yiqndlhw",
    password:"YBpbuT-Di4Nw",
    clean:true}
  );


  client.on("connect",function(){
    console.log("connected");
    //json = "{\"debug\":true}";

    var o = {
        animazione: 'base',
        frequenza: 1,
        ripetizione: 10,
        colore: 0,
        linea:1
    };
    client.publish("notabug/tree/setanimation", JSON.stringify(o) );

    client.end();
  });

  /*
  if (client.connected==true){
    client.publish("testtopic", "test message");

  }*/


  console.log("chiamata eseguita ");

  return res.json({
      message: 'test1'
  });


}
