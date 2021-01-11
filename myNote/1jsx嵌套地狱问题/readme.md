https://segmentfault.com/a/1190000020494592

##
```
function DetectCity() {
  return (
    <AsyncCoords 
      render={({ lat, long }) => {
        return (
          <AsyncCity 
            lat={lat} 
            long={long} 
            render={city => {
              if (city == null) {
                return <div>Unable to detect city.</div>;
              }
              return <div>You might be in {city}.</div>;
            }}
          />
        );
      }}
    />
  );
}

// 在某处使用
<DetectCity />
```
出现问题: Render Prop回调函数的嵌套。嵌套的回调函数越多，代码就越难理解。这是Render Prop回调地狱的问题。

## 解决1 - Class 方法
为了将回调的嵌套转换为可读性更好的代码，咱们将回调重构为类的方法。
```
class DetectCity extends React.Component {
  render() {
    return <AsyncCoords render={this.renderCoords} />;
  }

  renderCoords = ({ lat, long }) => {
    return <AsyncCity lat={lat} long={long} render={this.renderCity}/>;
  }

  renderCity = city => {
    if (city == null) {
      return <div>Unable to detect city.</div>;
    }
    return <div>You might be in {city}.</div>;
  }
}

// 在某处使用
<DetectCity />
```
回调被提取到分开的方法renderCoords()和renderCity()中。这样的组件设计更容易理解，因为渲染逻辑封装在一个单独的方法中。

如果需要更多嵌套，类的方式是**垂直增加(通过添加新方法)**，而不是水平(通过相互嵌套函数)，回调地狱问题消失。

## 解决2 - 函数组合方法
```
function DetectCity() {
  return <AsyncCoords render={renderCoords} />;
}

function renderCoords({ lat, long }) {
  return <AsyncCity lat={lat} long={long} render={renderCity}/>;
}

function renderCity(city) {
  if (city == null) {
    return <div>Unable to detect city.</div>;
  }
  return <div>You might be in {city}.</div>;
}

// Somewhere
<DetectCity />
```
现在，常规函数renderCoors()和renderCity()封装了渲染逻辑，而不是用方法创建类。

如果需要更多嵌套，只需要再次添加新函数即可。**代码垂直增长(通过添加新函数)**，而不是水平增长(通过嵌套)，从而解决回调地狱问题。

这种方法的另一个好处是可以单独测试渲染函数:renderCoords()和renderCity()。