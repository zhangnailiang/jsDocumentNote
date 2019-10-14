/**
 * 提取字符串中的数字
 */
// 常规写法
var str1 = "qw123jl43llfa789dg498lfds123",
    arr = [],
    tmpStr = "";
for (var i = 0; i < str1.length; i++) {
    var n = str1.charAt(i);
    if (n >= 0 && n <= 9) {
        tmpStr += n;
    } else {
        if (tmpStr) arr.push(tmpStr);
        tmpStr = "";
    }
}
if (tmpStr) arr.push(tmpStr);
//正则写法
var re = /\d+/g;


/**
 * 正则声明形式
 */
// 1. 字面量形式
var re1 = /abc/
// 2.  构造函数形式 （参数是字符串）
var re2 = new RegExp("abc");


/**
 * 元字符：正则中有特殊含义的字符   "\" + 添加特殊字符（字母）
 * \w: 匹配数字、字母、下划线
 * \d: 匹配数字
 * \s: 匹配空白字符串
 * \W: 匹配除了数字、字母、下划线以外的字符
 * \D: 匹配数字之外的字符
 * \S: 匹配空白字符之外的字符
 * \b: 匹配单词边界
 * \B: 匹配非单词边界
 * \n: 匹配换行符
 * \r: 匹配回车符
 * \t: 匹配制表符
 */
var str2 = "ddsdf5ds88d877s8d78fs";
// d:  匹配0-9的数字
var re1 = /\d/;
// w:  匹配 数字 字母 下划线
var re2 = /\w/;
// console.log(str2.match(re2));


/**
 * 量词：匹配的数量 （g表示全局的匹配，次数表示的是能够匹配的数量
 *                  只能影响到前面的一个字符或者小括号）
 * +： 至少匹配一次，最多不限 （一到多）
 * ?:  匹配 0 到 1次 
 * *： 至少匹配0 次，最多不限
 * 
 * {n}: 匹配n次
 * {n, }: 至少匹配n次，最多不限
 * {n, m}: 匹配 n 到 m 次
 */
var str3 = "sdds787sdf858sd7f88585d7f";
var re3 = /\d{/g;
// console.log("量词", str3.match(re3))


/**
 * 范围匹配（字符组）
 * [asdf]： 匹配asdf这四个字符中的任意一个字符
 * [0-9]：匹配从0到9之间的任意一个数字
 * [a-z]：匹配从小写字母a 到 小写字母z之间的任意一个字母
 * [A-Z]：匹配从大写字母A 到 大写字母Z之间的任意一个字母
 * [A-z]：匹配从大写字母A 到 小写字母z之间的任意一个字母
 * [\u4e00-\u9fa5]：匹配中文
 */
var str4 = "dfsdrsf445dddgsfdFff48488";
var re4 = /d[a-z]s/g;
// console.log(str4.match(re4))


/**
 * 阶段练习
 */
var str5 = "s5a4s848as4d8a4s8d8as4d8as8dasd848as";
// 字母数字组合 （字母数量不限，数字一个）
var re51 = /[a-z]+\d/g
// 字母数字组合 （字母数量一个，数字不限）
var re52 = /[a-z]\d+/g
// 字母数字组合 （字母数量不限，数字不限）
var re53 = /([a-z]+)\d+/g
// console.log(str5.match(re53));


/**
 * 分组：添加 () 符号
 */
var str6 = "6s5d5as5d9a5s9d59asd";
var re61 = /([a-z]+)\d+/g;
var re62 = /([a-z]\d){2}([a-z]\d+)/g;
// console.log(str6.match(re62))


/**
 * 位置限制:
 * ^：匹配字符串的开始位置的字符串 （写在字符串的开头）
 * $: 匹配在字符串结束位置的字符串（写在字符串的末尾）
 */
var str7 = "ass848s8da4s848asd84asd";
var re71 = /^\d+/g;
var re72 = /^\d+$/g;
var re73 = /^[a-z]+/g;
// console.log(str7.match(re73));


/**
 * 修饰符：
 * i：匹配时忽略大小写
 * m：进行多行匹配（需要配合开始位置 ^ 和结束位置 $ 使用）
 * g：全局匹配 （匹配所有合适的字符）
 */
var str81 = "48d8s8df84df84s8d4f84d8sdf";
var str82 = `sDFddfsd8d8fsdSDFSdfsd
             f9sdSDf88f`;
var re81 = /\d+/g;
var re82 = /[a-z]+/gi;
var re83 = /[a-z]+/gm;
var re84 = /^\d+/gm;
var re85 = /^[a-z]/gm;
// console.log(str82.match(re85));

/**
 * 范围排除：用于排除指定范围内的一个特定的字符（即不匹配这个字符）
 * ^ 出现在非起始位置表示普通的字符串
 * [^asdf]：匹配不在asdf这四个字符中的任意一个字符
 * [^0-9]：匹配除了数字之外的任意一个字符
 * [^a-z]：匹配除了小写字母之外的任意一个字符
 * [^A-Z]：匹配除了大写字母外的任意一个字符
 * [^A-z]：匹配除了所有小写和大写字母之外的任意一个字符
 */
var str9 = "55df5sdf8sd8fsd8sd878sd7f";
var re9 = /d[^a-z]\d/g;
// console.log(str9.match(re9));


/**
 * 多选匹配：分别匹配出各自的结果
 * 例子：
 * red / blue / green
 */
var str10 = "dfSDsFdsFSdsdFSdfsd";
// 匹配出大小写分离的字符串
var re10 = /[a-z]+|[A-Z]+/g;
console.log(str10.match(re10));


/**
 * 正则的相关的方法：
 * test()：验证有没有符合要求的字符
 * exec(): 提取正则中符合要求的值，并且以数组的形式返回，和match方法有相似之处
 *         1.返回第一次匹配的结果(不论是否添加 g )
 *         2.如果多次调用返回和调用顺序相对应的字符串
 *          {
 *              index: 匹配到的结果在字符串中出现的位置
 *              input：整个字符串本身 
 *          }
 * 正则表达式的属性随着  匹配的变化发生的改变  lastIndex
 * lastIndex: 用来标记下次匹配开始的位置
 * 没有全局 g 修饰符 lastIndex 的值不发生改变  一直为 0 
 */
var str111 = "fsd5sdfsdfs";
var str112 = "54548488";
var str113 = "15548488555";
// 验证字符串是否全部是数字
var re111 = /^\d+$/g;
// 验证手机号码
var re112 = /^1[35]\d{9}/g;
console.log(re112.test(str113));


/**
 * 支持正则的字符串方法
 * search()：检索字符串中指定的子字符串或者是和正则表达式匹配的字符串，并且返回子串的起始位置
 * replace(reg, replacement): 
 */
var str12 = "javascript";
console.log("search", str12.search("script"));
console.log("search", str12.search(/s/g));
console.log("search替换", str12.replace(/s/g, "b"));


/**
 * 单词边界与空白字符
 */
// 空白字符：所有看起来没有内容但是有占位置的字符 空格 制表符  特殊的空白符号
var str = "     dfdfd        rr5rgrg888       ";
// 空格的编码是 32 
// 制表符的编码是 9
//使用 字符串的方法 replace方法
console.log(str.replace(/^\s+|\s+$/g, "")); //替换字符串中的空格
// 单词边界：指的是一个位置关系，一个单词的左边位置或者右边的位置
var str13 = "active focus";
var re131 = /act$/g;
var re132 = /act\b/g;
var re133 = /act\B/g;
var re134 = /\bact\B/g;
console.log(str13.match(re134));
