# knack-assignment

Description:

I display the data in HTML so I can see what data is being retireved

The code starts by defining the 3 constants containing the credentials needed to access the Knack API
    - "appId"
    - "apiKey"
    - "apiUrl"

The CSV file contains the data to be processed and added to the knack database.

Headers are neccessary for making requests to the Knack API. The headers include the Application ID, API key and content type.

The "createRecord" function is responsible for sending a PUT request to the Knack API by using the 'fetch' function. It takes building code, building name, and a list of clients as parameters. The function converts this data into a JSON format.

The "getRecord" function is responsible for sending a GET request to the Knack API to retrive the records. 

When fetching the "csvPath" it processes the CSV data, splitting it into rows and extracting building code, building name, and clients from each row. It then extracts relevant information, and calls the "createRecord" function to add the data to the Knack database.

After processing all rows and creating records, the code makes a "getRecords" call to retrieve and log the records using a GET request.

Technologies/Tools:
    - Javascript
    - Knack API
    - HTML