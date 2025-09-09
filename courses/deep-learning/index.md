# 深度学习

## 课程简介

深度学习课程深入探讨神经网络的理论基础和实际应用，包括前馈网络、卷积网络、循环网络等现代深度学习技术。

## 学习内容

### 神经网络基础
- 感知机与多层感知机
- 反向传播算法
- 激活函数
- 损失函数

### 深度网络架构
- 卷积神经网络（CNN）
- 循环神经网络（RNN）
- 长短期记忆网络（LSTM）
- Transformer架构

### 高级主题
- 注意力机制
- 生成对抗网络（GAN）
- 变分自编码器（VAE）
- 强化学习

## 学习笔记

### 第一章：神经网络基础

#### 1.1 感知机

**单层感知机**：
$$y = f(\sum_{i=1}^{n} w_i x_i + b)$$

其中：
- $x_i$ 是输入特征
- $w_i$ 是权重
- $b$ 是偏置
- $f$ 是激活函数

**激活函数**：
- Sigmoid: $\sigma(x) = \frac{1}{1 + e^{-x}}$
- ReLU: $\text{ReLU}(x) = \max(0, x)$
- Tanh: $\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}$

#### 1.2 反向传播算法

**前向传播**：
$$z^{(l)} = W^{(l)} a^{(l-1)} + b^{(l)}$$
$$a^{(l)} = f(z^{(l)})$$

**反向传播**：
$$\delta^{(l)} = \frac{\partial J}{\partial z^{(l)}} = \delta^{(l+1)} (W^{(l+1)})^T \odot f'(z^{(l)})$$

**权重更新**：
$$\frac{\partial J}{\partial W^{(l)}} = \delta^{(l)} (a^{(l-1)})^T$$
$$\frac{\partial J}{\partial b^{(l)}} = \delta^{(l)}$$

### 第二章：卷积神经网络

#### 2.1 卷积操作

**二维卷积**：
$$(f * g)(i,j) = \sum_{m} \sum_{n} f(m,n) g(i-m, j-n)$$

**卷积层输出尺寸**：
$$H_{out} = \frac{H_{in} + 2P - K}{S} + 1$$
$$W_{out} = \frac{W_{in} + 2P - K}{S} + 1$$

其中：
- $H_{in}, W_{in}$ 是输入高度和宽度
- $K$ 是卷积核大小
- $P$ 是填充大小
- $S$ 是步长

#### 2.2 池化操作

**最大池化**：
$$y_{i,j} = \max_{(m,n) \in R_{i,j}} x_{m,n}$$

**平均池化**：
$$y_{i,j} = \frac{1}{|R_{i,j}|} \sum_{(m,n) \in R_{i,j}} x_{m,n}$$

### 第三章：循环神经网络

#### 3.1 RNN基本结构

**隐藏状态更新**：
$$h_t = f(W_{hh} h_{t-1} + W_{xh} x_t + b_h)$$

**输出计算**：
$$y_t = W_{hy} h_t + b_y$$

#### 3.2 LSTM网络

**遗忘门**：
$$f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)$$

**输入门**：
$$i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i)$$
$$\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)$$

**细胞状态更新**：
$$C_t = f_t * C_{t-1} + i_t * \tilde{C}_t$$

**输出门**：
$$o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o)$$
$$h_t = o_t * \tanh(C_t)$$

## 实践项目

- [ ] 实现多层感知机
- [ ] 构建CNN图像分类器
- [ ] 训练RNN语言模型
- [ ] 复现Transformer模型

## 参考资料

- 教材：《Deep Learning》- Goodfellow, Bengio, Courville
- 在线课程：CS231n Stanford, CS224n Stanford
- 框架：PyTorch, TensorFlow, Keras

---

*最后更新：2024年9月9日*
