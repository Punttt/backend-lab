# REST-webbtjänst
Detta projekt är en REST-webbtjänst som är byggd med node.js/express som hanterar arbetslivserfarenheter via en postgre databas.
API:et erbjuder full CRUD-funktionalitet och returnerar data i JSON format.

## Tekniker
    - Node.js
    - Express
    - PostgreSQL
    - pgClient
    - CORS
    - Dotenv
    - Nodemon

## Databasstruktur
Databasen innehåller en tabell: **workexperience**
```
workexperience (
    id SERIAL PRIMARY KEY,
    companyname VARCHAR(255),
    jobtitle VARCHAR(255),
    location VARCHAR(255),
    startdate DATE,
    enddate DATE,
    description TEXT
)

```

## Installation

    1. Klona projekt
    ```
    git clone https://github.com/Punttt/backend-lab.git
    cd backend-lab
    ```

    2. Installera dependencies
    ```
    npm install
    ```

    3. Skapa .env filen
    ```
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_DATABASE=
    PORT=

    ```

    4. Starta servern
    ```
    npm run dev
    ```

## API-dokumnetation
Alla endpoints returnerar JSON.

### GET /api/workexperience
Hämtar alla poster</br>
**Response:** Lista med objekt

### POST /api/workexperience
Skapar en ny post</br>
**Success:** message: Work experience added</br>
**Error:** error: All fields are required

### PUT /api/workexperience
Uppdaterar en befintligt post</br>
**Success:** message: Work experience updated</br>
**Error:** error: All fields are required

### DELETE /api/workexperience
Tar bort en specifik post på ID</br>
**Success:** message: Work experience deleted

## Testning
API:et har testats med:
    - Thunder Client (Tilläg i VScode)'
    - Webbläsare
    - pgAdmin
    - Render postgreSQL dashboard

publicerad: https://backend-lab-53gq.onrender.com/
Skapad av: Pontus Johansson
