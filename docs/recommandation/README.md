# Api

### Update dataset
```
Type: GET
Header: "Content-Type: Application/json"
Route: /update/dataset
```

Response `200`

```
{
  "status": "Updated"
}
```

### Recommend Items to user
```
 Type: GET
 Header: "Content-Type: Application/json"
 Route: /recommend
 Body: [
  "item 1",
  "item 2",
  "item 3"
 ]
```
 Response `200`
```
[
  "item a",
  "item b",
  "item c",
  "item d",
  "item e"
]
```
