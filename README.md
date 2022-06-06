# Portar Microservicios en Python a Node 
> **Diego Solis Higuera** **A00827847**
### Pasos para ejecutar programa:
1. npm install
2. docker-compose up

o
1. npm install
2. docker build -t (add-user/trigger-email) .
3. docker run -p 4005:4005 -d --name (add-user-container/trigger-email-container) (add-user/trigger-email)
4. docker ps

## add-user
### Routes: 
- GET /status
- GET /users
- GET /users/{id}
- POST /users
- DELETE /users/{id}


## trigger-email
### Routes: 
- GET /status
- GET /email/{from_email}
- POST /email

