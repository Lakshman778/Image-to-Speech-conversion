# Image-to-Speech-conversion

# Image-to-Speech-conversion


This project enables text extraction from a live camera feed and converts it into speech. It's a user-friendly solution for people with visual impairments or those who prefer auditory information.

## Features

- Real-time text detection from live camera input.
- Text-to-speech conversion for audio output.
- Easy-to-use interface for capturing and processing text.
- Suitable for visually impaired users or general text-to-audio use cases.

## Prerequisites

- Python 3.8 or above
- Compatible OS: Windows, macOS, Linux

### Required Python Libraries

Install the dependencies listed in the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd free-camera-text-to-speech
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python main.py
   ```

4. Use the GUI interface to capture text from the camera feed and convert it to speech.

## Directory Structure

```
free-camera-text-to-speech/
|-- assets/          # Images and icons used in the interface
|-- scripts/         # Python scripts for core functionality
|   |-- text_recognition.py
|   |-- speech_synthesis.py
|-- requirements.txt # List of required Python libraries
|-- main.py          # Entry point of the application
|-- README.md        # Project documentation
```

## How It Works

1. **Camera Input**: Captures live video feed from the user's camera.
2. **Text Detection**: Processes the frames to extract text using OCR (Optical Character Recognition).
3. **Text-to-Speech Conversion**: Converts the detected text into audible speech output.

## Technologies Used

- Python
- OpenCV for video capture and image processing
- Tesseract OCR for text recognition
- pyttsx3 or gTTS for text-to-speech conversion

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- OpenCV
- Tesseract OCR
- Python community
