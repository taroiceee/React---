import React from 'react';

// 定义 CartContext 的默认值类型
interface CartContextType {
  items: any[]; // 商品列表
  totalAmount: number; // 总数量
  totalPrice: number; // 总价格
  cartDispatch: (action: { type: string; meal?: any }) => void; // dispatch 函数
}

// 创建 CartContext，提供默认值
const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  cartDispatch: () => {}, // 默认的空函数
});

export default CartContext;
