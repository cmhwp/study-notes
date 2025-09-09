# 算法设计与分析

## 课程简介

算法设计与分析是计算机科学的核心课程，主要学习各种算法的设计思想、分析方法和实际应用。

## 学习内容

### 基础算法
- 排序算法
- 搜索算法
- 图算法
- 动态规划

### 高级主题
- 贪心算法
- 分治算法
- 回溯算法
- 近似算法

## 学习笔记

### 第一章：算法基础

#### 1.1 算法复杂度分析

**时间复杂度**：算法执行时间随输入规模增长的趋势。

**大O记号**：
- $O(1)$ - 常数时间
- $O(\log n)$ - 对数时间
- $O(n)$ - 线性时间
- $O(n \log n)$ - 线性对数时间
- $O(n^2)$ - 平方时间
- $O(2^n)$ - 指数时间

**空间复杂度**：算法执行过程中所需的额外存储空间。

#### 1.2 排序算法

**冒泡排序**：
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr
```

**时间复杂度**：$O(n^2)$
**空间复杂度**：$O(1)$

**快速排序**：
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
```

**时间复杂度**：
- 平均情况：$O(n \log n)$
- 最坏情况：$O(n^2)$

## 实践项目

- [ ] 实现各种排序算法
- [ ] 比较不同算法的时间复杂度
- [ ] 解决LeetCode算法题

## 参考资料

- 教材：《算法导论》
- 在线平台：LeetCode, HackerRank
- 视频课程：MIT 6.006 Introduction to Algorithms

---

*最后更新：2024年9月9日*
