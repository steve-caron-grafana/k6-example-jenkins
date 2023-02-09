import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "1m",
  vus: 50,
  thresholds: {
    http_req_duration: ["p(95)<2000"] // 95 percent of response times must be below 2 seconds
  }
};

export default function() {

  let data = {"itemId":"03fef6ac-1896-4ce8-bd69-b798f85c6e0b", "unitPrice":"99.99"}

  http.post("http://34.29.70.21/carts/1/items", JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
  sleep(3);
};
