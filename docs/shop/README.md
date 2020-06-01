# Introduction

The Shop API allows users and developers alike to access a wide range of features offered through the website such as getting the list of articles to even manage transaction of your account! Every single request to the API must have the following header present, otherwise the request will be dropped.

```
Content-Type: application/json
```
----

After you successfully log in by hitting the `auth/login` endpoint, we keep track of your session by issuing a JSON Web Token that you need to save locally and attach on every subsequent request, otherwise you won't be able to interact with the API. To do so, attach the issued token to your request header like so:

```
Content-Type: application/json
Authorization: Bearer JWT
```

----

Be aware that every endpoint base url is `https://shop-api.4proj.tools/api`, meaning that if you need to make a http request to the login endpoint you should be pointing it to `https://shop-api.4proj.tools/api/auth/login`.

::: warning
Every request to the API needs a valid Authorization header unless stated otherwise, just like the login or register routes.
:::
