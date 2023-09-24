# AI Keyword Extractor for ETSY Listings

This is a simple React application that allows you to extract SEO-friendly keywords for your ETSY product listings using OpenAI's GPT-3 model. You can paste your product description into the input field, and the application will generate a list of keywords for you.

## Getting Started

To get started with this application, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using npm or yarn:

`npm install`

or

`yarn install`

3. Set up your OpenAI API key:

- Create a file named .env in the root directory of the project.
- Add your OpenAI API key to the .env file as follows:

`VITE_OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE`

4. Start the development server:

`npm start`

or

`yarn start`

5. The application should now be running locally at `http://localhost:3000`.

## How to Use

1. Open the application in your web browser.
2. You will see a header with the application's name and a logo.
3. Paste your product description into the text area provided.
4. Click the "Extract Keywords" button.
5. A modal will appear with a loading spinner while the application processes your request.
6. Once the keywords are generated, they will be displayed in the modal.
7. Click the "Close" button to close the modal.

## Components

App.js
- The main application component that integrates all other components.

TextInput.js
- This component handles the input of the product description and triggers the keyword extraction process.

KeywordsModal.js
- A modal component that displays the extracted keywords and a loading spinner while the keywords are being generated.

Header.js
- The header component that displays the application name and a brief description.

Footer.js
- The footer component that displays a "Powered by OpenAI" message.

## Dependencies

- React
- Chakra UI
- OpenAI GPT-3 API

## Notes

- Make sure to keep your OpenAI API key secure and do not expose it publicly.
- The application uses Chakra UI for styling, so you can customize the look and feel by modifying the Chakra UI components and styles.
- The GPT-3 model used for keyword extraction is "text-davinci-003." You can adjust the parameters in the extractKeywords function in App.js to fine-tune the keyword generation process according to your needs.
- This application is for demonstration purposes and may require additional features and error handling for production use.

Enjoy using the AI Keyword Extractor for ETSY Listings!