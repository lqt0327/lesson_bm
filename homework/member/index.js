// console.log('hello member')
var members = [
    {
        id: 1314,
        name: '黄毅超',
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    },
    {
        id: 520,
        name: '徐剑豪',
        avatar: "https://mirror-gold-cdn.xitu.io/16db0f60f3e7e817d6d?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
    },
    {
        id: 10000,
        name: '罗钦太',
        avatar: 'https://mirror-gold-cdn.xitu.io/16b730872769bab7fa6?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
    }
];
// console.log(members);
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
var tbody = document.querySelector('#member tbody');
console.log(
tbody.innerHTML = members.map(function (member) {
    return "\n      <tr>\n        <td>" + member.id + "</td>\n        <td>" + member.name + "</td>\n        <td>\n          <img src=\"" + member.avatar + "\" />\n        </td>\n      </tr>\n    ";
}).join(""));
