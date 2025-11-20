
//Async and await
async function main() {
  console.log("Start process..."); 

  // Step 1: Open app 

  await new Promise((resolve) => setTimeout(resolve, 2000)); 
  console.log("Step 1: Opened app"); 

  // Step 2: Searching for a movie 

  await new Promise((resolve) => setTimeout(resolve, 5000)); 
  console.log("Step 2: Searching for a movie"); 

  // Step 3: Select Seats 

  await new Promise((resolve) => setTimeout(resolve, 8000)); 
  console.log("Step 3: Select seats"); 

  // Step 4: Ticket booked 

  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  console.log("Step 4: Ticket Booked"); 

  console.log("Process complete!"); 
} 
main();


//optimized way
function wait(ms){
  return new Promise((resolve)=> setTimeout(resolve, ms)) 
}
async function Bookticket(){
  try{
    const app = "BS";
    await wait(2000);
    if(app === "BMS") {
    console.log("1. Open Book my show - 2 sec");
    }else{
      throw new Error("BMS not found"); 
    }

    await wait(4000);
    console.log("2. Serach for movie - 4 sec");
    await wait(3000);
    console.log("3. Select Seats - 3sec");
    await wait(1000);
    console.log("4. Ticket Booked - 3sec");
    console.log("Close Phone");
  }
  catch(er){
    console.log(er.message);
  }
  finally {
    console.log("Close phone");
  }
}

Bookticket();