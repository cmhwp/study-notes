# 高级机器学习

## 课程简介

高级机器学习课程深入探讨机器学习的核心理论和高级方法，包括监督学习、无监督学习、强化学习等各个分支。

## 学习内容

### 监督学习
- 线性回归与逻辑回归
- 支持向量机
- 决策树与随机森林
- 神经网络

### 无监督学习
- 聚类算法
- 降维技术
- 密度估计
- 异常检测

### 深度学习
- 卷积神经网络
- 循环神经网络
- 注意力机制
- 生成模型

## 学习笔记

### 第一章：线性回归

#### 1.1 线性回归模型

**模型定义**：
$$y = w^T x + b + \epsilon$$

其中：
- $y$ 是目标变量
- $x$ 是特征向量
- $w$ 是权重向量
- $b$ 是偏置项
- $\epsilon$ 是噪声项

#### 1.2 损失函数

**均方误差**：
$$L(w, b) = \frac{1}{2m} \sum_{i=1}^{m} (h_w(x^{(i)}) - y^{(i)})^2$$

其中 $h_w(x) = w^T x + b$ 是预测函数。

#### 1.3 梯度下降

**权重更新规则**：
$$w := w - \alpha \frac{\partial L}{\partial w}$$
$$b := b - \alpha \frac{\partial L}{\partial b}$$

其中 $\alpha$ 是学习率。

### 第二章：支持向量机

#### 2.1 最大间隔分类器

**优化问题**：
$$\min_{w,b} \frac{1}{2} ||w||^2$$
$$\text{s.t. } y^{(i)}(w^T x^{(i)} + b) \geq 1, \quad i = 1, \ldots, m$$

#### 2.2 对偶问题

**拉格朗日对偶**：
$$\max_{\alpha} \sum_{i=1}^{m} \alpha_i - \frac{1}{2} \sum_{i,j=1}^{m} \alpha_i \alpha_j y^{(i)} y^{(j)} \langle x^{(i)}, x^{(j)} \rangle$$

## 实践项目

- [ ] 实现线性回归算法
- [ ] 构建SVM分类器
- [ ] 完成Kaggle竞赛项目
- [ ] 复现经典论文算法

## 参考资料

- 教材：《Pattern Recognition and Machine Learning》- Bishop
- 在线课程：Coursera Machine Learning - Andrew Ng
- 论文：经典机器学习论文合集

---

*最后更新：2024年9月9日*
