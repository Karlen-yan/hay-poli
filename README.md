# hay-poli
# Backend
# MONGODB_URI = mongodb+srv://ejemplo:userpassword@cluster0.ojp2btx.mongodb.net/ejemplo # en mongoDB atlas
# PORT = 5000 // por ejemplo
# Frontend
# myEmail = ejemplo@outlook.com
# myPassword = mycontraseña 
# SENDGRID_API_KEY = ahjkjslkkadkhjklasshdjk  // algo parecido a este 

Regarding the contents of the .env file for the backend, the following steps should be followed:

# Create a database in MongoDB Atlas.
# Obtain the MongoDB Atlas connection URL. This can be done from the MongoDB Atlas console or web portal.
# Copy the connection URL and paste it in the MONGODB_URI variable in the .env file. Make sure the URL includes the username and password required to connect to the database.
# Set a port number for the application. In the provided example, port 5000 is used. This port number should be unique and not in use by other processes on the server.
# Configure the email address and password for sending emails. In the provided example, an Outlook email account and the associated password are used.
# Obtain a SendGrid API key. This can be done by registering on the SendGrid website and generating an API key.
# Copy the API key and paste it in the SENDGRID_API_KEY variable in the .env file.
