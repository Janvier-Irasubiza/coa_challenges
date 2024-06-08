# Photo gallery app, Array Manipulation, 

# 1. Photo gallery app

## What the App Does
The Photo Gallery app allows you to explore a collection of images. By clicking on an image, you can view all the details about it. Plus, you have the option to download the images directly!

## How It Works

This gallery app utilizes HTML, CSS, and JavaScript to display a collection of images and associated information fetched from a JSON file. Each image is represented as a card, clickable to reveal more details in a modal window. The modal dynamically updates with the clicked image's title, location, description, and an option to download the image. The modal state is managed using localStorage, ensuring that when the user navigates away and returns, the modal retains its state. The app enhances user experience by allowing them to explore images and learn more about each one within an intuitive interface.

### How It's Set Up
- **HTML**: the landing page for the app.
- **CSS**: Styles for the app layout.
- **JavaScript**: Implements functionality such as displaying the modal window and updating the download link.
- **JSON Data**: Houses all the necessary information about the images, including titles, origins, and file paths.

### Data Source
All essential information pertaining to the images—titles, origins, and file paths—is stored in a JSON file. Upon loading the page, this data is retrieved and utilized to populate the cards dynamically

-------------------------------------------------------------------------------------------------------------

# Array Manipulation

### Function: `checkSubarraySum`

**Description:**
This function checks whether there exists a contiguous subarray within the given array whose elements sum up to a specified target value.

**Parameters:**
- `arr` (array): The input array containing integers.
- `target` (number): The target sum value.

**Return values:**
- `true` if a subarray with the target sum exists within the input array.
- `false` otherwise.

**Algorithm:**
1. Initialize variables `currentSum` and `start`.
2. Iterate through the array using a for loop:
   - Update `currentSum` by adding the current element.
   - If `currentSum` exceeds the target sum, move the starting index (`start`) forward until the sum becomes less than or equal to the target.
   - If `currentSum` equals the target sum, return `true`.
3. If no subarray with the target sum is found, return `false`.


--------------------------------------------------------------------------------------------------------------

# String Transformation

### Function: `transformString`

**Description:**
This function transforms a given string based on its length and certain conditions:
- If the length of the string is divisible by 15, it reverses the string and converts each character into its ASCII code, separating each code with a space.
- If the length of the string is divisible by 3, it simply reverses the string.
- If the length of the string is divisible by 5, it converts each character into its ASCII code, separating each code with a space.
- Otherwise, it returns the original string.

**Parameters:**
- `str` (string): The input string to be transformed.

**Returns:**
- A transformed string based on the specified conditions.

**Algorithm:**
1. Initialize an empty string variable `result`.
2. Check the length of the input string:
   - If divisible by 15, reverse the string, convert each character to its ASCII code, and join them with a space.
   - If divisible by 3, reverse the string.
   - If divisible by 5, convert each character to its ASCII code and join them with a space.
   - Otherwise, return the original string.
3. Return the transformed result.
