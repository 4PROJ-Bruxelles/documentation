# Categories

## Get all categories

```
Type: GET
Route: /categories
```

Response `200`

```json
[
  {
    "id": 1,
    "name": "Drinks",
    "slug": "drinks",
    "parent_id": null,
    "created_at": "2020-05-30T19:00:00.000000Z",
    "updated_at": "2020-05-30T19:00:00.000000Z"
  },
  {
    "id": 4,
    "name": "Care and hygiene",
    "slug": "care-and-hygiene",
    "parent_id": null,
    "created_at": "2020-05-30T19:00:00.000000Z",
    "updated_at": "2020-05-30T19:00:00.000000Z"
  },
  {
    "id": 6,
    "name": "Organic",
    "slug": "organic",
    "parent_id": null,
    "created_at": "2020-05-30T19:00:00.000000Z",
    "updated_at": "2020-05-30T19:00:00.000000Z"
  }
]
```

## Get a category

```
Type: GET
Route: /categories/{id}
```

Response `200`

```json
{
  "id": 1,
  "name": "Drinks",
  "slug": "drinks",
  "parent_id": null,
  "created_at": "2020-05-30T19:05:34.000000Z",
  "updated_at": "2020-05-30T19:05:34.000000Z"
}
```

## Add a category

```
Type: POST
Route: /categories
```

Body
```json
{
	"name": "Alcohol",
	"slug": "alcohol",
	"parent_id": null
}
```

Response `200`

```json
{
  "data": {
    "name": "Alcohol",
    "slug": "alcohol",
    "parent_id": null,
    "updated_at": "2020-06-01T15:14:21.000000Z",
    "created_at": "2020-06-01T15:14:21.000000Z",
    "id": 9
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
    "slug": [
      "The slug field is required."
    ]
  }
}
```

## Update a category

```
Type: PUT
Route: /categories/{id}
```

Body
```json
{
	"name": "Alcohol",
	"slug": "alcohol-test-slug",
	"parent_id": null
}
```

Response `200`

```json
{
  "data": {
    "id": 1,
    "name": "Alcohol",
    "slug": "alcohol-test-slug",
    "parent_id": null,
    "created_at": "2020-05-30T19:05:34.000000Z",
    "updated_at": "2020-06-01T15:16:02.000000Z"
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
    "slug": [
      "The slug field is required."
    ]
  }
}
```

## Delete a category

```
Type: DELETE
Route: /categories/{id}
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
{ "message": "No category found." }
```