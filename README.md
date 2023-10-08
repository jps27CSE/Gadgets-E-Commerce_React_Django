# Gadgets-E-Commerce_React_Django


## React + Vite Template

### Setting up React with Vite

#### Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

#### Prerequisites

Before you start, ensure you have the following prerequisites installed on your system:

- Node.js: [Installation Guide](https://nodejs.org/en/download/)
- npm (Node Package Manager): It comes bundled with Node.js.
- Git: [Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Installation

To set up a React project with Vite, follow these steps:

1. **Create a New Project:**

   Initialize a new Vite project with the `create-vite` command, using one of the available plugins:

   - Using Babel for Fast Refresh (Recommended):

     ```bash
     npx create-vite@latest my-react-app --template react
     ```

   - Using SWC for Fast Refresh:

     ```bash
     npx create-vite@latest my-react-app --template react-swc
     ```

   Replace `my-react-app` with your preferred project name.

2. **Navigate to Your Project:**

   Change your current directory to the newly created project:

   ```bash
   cd my-react-app
   ```

3. **Install Dependencies:**

   Use npm to install project dependencies:

   ```bash
   npm install
   ```

#### Usage

Now that your React + Vite project is set up, you can start using it:

1. **Development Server:**

   Start the development server with hot-reloading by running:

   ```bash
   npm run dev
   ```

   This will open a development server and display a URL in the console. Open that URL in your web browser to see your React app.

2. **Build for Production:**

   To build your project for production, use:

   ```bash
   npm run build
   ```

   The optimized production build will be available in the `dist` directory.

#### Configuration

The default Vite configuration for React should work seamlessly with the chosen Fast Refresh plugin. If you need to make custom configurations, you can do so by editing the `vite.config.js` file. Refer to the [official Vite documentation](https://vitejs.dev/config/) for detailed configuration options.



## Django Installation For Windows

#### Prerequisites

Before you start, ensure you have the following prerequisites installed on your system:

- Python: [Installation Guide](https://www.python.org/downloads/)


1. **Install virtual environment**

         python -m pip install --user virtualenv

2. **Setup virtual environment, where `<environment_name>` is replaced by your virtual environment name**

         Gadgets-E-Commerce_React_Django\backend>  python -m venv <environment_name>

3. **Activate virtual environment**

         Gadgets-E-Commerce_React_Django\backend>  <environment_name>\Scripts\activate

4. **After successfully activate virtual environment. Now, Install backend dependencies**

         (<environment-name>) Gadgets-E-Commerce_React_Django\backend> pip install -r requirements.txt

5. **Create makemigrations file**

         (<environment-name>) Gadgets-E-Commerce_React_Django\backend> python manage.py makemigrations

6. **Create database table**

         (<environment-name>) Gadgets-E-Commerce_React_Django\backend> python manage.py migrate

7. **Create superUser for control admin panel**

         (<environment-name>) Gadgets-E-Commerce_React_Django\backend> python manage.py createsuperuser
8. **After command No. (7) set your `username`, `email` and `password`, where `password` is invisible for you.**

9. **Now run the server**

         (<environment-name>) Gadgets-E-Commerce_React_Django\backend> python manage.py runserver

10. **Now, your Django server is prepared to communicate with any other frontend.**




### Technologies Used

This project integrates several technologies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: A library for handling routing in React applications.
- Tailwind CSS: A utility-first CSS framework for quickly building responsive designs.
- Firebase: A cloud-based platform for building web and mobile apps.
- Django: A high-level Python web framework for building robust web applications.

Make sure to configure and utilize these technologies as needed for your project.

### Contributing

Contributions to this project are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository, detailing your changes.

### License

This project is licensed under the [LICENSE_NAME](LICENSE_URL). Please review the license before using or contributing to the project.

Feel free to reach out if you have any questions or need further assistance. Happy coding!


