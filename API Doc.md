# 新增获取用户
**除了这个接口，都要带token。**
| 请求URL | 请求方式 |
|---------|----------|
| /user   | POST     |

| 请求参数 | 参数类型 | 参数说明 |
|----------|----------|--------|
| username | String   | 用户名   |
| password | String   | 密码     |

| 返回参数 | 参数类型 | 参数说明                       |
|----------|----------|------------------------------|
| code     | Integer  | -1失败，201创建成功，200获取成功 |
| msg      | String   | 说明                           |
| data     | object   | 数据                           |

返回示例

```json
{
    "data": {
        "user": {
            "id": 1,
            "username": "sxl",
            "counterpart_id": 2,
            "avatar_url": "",
            "token": ""
        },
        "connections": 1
    },
    "code": 200,
    "msg": "get success"
}
```

# 退出用户登录

| 请求URL         | 请求方式 |
|-----------------|----------|
| /user/:username | DELETE   |

| 请求参数       | 参数类型 | 参数说明           |
|----------------|----------|----------------|
| counterpart_id | Integer  | 每个user的连接序号 |

| 返回参数 | 参数类型 | 参数说明           |
|----------|----------|------------------|
| code     | Integer  | -1失败，200删除成功 |
| msg      | String   | 说明               |
| data     | object   | 数据               |

返回示例

```json
{
    "data": {
        "user": {
            "id": 1,
            "username": "sxl",
            "counterpart_id": 2,
            "avatar_url": "",
            "token": ""
        }
    },
    "code": 200,
    "msg": "get success"
}
```

# 获取用户时间线
| 请求URL         | 请求方式 |
|-----------------|----------|
| /:user/history | GET      |

| 请求参数 | 参数类型 | 参数说明 |
|---------|----------|----------|
| 无       |          |          |


| 返回参数 | 参数类型 | 参数说明           |
|----------|----------|------------------|
| code     | Integer  | -1失败，200获取成功 |
| msg      | String   | 说明               |
| data     | object   | 数据               |

返回示例

```json
{
    "data": {
        "user": {
            "id": 1,
            "username": "sxl",
            "counterpart_id": 2,
            "avatar_url": "",
            "connections": 1,
            "token": ""
        },
        "history": {
            "items": [
                {
                    "id": 1,
                    "timestamp": 1623149005737
                }
            ]
        }
    },
    "code": 200,
    "msg": "get success"
}
```
