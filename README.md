# Overview

ClimateCloset is a web application designed to help users organize their wardrobes based on temperature. The application allows users to upload images of their clothing items and tag them with temperature categories such as hot, warm, cool, and cold. Users can then retrieve their clothing items based on these temperature tags.

## Accomplishments:

1. Backend Development:

- Set up Express.js server to handle HTTP requests.
- Integrated MongoDB for data storage, including setting up models for image data.
- Implemented routes for uploading images and retrieving images by temperature tags.
- Created a `weather.js` module to fetch and parse weather data from a website, providing temperature tags based on current weather conditions.

2. Frontend Development

- Created an HTML form for users to upload images and select temperature tags.
- Implemented JavaScript logic to handle the form submission and display retrieved images based on selected tags.

## Challenges Faced:

1. MongoDB Integration: Initially encountered issues with connecting to MongoDB and ensuring data was being stored correctly. Resolved by carefully configuring the connection and verifying data insertion.
2. Error Handling: Needed to implement error handling mechanisms to handle various scenarios, such as failed uploads or database queries.
3. Multer Integration: Using Multer, a middleware for handling file uploads in Express.js, posed a challenge due to the need for configuring storage destinations and file naming conventions. Understanding Multer's configuration options and ensuring proper handling of uploading files.

## Next steps:

User Stories which still need to be addressed:
- A user is able to create an account. Needs to be implemented with Azure Authentication
- A user is able to edit or delete clothing items by an ID. Need to include ID or name of image when uploaded
- A user can find recommendations of clothing to wear because of the weather data. Right now we only have this working with a given tag when stored in the database.
- A user can learn more about the weather of surrounding areas.

1. User Authentication: Implement user authentication to allow users to create accounts and securely manage their wardrobe data. By using Azure services we would also be able to have this live and running.
2. Enhanced Image Management: Add features for users to edit, delete, and categorize uploaded images for better organizations. Considering the feature for taking live photos of items and uploading.
3. User Interface Improvements: Refine and improve the frontend interface for a more intuitive and visually appealing user experience.
4. Testing: Conduct testing to identify and fix any bugs or performance issues.

# Conclusion:
Overall, significant progress has been made in developing the ClimateCloset application. The backend infrastructure is in place, and basic frontend functionality has been implemented. With further development and refinement, ClimateCloset has the potential to be a valuable tool for users to manage their wardrobes effectively based on temperature preferences.