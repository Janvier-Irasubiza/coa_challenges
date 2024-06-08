# Photo gallery app, Array Manipulation, 

# 1. Photo gallery app

### What the App Does
The Photo Gallery app allows you to explore a collection of captivating images, complete with accompanying details. By clicking on an image, you can view it in a larger format and access more information. Plus, you have the option to download the images directly!

### How It Works
- **Cards**: Each card displays an image, its title, and its place of origin.
- **Modal**: Clicking on a card triggers a modal window to appear, showcasing a larger version of the image and additional details.
- **Download Option**: Inside the modal, you'll find a convenient feature that lets you save the full-size image to your device.

### What You'll See
- **Main Page**: A visually appealing grid layout of cards featuring images and brief information about them.
- **Modal Window**: Upon clicking a card, a modal pops up, providing a closer look at the image and offering more descriptive content.
- **Download Button**: Within the modal, you'll discover a button that facilitates easy downloading of the image.

### How It's Set Up
- **HTML**: Structures the page, arranging elements like cards and the modal for seamless interaction.
- **CSS**: Styles the components to ensure an aesthetically pleasing appearance.
- **JavaScript**: Implements functionality such as displaying the modal window and updating the download link.
- **JSON Data**: Houses all the necessary information about the images, including titles, origins, and file paths.

### How to Use It
- Simply open the HTML file in your preferred web browser to launch the application.
- Click on any card to reveal more details about the image within the modal window.
- Should you wish to keep a copy of the image, just click the download button conveniently located inside the modal.

### Data Source
All essential information pertaining to the images—titles, origins, and file paths—is stored in a JSON file. Upon loading the page, this data is retrieved and utilized to populate the cards dynamically.

### Required Files
- **HTML File**: Serves as the main interface of the application, providing the foundation for user interaction.
- **CSS File**: Defines the visual presentation of the various elements, ensuring a cohesive and appealing design.
- **JavaScript File**: Enhances the app with interactive features, enabling smooth transitions and dynamic content updates.
- **Data JSON File**: Acts as the repository for image details, facilitating seamless integration and easy management.

### Enjoy Exploring!
Now that you're familiar with how the Photo Gallery app works, dive right in and start discovering the captivating images and their intriguing stories. Feel free to download any image that captures your imagination!


-------------------------------------------------------------------------------------------------------------

# Array Manipulation

### Function: `checkSubarraySum`

**Description:**
This function checks whether there exists a contiguous subarray within the given array whose elements sum up to a specified target value.

**Parameters:**
- `arr` (array): The input array containing integers.
- `target` (number): The target sum value.

**Returns:**
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
