# DabbeWala Backend

## User Routes

### Register User

**Endpoint:** `POST /register`

**Description:** Registers a new user.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    // ...other user fields...
  },
  "token": "jwt_token"
}
```

### Login User

**Endpoint:** `POST /login`

**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    // ...other user fields...
  }
}
```

### Get User Profile

**Endpoint:** `GET /profile`

**Description:** Retrieves the profile of the authenticated user.

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  // ...other user fields...
}
```

### Logout User

**Endpoint:** `GET /logout`

**Description:** Logs out the authenticated user.

**Headers:**
```json
{
  "Authorization": "Bearer jwt_token"
}
```

**Response:**
```json
{
  "message": "Logged Out"
}
```