# Usa la imagen base de Node.js con la versión deseada
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

COPY . .

# Instala el paquete de nodemon globalmente para facilitar la ejecución de comandos
RUN npm install

# Expone el puerto en el que se ejecuta la aplicación
EXPOSE 3000



# Define el comando de inicio para ejecutar la aplicación en modo desarrollo

CMD ["npm", "run", "dev"]