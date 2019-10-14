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
 * 量词：匹配的数量 （g表示全局的匹配，次数表示的是能够匹配的数量）
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
console.log("量词", str3.match(re3))


/**
 * 范围匹配（字符组）
 * [asdf]： 匹配asdf这四个字符中的任意一个字符
 * [0-9]：匹配从0到9之间的任意一个数字
 * [a-z]：匹配从小写字母a 到 小写字母z之间的任意一个字母
 * [A-Z]：匹配从大写字母A 到 大写字母Z之间的任意一个字母
 * [A-z]：匹配从大写字母A 到 小写字母z之间的任意一个字母
 */
var str4 = "dfsdrsf445dddgsfdFff48488";
var re4 = /d[a-z]s/g;
console.log(str4.match(re4))