<script setup>
import { ref } from "vue";

const XRefCode = ref([]);

// Api url 
const endpoint = "https://ustest63-services.dayforcehcm.com/Api/ddn/V1/Employees";

async function get_xRefCodes() {
  const res = await fetch(
    endpoint,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("DFWSTest:DFWSTest")}`,
      },
    }
  ).then((res) => res.json()).then((data) => {
    XRefCode.value = data;
    //console.table(JSON.stringify(XRefCode.value.Data))
  }).catch((err) => {
    console.log(err)
  });


  // Get employess data
  const responses = await Promise.all(
    XRefCode.value.Data.map(async (item) => {
      const res = await fetch(
       `${endpoint}/${parseInt(item.XRefCode)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Basic ${btoa("DFWSTest:DFWSTest")}`,
          },
        }
      ).then((res) => res.json()).then((data) => {
        console.table(data)
      }).catch((err) => {
        console.log(err)
      }); 
      // Send request for each id
    })
  );

}
get_xRefCodes();

</script>

<template>
  <div class="container">
    <div class="row"></div>
  </div>
</template>
