package com.app.yumdrop.Utils;

public enum OrderStatusUtil {
    ORDERED(1),
    OUT_FOR_DELIVERY(2),
    DELIVERED(3);

    private int value;

    OrderStatusUtil(int value) {
        this.value = value;
    }

    public static OrderStatusUtil getOrderStatus(int orderIndex) {
        for (OrderStatusUtil l : OrderStatusUtil.values()) {
            if (l.value == orderIndex)
                return l;
        }
        throw new IllegalArgumentException("Order status not found!");
    }

}
