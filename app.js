const Obniz = require('obniz');
const Airtable = require('airtable');

async function main (){

  // AirTable の接続
  // <AIRTABLE_API_KEY> に、自分の ApiKey に置き換える
  // <AIRTABLE_BASE_ID> に、今回つなぎたい Base の Base ID に置き換える
  const base = new Airtable({ apiKey: "<AIRTABLE_API_KEY>" }).base("<AIRTABLE_BASE_ID>");
  // <AIRTABLE_TABLE_NAME> に、操作する Table 名に置き換える
  const table = base("<AIRTABLE_TABLE_NAME>");

  // obniz の接続
  // <OBNIZ_ID> に、自分の使う obniz の ID を入力
  var obniz = new Obniz("<OBNIZ_ID>");

  obniz.onconnect = async function () {

    obniz.display.clear();
    obniz.display.print("Hello AirTable!");

    // まず起動したと launched を AirTable に記録
    const records = await table.create([
      {
        "fields": {
          "ActionName":"launched"
        }
      }
    ]);

    console.log("launched getId");
    console.log(records[0].getId());

    obniz.switch.onchange = async function(state) {
      if (state === "push") {

        obniz.display.clear();
        obniz.display.print("push");

        // スイッチ操作 push を AirTable に記録
        const records = await table.create([
          {
            "fields": {
              "ActionName":"push"
            }
          }
        ]);

        console.log("push getId");
        console.log(records[0].getId());
      }

      if (state === "right") {

        obniz.display.clear();
        obniz.display.print("right");

        // スイッチ操作 right を AirTable に記録
        const records = await table.create([
          {
            "fields": {
              "ActionName":"right"
            }
          }
        ]);

        console.log("right getId");
        console.log(records[0].getId());
      }

      if (state === "left") {
        
        obniz.display.clear();
        obniz.display.print("left");

        // スイッチ操作 left を AirTable に記録
        const records = await table.create([
          {
            "fields": {
              "ActionName":"left"
            }
          }
        ]);

        console.log("left getId");
        console.log(records[0].getId());
      }
    }
  }
}

main();