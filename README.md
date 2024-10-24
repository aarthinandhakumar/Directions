# Angular Directions Application

**Project Overview**

This project is an Angular-based application that provides turn-by-turn driving directions from Location A to Location B using the MapQuest API. The data, returned in JSON format, includes the total distance, total time, and step-by-step navigation instructions. The application uses Angular services to display the directions dynamically based on user input.

**Setup Instructions**

- Download the project files or clone the repository.
- Create/rename your project folder and move the downloaded files to your project folder.
- Copy the project folder path.
- Open a command prompt or terminal window.
- Type `cd` (Path to your project).
- Run the command `npm install` to install all dependencies.
- Type `ng serve` to start the development server.
- Open your browser and enter `http://localhost:4200/` to view the application.

**Features**

1. **Display Directions**: The application shows directions for a prepopulated "From" and "To" location when the page loads.
2. **Dynamic Updates**: Directions automatically update when either the "From" or "To" locations are changed by the user.
3. **Turn-by-Turn Instructions**: The detailed narrative and distance for each step of the route are displayed in a table format.
4. **Step Details**: When the user selects a specific step, additional data about that step is shown below the table.
5. **Angular Services**: The application uses Angular services to interact with the MapQuest Directions API and manage the fetched data.

**Usage**

1. **Viewing Directions**: When the application is loaded, the directions for the prepopulated locations are automatically displayed. The total distance and time are shown at the top, followed by a table of turn-by-turn instructions.
2. **Changing Locations**: Modify the "From" or "To" locations, and the directions will reload automatically with updated information.
3. **Step Details**: Click on any step in the table to view more details about that specific maneuver, which will appear below the directions table.
   
**Data Displayed**

- **Total Distance**: The total distance for the route is shown at the top of the page (e.g., `data.route.distance`).
- **Total Time**: The total travel time for the route is also displayed (e.g., `data.route.formattedTime`).
- **Turn-by-Turn Directions**: Each step includes the narrative and distance (e.g., `data.route.legs[0].maneuvers`).

**MapQuest API Integration**

This project uses the MapQuest Directions API to retrieve and display the route data. For more information on how the API works, refer to the [MapQuest API Documentation](https://developer.mapquest.com/documentation/directions-api/route/get/).

**License**

This project is licensed under the MIT License - see the [LICENSE](License.txt) file for details.
