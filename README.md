# REST-webbtjänst
Detta projekt är en REST-webbtjänst som är byggd med node.js/express som hanterar arbetslivserfarenheter via en mySQL-databas.
API:et erbjuder full CRUD-funktionalitet och returnerar data i JSON format.

## Tekniker
    - Node.js
    - Express
    - MySQL
    - CORS
    - Dotenv
    - Nodemon

## Databasstruktur
Databasen innehåller en tabell: **workexperience**
```

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
Hämtar alla poster
**Response:** Lista med objekt

### POST /api/workexperience
Skapar en ny post
**Success:** message: Work experience added
**Error:** error: All fields are required

### PUT /api/workexperience
Uppdaterar en befintligt post
**Success:** message: Work experience updated
**Error:** error: All fields are required

### DELETE /api/workexperience
Tar bort en specifik post på ID
**Success:** message: Work experience deleted

## Testning
API:et har testats med:
    - Thunder Client (Tilläg i VScode)'
    - Webbläsare
    - MySQL workbench phpMyAdmin


Skapad av: Pontus Johansson