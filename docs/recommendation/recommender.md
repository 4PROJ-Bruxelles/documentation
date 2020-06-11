# Recommander

## Recommend articles to user
```json
Type: POST
Route: /recommend
```

Body
```json
"items": [
  "item 1",
  "item 2",
  "item 3"
],
"n": 5,     // Number of items (defaults to 5)
"k": .0     // Similarity rate (defaults to 0.0)
```

 Response `200`
```json
[
  "item a",
  "item b",
  "item c",
  "item d",
  "item e"
]
```

## Update dataset
```json
Type: GET
Route: /update/dataset
```

Response `200`
```json
{
  "status": "Updated"
}
```
