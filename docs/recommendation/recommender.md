# Recommander

### Update dataset
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

### Recommend articles to user
```json
Type: GET
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
