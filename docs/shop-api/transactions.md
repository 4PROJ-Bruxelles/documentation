# Transactions

## Get all transactions

```
Type: GET
Route: /transactions
```

Response `200`

```json
[
  {
    "id": 1,
    "user_id": 2,
    "total_price": "1.99",
    "total_quantity": 1,
    "created_at": "2020-05-30T19:00:00.000000Z",
    "updated_at": "2020-05-30T19:00:00.000000Z",
    "items": [
      {
        "id": 1,
        "article_id": 1,
        "user_id": 2,
        "transaction_id": 1,
        "created_at": "2020-05-30T19:00:00.000000Z",
        "updated_at": "2020-05-30T19:00:00.000000Z",
        "price": "1.99",
        "total_price": "1.99",
        "quantity": 1,
        "article_name": "Bread"
      }
    ]
  },
  {
    "id": 2,
    "user_id": 2,
    "total_price": "7.17",
    "total_quantity": 3,
    "created_at": "2020-06-01T16:00:00.000000Z",
    "updated_at": "2020-06-01T16:00:00.000000Z",
    "items": [
      {
        "id": 2,
        "article_id": 1,
        "user_id": 2,
        "transaction_id": 2,
        "created_at": "2020-06-01T16:00:00.000000Z",
        "updated_at": "2020-06-01T16:00:00.000000Z",
        "price": "1.99",
        "total_price": "1.99",
        "quantity": 1,
        "article_name": "Bread"
      },
      {
        "id": 3,
        "article_id": 4,
        "user_id": 2,
        "transaction_id": 2,
        "created_at": "2020-06-01T16:00:00.000000Z",
        "updated_at": "2020-06-01T16:00:00.000000Z",
        "price": "2.59",
        "total_price": "5.18",
        "quantity": 2,
        "article_name": "Cheese"
      }
    ]
  }
]
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }
```

## Get a transaction

```
Type: GET
Route: /transactions/{id}
```

Response `200`

```json
{
  "id": 2,
  "user_id": 2,
  "total_price": "7.17",
  "total_quantity": 3,
  "created_at": "2020-06-01T16:00:00.000000Z",
  "updated_at": "2020-06-01T16:00:00.000000Z",
  "items": [
    {
      "id": 2,
      "article_id": 1,
      "user_id": 2,
      "transaction_id": 2,
      "created_at": "2020-06-01T16:00:00.000000Z",
      "updated_at": "2020-06-01T16:00:00.000000Z",
      "price": "1.99",
      "total_price": "1.99",
      "quantity": 1,
      "article_name": "Bread"
    },
    {
      "id": 3,
      "article_id": 4,
      "user_id": 2,
      "transaction_id": 2,
      "created_at": "2020-06-01T16:00:00.000000Z",
      "updated_at": "2020-06-01T16:00:00.000000Z",
      "price": "2.59",
      "total_price": "5.18",
      "quantity": 2,
      "article_name": "Cheese"
    }
  ]
}
```
Possible errors
```json
# Code 401
{ "message": "Unauthenticated." }

# Code 404
{ "message": "No transaction found." }
```

## Add a transaction

```
Type: POST
Route: /transactions
```

Body
```json
{
	"items": [
		{
			"id": 1,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 2
		}
	]
}
```

Response `200`

```json
{
  "user_id": 2,
  "total_price": 7.17,
  "total_quantity": 3,
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
    "items": [
      "The items field is required."
    ]
  }
}
```

<!-- ## Update a transaction

```
Type: PUT
Route: /transactions/{id}
```

**TODO** -->

## Delete a transaction

```
Type: DELETE
Route: /transactions/{id}
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
{ "message": "No transaction found." }
```
