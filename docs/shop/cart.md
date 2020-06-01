# Cart

## Get all carts

```
Type: GET
Route: /carts
```

Response `200`

```json
[
  {
    "id": 1,
    "user_id": 2,
    "article_id": 1,
    "price": "1.99",
    "quantity": 1,
    "created_at": "2020-06-01T16:35:07.000000Z",
    "updated_at": "2020-06-01T16:35:07.000000Z"
  },
  {
    "id": 2,
    "user_id": 2,
    "article_id": 4,
    "price": "2.59",
    "quantity": 1,
    "created_at": "2020-06-01T16:41:22.000000Z",
    "updated_at": "2020-06-01T16:41:22.000000Z"
  }
]
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }
```

## Get a cart

```
Type: GET
Route: /carts/{id}
```

Response `200`

```json
[
  {
    "id": 1,
    "user_id": 2,
    "article_id": 1,
    "price": "1.99",
    "quantity": 1,
    "created_at": "2020-06-01T16:00:00.000000Z",
    "updated_at": "2020-06-01T16:00:00.000000Z"
  }
]
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No cart found." }
```

## Add a cart

```
Type: POST
Route: /carts
```

Body
```json
{
  "article_id": 4,
  "quantity": 1
}
```

Response `200`

```json
{
  "user_id": 2,
  "article_id": 4,
  "quantity": 1,
  "price": "2.59",
  "updated_at": "2020-06-01T16:00:00.000000Z",
  "created_at": "2020-06-01T16:00:00.000000Z",
  "id": 2
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 422
{
  "message": "The given data was invalid.",
  "errors": {
    "article_id": [
      "The article id field is required."
    ],
    "quantity": [
      "The quantity field is required."
    ]
  }
}
```

## Update a cart

```
Type: PUT
Route: /carts/{id}
```

Body
```json
{
  "article_id": 1,
  "quantity": 5
}
```

Response `200`

```json
{
  "id": 1,
  "user_id": 2,
  "article_id": 1,
  "price": "1.99",
  "quantity": 5,
  "created_at": "2020-06-01T16:00:00.000000Z",
  "updated_at": "2020-06-01T16:00:00.000000Z"
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No cart found." }

# Code 422
{
  "message": "The given data was invalid.",
  "errors": {
    "quantity": [
      "The quantity field is required."
    ]
  }
}
```

## Delete a cart

```
Type: DELETE
Route: /carts/{id}
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
{ "message": "No cart found." }
```