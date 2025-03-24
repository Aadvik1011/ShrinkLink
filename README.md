# ShrinkLink

ShrinkLink is a lightweight and efficient URL shortener built using Python and Flask. It helps users convert long, cumbersome URLs into short, easily shareable links. This tool is designed for simplicity and ease of use, making link management seamless.

## Features
- 🔗 **Shorten Long URLs**: Instantly generate short links from lengthy URLs.
- 📊 **Track Usage Statistics**: Monitor how many times a short link has been accessed.
- 🔄 **Automatic Redirection**: Redirect users to the original URL upon clicking the shortened link.
- 🛡️ **Secure and Reliable**: Prevent spam and ensure safe redirections.
- 🎨 **Minimalistic UI**: Clean and user-friendly interface for an enhanced experience.

## Tech Stack
ShrinkLink is built using the following technologies:
- **Backend**: JavaScript, EJS 
- **Database**: SQLite (default), but can be extended to PostgreSQL or MongoDB
- **Frontend**: HTML, CSS, Bootstrap (for styling and responsiveness)

## Installation & Setup

### Prerequisites
Before running ShrinkLink, ensure you have the following installed:
- Python (>=3.6)
- Pip (Python package manager)

### Clone the Repository
Open a terminal or command prompt and run:
```bash
git clone https://github.com/Aadvik1011/ShrinkLink.git
cd ShrinkLink
```

### Install Dependencies
Install the required Python libraries using:
```bash
pip install -r requirements.txt
```

### Run the Application
Start the Flask development server with:
```bash
python app.py
```

The application will be available locally at `http://127.0.0.1:5000/`.

## Usage Guide
1. Open the web application in your preferred browser.
2. Enter the long URL that you want to shorten.
3. Click the **"Shorten"** button to generate a short URL.
4. Copy and share the shortened link.
5. When users visit the short link, they will be redirected to the original URL.

## Future Enhancements
ShrinkLink is a continuously evolving project. Some planned features include:
- 🔑 **User Authentication**: Allow registered users to manage their links.
- 📊 **Detailed Analytics**: Provide insights on link performance, such as geographic data and click-through rates.
- ⏳ **Link Expiry**: Enable users to set expiration dates for short links.
- 🌍 **Custom Domains**: Support for personalized domain names instead of default ones.
- 🏷 **Custom Aliases**: Let users define their own short link slugs instead of random-generated ones.

## Contributing
Contributions to ShrinkLink are welcome! If you'd like to improve the project, follow these steps:
1. **Fork the repository** on GitHub.
2. **Create a new feature branch** (`git checkout -b feature-branch`).
3. **Make your changes** and commit them with meaningful messages.
4. **Push your changes** to your forked repository.
5. **Create a pull request** with a detailed description of your changes.

## License
ShrinkLink is open-source and licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Contact & Support
For any queries, suggestions, or issues, feel free to reach out via:
- 📧 Email: [aadvik1011@gmail.com]
- 💬 GitHub Issues: [GitHub Issues Page]
- 🌐 LinkedIn / Twitter: [https://www.linkedin.com/in/aadvik-bharadwaj/]

