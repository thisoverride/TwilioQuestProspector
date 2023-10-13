# SunQuestProspector

SunQuestProspector is a project that uses the Twilio platform to automate outbound phone calls, provide information, and manage recipient responses. The project is designed to help individuals save on their electricity bills by connecting them with a service specializing in energy savings.

## Configuration

### Prerequisites

Before using SunQuestProspector, make sure you have the following:

- A Twilio account with valid credentials (accountSid and authToken).
- An active and verified Twilio phone number to use as the source number for calls.
- Proper configuration of your Twilio environment (context) for managing environment variables.

### Installation

1. Clone the SunQuestProspector repository.
    
    ```bash
    git clone <https://github.com/yourusername/sunquestprospector.git>
    
    ```
    
2. Install the project's dependencies.
    
    ```bash
    cd sunquestprospector
    npm install
    
    ```
    
3. Configure the necessary environment variables. Make sure to add your accountSid and authToken to your .env file.
    
    ```
    TWILIO_ACCOUNT_SID=YourAccountSID
    TWILIO_AUTH_TOKEN=YourAuthToken
    CALL_CENTER=CallCenterPhoneNumber
    
    ```
    
4. Deploy the project to the Twilio Functions platform.
    
    ```bash
    twilio serverless:deploy
    
    ```
    

## Usage

SunQuestProspector is an outbound call automation system. When a call is received, a voice message is played to the recipient with response options.

### /outbound-calls

This Twilio endpoint handles outbound calls. It presents a voice message and allows the recipient to respond by pressing 1 or 2.

- If the recipient presses 1, the call is redirected to the call center specified in the CALL_CENTER environment variable.
- If the recipient presses 2, the call is immediately hung up.
- For any other input, the call is redirected to /retry-menu to allow the recipient to try again.

### /retry-menu

This endpoint allows for retrying the interaction if the recipient doesn't respond correctly.

### /handle-keypress

This endpoint is used to process the recipient's responses when they press a key. Depending on the key pressed (1 or 2), it redirects the call to the call center or hangs up the call.

### /retry-message

This endpoint redirects the call to the initial greeting message to allow the recipient to hear the initial voice message again.

## Contribution

If you want to contribute to SunQuestProspector, please follow these steps:

1. Create a copy of the project (fork) on your own GitHub account.
2. Clone the repository from your GitHub account to your local machine.
3. Create a branch for your contribution (e.g., feature/new-feature).
4. Make your changes, add new features, or fix bugs.
5. Test your changes locally.
6. Create a pull request to request the incorporation of your changes into the main project.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.