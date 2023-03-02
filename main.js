const holidaysList = document.querySelector("#holidays-list");
const refreshButton = document.querySelector("#refresh-button");
const apiLink = "https://holidayapi.com/v1/holidays?pretty&key=27a999c1-c384-4dff-b6ad-caa6108e3b44&country=UA&year=2022&language=uk&year=2022"

activate()

refreshButton.addEventListener("click", () => {
    holidaysList.innerHTML = "";
    activate()
});

function activate() {
    let holidayArray = [];
    let holidays = [];

    fetch(apiLink)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    holidayArray = data.holidays
    console.log("GET request to holidaysapi was sent. The response is successfully received and displayed on the page.")
    holidayArray.forEach(item => {
        holidays.push({"name": item.name, "date": item.date})
    })
    
    function generateHolidaysList() {
        holidays.forEach(holiday => {
            const holidayListItemName = document.createElement("li");
            const holidayListItemDate = document.createElement("span");
            holidayListItemName.textContent = holiday.name;
            holidayListItemDate.textContent = holiday.date;
            holidaysList.appendChild(holidayListItemName);
            holidayListItemName.appendChild(holidayListItemDate);
        });
    }
    
    generateHolidaysList();
    
  });
}
