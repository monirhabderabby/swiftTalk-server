
## API Reference

#### Account Registration

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `json` | {name: "", email: "" , "password: "", profilePhoto: ""} |

#### Account Login

```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
|       | `json` | {email: "" , "password: ""} |
