function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('textarea');
   let bestRestaurant = document.querySelector('#bestRestaurant p');
   let bestRestaurantWorkers = document.querySelector('#workers p');
   
   function onClick () {
      let data = input.value;
      let restaurantsArr = JSON.parse(data);

      let restaurantData = {};

      for (let restaurant of restaurantsArr) {
         let [restaurantName, workers] = restaurant.split(' - ');
         let workersArr = workers.split(', ');
         
         for (let worker of workersArr) {
            let [...workerData] = worker.split(' ');
            let workerName = workerData[0];
            let workerSalary = Number(workerData[1]);
            // console.log(workerData);
            if (!restaurantData.hasOwnProperty(restaurantName)) {
               restaurantData.restaurantName = {
                  [workerName]: workerSalary
               }
            } else {
               restaurantData.restaurantName[workerName] = workerSalary;
            }
         }
         
         // restaurantData[name] = workers; 
         // console.log(restaurantData);
         // console.log(restaurant);
      }
      console.log(restaurantData);

   }
}


// ["PizzaHut - Peter 500, George 300, Mark 800", 
// "TheLake - Bob 1300, Joe 780, Jane 660"]