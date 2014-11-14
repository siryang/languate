
## 创建packet

创建pakcet需要在packe目录中创建__init__.py
__init__.py中需要import你打算暴露出去的module

> 假设packet中有三个文件 a,b,c
你期望调用者可以import packet.a packet.b, 则需要在__init__.py中import a 和 b


## 动态加载Module

modules_name = ["os", "sys"]
modules = map(__import__, module_name)


## 设置import自定义packet查找目录

```python
import os, sys
sys.path.insert(0, your_packet_dir)
```

