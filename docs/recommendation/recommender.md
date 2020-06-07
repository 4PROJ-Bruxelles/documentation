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
]
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
