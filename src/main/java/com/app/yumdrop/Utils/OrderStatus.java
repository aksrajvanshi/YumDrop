package com.app.yumdrop.Utils;

public enum OrderStatus {
    ORDERED(1),
    OUT_FOR_DELIVERY(2),
    DELIVERED(3);

    private int value;

    OrderStatus(int value) {
        this.value = value;
    }

    public static OrderStatus getOrderStatus(int orderIndex) {
        for (OrderStatus l : OrderStatus.values()) {
            if (l.value == orderIndex)
                return l;
        }
        throw new IllegalArgumentException("Order status not found!");
    }

}
