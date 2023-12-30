# Object Detection Tool with Next.js 14 SSR, Tailwind CSS, Hugging Face API, and UploadThing Blob Storage

![Demo](demo.gif)

This is a simple Object Detection Tool built using Next.js 14 with Server-Side Rendering (SSR), Tailwind CSS for styling, Hugging Face's API for object detection, and UploadThing for blob storage of images. The application allows users to upload an image, and the Hugging Face API will process the image to detect objects present in it.

## Features

- **Server-Side Rendering (SSR):** The application is built with Next.js 14, providing efficient SSR for improved performance and SEO.
- **Tailwind CSS:** Styling is done using Tailwind CSS, a utility-first CSS framework, making it easy to create a clean and responsive user interface.
- **Hugging Face API:** The object detection functionality is powered by Hugging Face's API, utilizing their advanced models for accurate and efficient object recognition.
- **UploadThing Blob Storage:** Images are stored using UploadThing, providing a reliable blob storage solution.
- **AWS Amplify Hosting:** The application is hosted on AWS Amplify, ensuring seamless deployment, scalability, and easy management of the infrastructure.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prerequisites

- Node.js and npm installed on your machine.
- Hugging Face API key. Obtain your API key from [Hugging Face](https://huggingface.co/).
- UploadThing account for blob storage.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kashyap5551/object-detection-tool.git
   cd object-detection-tool
   ```

2. **Install dependencies:**

  ```bash
  npm install
  ```


3. **Set up environment variables:**

Create a `.env.local` file in the root of your project and add the following:

```bash
HUGGING_FACE_API_KEY=your_hugging_face_api_key
UPLOADTHING_API_KEY=your_uploadthing_api_key
```
Replace `your_hugging_face_api_key` and `your_uploadthing_api_key` with the actual API keys obtained from Hugging Face and UploadThing.

4. **Run the application on your localhost:**

```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

## Deployment

The application is configured to be deployed on AWS Amplify. Simply connect your GitHub repository to an Amplify app, configure the build settings, and deploy the application with ease. For detailed deployment instructions, refer to the [AWS Amplify Documentation](https://docs.amplify.aws/).

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance the functionality or fix any bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to Next.js, Tailwind CSS, Hugging Face, and UploadThing for providing powerful tools and APIs to build this object detection tool.

Happy coding! 🚀
































   
   
