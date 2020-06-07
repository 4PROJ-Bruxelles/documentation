# Introduction

The Recommender API uses supervised machine learning to give you the most accurate results possibles! Every single request to the API must have the following header present, otherwise the request will be dropped.

```
Content-Type: application/json
```

----

Be aware that every endpoint base url is `https://recommender.4proj.tools/`, meaning that if you need to make a http request to the recommend function you should be pointing it to `https://recommender.4proj.tools/recommend`.
