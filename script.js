// API credentials
const appId = "659d36d506486e0028b5528a";
const apiKey = "aa5ed431-8c70-453b-8579-1aeef615c0ea";
const apiUrl = "https://api.knack.com/v1/objects/object_1/records";

// CSV file
const csvPath = "Building_client_link.csv";

const headers = {
  "X-Knack-Application-Id": appId,
  "X-Knack-REST-API-Key": apiKey,
  "Content-Type": "application/json",
};

// Function to handle the creation of records using the Knack API
const createRecord = (buildingCode, buildingName, clients) => {
  fetch(apiUrl, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      field_7: buildingCode,
      field_1: buildingName,
      field_8: clients,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Record created successfully:", data);
    })
    .catch((error) => {
      console.error("Error creating record:", error);
    });
};

// Function to retrieve records using the Knack API
const getRecords = () => {
  fetch(apiUrl, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Records retrieved successfully:", data);
    })
    .catch((error) => {
      console.error("Error retrieving records:", error);
    });
};

// Fetch the CSV file
fetch(csvPath)
  .then((response) => response.text())
  .then((csvData) => {
    // Process CSV data
    const rows = csvData.split("\n").map((row) => row.split(","));

    // Skip header row
    const header = rows.shift();

    // Process each row
    rows.forEach((row) => {
      const buildingCode = row[0];
      const buildingName = row[1];
      const clients = row[2].split(",").map((client) => client.trim());

      // Now you can use the Knack API to add clients to their corresponding buildings
      createRecord(buildingCode, buildingName, clients);

      // Display data in the HTML document
      const resultContainer = document.getElementById("resultContainer");

      // Create HTML elements to display the CSV data
      const buildingInfoTitle = document.createElement("p");
      buildingInfoTitle.textContent = `Building Code: ${buildingCode}, Building Name: ${buildingName}, Clients: ${clients.join(
        ", "
      )}`;

      // Append elements to the result container
      resultContainer.appendChild(buildingInfoTitle);
    });

    // After creating records, you can also retrieve them using a GET request
    getRecords();
  })
  .catch((error) => {
    console.error("Error fetching or processing CSV:", error);
  });
