# Users

## Get all users

```
Type: GET
Route: /users
```

Response `200`

```json
[
  {
    "id": 1,
    "email": "samuel.alev@supinfo.com",
    "admin": true,
    "created_at": "2020-06-01T14:00:00.000000Z",
    "updated_at": "2020-06-01T14:00:00.000000Z",
    "name": "Samuel Alev",
    "gender": 0,
    "address": "Avenue Louise 534, 1000 Bruxelles",
    "country": "Belgium",
    "status": false
  },
  {
    "id": 2,
    "email": "jim.stockman@supinfo.com",
    "admin": true,
    "created_at": "2020-06-01T14:00:00.000000Z",
    "updated_at": "2020-06-01T14:00:00.000000Z",
    "name": "Jim Stockman",
    "gender": 0,
    "address": "Avenue Louise 534, 1000 Bruxelles",
    "country": "Belgium",
    "status": false
  },
]
```

## Get an user

```
Type: GET
Route: /users/{id}
```

Response `200`

```json
{
  "id": 6,
  "email": "samuel.alev@supinfo.com",
  "admin": true,
  "created_at": "2020-06-01T14:07:19.000000Z",
  "updated_at": "2020-06-01T15:02:27.000000Z",
  "name": "Samuel Alev",
  "gender": 0,
  "address": "Avenue Louise 534, 1000 Bruxelles",
  "country": "Belgium",
  "status": false
}
```

## Add an user

```
Type: POST
Route: /users
```

Body
```json
{
	"name": "Samuel Alev",
	"email": "samuel.alev@supinfo.com",
	"password": "bicycle",
	"gender": 0,
	"admin": 1
}
```

Response `200`

```json
{
  "data": {
    "name": "Samuel Alev",
    "email": "samuel.alev@supinfo.com",
    "gender": 0,
    "admin": 1,
    "updated_at": "2020-06-01T14:00:00.000000Z",
    "created_at": "2020-06-01T14:00:00.000000Z",
    "id": 8
  }
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 422
{
  {
    "message": "The given data was invalid.",
    "errors": {
      "name": [
        "The name field is required."
      ],
      "email": [
        "The email field is required."
      ],
      "password": [
        "The password field is required."
      ],
      "gender": [
        "The gender field is required."
      ],
      "admin": [
        "The admin field is required."
      ]
    }
  }
}
```

## Update an user

```
Type: PUT
Route: /users/{id}
```

Body
```json
{
	"name": "Samuel Alev",
	"email": "samuel.alev@supinfo.com",
	"password": "bicycle",
	"gender": 0,
	"admin": 1
}
```

Response `204`

```json
No body returned response
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 422
{
  "message": "The given data was invalid.",
  "errors": {
    "name": [
      "The name field is required."
    ],
    "email": [
      "The email field is required."
    ],
    "password": [
      "The password field is required."
    ],
    "admin": [
      "The admin field is required."
    ]
  }
}
```

## Delete an user

```
Type: DELETE
Route: /users/{id}
```

Response `204`

```json
No body returned response
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No user found." }
```