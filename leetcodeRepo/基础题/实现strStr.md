# 实现strStr()

### 概述：

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1

### 实例：

```
输入：haystack = "hello", needle = "ll"
输出：2
```

### 思路：

双指针，一个指针指向`haystack`，另外一个指向`needle`。便利`haystack`如果`needle`的第一个字符和当前便利的字符相同。那就开始便利子串判断是否和母串是否匹配

```js
var strStr = function(haystack, needle) {
    if(haystack === "" || needle === "")return 0
    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            for(let j = 0; j < needle.length; j++){
                let k = i + j
                if(haystack[k] != needle[j])break;
                if(j === needle.length - 1)return i
            }
        }
    }
    return -1
};
```

