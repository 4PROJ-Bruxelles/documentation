# Articles

## Get all articles

```
Type: GET
Route: /articles
```

Response `200`

```json
[
  {
    "id": 1,
    "name": "Bread",
    "description": "Just bread",
    "price": "1.99",
    "stock": 49,
    "deleted_at": null,
    "created_at": "2020-05-30T19:00:00.000000Z",
    "updated_at": "2020-05-30T19:00:00.000000Z"
  },
  {
    "id": 2,
    "name": "Cheese",
    "description": "Some really good cheese",
    "price": "2.59",
    "stock": 80,
    "deleted_at": null,
    "created_at": "2020-06-01T14:00:00.000000Z",
    "updated_at": "2020-06-01T14:00:00.000000Z"
  }
]
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }
```

## Get an article

```
Type: GET
Route: /articles/{id}
```

Response `200`

```json
{
  "id": 1,
  "name": "Bread",
  "description": "Just bread",
  "price": "1.99",
  "stock": 49,
  "deleted_at": null,
  "created_at": "2020-05-30T19:00:00.000000Z",
  "updated_at": "2020-05-30T19:00:00.000000Z",
  "categories": [
    {
      "id": 2,
      "name": "Fresh products",
      "slug": "fresh-products",
      "parent_id": null,
      "created_at": "2020-05-30T19:00:00.000000Z",
      "updated_at": "2020-05-30T19:00:00.000000Z",
      "pivot": {
        "article_id": 1,
        "category_id": 2
      }
    }
  ]
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No article found." }
```

## Add an article

```
Type: POST
Route: /articles
```

Body
```json
{
	"name": "Cheese",
	"description": "Some really good cheese",
	"price": 2.59,
	"stock": 80,
	"categories": [4]
}
```

Response `200`

```json
{
  {
    "data": {
      "name": "Cheese",
      "description": "Some really good cheese",
      "price": 2.59,
      "stock": 80,
      "updated_at": "2020-06-01T14:00:00.000000Z",
      "created_at": "2020-06-01T14:00:00.000000Z",
      "id": 2
    }
  }
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
    "name": [
      "The name field is required."
    ],
    "price": [
      "The price field is required."
    ],
    "stock": [
      "The stock field is required."
    ],
    "categories": [
      "The categories field is required."
    ]
  }
}
```

## Update an article

```
Type: PUT
Route: /articles/{id}
```

Body
```json
{
	"name": "Bread",
	"description": "Just an awesome bread",
	"price": 1.99,
	"stock": 49,
	"categories": [2]
}
```

Response `200`

```json
{
  "id": 1,
  "name": "Bread",
  "description": "Just an awesome bread",
  "price": 1.99,
  "stock": 49,
  "deleted_at": null,
  "created_at": "2020-05-30T19:00:00.000000Z",
  "updated_at": "2020-06-01T14:00:00.000000Z"
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No article found." }

# Code 422
{
  "message": "The given data was invalid.",
  "errors": {
    "name": [
      "The name field is required."
    ],
    "price": [
      "The price field is required."
    ],
    "stock": [
      "The stock field is required."
    ],
    "categories": [
      "The categories field is required."
    ]
  }
}
```

## Delete an article

```
Type: DELETE
Route: /articles/{id}
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
{ "message": "No article found." }
```