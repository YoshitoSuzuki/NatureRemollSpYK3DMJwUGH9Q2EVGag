function natureRemo(theSignalId){
  // APIトークンを設定
  const apiToken = 'WHEuJzbTioHAZ5sb3teS9b3LbRu1iIwqcYPXOWo4QMI.iiovjmjdz_1Sk7NZpvSYTzbI4yXChG6DhghDPXwwjRE';

  // 信号IDを設定
  const signalId = theSignalId;
  const sendSignalUrl = `https://api.nature.global/1/signals/${signalId}/send`;

  // 家電を操作
  fetch(sendSignalUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

function getSignalId(value){
  let valueNumber;

  const returnId = [
    'cc4ea1de-913d-412a-8a4b-81da370d4037',
    '164facbd-26ea-471b-9946-83d88851e8b9',
    '222c71c6-7286-47be-8eb1-7941d173b8ba',
    'b7cde22c-677e-428e-a285-8a8c8a79986e',
    '56208e1e-8ceb-4812-8876-abaf599b4364'
  ];
  const allValue = [
    'AC-22-cold-st',
    'AC-24-cold',
    'AC-26-cold',
    'AC-Off',
    'Light'
  ];

  for(let n=0;n<=allValue.length;n++){
    if(allValue[n] == value){
      valueNumber = n;
    }
  }
  return returnId[valueNumber];
}

// ボタンがクリックされたときに呼び出す関数
function handleButtonClick() {
    // ドロップダウンメニューの選択値を取得
    const dropdown = document.getElementById('myDropdown');
    const selectedValue = dropdown.value;

    // 選択値を引数として別の関数を呼び出す
    const theId = getSignalId(selectedValue);
    natureRemo(theId);
}


/*

[
  {
    "id":"c8ab0797-3ad2-4693-8481-38f307a24f68",
    "device":{
      "name":"部屋",
      "id":"421d47f1-1d86-4399-9605-8ee914ab5664",
      "created_at":"2021-05-03T00:48:00Z",
      "updated_at":"2024-07-26T09:27:33Z",
      "mac_address":"24:a1:60:c0:35:8c",
      "bt_mac_address":"24:a1:60:c0:35:8e",
      "serial_number":"2W220120008749",
      "firmware_version":"Remo-mini/1.14.6",
      "temperature_offset":0,
      "humidity_offset":0
    },
    "model":null,
    "type":"IR",
    "nickname":"AC",
    "image":"ico_ac_1",
    "settings":null,
    "aircon":null,
    "signals":[
      {
        "id":"782e1bee-8291-4911-971a-08750bde8939",
        "name":"22 eco aut",
        "image":"ico_ac_cool"
      },
      {
        "id":"164facbd-26ea-471b-9946-83d88851e8b9",
        "name":"24 eco aut",
        "image":"ico_ac_cool"
      },
      {
        "id":"222c71c6-7286-47be-8eb1-7941d173b8ba",
        "name":"26 eco aut",
        "image":"ico_ac_cool"
      },
      {
        "id":"cc4ea1de-913d-412a-8a4b-81da370d4037",
        "name":"22 st cold",
        "image":"ico_blast"
      },
      {
        "id":"a226e308-a4cb-4921-ae4f-f688ad0ec456",
        "name":"Sleep 22 cold","image":"ico_night_light"
      },
      {
        "id":"6256b850-0836-47c2-9831-fe3047bfddac",
        "name":"Sleep 24 cold",
        "image":"ico_night_light"
      },
      {
        "id":"b7cde22c-677e-428e-a285-8a8c8a79986e",
        "name":"off",
        "image":"ico_off"
      },
      {
        "id":"968e0acd-8814-4886-a632-db9d12a9b61d",
        "name":"warm 22 auto",
        "image":"ico_ac_warm"
      },
      {
        "id":"7afd5ba6-4c0d-4df6-9b5c-20c69de13464",
        "name":"warm 24 auto ",
        "image":"ico_ac_warm"
      },
      {
        "id":"3b9b4c28-fa15-4d9e-a53e-3e843fdf4fec",
        "name":"warm 26 auto",
        "image":"ico_ac_warm"
      }
    ]
  },
  {
    "id":"3c62ee35-92f9-4d83-8778-1588338549f3",
    "device":{
      "name":"部屋",
      "id":"421d47f1-1d86-4399-9605-8ee914ab5664",
      "created_at":"2021-05-03T00:48:00Z",
      "updated_at":"2024-07-26T09:27:33Z",
      "mac_address":"24:a1:60:c0:35:8c",
      "bt_mac_address":"24:a1:60:c0:35:8e",
      "serial_number":"2W220120008749",
      "firmware_version":"Remo-mini/1.14.6",
      "temperature_offset":0,
      "humidity_offset":0
    },"
    model":null,"type":"IR",
    "nickname":"電気(遠隔操作用)",
    "image":"ico_light",
    "settings":null,
    "aircon":null,
    "signals":[
      {
        "id":"91ffb4be-8c30-41dc-8764-5db88943c744",
        "name":"オフ",
        "image":"ico_on"
      }
    ]
  },
  {
    "id":"b0014bfd-633f-4b24-bbdf-d313c49ac6f5",
    "device":{
      "name":"部屋",
      "id":"421d47f1-1d86-4399-9605-8ee914ab5664",
      "created_at":"2021-05-03T00:48:00Z",
      "updated_at":"2024-07-26T09:27:33Z",
      "mac_address":"24:a1:60:c0:35:8c",
      "bt_mac_address":"24:a1:60:c0:35:8e",
      "serial_number":"2W220120008749",
      "firmware_version":"Remo-mini/1.14.6",
      "temperature_offset":0,
      "humidity_offset":0
    },
    "model":null,"type":"IR",
    "nickname":"電気",
    "image":"ico_light",
    "settings":null,
    "aircon":null,
    "signals":[
      {
        "id":"56208e1e-8ceb-4812-8876-abaf599b4364",
        "name":"オン",
        "image":"ico_on"
      },
      {
        "id":"fd92869e-9911-4481-ab8e-32b6f7ea6a7f",
        "name":"明るくする",
        "image":"ico_plus"
      },
      {
        "id":"643d14fc-5849-49b3-8744-904090178c7c",
        "name":"暗くする",
        "image":"ico_minus"
      }
    ]
  }
]

*/
