## CSS常见布局
1. 两列布局
- 左边宽度固定，右边宽度自适应：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .content {
            width: 100%;
        }
        .left {
            width: 100px;
            background-color: yellow;
            float: left;
            height:600px;
        }
        .right {
            min-width: 400px;
            background-color: red;
            margin-left: 110px;
            height: 600px;
        }
    </style>
</head>
<body>
    <!-- 左边宽度固定，右边宽度自适应（左边浮动，下一个元素就会占据位置，并排一行） -->
    <div class="content">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</body>
</html>
```
- 右边宽度固定，左边宽度自适应：
```css

```